import type { DecodeResult } from "./types";

let wasmDecoder: typeof import("heic2any") | null = null;

async function loadWasmDecoder(): Promise<typeof import("heic2any")> {
  if (wasmDecoder) return wasmDecoder;
  wasmDecoder = await import("heic2any");
  return wasmDecoder!;
}

/**
 * Check if the current browser can natively decode HEIC.
 * Safari 17.6+ supports HEIC via createImageBitmap.
 */
function supportsNativeHeic(): boolean {
  // Safari on macOS 14+ / iOS 17+
  const ua = navigator.userAgent;
  if (!/Safari/i.test(ua) || /Chrome|Chromium/i.test(ua)) return false;

  const match = ua.match(/Version\/(\d+)/);
  if (!match) return false;

  const major = parseInt(match[1], 10);
  return major >= 17;
}

/**
 * Decode HEIC using Safari's native createImageBitmap.
 * 17-39x faster than WASM, but Safari-only.
 */
async function decodeNative(blob: Blob): Promise<DecodeResult> {
  const bitmap = await createImageBitmap(blob, { premultiplyAlpha: "none" });

  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");

  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return { imageData, orientation: 1 };
}

/**
 * Decode HEIC using heic2any WASM decoder.
 * Works in all modern browsers, but 1.3MB binary + slower.
 */
async function decodeWasm(blob: Blob): Promise<DecodeResult> {
  const decoder = await loadWasmDecoder();

  const result = await decoder.default({
    blob,
    toType: "image/png",
    quality: 1,
  });

  const resultBlob = Array.isArray(result) ? result[0] : result;

  const bitmap = await createImageBitmap(resultBlob, {
    premultiplyAlpha: "none",
  });

  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");

  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return { imageData, orientation: 1 };
}

/**
 * Decode a HEIC blob to raw ImageData.
 * Automatically picks the best decoder: native (Safari) or WASM (other browsers).
 *
 * WASM binary (~1.3MB) is loaded lazily — only when a non-Safari user drags in a file.
 */
export async function decodeHeic(blob: Blob): Promise<DecodeResult> {
  if (supportsNativeHeic()) {
    return decodeNative(blob);
  }
  return decodeWasm(blob);
}

export { supportsNativeHeic };
