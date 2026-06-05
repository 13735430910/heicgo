import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";

const root = process.cwd();
const url = process.env.HEICGO_SMOKE_URL || "http://127.0.0.1:4321/en/";
const format = process.env.HEICGO_SMOKE_FORMAT === "png" ? "png" : "jpeg";
const extension = format === "png" ? "png" : "jpg";
const port = Number(process.env.HEICGO_CHROME_PORT || 9237);
const downloadDir = process.env.HEICGO_DOWNLOAD_DIR || `/tmp/heicgo-smoke-downloads-${format}`;
const profileDir = process.env.HEICGO_CHROME_PROFILE || `/tmp/heicgo-smoke-profile-${format}`;
const screenshotPath = process.env.HEICGO_SCREENSHOT || `/tmp/heicgo-smoke-${format}.png`;
const hydrateTimeoutMs = Number(process.env.HEICGO_HYDRATE_TIMEOUT_MS || 90000);
const files = (process.env.HEICGO_SMOKE_FILES || "test-files/image1.heic,test-files/image2.heic")
  .split(",")
  .map((file) => path.resolve(root, file.trim()))
  .filter(Boolean);

for (const file of files) {
  if (!existsSync(file)) {
    throw new Error(`Missing smoke-test input file: ${file}`);
  }
}

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 1;
    this.pending = new Map();
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(`${message.error.message}: ${message.error.data || ""}`));
        else resolve(message.result || {});
      }
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`CDP timeout: ${method}`));
        }
      }, 30000);
    });
  }

  close() {
    this.ws.close();
  }
}

async function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.addEventListener("open", () => resolve(new Cdp(ws)), { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
}

async function waitFor(fn, timeoutMs = 60000, intervalMs = 500) {
  const start = Date.now();
  let lastError;
  while (Date.now() - start < timeoutMs) {
    try {
      const result = await fn();
      if (result) return result;
    } catch (err) {
      lastError = err;
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
  throw lastError || new Error("Timed out waiting for condition");
}

async function evaluate(page, expression, awaitPromise = false) {
  const result = await page.send("Runtime.evaluate", {
    expression,
    awaitPromise,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(`Runtime exception: ${result.exceptionDetails.text}`);
  }
  return result.result?.value;
}

async function main() {
  await rm(downloadDir, { recursive: true, force: true });
  await rm(profileDir, { recursive: true, force: true });
  await mkdir(downloadDir, { recursive: true });
  await mkdir(profileDir, { recursive: true });

  const chrome = spawn("google-chrome", [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "--window-size=1280,920",
    "about:blank",
  ], { stdio: "ignore" });

  try {
    const version = await waitFor(async () => {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (!response.ok) return null;
      return response.json();
    }, 30000);

    const browser = await connect(version.webSocketDebuggerUrl);
    await browser.send("Browser.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: downloadDir,
    });

    const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
      method: "PUT",
    });
    if (!targetResponse.ok) throw new Error(`Could not create Chrome target: ${targetResponse.status}`);
    const target = await targetResponse.json();
    const page = await connect(target.webSocketDebuggerUrl);

    await page.send("Page.enable");
    await page.send("DOM.enable");
    await page.send("Runtime.enable");

    await waitFor(() => evaluate(page, "document.readyState === 'complete'"), 30000);
    await waitFor(() => evaluate(page, "!document.querySelector('astro-island[ssr]') && !!document.querySelector('input[type=file]')"), hydrateTimeoutMs);

    const doc = await page.send("DOM.getDocument", { depth: -1, pierce: true });
    const input = await page.send("DOM.querySelector", {
      nodeId: doc.root.nodeId,
      selector: "input[type=file]",
    });
    if (!input.nodeId) throw new Error("File input not found");

    await page.send("DOM.setFileInputFiles", {
      nodeId: input.nodeId,
      files,
    });
    await evaluate(page, "document.querySelector('input[type=file]').dispatchEvent(new Event('change', { bubbles: true }))");
    await waitFor(() => evaluate(page, files.map((file) => `document.body.innerText.includes(${JSON.stringify(path.basename(file))})`).join(" && ")), 30000);

    if (format === "png") {
      await evaluate(page, "document.querySelector('[data-testid=\"output-format-png\"]').click()");
      await waitFor(() => evaluate(page, "document.body.innerText.includes('PNG output is lossless')"), 10000);
    }

    await evaluate(page, `
      [...document.querySelectorAll('button')]
        .find((button) => button.textContent.includes('Convert files'))
        .click()
    `);

    await waitFor(async () => {
      const state = await evaluate(page, `(() => {
        const text = document.body.innerText;
        return {
          downloads: document.querySelectorAll('a[download$=".${extension}"]').length,
          hasFailure: /Failed to decode|Conversion failed|Unsupported file/.test(text)
        };
      })()`);
      if (state?.hasFailure) throw new Error("Conversion failure appeared in UI");
      return state?.downloads >= files.length;
    }, 90000);

    await evaluate(page, `
      [...document.querySelectorAll('button')]
        .find((button) => button.textContent.includes('Download All'))
        .click()
    `);

    const zipPath = await waitFor(async () => {
      const names = await readdir(downloadDir);
      const zipName = names.find((name) => name.endsWith(".zip") && !name.endsWith(".crdownload"));
      return zipName ? path.join(downloadDir, zipName) : null;
    }, 30000);

    const zip = await JSZip.loadAsync(await readFile(zipPath));
    const entries = Object.keys(zip.files).filter((name) => !zip.files[name].dir);
    if (entries.length < files.length) {
      throw new Error(`ZIP contains ${entries.length} files, expected at least ${files.length}`);
    }
    const wrongExtension = entries.find((name) => !name.toLowerCase().endsWith(`.${extension}`));
    if (wrongExtension) {
      throw new Error(`Unexpected ZIP entry extension: ${wrongExtension}`);
    }

    const screenshot = await page.send("Page.captureScreenshot", { format: "png" });
    await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

    page.close();
    browser.close();

    console.log(JSON.stringify({
      ok: true,
      url,
      format,
      files: files.map((file) => path.basename(file)),
      zip: zipPath,
      zipEntries: entries,
      screenshot: screenshotPath,
    }, null, 2));
  } finally {
    chrome.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
