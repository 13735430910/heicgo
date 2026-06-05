import type { CollectionEntry } from "astro:content";
import type { Locale } from "./translations";
import { blogTranslations } from "./blog-translations";

type BlogPost = CollectionEntry<"blog">;

type Meta = { title: string; description: string };

const zhCNBlogTranslations: Record<string, Meta> = {
  "how-to-convert-heic-to-jpg": {
    title: "如何免费将 HEIC 转换为 JPG（无需上传）",
    description: "学习最快的 HEIC 转 JPG 方法。所有处理都在你的设备上完成，不需要上传照片。",
  },
  "what-is-heic": {
    title: "什么是 HEIC 文件？你需要知道的一切",
    description: "了解 HEIC 文件是什么、为什么 Apple 使用它，以及它与 JPEG 的区别。",
  },
  "preserve-exif-heic-conversion": {
    title: "HEIC 转 JPG 时如何保留 EXIF 数据",
    description: "大多数 HEIC 转换器会删除 GPS、拍摄时间等元数据。了解如何在转换时保留这些信息。",
  },
  "free-heic-converters-comparison": {
    title: "免费 HEIC 转换器对比（2025）",
    description: "我们对比了常见免费 HEIC 转 JPG 工具，重点查看隐私、EXIF 保留和批量转换能力。",
  },
  "heic-vs-jpeg-comparison": {
    title: "HEIC 与 JPEG 对比：画质、体积和兼容性",
    description: "并排比较 HEIC 和 JPEG 格式，了解文件体积、画质和使用场景差异。",
  },
  "open-heic-files-windows": {
    title: "如何在 Windows 10/11 打开 HEIC 文件（3 种免费方法）",
    description: "Windows 无法打开 HEIC 照片？这里有 3 种免费查看和转换方法。",
  },
  "batch-convert-heic": {
    title: "批量将 HEIC 转换为 JPG 或 PNG：完整指南（2026）",
    description: "学习如何一次转换多个 HEIC 文件，避免浏览器内存问题，并将结果打包为 ZIP。",
  },
  "heic-quality-loss-myth": {
    title: "HEIC 转 JPG 会损失画质吗？真实情况",
    description: "HEIC 转 JPEG 是否会降低画质？了解画质损失发生的条件以及如何避免。",
  },
  "convert-heic-to-jpg-iphone": {
    title: "如何在 iPhone 上将 HEIC 转换为 JPG（4 种方法）",
    description: "在 iPhone 上直接把 HEIC 照片转换为 JPEG，包括系统内置选项和免费应用方法。",
  },
  "heic-no-upload-privacy": {
    title: "无需上传将 HEIC 转 JPG：隐私优先指南",
    description: "为什么不应随意把 HEIC 照片上传到云端转换器，以及本地转换如何保护隐私。",
  },
  "heic-not-opening-pc": {
    title: "HEIC 文件无法在 PC 打开？5 个常见解决方法",
    description: "Windows HEIC 文件打不开时的排查指南，涵盖常见错误和兼容性问题。",
  },
  "why-are-iphone-photos-heic": {
    title: "为什么 iPhone 照片是 HEIC？Apple 格式说明",
    description: "了解 Apple 为什么切换到 HEIC、它如何节省存储空间，以及何时需要转回 JPEG。",
  },
  "heic-dark-windows-fix": {
    title: "HEIC 照片在 Windows 上变暗？原因和修复方法",
    description: "iPhone HEIC 照片在 PC 上显得过暗或发灰，通常与 HDR 色彩配置有关。",
  },
  "open-heic-files-mac": {
    title: "如何在 Mac 上打开和转换 HEIC 文件",
    description: "Mac 原生支持 HEIC，但部分应用仍不兼容。了解 macOS 上查看和转换 HEIC 的方法。",
  },
  "free-heic-converter-no-watermark": {
    title: "无水印免费 HEIC 转换器（2025 汇总）",
    description: "寻找不会加水印的免费 HEIC 转 JPG 工具？我们测试了多个常见选项。",
  },
  "iphone-photo-storage-guide": {
    title: "iPhone 照片占满空间？不丢照片释放容量的 10 种方法",
    description: "iPhone 存储空间不足？学习如何不删除珍贵照片也能释放大量空间。",
  },
  "image-format-comparison-jpeg-png-heic-webp": {
    title: "JPEG、PNG、HEIC、WebP 对比：应该使用哪种图片格式？",
    description: "全面比较四种主流图片格式，了解照片、网页图形、归档和分享分别适合什么格式。",
  },
  "compress-jpeg-without-losing-quality": {
    title: "如何在不明显损失画质的情况下压缩 JPEG 图片",
    description: "将 JPEG 文件体积减少 50-80%，并理解压缩、缩放和格式转换的区别。",
  },
  "transfer-photos-iphone-to-pc": {
    title: "如何将 iPhone 照片传到 PC：完整指南",
    description: "逐步了解把 iPhone 照片传到 Windows PC 的有线、无线和云端方法，并处理 HEIC 兼容问题。",
  },
  "free-online-image-editing-tools": {
    title: "5 个最好用的免费在线图片编辑工具（无需下载）",
    description: "无需安装软件即可编辑、缩放和转换图片，这些浏览器工具可替代基础图片处理流程。",
  },
  "reduce-photo-file-size-email": {
    title: "如何为邮件减小照片文件体积（控制在 10 MB 以下）",
    description: "邮件附件大小限制挡住照片？学习 5 种减小照片体积且保持观感的方法。",
  },
  "heic-to-png-conversion": {
    title: "HEIC 转 PNG：何时、为什么以及如何转换",
    description: "是否应该把 HEIC 转成 PNG 而不是 JPEG？了解 PNG 的适用场景、体积差异和隐私注意事项。",
  },
  "cloud-storage-vs-local-photos": {
    title: "照片云存储与本地存储：哪种更安全？",
    description: "iCloud、Google Photos 还是外置硬盘？从成本、隐私和可靠性比较照片存储方案。",
  },
  "understanding-image-file-formats": {
    title: "图片文件格式入门：HEIC、JPG、PNG、WebP 等格式说明",
    description: "被 .heic、.jpg、.png、.webp、.gif 和 .raw 搞混？这篇入门指南解释常见图片格式。",
  },
  "best-photo-management-tips-iphone": {
    title: "iPhone 用户的 10 个照片管理技巧（2025）",
    description: "厌倦混乱的 iPhone 相册？这些技巧可以帮助你整理、优化和管理照片。",
  },
};

