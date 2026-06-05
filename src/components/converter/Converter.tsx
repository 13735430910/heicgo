import { useSignal, useComputed } from "@preact/signals";
import type { FileEntry, ConversionOptions, ConversionResult } from "../../lib/conversion/types";
import { convertBatch, downloadAsZip } from "../../lib/conversion/batch-processor";
import { CONVERSION } from "../../config";
import { DropZone } from "./DropZone";
import { FileList } from "./FileList";
import { ConversionOptionsPanel } from "./ConversionOptions";
import { ResultList } from "./ResultList";

interface ConverterProps {
  texts: ConverterTexts;
}

export interface ConverterTexts {
  dropZone: { title: string; browse: string; supported: string; maxSize: string };
  options: {
    outputFormat: string;
    outputFormatOptions: Record<"jpeg" | "png", string>;
    quality: string;
    maxWidth: string;
    preserveExif: string;
    autoRotate: string;
    smallerFile: string;
    betterQuality: string;
    pngExifNote: string;
    maxWidthOptions: Record<string, string>;
  };
  actions: { convert: string; converting: string; download: string; downloadAll: string; clear: string };
  results: {
    title: string;
    originalSize: string;
    convertedSize: string;
    saved: string;
    exifPreserved: string;
    noExif: string;
    pending: string;
    converting: string;
    done: string;
    error: string;
    remove: string;
  };
  errors: { noFiles: string; unsupportedFormat: string; fileTooLarge: string; conversionFailed: string };
}

export function Converter({ texts }: ConverterProps) {
  const entries = useSignal<FileEntry[]>([]);
  const isConverting = useSignal(false);
  const results = useSignal<Map<string, ConversionResult>>(new Map());
  const error = useSignal<string | null>(null);

  const options = useSignal<ConversionOptions>({
    outputFormat: CONVERSION.defaultOutputFormat,
    quality: CONVERSION.defaultQuality,
    maxWidth: CONVERSION.defaultMaxWidth,
    preserveExif: true,
    autoRotate: true,
  });

  const pendingCount = useComputed(() =>
    entries.value.filter((e) => e.status === "pending").length
  );

  const doneCount = useComputed(() =>
    entries.value.filter((e) => e.status === "done").length
  );

  const errorCount = useComputed(() =>
    entries.value.filter((e) => e.status === "error").length
  );

  function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function handleFiles(fileList: FileList | File[]) {
    error.value = null;
    const files = Array.from(fileList);
    const newEntries: FileEntry[] = [];

    for (const file of files) {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (!CONVERSION.supportedFormats.includes(ext)) {
        error.value = texts.errors.unsupportedFormat;
        continue;
      }
      if (file.size > CONVERSION.maxFileSize) {
        error.value = `${file.name} ${texts.errors.fileTooLarge}`;
        continue;
      }
      newEntries.push({
        id: generateId(),
        file,
        status: "pending",
        progress: 0,
      });
    }

    if (newEntries.length > 0) {
      entries.value = [...entries.value, ...newEntries];
    }
  }

  function removeEntry(id: string) {
    // Revoke object URLs for removed results
    const result = results.value.get(id);
    if (result?.thumbnailUrl) {
      URL.revokeObjectURL(result.thumbnailUrl);
    }
    entries.value = entries.value.filter((e) => e.id !== id);
  }

  function clearAll() {
    for (const [, r] of results.value) {
      if (r.thumbnailUrl) URL.revokeObjectURL(r.thumbnailUrl);
    }
    entries.value = [];
    results.value = new Map();
    error.value = null;
  }

  function updateProgress(id: string, progress: number) {
    entries.value = entries.value.map((e) =>
      e.id === id ? { ...e, status: "converting" as const, progress } : e
    );
  }

  async function startConversion() {
    const pending = entries.value.filter((e) => e.status === "pending");
    if (pending.length === 0) {
      error.value = texts.errors.noFiles;
      return;
    }

    isConverting.value = true;
    error.value = null;

    try {
      const newResults = await convertBatch(
        pending,
        options.value,
        updateProgress
      );

      // Merge results
      const merged = new Map(results.value);
      for (const [id, result] of newResults) {
        merged.set(id, result);
        entries.value = entries.value.map((e) =>
          e.id === id
            ? { ...e, status: result.error ? "error" as const : "done" as const, progress: 100, result }
            : e
        );
      }
      results.value = merged;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : texts.errors.conversionFailed;
    } finally {
      isConverting.value = false;
    }
  }

  async function handleDownloadAll() {
    const successfulResults = new Map<string, ConversionResult>();
    for (const [id, result] of results.value) {
      if (!result.error) successfulResults.set(id, result);
    }
    if (successfulResults.size > 0) {
      await downloadAsZip(successfulResults);
    }
  }

  return (
    <div class="converter">
      <DropZone
        onFiles={handleFiles}
        texts={texts.dropZone}
        disabled={isConverting.value}
      />

      {error.value && (
        <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error.value}
        </div>
      )}

      {entries.value.length > 0 && (
        <>
          <FileList
            entries={entries.value}
            onRemove={removeEntry}
            texts={{
              originalSize: texts.results.originalSize,
              convertedSize: texts.results.convertedSize,
              saved: texts.results.saved,
              pending: texts.results.pending,
              converting: texts.results.converting,
              done: texts.results.done,
              error: texts.results.error,
              remove: texts.results.remove,
            }}
          />

          <ConversionOptionsPanel
            options={options.value}
            onChange={(o) => (options.value = { ...options.value, ...o })}
            texts={texts.options}
            disabled={isConverting.value}
          />

          <div class="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={startConversion}
              disabled={isConverting.value || pendingCount.value === 0}
              class="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isConverting.value ? texts.actions.converting : texts.actions.convert}
            </button>

            {doneCount.value > 0 && (
              <button
                onClick={handleDownloadAll}
                class="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                {texts.actions.downloadAll}
              </button>
            )}

            <button
              onClick={clearAll}
              disabled={isConverting.value}
              class="px-4 py-3 text-sm text-text-muted hover:text-text transition-colors disabled:opacity-50"
            >
              {texts.actions.clear}
            </button>
          </div>

          {(doneCount.value > 0 || errorCount.value > 0) && (
            <ResultList
              entries={entries.value}
              results={results.value}
              texts={{ ...texts.results, download: texts.actions.download }}
            />
          )}
        </>
      )}
    </div>
  );
}
