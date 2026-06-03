---
title: "Does Converting HEIC to JPG Lose Quality? The Truth"
description: "Will converting HEIC to JPEG reduce image quality? We explain when quality loss occurs and how to avoid it."
publishDate: 2025-06-03
tags: ["heic", "jpeg", "quality", "comparison"]
---

A common concern: "Will converting my HEIC photos to JPEG make them look worse?" The answer depends on your settings.

## The Short Answer

Converting HEIC to JPEG at **92-100% quality** produces visually identical results. At lower qualities (60-80%), you'll see slight compression artifacts — but file sizes drop significantly.

## Understanding Generational Loss

Every time you re-encode a lossy format (JPEG, HEIC), you lose a tiny bit of quality. This is called "generational loss." However:

- **HEIC → JPEG (1st generation)**: Visually lossless at ≥90% quality
- **JPEG → JPEG (re-encode)**: Noticeable loss accumulates quickly
- **HEIC → JPEG → JPEG**: Avoid — convert from original HEIC each time

**Bottom line**: Converting HEIC to JPEG once at high quality is fine. Don't re-convert JPEGs.

## Quality vs File Size

Here's what happens to a typical 12MP iPhone photo:

| Quality Setting | Output Size | Visual Quality |
|----------------|------------|----------------|
| 100% | ~8 MB | Identical to original |
| 92% (default) | ~4 MB | Imperceptible difference |
| 80% | ~2 MB | Minor artifacts in fine detail |
| 60% | ~1 MB | Visible compression, good for web |
| 40% | ~500 KB | Blocky, only for thumbnails |

## When Quality Loss Matters

- **Printing** (especially large formats): Use 95-100%
- **Archiving**: Keep original HEIC + convert copies as needed
- **Social media**: 80% is fine — platforms recompress anyway
- **Email/Sharing**: 70-80% balances quality and size

## The Real Risk: Metadata Loss

The bigger issue isn't pixel quality — it's metadata loss. Most converters strip:

- GPS location
- Date/time taken
- Camera settings
- Orientation

Use [heicgo.com](/) to convert — it's the only free web tool that preserves EXIF metadata.

## Further Reading

- [HEIC vs JPEG Comparison](/blog/post/heic-vs-jpeg-comparison) — format quality deep dive
- [Compress JPEG Without Losing Quality](/blog/post/compress-jpeg-without-losing-quality) — compression best practices
- [How to Convert HEIC to JPG](/blog/post/how-to-convert-heic-to-jpg) — convert at optimal quality
