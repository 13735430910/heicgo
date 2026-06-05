export interface Translation {
  siteTitle: string;
  siteDescription: string;
  nav: {
    home: string;
    blog: string;
    faq: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  dropZone: {
    title: string;
    browse: string;
    supported: string;
    maxSize: string;
  };
  options: {
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
  actions: {
    convert: string;
    converting: string;
    download: string;
    downloadAll: string;
    clear: string;
  };
  results: {
    title: string;
    originalSize: string;
    convertedSize: string;
    saved: string;
    exifPreserved: string;
    noExif: string;
    pending: string;
    converting: string;
    done: string;
    error: string;
    remove: string;
  };
  errors: {
    noFiles: string;
    unsupportedFormat: string;
    fileTooLarge: string;
    conversionFailed: string;
    unknown: string;
  };
  footer: {
    privacy: string;
    terms: string;
    about: string;
    copyright: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    faqTitle: string;
    faqDescription: string;
    blogTitle: string;
    blogDescription: string;
  };
}

export type Locale = "en" | "zh-CN" | "de" | "ja" | "ko" | "fr";

/** Locales that get full localized content pages including blog. */
export const FULL_LOCALES: Locale[] = ["en", "zh-CN", "de", "ja", "ko", "fr"];

/** All supported locales for UI */
export const ALL_LOCALES: Locale[] = ["en", "zh-CN", "de", "ja", "ko", "fr"];
