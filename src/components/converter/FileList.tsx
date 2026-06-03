import type { FileEntry } from "../../lib/conversion/types";

interface FileListProps {
  entries: FileEntry[];
  onRemove: (id: string) => void;
  texts: { originalSize: string; convertedSize: string; saved: string };
}

function formatSize(bytes: number): string {
  if (bytes === 0) return "-";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function statusBadge(entry: FileEntry) {
  switch (entry.status) {
    case "pending":
      return <span class="text-xs text-text-muted bg-gray-100 px-2 py-0.5 rounded">Pending</span>;
    case "converting":
      return (
        <div class="w-full max-w-[120px]">
          <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              class="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${entry.progress}%` }}
            />
          </div>
        </div>
      );
    case "done":
      return <span class="text-xs text-success bg-green-50 px-2 py-0.5 rounded">Done</span>;
    case "error":
      return <span class="text-xs text-error bg-red-50 px-2 py-0.5 rounded">Error</span>;
  }
}

export function FileList({ entries, onRemove, texts }: FileListProps) {
  if (entries.length === 0) return null;

  return (
    <div class="mt-6 space-y-2">
      {entries.map((entry) => (
        <div
          key={entry.id}
          class="flex items-center gap-3 p-3 bg-surface border border-border rounded-lg"
        >
          {/* Thumbnail */}
          <div class="w-10 h-10 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
            {entry.result?.thumbnailUrl && entry.status === "done" ? (
              <img
                src={entry.result.thumbnailUrl}
                alt=""
                class="w-full h-full object-cover"
              />
            ) : (
              <div class="w-full h-full flex items-center justify-center text-text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
              </div>
            )}
          </div>

          {/* Info */}
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-text truncate">{entry.file.name}</p>
            <div class="flex gap-3 text-xs text-text-muted mt-0.5">
              <span>{texts.originalSize}: {formatSize(entry.file.size)}</span>
              {entry.result && entry.status === "done" && !entry.result.error && (
                <>
                  <span>{texts.convertedSize}: {formatSize(entry.result.convertedSize)}</span>
                  {entry.result.originalSize > entry.result.convertedSize && (
                    <span class="text-success">
                      {texts.saved}: {Math.round(
                        ((entry.result.originalSize - entry.result.convertedSize) /
                          entry.result.originalSize) *
                          100
                      )}%
                    </span>
                  )}
                </>
              )}
              {entry.result?.error && (
                <span class="text-error">{entry.result.error}</span>
              )}
            </div>
          </div>

          {/* Status / Progress */}
          <div class="flex-shrink-0">{statusBadge(entry)}</div>

          {/* Remove */}
          <button
            onClick={() => onRemove(entry.id)}
            class="flex-shrink-0 p-1 text-text-muted hover:text-error transition-colors"
            aria-label="Remove file"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
