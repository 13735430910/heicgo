import type { ConversionOptions } from "../../lib/conversion/types";

interface ConversionOptionsProps {
  options: ConversionOptions;
  onChange: (partial: Partial<ConversionOptions>) => void;
  texts: {
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
  disabled: boolean;
}

export function ConversionOptionsPanel({
  options,
  onChange,
  texts,
  disabled,
}: ConversionOptionsProps) {
  return (
    <div class="mt-6 p-4 bg-surface border border-border rounded-lg space-y-5">
      <div>
        <label class="text-sm font-medium text-text block mb-2">{texts.outputFormat}</label>
        <div class="grid grid-cols-2 gap-2" role="group" aria-label={texts.outputFormat}>
          {(["jpeg", "png"] as const).map((format) => (
            <button
              type="button"
              data-testid={`output-format-${format}`}
              onClick={() => onChange({ outputFormat: format })}
              disabled={disabled}
              class={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                options.outputFormat === format
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-text-secondary border-border hover:border-text-muted"
              } disabled:opacity-50`}
            >
              {texts.outputFormatOptions[format]}
            </button>
          ))}
        </div>
      </div>

      {/* Quality slider */}
      <div class={options.outputFormat === "png" ? "opacity-50" : ""}>
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-medium text-text">{texts.quality}</label>
          <span class="text-sm text-text-muted tabular-nums">
            {Math.round(options.quality * 100)}%
          </span>
        </div>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.01"
          value={options.quality}
          onInput={(e) =>
            onChange({ quality: parseFloat((e.target as HTMLInputElement).value) })
          }
          disabled={disabled || options.outputFormat === "png"}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary disabled:opacity-50"
        />
        <div class="flex justify-between text-xs text-text-muted mt-1">
          <span>{texts.smallerFile}</span>
          <span>{texts.betterQuality}</span>
        </div>
        {options.outputFormat === "png" && (
          <p class="text-xs text-text-muted mt-2">{texts.pngExifNote}</p>
        )}
      </div>

      {/* Max width */}
      <div>
        <label class="text-sm font-medium text-text block mb-2">{texts.maxWidth}</label>
        <select
          value={options.maxWidth}
          onChange={(e) =>
            onChange({ maxWidth: parseInt((e.target as HTMLSelectElement).value) })
          }
          disabled={disabled}
          class="w-full sm:w-auto px-3 py-2 border border-border rounded-lg text-sm bg-white disabled:opacity-50"
        >
          {Object.entries(texts.maxWidthOptions).map(([value, label]) => (
            <option key={value} value={value === "original" ? "0" : value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Toggle switches */}
      <div class="flex flex-col sm:flex-row gap-4">
        <label class="flex items-center gap-2 cursor-pointer disabled:opacity-50">
          <input
            type="checkbox"
            checked={options.preserveExif}
            onChange={(e) =>
              onChange({ preserveExif: (e.target as HTMLInputElement).checked })
            }
            disabled={disabled || options.outputFormat === "png"}
            class="w-4 h-4 rounded accent-primary"
          />
          <span class="text-sm text-text">{texts.preserveExif}</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={options.autoRotate}
            onChange={(e) =>
              onChange({ autoRotate: (e.target as HTMLInputElement).checked })
            }
            disabled={disabled}
            class="w-4 h-4 rounded accent-primary"
          />
          <span class="text-sm text-text">{texts.autoRotate}</span>
        </label>
      </div>
    </div>
  );
}
