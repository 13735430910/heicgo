import type { Translation } from "../translations";

const ja: Translation = {
  siteTitle: "HEICからJPGまたはPNGへ変換 — 無料、プライベート、アップロード不要",
  siteDescription:
    "HEIC写真をオンラインでJPGまたはPNGに変換。100%プライベート — ファイルはデバイスから出ません。JPG出力ではEXIFデータを保持できます。",
  nav: { home: "ホーム", blog: "ブログ", faq: "FAQ", about: "概要", contact: "お問い合わせ" },
  hero: { title: "HEICからJPGまたはPNGへ変換", subtitle: "無料 · プライベート · アップロード不要" },
  dropZone: {
    title: "HEICファイルをここにドロップ",
    browse: "ファイルを選択",
    supported: "HEIC、HEIF対応",
    maxSize: "1ファイル最大50MB",
  },
  options: {
    outputFormat: "出力形式",
    outputFormatOptions: {
      jpeg: "JPG",
      png: "PNG",
    },
    quality: "画質",
    maxWidth: "最大幅",
    preserveExif: "EXIFデータを保持",
    autoRotate: "自動回転",
    smallerFile: "小さいファイル",
    betterQuality: "高画質",
    pngExifNote: "PNG出力はロスレスですが、EXIFメタデータは保持されません。",
    maxWidthOptions: {
      original: "オリジナル",
      "1920": "1920px (フルHD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "変換を開始",
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
    pending: "待機中",
    converting: "変換中",
    done: "完了",
    error: "エラー",
    remove: "ファイルを削除",
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
    homeTitle: "HEICからJPGまたはPNGへ変換 — 無料、プライベート、アップロード不要",
    homeDescription: "HEIC写真をオンラインでJPGまたはPNGに変換。100%プライベート。JPG出力ではEXIFデータを保持できます。",
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
