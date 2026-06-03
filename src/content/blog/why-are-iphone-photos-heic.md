---
title: "Why Are iPhone Photos HEIC? Apple's Format Explained"
description: "Understand why Apple switched to HEIC format, how it saves storage, and when you should convert back to JPEG."
publishDate: 2025-06-03
tags: ["heic", "iphone", "apple", "explainer"]
---

Since iOS 11, iPhones default to HEIC format for photos. This change confused many users but has solid technical reasons.

## Storage Savings: Half the Size, Same Quality

HEIC uses HEVC (H.265) compression — the same technology behind 4K Blu-rays. Compared to 30-year-old JPEG technology:

- **Same quality → half the file size**
- **Same file size → significantly better quality**

Example: A typical iPhone 14 photo is ~2.5 MB in HEIC. The same photo in JPEG would be ~5 MB.

## The Real Reason: Live Photos

HEIC isn't just for still images. It's a **container format** that bundles:

```
┌─────────────────────────────────┐
│          HEIC Container         │
│                                 │
│  ✓ Still image (HEVC)          │
│  ✓ Live Photo video (~3 sec)   │
│  ✓ Depth map (Portrait mode)   │
│  ✓ Burst sequence              │
│  ✓ EXIF metadata               │
│                                 │
└─────────────────────────────────┘
```

JPEG can only hold a single image — it was designed in 1992, long before computational photography.

## Which iPhones Use HEIC?

| iPhone Model | Default Format | Can Switch? |
|-------------|:---:|:---:|
| iPhone 7 and later (iOS 11+) | HEIC | Yes |
| iPhone 6s and earlier | JPEG | N/A |
| All iPads (iPadOS 13+) | HEIC | Yes |

## Should You Switch to JPEG?

**Keep HEIC if:**
- You're all-Apple (iPhone + Mac + iCloud)
- You need to save storage space
- You use iCloud Photos

**Switch to JPEG if:**
- You frequently transfer photos to Windows
- You use non-Apple photo editing software
- You share photos with Android users
- You upload to websites that don't support HEIC

## How to Change

Settings → Camera → Formats → "Most Compatible" = JPEG

Or keep HEIC and convert on-demand with [heicgo.com](/).

## Further Reading

- [What Is a HEIC File?](/blog/post/what-is-heic) — format deep dive
- [How to Convert HEIC to JPG on iPhone](/blog/post/convert-heic-to-jpg-iphone) — on-device conversion
- [iPhone Photo Storage Guide](/blog/post/iphone-photo-storage-guide) — manage HEIC storage efficiently