const localizedMeta: Record<string, Record<string, Meta>> = {
  "zh-CN": zhCNBlogTranslations,
  ...blogTranslations,
};

export function getLocalizedBlogMeta(locale: Locale, post: BlogPost): Meta {
  if (locale === "en") {
    return { title: post.data.title, description: post.data.description };
  }
  return localizedMeta[locale]?.[post.id] ?? { title: post.data.title, description: post.data.description };
}

const tagLabels: Record<Locale, Record<string, string>> = {
  en: {},
  "zh-CN": {
    heic: "HEIC", jpg: "JPG", jpeg: "JPEG", png: "PNG", webp: "WebP", conversion: "格式转换", batch: "批量", tutorial: "教程", quality: "画质", comparison: "对比", windows: "Windows", mac: "Mac", iphone: "iPhone", ios: "iOS", transfer: "传输", formats: "图片格式", privacy: "隐私", security: "安全", storage: "存储", cloud: "云存储", compression: "压缩", email: "邮件", sharing: "分享", tools: "工具", editing: "编辑", free: "免费", photos: "照片", management: "管理", apple: "Apple", troubleshooting: "故障排查", color: "色彩", guide: "指南", beginners: "入门", converters: "转换器", format: "格式", exif: "EXIF",
  },
  de: {
    heic: "HEIC", jpg: "JPG", jpeg: "JPEG", png: "PNG", webp: "WebP", conversion: "Konvertierung", batch: "Stapelverarbeitung", tutorial: "Anleitung", quality: "Qualität", comparison: "Vergleich", windows: "Windows", mac: "Mac", iphone: "iPhone", ios: "iOS", transfer: "Übertragung", formats: "Bildformate", privacy: "Datenschutz", security: "Sicherheit", storage: "Speicher", cloud: "Cloud", compression: "Komprimierung", email: "E-Mail", sharing: "Teilen", tools: "Tools", editing: "Bearbeitung", free: "kostenlos", photos: "Fotos", management: "Verwaltung", apple: "Apple", troubleshooting: "Fehlerbehebung", color: "Farbe", guide: "Leitfaden", beginners: "Einsteiger", converters: "Konverter", format: "Format", exif: "EXIF",
  },
  ja: {
    heic: "HEIC", jpg: "JPG", jpeg: "JPEG", png: "PNG", webp: "WebP", conversion: "変換", batch: "一括処理", tutorial: "チュートリアル", quality: "画質", comparison: "比較", windows: "Windows", mac: "Mac", iphone: "iPhone", ios: "iOS", transfer: "転送", formats: "画像形式", privacy: "プライバシー", security: "セキュリティ", storage: "ストレージ", cloud: "クラウド", compression: "圧縮", email: "メール", sharing: "共有", tools: "ツール", editing: "編集", free: "無料", photos: "写真", management: "管理", apple: "Apple", troubleshooting: "トラブルシューティング", color: "色", guide: "ガイド", beginners: "初心者", converters: "変換ツール", format: "形式", exif: "EXIF",
  },
  ko: {
    heic: "HEIC", jpg: "JPG", jpeg: "JPEG", png: "PNG", webp: "WebP", conversion: "변환", batch: "일괄 처리", tutorial: "튜토리얼", quality: "품질", comparison: "비교", windows: "Windows", mac: "Mac", iphone: "iPhone", ios: "iOS", transfer: "전송", formats: "이미지 형식", privacy: "개인정보", security: "보안", storage: "저장 공간", cloud: "클라우드", compression: "압축", email: "이메일", sharing: "공유", tools: "도구", editing: "편집", free: "무료", photos: "사진", management: "관리", apple: "Apple", troubleshooting: "문제 해결", color: "색상", guide: "가이드", beginners: "초보자", converters: "변환기", format: "형식", exif: "EXIF",
  },
  fr: {
    heic: "HEIC", jpg: "JPG", jpeg: "JPEG", png: "PNG", webp: "WebP", conversion: "conversion", batch: "traitement par lots", tutorial: "tutoriel", quality: "qualité", comparison: "comparaison", windows: "Windows", mac: "Mac", iphone: "iPhone", ios: "iOS", transfer: "transfert", formats: "formats d'image", privacy: "confidentialité", security: "sécurité", storage: "stockage", cloud: "cloud", compression: "compression", email: "e-mail", sharing: "partage", tools: "outils", editing: "édition", free: "gratuit", photos: "photos", management: "gestion", apple: "Apple", troubleshooting: "dépannage", color: "couleur", guide: "guide", beginners: "débutants", converters: "convertisseurs", format: "format", exif: "EXIF",
  },
};

