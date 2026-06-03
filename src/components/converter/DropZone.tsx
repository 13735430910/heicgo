import { useRef, useState } from "preact/hooks";

interface DropZoneProps {
  onFiles: (files: FileList | File[]) => void;
  texts: { title: string; browse: string; supported: string; maxSize: string };
  disabled: boolean;
}

export function DropZone({ onFiles, texts, disabled }: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled || !e.dataTransfer?.files.length) return;
    onFiles(e.dataTransfer.files);
  }

  function handleBrowse() {
    inputRef.current?.click();
  }

  function handleInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files?.length) {
      onFiles(input.files);
      input.value = "";
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      class={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
        isDragOver
          ? "border-primary bg-primary-light drop-zone-active"
          : "border-border bg-surface hover:border-text-muted"
      } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
      onClick={handleBrowse}
    >
      <svg
        class="mx-auto mb-4 text-text-muted"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17,8 12,3 7,8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
      <p class="text-text-secondary text-lg mb-2">{texts.title}</p>
      <p class="text-text-muted text-sm mb-4">
        {texts.supported} · {texts.maxSize}
      </p>
      <span class="inline-block bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors">
        {texts.browse}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept=".heic,.heif,.HEIC,.HEIF"
        multiple
        class="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
}
