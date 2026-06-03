import piexif from "piexifjs";
import type { ExifData } from "./exif-extractor";

/**
 * Inject EXIF data into a JPEG blob.
 *
 * This is the key step that differentiates heicgo from competitors.
 * We extract EXIF from HEIC before decoding, then re-inject it into the
 * output JPEG so GPS, camera info, and timestamps are preserved.
 *
 * piexifjs works with base64 strings in the browser, not Buffer.
 */
export function injectExifIntoJpeg(
  jpegBuffer: ArrayBuffer,
  exifData: ExifData
): ArrayBuffer {
  try {
    const jpegBase64 = arrayBufferToBase64(jpegBuffer);

    const exifObj: Record<string, Record<string, unknown>> = {
      "0th": {},
      Exif: {},
      GPS: {},
    };

    // 0th IFD — camera / image metadata
    if (exifData.Make) exifObj["0th"][piexif.ImageIFD.Make] = exifData.Make;
    if (exifData.Model) exifObj["0th"][piexif.ImageIFD.Model] = exifData.Model;
    if (exifData.Software)
      exifObj["0th"][piexif.ImageIFD.Software] = exifData.Software;
    if (exifData.ImageWidth)
      exifObj["0th"][piexif.ImageIFD.ImageWidth] = exifData.ImageWidth;
    if (exifData.ImageHeight)
      exifObj["0th"][piexif.ImageIFD.ImageLength] = exifData.ImageHeight;
    if (exifData.Orientation)
      exifObj["0th"][piexif.ImageIFD.Orientation] = exifData.Orientation;

    // Exif IFD
    if (exifData.DateTimeOriginal) {
      exifObj.Exif[piexif.ExifIFD.DateTimeOriginal] =
        exifData.DateTimeOriginal;
    }

    // GPS IFD
    if (
      exifData.GPSLatitude !== undefined &&
      exifData.GPSLongitude !== undefined
    ) {
      exifObj.GPS[piexif.GPSIFD.GPSLatitudeRef] =
        exifData.GPSLatitude >= 0 ? "N" : "S";
      exifObj.GPS[piexif.GPSIFD.GPSLatitude] =
        convertDecimalToDMS(Math.abs(exifData.GPSLatitude));
      exifObj.GPS[piexif.GPSIFD.GPSLongitudeRef] =
        exifData.GPSLongitude >= 0 ? "E" : "W";
      exifObj.GPS[piexif.GPSIFD.GPSLongitude] =
        convertDecimalToDMS(Math.abs(exifData.GPSLongitude));
    }

    const exifBytes = piexif.dump(exifObj);
    const modified = piexif.insert(exifBytes, jpegBase64);
    return base64ToArrayBuffer(modified);
  } catch {
    return jpegBuffer;
  }
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return buffer;
}

function convertDecimalToDMS(decimal: number): [number, number][] {
  const degrees = Math.floor(decimal);
  const minutesFloat = (decimal - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = Math.round((minutesFloat - minutes) * 60 * 1000);
  return [
    [degrees, 1],
    [minutes, 1],
    [seconds, 1000],
  ];
}
