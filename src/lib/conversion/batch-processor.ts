import JSZip from "jszip";
import type { FileEntry, ConversionOptions, ConversionResult } from "./types";
import { decodeHeic } from "./heic-decoder";
import { extractExifFromHeic, buildExifSummary } from "./exif-extractor";
import { injectExifIntoJpeg } from "./exif-injector";
import { processImage } from "./image-processor";
import { CONVERSION } from "../../config";

/**
 * Convert a single HEIC file through the full pipeline:
 * 1. Extract EXIF from HEIC bytes
 * 2. Decode HEIC → raw pixels (native or WASM)
 * 3. Canvas processing (resize, rotate)
 * 4. Encode to JPEG
 * 5. Re-inject EXIF into JPEG (the core differentiator)
 */
export async function convertSingleFile(
  entry: FileEntry,
  options: ConversionOptions,
  onProgress: (id: string, progress: number) => void
): Promise<ConversionResult> {
  const { file, id } = entry;

  // 1. Extract EXIF before decoding
  let exifData: Record<string, unknown> = {};
  let hasExif = false;

  if (options.preserveExif) {
    try {
      const extracted = await extractExifFromHeic(file);
      exifData = extracted.exif as unknown as Record<string, unknown>;
      hasExif = Object.keys(exifData).length > 0;
      onProgress(id, 15);
    } catch {
      // Non-fatal: continue without EXIF
    }
  }

  // 2. Decode HEIC
  onProgress(id, 20);
  let decodeResult;
  try {
    decodeResult = await decodeHeic(file);
    onProgress(id, 50);
  } catch (err) {
    throw new Error(
      `Failed to decode HEIC: ${err instanceof Error ? err.message : "unknown error"}`
    );
  }

  // 3+4. Process image + encode to JPEG
  onProgress(id, 60);
  const { blob, width, height } = processImage(decodeResult, options);
  onProgress(id, 80);

  // 5. Inject EXIF into JPEG
  let finalBlob = blob;
  if (options.preserveExif && hasExif) {
    try {
      const jpegBuffer = await blob.arrayBuffer();
      const injected = injectExifIntoJpeg(
        jpegBuffer,
        exifData as unknown as import("./exif-extractor").ExifData
      );
      finalBlob = new Blob([injected], { type: "image/jpeg" });
    } catch {
      // Non-fatal: use JPEG without EXIF
    }
  }
  onProgress(id, 95);

  // Build thumbnail URL for preview
  const thumbUrl = URL.createObjectURL(finalBlob);

  // Build result
  const nameWithoutExt = file.name.replace(/\.(heic|heif)$/i, "");
  const exifSummary = hasExif
    ? buildExifSummary(
        exifData as unknown as import("./exif-extractor").ExifData
      )
    : null;

  onProgress(id, 100);

  return {
    fileName: `${nameWithoutExt}.jpg`,
    originalSize: file.size,
    convertedSize: finalBlob.size,
    blob: finalBlob,
    thumbnailUrl: thumbUrl,
    hasExif,
    exifSummary,
  };
}

/**
 * Process multiple files concurrently with a concurrency limit.
 */
export async function convertBatch(
  entries: FileEntry[],
  options: ConversionOptions,
  onProgress: (id: string, progress: number) => void
): Promise<Map<string, ConversionResult>> {
  const results = new Map<string, ConversionResult>();
  const queue = [...entries];
  const active: Promise<void>[] = [];

  async function processNext() {
    const entry = queue.shift();
    if (!entry) return;

    try {
      const result = await convertSingleFile(entry, options, onProgress);
      results.set(entry.id, result);
    } catch (err) {
      results.set(entry.id, {
        fileName: entry.file.name,
        originalSize: entry.file.size,
        convertedSize: 0,
        blob: new Blob(),
        thumbnailUrl: "",
        hasExif: false,
        exifSummary: null,
        error: err instanceof Error ? err.message : "Conversion failed",
      });
    }
  }

  // Run with concurrency limit
  while (queue.length > 0 || active.length > 0) {
    while (active.length < CONVERSION.maxConcurrent && queue.length > 0) {
      const p = processNext().finally(() => {
        const idx = active.indexOf(p);
        if (idx > -1) active.splice(idx, 1);
      });
      active.push(p);
    }
    if (active.length > 0) {
      await Promise.race(active);
    }
  }

  return results;
}

/**
 * Create a ZIP file from the converted results and trigger download.
 */
export async function downloadAsZip(
  results: Map<string, ConversionResult>
): Promise<void> {
  const zip = new JSZip();

  for (const [, result] of results) {
    if (result.error) continue;
    zip.file(result.fileName, result.blob);
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(zipBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "heicgo-converted.zip";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