export const blogUi: Record<Locale, {
  title: string;
  description: string;
  allPosts: string;
  categories: Record<string, string>;
  posts: string;
  filteredByTag: string;
  clear: string;
  home: string;
  blog: string;
  related: string;
  tagsMatched: (count: number) => string;
  author: string;
  authorNote: string;
  published: string;
}> = {
  en: {
    title: "Blog",
    description: "Guides, tutorials, and tips about HEIC conversion, image formats, and photo management.",
    allPosts: "All Posts",
    categories: { conversion: "Conversion Guides", platform: "Platform Guides", formats: "Format Explained", tips: "Tips & Optimization", tools: "Privacy & Tools" },
    posts: "posts",
    filteredByTag: "Filtered by tag:",
    clear: "Clear",
    home: "Home",
    blog: "Blog",
    related: "Related Articles",
    tagsMatched: (count) => `${count} tag${count > 1 ? "s" : ""} matched`,
    author: "heicgo Editorial Team",
    authorNote: "Expert guides on HEIC conversion, image formats, and photo management.",
    published: "Published",
  },
  "zh-CN": {
    title: "博客",
    description: "关于 HEIC 转换、图片格式和照片管理的指南、教程与对比。",
    allPosts: "全部文章",
    categories: { conversion: "转换指南", platform: "平台指南", formats: "格式说明", tips: "技巧与优化", tools: "隐私与工具" },
    posts: "篇文章",
    filteredByTag: "按标签筛选：",
    clear: "清除",
    home: "首页",
    blog: "博客",
    related: "相关文章",
    tagsMatched: (count) => `匹配 ${count} 个标签`,
    author: "heicgo 编辑团队",
    authorNote: "专注 HEIC 转换、图片格式和照片管理的实用指南。",
    published: "发布于",
  },
  de: {
    title: "Blog",
    description: "Anleitungen, Tipps und Vergleiche zu HEIC-Konvertierung, Bildformaten und Fotoverwaltung.",
    allPosts: "Alle Beiträge",
    categories: { conversion: "Konvertierungsanleitungen", platform: "Plattform-Anleitungen", formats: "Formate erklärt", tips: "Tipps & Optimierung", tools: "Datenschutz & Tools" },
    posts: "Beiträge",
    filteredByTag: "Gefiltert nach Tag:",
    clear: "Zurücksetzen",
    home: "Start",
    blog: "Blog",
    related: "Verwandte Artikel",
    tagsMatched: (count) => `${count} Tag${count > 1 ? "s" : ""} passend`,
    author: "heicgo Redaktion",
    authorNote: "Praxisnahe Leitfäden zu HEIC-Konvertierung, Bildformaten und Fotoverwaltung.",
    published: "Veröffentlicht",
  },
  ja: {
    title: "ブログ",
    description: "HEIC変換、画像形式、写真管理に関するガイド、チュートリアル、比較記事。",
    allPosts: "すべての記事",
    categories: { conversion: "変換ガイド", platform: "プラットフォーム別ガイド", formats: "形式の解説", tips: "ヒントと最適化", tools: "プライバシーとツール" },
    posts: "記事",
    filteredByTag: "タグで絞り込み：",
    clear: "解除",
    home: "ホーム",
    blog: "ブログ",
    related: "関連記事",
    tagsMatched: (count) => `${count}件のタグが一致`,
    author: "heicgo編集チーム",
    authorNote: "HEIC変換、画像形式、写真管理に関する実用ガイド。",
    published: "公開日",
  },
  ko: {
    title: "블로그",
    description: "HEIC 변환, 이미지 형식, 사진 관리에 대한 가이드, 튜토리얼, 비교 글입니다.",
    allPosts: "모든 글",
    categories: { conversion: "변환 가이드", platform: "플랫폼 가이드", formats: "형식 설명", tips: "팁과 최적화", tools: "개인정보와 도구" },
    posts: "개 글",
    filteredByTag: "태그로 필터링:",
    clear: "해제",
    home: "홈",
    blog: "블로그",
    related: "관련 글",
    tagsMatched: (count) => `${count}개 태그 일치`,
    author: "heicgo 편집팀",
    authorNote: "HEIC 변환, 이미지 형식, 사진 관리에 대한 실용 가이드.",
    published: "게시일",
  },
  fr: {
    title: "Blog",
    description: "Guides, tutoriels et comparatifs sur la conversion HEIC, les formats d'image et la gestion des photos.",
    allPosts: "Tous les articles",
    categories: { conversion: "Guides de conversion", platform: "Guides par plateforme", formats: "Formats expliqués", tips: "Astuces & optimisation", tools: "Confidentialité & outils" },
    posts: "articles",
    filteredByTag: "Filtré par tag :",
    clear: "Effacer",
    home: "Accueil",
    blog: "Blog",
    related: "Articles liés",
    tagsMatched: (count) => `${count} tag${count > 1 ? "s" : ""} correspondant${count > 1 ? "s" : ""}`,
    author: "Équipe éditoriale heicgo",
    authorNote: "Guides pratiques sur la conversion HEIC, les formats d'image et la gestion photo.",
    published: "Publié",
  },
};

