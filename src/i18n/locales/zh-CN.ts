import type { Translation } from "../translations";

const zhCN: Translation = {
  siteTitle: "HEIC 转 JPG 或 PNG 转换器 — 免费、私密、无需上传",
  siteDescription:
    "在线免费将 HEIC 照片转换为 JPG 或 PNG。100% 保护隐私 — 文件不会离开您的设备。JPG 输出可保留 EXIF 元数据。",
  nav: {
    home: "首页",
    blog: "博客",
    faq: "常见问题",
    about: "关于",
    contact: "联系我们",
  },
  hero: {
    title: "HEIC 转 JPG 或 PNG 转换器",
    subtitle: "免费 · 私密 · 无需上传",
  },
  dropZone: {
    title: "将 HEIC 文件拖到此处",
    browse: "选择文件",
    supported: "支持 HEIC、HEIF 格式",
    maxSize: "单文件最大 50MB",
  },
  options: {
    outputFormat: "输出格式",
    outputFormatOptions: {
      jpeg: "JPG",
      png: "PNG",
    },
    quality: "画质",
    maxWidth: "最大宽度",
    preserveExif: "保留 EXIF 数据",
    autoRotate: "自动旋转",
    smallerFile: "文件更小",
    betterQuality: "画质更好",
    pngExifNote: "PNG 为无损输出，但不会保留 EXIF 元数据。",
    maxWidthOptions: {
      original: "原始尺寸",
      "1920": "1920px（全高清）",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "开始转换",
    converting: "转换中...",
    download: "下载",
    downloadAll: "全部下载 (ZIP)",
    clear: "清空",
  },
  results: {
    title: "转换结果",
    originalSize: "原始大小",
    convertedSize: "转换后",
    saved: "节省",
    exifPreserved: "EXIF 已保留",
    noExif: "无 EXIF 数据",
    pending: "等待中",
    converting: "转换中",
    done: "完成",
    error: "错误",
    remove: "移除文件",
  },
  errors: {
    noFiles: "请至少选择一个文件。",
    unsupportedFormat: "不支持的文件格式。请使用 HEIC 或 HEIF 文件。",
    fileTooLarge: "文件过大，最大支持 50MB。",
    conversionFailed: "转换失败，请重试。",
    unknown: "发生未知错误。",
  },
  footer: {
    privacy: "隐私政策",
    terms: "使用条款",
    about: "关于",
    copyright: "heicgo.com — 免费在线 HEIC 转 JPG 转换器。",
  },
  seo: {
    homeTitle: "HEIC 转 JPG 或 PNG 转换器 — 免费、私密、无需上传",
    homeDescription:
      "在线免费将 HEIC 照片转换为 JPG 或 PNG。100% 保护隐私 — 文件不会离开您的设备。支持批量转换、ZIP 下载，JPG 输出可保留 EXIF。",
    privacyTitle: "隐私政策 — HEIC 转 JPG 转换器",
    privacyDescription:
      "heicgo.com 的隐私政策。了解我们如何处理您的数据 — 所有转换均在您的设备本地完成。",
    termsTitle: "使用条款 — HEIC 转 JPG 转换器",
    termsDescription: "heicgo.com 的使用条款。",
    aboutTitle: "关于 — HEIC 转 JPG 转换器",
    aboutDescription:
      "关于 heicgo.com — 免费、私密的 HEIC 转 JPG 转换器，保留 EXIF 元数据。无需上传，无需注册。",
    faqTitle: "常见问题 — HEIC 转 JPG 转换器",
    faqDescription:
      "关于 HEIC 转 JPG 的常见问题。了解 EXIF 保留、批量转换、文件隐私等。",
    blogTitle: "博客 — HEIC 转 JPG 转换器",
    blogDescription:
      "关于 HEIC 图片转换的技巧、指南和对比。了解如何打开、转换和管理 HEIC 文件。",
  },
};

export default zhCN;
