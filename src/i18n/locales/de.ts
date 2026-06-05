import type { Translation } from "../translations";

const de: Translation = {
  siteTitle: "HEIC zu JPG oder PNG Konverter — Kostenlos, privat, kein Upload",
  siteDescription:
    "Konvertiere HEIC Fotos online zu JPG oder PNG. 100% privat — Dateien verlassen dein Gerät nicht. EXIF-Daten bleiben bei JPG erhalten.",
  nav: { home: "Start", blog: "Blog", faq: "FAQ", about: "Über uns", contact: "Kontakt" },
  hero: { title: "HEIC zu JPG oder PNG Konverter", subtitle: "Kostenlos · Privat · Kein Upload nötig" },
  dropZone: {
    title: "HEIC-Dateien hier ablegen",
    browse: "Dateien auswählen",
    supported: "Unterstützt HEIC, HEIF",
    maxSize: "Max. 50 MB pro Datei",
  },
  options: {
    outputFormat: "Ausgabeformat",
    outputFormatOptions: {
      jpeg: "JPG",
      png: "PNG",
    },
    quality: "Qualität",
    maxWidth: "Max. Breite",
    preserveExif: "EXIF-Daten behalten",
    autoRotate: "Auto-Rotation",
    smallerFile: "Kleinere Datei",
    betterQuality: "Bessere Qualität",
    pngExifNote: "PNG ist verlustfrei, erhält aber keine EXIF-Metadaten.",
    maxWidthOptions: {
      original: "Original",
      "1920": "1920px (Full HD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "Dateien konvertieren",
    converting: "Konvertiere...",
    download: "Herunterladen",
    downloadAll: "Alle herunterladen (ZIP)",
    clear: "Löschen",
  },
  results: {
    title: "Konvertierungsergebnisse",
    originalSize: "Original",
    convertedSize: "Konvertiert",
    saved: "Gespart",
    exifPreserved: "EXIF erhalten",
    noExif: "Keine EXIF-Daten",
    pending: "Wartet",
    converting: "Konvertiert",
    done: "Fertig",
    error: "Fehler",
    remove: "Datei entfernen",
  },
  errors: {
    noFiles: "Bitte wähle mindestens eine Datei aus.",
    unsupportedFormat: "Nicht unterstütztes Format. Bitte HEIC oder HEIF verwenden.",
    fileTooLarge: "ist zu groß. Maximale Größe: 50 MB.",
    conversionFailed: "Konvertierung fehlgeschlagen. Bitte erneut versuchen.",
    unknown: "Ein unbekannter Fehler ist aufgetreten.",
  },
  footer: {
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    about: "Über uns",
    copyright: "heicgo.com — Kostenloser HEIC zu JPG Konverter.",
  },
  seo: {
    homeTitle: "HEIC zu JPG oder PNG Konverter — Kostenlos, privat, kein Upload",
    homeDescription: "Konvertiere HEIC Fotos online zu JPG oder PNG. 100% privat. JPG-Ausgaben behalten EXIF-Daten.",
    privacyTitle: "Datenschutz — HEIC zu JPG Konverter",
    privacyDescription: "Datenschutzerklärung für heicgo.com. Alle Konvertierungen erfolgen lokal auf deinem Gerät.",
    termsTitle: "Nutzungsbedingungen — HEIC zu JPG Konverter",
    termsDescription: "Nutzungsbedingungen für heicgo.com.",
    aboutTitle: "Über uns — HEIC zu JPG Konverter",
    aboutDescription: "Über heicgo.com — ein kostenloser, privater HEIC zu JPG Konverter mit EXIF-Erhalt.",
    faqTitle: "FAQ — HEIC zu JPG Konverter",
    faqDescription: "Häufig gestellte Fragen zur HEIC zu JPG Konvertierung.",
    blogTitle: "Blog — HEIC zu JPG Konverter",
    blogDescription: "Tipps und Anleitungen zur HEIC Bildkonvertierung.",
  },
};

export default de;
