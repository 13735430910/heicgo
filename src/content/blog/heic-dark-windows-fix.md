---
title: "HEIC Photos Dark on Windows? Here's Why and How to Fix"
description: "iPhone HEIC photos appearing dark or washed out on Windows PC? It's an HDR color profile mismatch. Here's the fix."
publishDate: 2025-06-03
tags: ["heic", "windows", "troubleshooting", "color"]
---

You transfer iPhone photos to your PC and they look dark, dull, or washed out. This is a common issue — and it's not your files that are broken.

## The Root Cause: HDR Color Profiles

Modern iPhones capture photos in **Display P3** or **HDR (High Dynamic Range)** color space. Windows defaults to **sRGB**, which has a narrower color gamut.

When Windows opens a P3/HDR HEIC file without proper color management:

```
What iPhone captured (HDR/P3)   What Windows shows (sRGB mapped)
─────────────────────────────   ─────────────────────────────
████████████████████████████     ████████████████████████████
████████████████████████████     ████████████████░░░░░░░░░░░░
████████████████████████████     ████████████████░░░░░░░░░░░░
   Bright & saturated              Dark & washed out
```

## Fix 1: Convert to JPEG (Recommended)

Converting HEIC → JPEG bakes the correct color profile into the file:

1. Go to [heicgo.com](/)
2. Upload your HEIC files
3. Convert at 92-100% quality
4. Download JPEG — colors will display correctly

heicgo preserves color profiles during conversion, ensuring Windows shows the correct colors.

## Fix 2: Use Windows Photos App

The built-in Photos app (Windows 10/11) handles color better than File Explorer preview:

1. Right-click the HEIC file
2. Open with → Photos
3. Photos applies correct color management

## Fix 3: Install HEVC Codec

The paid HEVC Video Extensions ($0.99) from Microsoft Store includes better color management:

1. Microsoft Store → "HEVC Video Extensions"
2. Purchase and install
3. Restart

This improves HEIC rendering system-wide.

## Fix 4: Adjust Monitor Settings

If ALL photos (not just HEIC) look dark:

1. Right-click desktop → Display settings
2. Check HDR is enabled (if your monitor supports it)
3. Adjust brightness and contrast

## Permanent Solution

On iPhone: Settings → Camera → Formats → "Most Compatible"

This captures photos in JPEG with sRGB color profile — fully compatible with Windows.