function tagLabel(locale: Locale, tag: string): string {
  return tagLabels[locale]?.[tag] ?? tag;
}

export function localizedTags(locale: Locale, tags: string[] = []): string[] {
  return tags.map((tag) => tagLabel(locale, tag));
}

type LocalizedArticle = {
  intro: string[];
  sections: Array<{ title: string; paragraphs?: string[]; bullets?: string[] }>;
  cta: string;
};

const articleCopy: Record<Exclude<Locale, "en">, {
  list: string;
  overviewTitle: string;
  workflowTitle: string;
  privacyTitle: string;
  checklistTitle: string;
  nextTitle: string;
  overview: (meta: Meta, tags: string) => string[];
  workflow: (meta: Meta) => string[];
  privacy: string[];
  checklist: string[];
  next: (meta: Meta) => string[];
  defaultAdvice: string[];
  tagAdvice: Record<string, string>;
}> = {
  "zh-CN": {
    list: "、",
    overviewTitle: "要点概览",
    workflowTitle: "推荐做法",
    privacyTitle: "隐私与元数据",
    checklistTitle: "操作前检查清单",
    nextTitle: "下一步",
    overview: (meta, tags) => [
      `本文主题是「${meta.title}」。它围绕 ${tags} 展开，帮助你理解什么时候需要转换、如何选择格式，以及怎样避免兼容性和隐私问题。`,
      meta.description,
    ],
    workflow: () => [
      "先确认最终用途：网页上传、邮件分享、Windows 打开、打印，还是后期编辑。",
      "普通照片优先选择 JPG；截图、文字较多的图片或后续编辑素材可选择 PNG。",
      "如果需要保留拍摄时间、相机型号、GPS 或方向信息，请选择 JPG 并启用 EXIF 保留。",
      "批量处理时先用少量文件测试，再分批转换大文件夹。",
    ],
    privacy: [
      "照片常包含地点、时间、设备型号甚至工作内容。把文件上传到未知转换器，会让这些信息脱离你的控制。",
      "heicgo 的转换在浏览器本地进行。文件不会上传到服务器，转换结果也由浏览器在本机生成。",
    ],
    checklist: ["确认目标平台支持的格式。", "检查是否需要 EXIF 元数据。", "大批量文件分组转换，避免浏览器内存不足。", "下载后随机打开几张结果图确认质量。"],
    next: () => ["如果你需要马上处理文件，回到转换器页面，选择输出格式并拖入 HEIC 或 HEIF 文件即可。"],
    defaultAdvice: ["保持原始 HEIC 作为备份。", "转换后的 JPG/PNG 用于分享和兼容场景。", "重要照片转换后检查日期和方向。"],
    tagAdvice: {
      windows: "Windows 用户可先安装 HEIF 扩展；如果目标软件仍不支持，转换为 JPG 最稳妥。",
      iphone: "在 iPhone 上可以通过相机设置减少后续转换需求，但已有 HEIC 文件仍可按需转换。",
      batch: "批量转换时建议每组 50-100 张，完成后下载 ZIP 并清空列表。",
      png: "PNG 是无损像素输出，适合截图和文档类图片，但文件通常明显更大。",
      privacy: "涉及家庭、证件、票据或工作照片时，优先使用无需上传的本地转换。",
      compression: "压缩和缩放是两件事：缩放改变尺寸，压缩改变编码体积。",
      storage: "存储优化应保留至少一份原图备份，再创建兼容格式副本。",
      exif: "EXIF 对照片整理很重要，转换前确认是否需要保留地点和拍摄时间。",
    },
  },
  de: {
    list: ", ",
    overviewTitle: "Kurzüberblick",
    workflowTitle: "Empfohlener Ablauf",
    privacyTitle: "Datenschutz und Metadaten",
    checklistTitle: "Checkliste vor der Konvertierung",
    nextTitle: "Nächster Schritt",
    overview: (meta, tags) => [
      `Dieser Artikel behandelt „${meta.title}“ und ordnet das Thema in ${tags} ein. Er hilft dir, das passende Ausgabeformat zu wählen und typische Kompatibilitätsprobleme zu vermeiden.`,
      meta.description,
    ],
    workflow: () => [
      "Kläre zuerst den Zweck: Website-Upload, E-Mail, Windows, Druck oder spätere Bearbeitung.",
      "Für normale Fotos ist JPG meist richtig; für Screenshots, Text und verlustfreie Bearbeitung passt PNG besser.",
      "Wenn Datum, Kamera, GPS oder Ausrichtung wichtig sind, wähle JPG und aktiviere EXIF-Erhalt.",
      "Teste bei großen Stapeln zunächst wenige Dateien und verarbeite große Ordner in Gruppen.",
    ],
    privacy: [
      "Fotos enthalten oft Orte, Zeiten, Gerätemodelle oder berufliche Inhalte. Ein Upload zu unbekannten Diensten gibt diese Informationen aus der Hand.",
      "heicgo verarbeitet Dateien lokal im Browser. Die Originale werden nicht hochgeladen und die Ergebnisse entstehen auf deinem Gerät.",
    ],
    checklist: ["Zielformat des Empfängers prüfen.", "Entscheiden, ob EXIF erhalten bleiben muss.", "Große Stapel aufteilen, damit der Browser stabil bleibt.", "Nach dem Download einige Dateien öffnen und Qualität prüfen."],
    next: () => ["Wenn du Dateien konvertieren möchtest, öffne den Konverter, wähle das Ausgabeformat und ziehe HEIC- oder HEIF-Dateien hinein."],
    defaultAdvice: ["Original-HEIC-Dateien als Backup behalten.", "JPG oder PNG für Weitergabe und Kompatibilität nutzen.", "Bei wichtigen Bildern Datum und Ausrichtung prüfen."],
    tagAdvice: {
      windows: "Unter Windows helfen HEIF-Erweiterungen; für maximale Kompatibilität ist JPG die sicherste Ausgabe.",
      iphone: "Auf dem iPhone können Kameraeinstellungen künftige HEIC-Dateien vermeiden, bestehende Dateien lassen sich separat konvertieren.",
      batch: "Bei Batch-Konvertierung sind Gruppen von 50-100 Dateien sinnvoll; danach ZIP herunterladen und Liste leeren.",
      png: "PNG ist verlustfrei und gut für Screenshots, erzeugt aber deutlich größere Dateien.",
      privacy: "Für Familienfotos, Belege, Dokumente und Arbeitsbilder ist lokale Konvertierung ohne Upload vorzuziehen.",
      compression: "Komprimierung und Größenänderung sind verschieden: Größe ändert Pixelmaße, Komprimierung die Kodierung.",
      storage: "Für Speicheroptimierung Originale sichern und kompatible Kopien getrennt ablegen.",
      exif: "EXIF ist für Fotoorganisation wichtig; prüfe vor der Konvertierung GPS und Aufnahmedatum.",
    },
  },
  ja: {
    list: "、",
    overviewTitle: "概要",
    workflowTitle: "おすすめの手順",
    privacyTitle: "プライバシーとメタデータ",
    checklistTitle: "変換前チェックリスト",
    nextTitle: "次のステップ",
    overview: (meta, tags) => [
      `この記事では「${meta.title}」を扱い、${tags} に関する判断ポイントを整理します。形式選び、互換性、プライバシー面で迷いやすい点を確認できます。`,
      meta.description,
    ],
    workflow: () => [
      "まず用途を確認します。Webアップロード、メール、Windows、印刷、後編集のどれかで最適形式が変わります。",
      "通常の写真はJPG、スクリーンショットや文字入り画像、ロスレス編集にはPNGが向いています。",
      "撮影日時、カメラ名、GPS、向きが重要ならJPGを選び、EXIF保持を有効にします。",
      "大量変換では少数でテストしてから、フォルダを分割して処理します。",
    ],
    privacy: [
      "写真には場所、時刻、端末情報、仕事上の情報が含まれることがあります。知らない変換サービスへのアップロードは慎重に判断すべきです。",
      "heicgoはブラウザ内でローカル処理します。元ファイルはアップロードされず、結果もデバイス上で生成されます。",
    ],
    checklist: ["相手先が受け付ける形式を確認する。", "EXIFメタデータが必要か判断する。", "大量ファイルは小分けにして変換する。", "保存後に数枚開いて品質と向きを確認する。"],
    next: () => ["すぐ変換する場合は、コンバーターで出力形式を選び、HEICまたはHEIFファイルをドラッグしてください。"],
    defaultAdvice: ["元のHEICはバックアップとして残す。", "共有や互換性にはJPG/PNGのコピーを使う。", "重要な写真は日付と向きを確認する。"],
    tagAdvice: {
      windows: "WindowsではHEIF拡張機能が役立ちますが、確実な互換性にはJPG変換が安全です。",
      iphone: "iPhoneのカメラ設定で今後の形式を変えられますが、既存HEICは必要に応じて変換します。",
      batch: "一括変換は50-100枚ずつ行い、ZIPを保存してから次のグループへ進むと安定します。",
      png: "PNGはロスレスでスクリーンショットに向きますが、ファイルサイズは大きくなります。",
      privacy: "家族写真、領収書、書類、仕事画像はアップロード不要のローカル変換が適しています。",
      compression: "圧縮とリサイズは別物です。リサイズは画素数、圧縮はエンコード効率を変えます。",
      storage: "ストレージ整理では原本を残し、用途別の互換コピーを作るのが安全です。",
      exif: "EXIFは写真整理に重要です。変換前に位置情報と撮影日時の必要性を確認します。",
    },
  },
  ko: {
    list: ", ",
    overviewTitle: "핵심 요약",
    workflowTitle: "권장 절차",
    privacyTitle: "개인정보와 메타데이터",
    checklistTitle: "변환 전 체크리스트",
    nextTitle: "다음 단계",
    overview: (meta, tags) => [
      `이 글은 「${meta.title}」을 다루며 ${tags} 관련 선택 기준을 정리합니다. 출력 형식, 호환성, 개인정보 문제를 함께 판단할 수 있습니다.`,
      meta.description,
    ],
    workflow: () => [
      "먼저 용도를 확인하세요. 웹 업로드, 이메일, Windows, 인쇄, 후편집에 따라 형식이 달라집니다.",
      "일반 사진은 JPG가 적합하고, 스크린샷이나 텍스트 이미지, 무손실 편집은 PNG가 적합합니다.",
      "촬영 시간, 카메라, GPS, 방향 정보가 필요하면 JPG와 EXIF 보존을 선택하세요.",
      "대량 변환은 몇 개로 먼저 테스트한 뒤 폴더를 나누어 처리하세요.",
    ],
    privacy: [
      "사진에는 위치, 시간, 기기 정보, 업무 내용이 포함될 수 있습니다. 알 수 없는 변환 서비스에 업로드하는 것은 위험할 수 있습니다.",
      "heicgo는 브라우저에서 로컬로 처리합니다. 원본은 업로드되지 않고 결과도 기기에서 생성됩니다.",
    ],
    checklist: ["대상 서비스가 지원하는 형식을 확인하세요.", "EXIF 메타데이터가 필요한지 결정하세요.", "대량 파일은 나누어 변환하세요.", "다운로드 후 몇 장을 열어 품질과 방향을 확인하세요."],
    next: () => ["바로 변환하려면 변환기에서 출력 형식을 선택하고 HEIC 또는 HEIF 파일을 끌어오세요."],
    defaultAdvice: ["원본 HEIC는 백업으로 보관하세요.", "공유와 호환성에는 JPG/PNG 사본을 사용하세요.", "중요한 사진은 날짜와 방향을 확인하세요."],
    tagAdvice: {
      windows: "Windows에서는 HEIF 확장 기능이 도움이 되지만, 가장 넓은 호환성은 JPG 변환입니다.",
      iphone: "iPhone 카메라 설정으로 이후 사진 형식을 바꿀 수 있지만 기존 HEIC는 별도로 변환해야 합니다.",
      batch: "일괄 변환은 50-100개씩 처리하고 ZIP을 저장한 뒤 목록을 비우는 것이 안정적입니다.",
      png: "PNG는 무손실이라 스크린샷에 좋지만 파일 크기가 크게 늘어납니다.",
      privacy: "가족 사진, 영수증, 문서, 업무 이미지는 업로드 없는 로컬 변환이 더 적합합니다.",
      compression: "압축과 크기 조정은 다릅니다. 크기 조정은 픽셀 수, 압축은 인코딩을 바꿉니다.",
      storage: "저장 공간을 정리할 때는 원본을 보관하고 호환용 복사본을 따로 만드세요.",
      exif: "EXIF는 사진 정리에 중요하므로 변환 전에 위치와 촬영 시간이 필요한지 확인하세요.",
    },
  },
  fr: {
    list: ", ",
    overviewTitle: "Résumé",
    workflowTitle: "Méthode recommandée",
    privacyTitle: "Confidentialité et métadonnées",
    checklistTitle: "Checklist avant conversion",
    nextTitle: "Étape suivante",
    overview: (meta, tags) => [
      `Cet article traite de « ${meta.title} » et replace le sujet dans ${tags}. Il aide à choisir le bon format et à éviter les problèmes de compatibilité ou de confidentialité.`,
      meta.description,
    ],
    workflow: () => [
      "Définissez l'usage final : upload web, e-mail, Windows, impression ou retouche.",
      "Pour les photos ordinaires, JPG est généralement le meilleur choix; pour captures et images avec texte, PNG est plus adapté.",
      "Si la date, l'appareil, le GPS ou l'orientation comptent, choisissez JPG avec conservation EXIF.",
      "Pour de grands lots, testez quelques fichiers puis convertissez par groupes.",
    ],
    privacy: [
      "Les photos peuvent contenir lieux, dates, modèle d'appareil ou informations professionnelles. Les uploader vers un service inconnu réduit votre contrôle.",
      "heicgo traite les fichiers localement dans le navigateur. Les originaux ne sont pas envoyés et les résultats sont générés sur votre appareil.",
    ],
    checklist: ["Vérifier le format accepté par la destination.", "Décider si les métadonnées EXIF sont nécessaires.", "Diviser les grands lots pour préserver la mémoire du navigateur.", "Ouvrir quelques résultats pour contrôler qualité et orientation."],
    next: () => ["Pour convertir maintenant, ouvrez le convertisseur, choisissez le format de sortie et déposez vos fichiers HEIC ou HEIF."],
    defaultAdvice: ["Conserver les HEIC originaux comme sauvegarde.", "Utiliser JPG ou PNG pour le partage et la compatibilité.", "Vérifier date et orientation pour les images importantes."],
    tagAdvice: {
      windows: "Sous Windows, les extensions HEIF peuvent aider; pour une compatibilité maximale, JPG reste le choix le plus sûr.",
      iphone: "Sur iPhone, les réglages de l'appareil photo peuvent limiter les futurs HEIC, mais les fichiers existants doivent être convertis séparément.",
      batch: "Pour les lots, traitez 50 à 100 fichiers à la fois, téléchargez le ZIP puis videz la liste.",
      png: "PNG est sans perte et excellent pour les captures, mais les fichiers sont beaucoup plus volumineux.",
      privacy: "Pour photos familiales, reçus, documents et images de travail, privilégiez une conversion locale sans upload.",
      compression: "Compression et redimensionnement sont différents : l'un change l'encodage, l'autre les dimensions.",
      storage: "Pour optimiser le stockage, gardez les originaux et créez des copies compatibles séparées.",
      exif: "EXIF est utile pour classer les photos; vérifiez avant conversion si GPS et date doivent être conservés.",
    },
  },
};

export function getLocalizedBlogArticle(locale: Locale, post: BlogPost): LocalizedArticle | null {
  if (locale === "en") return null;
  const copy = articleCopy[locale];
  const meta = getLocalizedBlogMeta(locale, post);
  const tags = localizedTags(locale, post.data.tags ?? []);
  const tagText = tags.length ? tags.join(copy.list) : meta.title;
  const advice = (post.data.tags ?? [])
    .map((tag) => copy.tagAdvice[tag])
    .filter(Boolean)
    .slice(0, 4);
  const bullets = advice.length ? advice : copy.defaultAdvice;

  return {
    intro: copy.overview(meta, tagText),
    sections: [
      { title: copy.overviewTitle, bullets },
      { title: copy.workflowTitle, bullets: copy.workflow(meta) },
      { title: copy.privacyTitle, paragraphs: copy.privacy },
      { title: copy.checklistTitle, bullets: copy.checklist },
      { title: copy.nextTitle, paragraphs: copy.next(meta) },
    ],
    cta: meta.title,
  };
}
