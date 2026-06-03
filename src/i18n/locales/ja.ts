import type { Translation } from "../translations";

const ja: Translation = {
  siteTitle: "HEICからJPGへ変換 — 無料、プライベート、アップロード不要",
  siteDescription:
    "HEIC写真をオンラインでJPGに変換。100%プライベート — ファイルはデバイスから出ません。EXIFデータを保持。",
  nav: { home: "ホーム", blog: "ブログ", faq: "FAQ", about: "概要", contact: "お問い合わせ" },
  hero: { title: "HEICからJPGへ変換", subtitle: "無料 · プライベート · アップロード不要" },
  dropZone: {
    title: "HEICファイルをここにドロップ",
    browse: "ファイルを選択",
    supported: "HEIC、HEIF対応",
    maxSize: "1ファイル最大50MB",
  },
  options: {
    quality: "画質",
    maxWidth: "最大幅",
    preserveExif: "EXIFデータを保持",
    autoRotate: "自動回転",
    maxWidthOptions: {
      original: "オリジナル",
      "1920": "1920px (フルHD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "JPGに変換",
    converting: "変換中...",
    download: "ダウンロード",
    downloadAll: "すべてダウンロード (ZIP)",
    clear: "クリア",
  },
  results: {
    title: "変換結果",
    originalSize: "オリジナル",
    convertedSize: "変換後",
    saved: "削減",
    exifPreserved: "EXIF保持",
    noExif: "EXIFデータなし",
  },
  errors: {
    noFiles: "少なくとも1つのファイルを選択してください。",
    unsupportedFormat: "未対応の形式です。HEICまたはHEIFファイルを使用してください。",
    fileTooLarge: "が大きすぎます。最大サイズは50MBです。",
    conversionFailed: "変換に失敗しました。再試行してください。",
    unknown: "不明なエラーが発生しました。",
  },
  footer: {
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    about: "概要",
    copyright: "heicgo.com — 無料オンラインHEIC to JPG変換ツール。",
  },
  seo: {
    homeTitle: "HEICからJPGへ変換 — 無料、プライベート、アップロード不要",
    homeDescription: "HEIC写真をオンラインでJPGに変換。100%プライベート。EXIFデータを保持。",
    privacyTitle: "プライバシーポリシー — HEICからJPGへ変換",
    privacyDescription: "heicgo.comのプライバシーポリシー。すべての変換はデバイス上でローカルに処理されます。",
    termsTitle: "利用規約 — HEICからJPGへ変換",
    termsDescription: "heicgo.comの利用規約。",
    aboutTitle: "概要 — HEICからJPGへ変換",
    aboutDescription: "heicgo.comについて — EXIFを保持する無料のプライベートHEIC to JPGコンバーター。",
    faqTitle: "FAQ — HEICからJPGへ変換",
    faqDescription: "HEICからJPGへの変換に関するよくある質問。",
    blogTitle: "ブログ — HEICからJPGへ変換",
    blogDescription: "HEIC画像変換のヒントとガイド。",
  },
};

export default ja;
