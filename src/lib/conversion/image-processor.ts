import type { DecodeResult, ConversionOptions } from "./types";

/**
 * Apply user settings (quality, width, rotation) and encode to JPEG.
 *
 * Uses OffscreenCanvas for pixel manipulation (cheap),
 * then a real <canvas> for JPEG encoding via toBlob.
 */
export function processImage(
  decode: DecodeResult,
  options: ConversionOptions
): Promise<{ blob: Blob; width: number; height: number }> {
  const { imageData } = decode;
  let targetW = imageData.width;
  let targetH = imageData.height;

  if (options.maxWidth > 0 && targetW > options.maxWidth) {
    const ratio = options.maxWidth / targetW;
    targetW = options.maxWidth;
    targetH = Math.round(targetH * ratio);
  }

  // Use a real canvas for everything — simpler and avoids OffscreenCanvas compat issues
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");

  // Apply orientation transform before drawing
  if (options.autoRotate && decode.orientation > 1) {
    ctx.save();
    applyOrientationTransform(ctx, decode.orientation, targetW, targetH);
  }

  // Create source ImageData and draw via an intermediate canvas
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = imageData.width;
  sourceCanvas.height = imageData.height;
  const sourceCtx = sourceCanvas.getContext("2d");
  if (!sourceCtx) throw new Error("Failed to get source canvas context");
  sourceCtx.putImageData(imageData, 0, 0);

  ctx.drawImage(
    sourceCanvas,
    0,
    0,
    imageData.width,
    imageData.height,
    0,
    0,
    targetW,
    targetH
  );

  if (options.autoRotate && decode.orientation > 1) {
    ctx.restore();
  }

  const mimeType = options.outputFormat === "png" ? "image/png" : "image/jpeg";
  const quality = options.outputFormat === "jpeg" ? options.quality : undefined;

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Canvas toBlob returned null"));
          return;
        }
        resolve({ blob, width: targetW, height: targetH });
      },
      mimeType,
      quality
    );
  });
}

function applyOrientationTransform(
  ctx: CanvasRenderingContext2D,
  orientation: number,
  width: number,
  height: number
): void {
  switch (orientation) {
    case 2:
      ctx.transform(-1, 0, 0, 1, width, 0);
      break;
    case 3:
      ctx.transform(-1, 0, 0, -1, width, height);
      break;
    case 4:
      ctx.transform(1, 0, 0, -1, 0, height);
      break;
    case 5:
      ctx.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      ctx.transform(0, 1, -1, 0, height, 0);
      break;
    case 7:
      ctx.transform(0, -1, -1, 0, height, width);
      break;
    case 8:
      ctx.transform(0, -1, 1, 0, 0, width);
      break;
  }
}
