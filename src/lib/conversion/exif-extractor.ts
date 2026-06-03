import exifr from "exifr";

export interface ExifData {
  Make?: string;
  Model?: string;
  DateTimeOriginal?: string;
  GPSLatitude?: number;
  GPSLongitude?: number;
  GPSLatitudeRef?: string;
  GPSLongitudeRef?: string;
  ImageWidth?: number;
  ImageHeight?: number;
  Orientation?: number;
  Software?: string;
  [key: string]: unknown;
}

/**
 * Parse EXIF data from HEIC file bytes before decoding.
 *
 * exifr can parse HEIC directly from the raw buffer — no decoding needed.
 * This lets us preserve EXIF even when converting to JPEG,
 * which is the core differentiator of this tool vs competitors.
 */
export async function extractExifFromHeic(
  file: File
): Promise<{ exif: ExifData; raw: Record<string, unknown> }> {
  const buffer = await file.arrayBuffer();

  const exif: ExifData = await exifr.parse(buffer, {
    gps: true,
    tiff: true,
    xmp: true,
    iptc: true,
    translateKeys: true,
    translateValues: true,
    reviveValues: true,
  });

  // Also get the raw tags for precise re-injection
  const raw: Record<string, unknown> =
    (await exifr.parse(buffer, {
      gps: true,
      tiff: true,
      xmp: true,
    })) ?? {};

  return { exif: exif ?? {}, raw };
}

/**
 * Build a human-readable EXIF summary for display.
 */
export function buildExifSummary(exif: ExifData): string {
  const parts: string[] = [];

  if (exif.Make && exif.Model) {
    parts.push(`${exif.Make} ${exif.Model}`);
  } else if (exif.Make) {
    parts.push(exif.Make);
  }

  if (exif.DateTimeOriginal) {
    const d = new Date(exif.DateTimeOriginal);
    parts.push(d.toLocaleDateString(undefined, { dateStyle: "medium" }));
  }

  if (exif.GPSLatitude != null && exif.GPSLongitude != null) {
    const lat = toNumber(exif.GPSLatitude);
    const lon = toNumber(exif.GPSLongitude);
    if (lat != null && lon != null) {
      parts.push(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
    }
  }

  return parts.join(" · ") || "EXIF data preserved";
}

function toNumber(v: unknown): number | null {
  if (typeof v === "number" && !isNaN(v)) return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return isNaN(n) ? null : n;
  }
  if (Array.isArray(v) && v.length > 0) {
    // exifr may return GPS as [degrees, minutes, seconds]
    // if the first element is a number, it's likely decimal degrees
    const first = v[0];
    if (typeof first === "number") return first;
    if (typeof first === "string") {
      const n = parseFloat(first);
      return isNaN(n) ? null : n;
    }
  }
  return null;
}
