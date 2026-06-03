export interface ConversionOptions {
  quality: number; // 0.1-1.0
  maxWidth: number; // 0 = original
  preserveExif: boolean;
  autoRotate: boolean;
}

export interface ConversionResult {
  fileName: string;
  originalSize: number;
  convertedSize: number;
  blob: Blob;
  thumbnailUrl: string;
  hasExif: boolean;
  exifSummary: string | null;
  error?: string;
}

export interface FileEntry {
  id: string;
  file: File;
  status: "pending" | "converting" | "done" | "error";
  result?: ConversionResult;
  progress: number; // 0-100
}

export type DecodeResult = {
  imageData: ImageData;
  orientation: number;
};
