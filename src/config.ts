export const SITE = {
  url: "https://heicgo.com",
  name: "heicgo",
  tagline: "Free HEIC to JPG Converter",
};

// Replace with your actual AdSense publisher ID after approval
export const ADSENSE = {
  publisherId: "ca-pub-XXXXXXXXXXXXXX",
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
  defaultQuality: 0.92,
  defaultMaxWidth: 0, // 0 = original
  defaultOutputFormat: "jpeg" as const,
  maxConcurrent: 4,
};
