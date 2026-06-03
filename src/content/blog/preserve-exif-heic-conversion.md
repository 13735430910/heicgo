---
title: "How to Preserve EXIF Data When Converting HEIC to JPG"
description: "Most HEIC converters strip EXIF metadata like GPS location and date. Learn how to keep this data intact during conversion."
publishDate: 2025-03-31
tags: ["exif", "heic", "conversion", "privacy"]
---

When you convert HEIC photos to JPEG, most online converters strip EXIF metadata — but you can preserve GPS coordinates, timestamps, and camera information.

## What is EXIF data?

EXIF (Exchangeable Image File Format) is metadata embedded in photo files. It includes:

- **Date and time** — when the photo was taken
- **GPS coordinates** — where the photo was taken
- **Camera settings** — aperture, shutter speed, ISO, focal length
- **Device info** — camera model, lens, software version
- **Orientation** — whether the photo needs rotation

## Why most converters strip EXIF

There are three reasons most HEIC-to-JPEG converters lose EXIF data:

1. **WebAssembly limitations** — WASM-based converters decode to raw pixels, discarding metadata
2. **Canvas API** — the browser Canvas API strips all metadata when rendering
3. **Lazy implementations** — many tools simply re-encode pixel data without handling metadata

## The heicgo approach: Extract then re-inject

heicgo.com uses a two-step process:

1. **Extract** — EXIF data is parsed from the HEIC file before decoding, using `exifr`
2. **Re-inject** — after conversion to JPEG, EXIF is written back using `piexifjs`

This is what makes heicgo the only WASM-based converter that preserves GPS and camera metadata.

## Exif data preserved by heicgo

| EXIF Tag | Description | Preserved |
|----------|-------------|:---------:|
| Make/Model | Camera manufacturer and model | Yes |
| DateTimeOriginal | Photo capture date/time | Yes |
| GPSLatitude/Longitude | Location coordinates | Yes |
| ImageWidth/Height | Original dimensions | Yes |
| Orientation | Rotation flag | Yes |
| Software | Processing software | Yes |

## Test it yourself

Take a HEIC photo with your iPhone, convert it at [heicgo.com](/), then check the downloaded JPEG with any EXIF viewer. You'll see all metadata intact.
