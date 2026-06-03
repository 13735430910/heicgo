import type { FileEntry, ConversionResult } from "../../lib/conversion/types";

interface ResultListProps {
  entries: FileEntry[];
  results: Map<string, ConversionResult>;
  texts: {
    title: string;
    exifPreserved: string;
    noExif: string;
  };
}

export function ResultList({ entries, results, texts }: ResultListProps) {
  const doneEntries = entries.filter((e) => e.status === "done" && e.result && !e.result.error);

  if (doneEntries.length === 0) return null;

  return (
    <div class="mt-8">
      <h2 class="text-lg font-semibold text-text mb-4">{texts.title}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {doneEntries.map((entry) => {
          const result = entry.result!;
          return (
            <div
              key={entry.id}
              class="bg-surface border border-border rounded-lg overflow-hidden group"
            >
              {/* Thumbnail */}
              <div class="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={result.thumbnailUrl}
                  alt={result.fileName}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div class="p-2">
                <p class="text-xs text-text truncate mb-1" title={result.fileName}>
                  {result.fileName}
                </p>
                {result.exifSummary ? (
                  <p class="text-xs text-success flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {texts.exifPreserved}
                  </p>
                ) : (
                  <p class="text-xs text-text-muted">{texts.noExif}</p>
                )}
              </div>

              {/* Download button overlay */}
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={URL.createObjectURL(result.blob)}
                  download={result.fileName}
                  class="bg-white text-text px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-100"
                >
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
