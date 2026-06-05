import type { Translation } from "../translations";

const en: Translation = {
  siteTitle: "HEIC to JPG or PNG Converter — Free, Private, No Upload",
  siteDescription:
    "Convert HEIC photos to JPG or PNG online for free. 100% private — files never leave your device. EXIF metadata preserved for JPG output.",
  nav: {
    home: "Home",
    blog: "Blog",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
  },
  hero: {
    title: "HEIC to JPG or PNG Converter",
    subtitle: "Free · Private · No Upload Required",
  },
  dropZone: {
    title: "Drop HEIC files here",
    browse: "Browse files",
    supported: "Supports HEIC, HEIF",
    maxSize: "Max 50MB per file",
  },
  options: {
    outputFormat: "Output format",
    outputFormatOptions: {
      jpeg: "JPG",
      png: "PNG",
    },
    quality: "Quality",
    maxWidth: "Max Width",
    preserveExif: "Preserve EXIF data",
    autoRotate: "Auto rotate",
    smallerFile: "Smaller file",
    betterQuality: "Better quality",
    pngExifNote: "PNG output is lossless but does not preserve EXIF metadata.",
    maxWidthOptions: {
      original: "Original",
      "1920": "1920px (Full HD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "Convert files",
    converting: "Converting...",
    download: "Download",
    downloadAll: "Download All (ZIP)",
    clear: "Clear All",
  },
  results: {
    title: "Conversion Results",
    originalSize: "Original",
    convertedSize: "Converted",
    saved: "Saved",
    exifPreserved: "EXIF preserved",
    noExif: "No EXIF data",
    pending: "Pending",
    converting: "Converting",
    done: "Done",
    error: "Error",
    remove: "Remove file",
  },
  errors: {
    noFiles: "Please select at least one file.",
    unsupportedFormat: "Unsupported file format. Please use HEIC or HEIF files.",
    fileTooLarge: "is too large. Maximum size is 50MB.",
    conversionFailed: "Conversion failed. Please try again.",
    unknown: "An unknown error occurred.",
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    about: "About",
    copyright: "heicgo.com — Free online HEIC to JPG converter.",
  },
  seo: {
    homeTitle: "HEIC to JPG or PNG Converter — Free, Private, No Upload",
    homeDescription:
      "Convert HEIC photos to JPG or PNG online for free. 100% private — files never leave your device. Batch convert with ZIP download and EXIF preservation for JPG.",
    privacyTitle: "Privacy Policy — HEIC to JPG Converter",
    privacyDescription:
      "Privacy policy for heicgo.com. Learn how we handle your data — all conversions happen locally on your device.",
    termsTitle: "Terms of Service — HEIC to JPG Converter",
    termsDescription: "Terms of service for using heicgo.com.",
    aboutTitle: "About — HEIC to JPG Converter",
    aboutDescription:
      "About heicgo.com — a free, private HEIC to JPG converter that preserves EXIF metadata. No uploads, no registration.",
    faqTitle: "FAQ — HEIC to JPG Converter",
    faqDescription:
      "Frequently asked questions about converting HEIC to JPG. Learn about EXIF preservation, batch conversion, file privacy, and more.",
    blogTitle: "Blog — HEIC to JPG Converter",
    blogDescription:
      "Tips, guides, and comparisons about HEIC image conversion. Learn how to open, convert, and manage HEIC files.",
  },
};

export default en;
