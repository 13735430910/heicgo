export const SITE = {
  url: "https://heicgo.com",
  name: "heicgo",
  tagline: "Free HEIC to JPG Converter",
};

export const ADSENSE = {
  clientId: "ca-pub-XXXXXXXXXXXXXX",
  slots: {
    converterTop: "",
    converterBottom: "",
    blogInContent: "",
    blogFooter: "",
  },
};

export const CONVERSION = {
  maxFileSize: 50 * 1024 * 1024, // 50MB
  supportedFormats: [".heic", ".heif"],
  supportedMimeTypes: ["image/heic", "image/heif", "image/heic-sequence"],
  defaultQuality: 0.92,
  defaultMaxWidth: 0, // 0 = original
  maxConcurrent: 4, // parallel conversions
};
