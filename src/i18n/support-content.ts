import type { Locale } from "./translations";

export interface SupportContent {
  about: {
    title: string;
    eyebrow: string;
    intro: string;
    missionTitle: string;
    mission: string[];
    differenceTitle: string;
    differences: Array<{ title: string; body: string }>;
    workflowTitle: string;
    workflow: Array<{ title: string; body: string }>;
    technologyTitle: string;
    technology: Array<{ title: string; body: string }>;
    contactTitle: string;
    contactBody: string;
  };
  contact: {
    title: string;
    description: string;
    cards: Array<{ title: string; email: string; body: string }>;
    responseTitle: string;
    responseBody: string;
  };
  faq: {
    title: string;
    description: string;
    items: Array<{ q: string; a: string }>;
  };
}

export const supportContent: Record<Locale, SupportContent> = {
  en: {
    about: {
      title: "About heicgo",
      eyebrow: "Private image conversion for iPhone photos",
      intro: "heicgo is a browser-based HEIC converter for people who need iPhone photos to work everywhere without uploading private files to a server.",
      missionTitle: "Our mission",
      mission: [
        "iPhone users often need to convert HEIC photos to JPG or PNG for Windows, websites, email, printing, and older editing software.",
        "Most online converters solve compatibility by asking users to upload personal photos. heicgo takes the opposite approach: conversion runs locally in your browser, with no account, no upload queue, and no server-side image storage.",
      ],
      differenceTitle: "Why heicgo is different",
      differences: [
        { title: "Privacy-first", body: "Your original HEIC files and converted images stay on your device." },
        { title: "EXIF-aware JPG output", body: "JPG conversion can preserve GPS, camera model, timestamps, and orientation metadata." },
        { title: "JPG and PNG choices", body: "Use JPG for compatibility and PNG for lossless screenshot or editing workflows." },
        { title: "Batch friendly", body: "Convert multiple files and download successful results as one ZIP archive." },
      ],
      workflowTitle: "How it works",
      workflow: [
        { title: "Read locally", body: "The browser reads the selected HEIC or HEIF file directly from your device." },
        { title: "Decode safely", body: "Safari can use native HEIC decoding; other browsers use a WebAssembly decoder." },
        { title: "Process with Canvas", body: "Optional resizing and rotation are applied before exporting the selected output format." },
        { title: "Download results", body: "Converted files are created as local browser blobs and downloaded by the user." },
      ],
      technologyTitle: "Technology",
      technology: [
        { title: "Frontend", body: "Astro, Preact, and Tailwind CSS keep the site fast and static." },
        { title: "Conversion", body: "heic2any, browser image APIs, Canvas, and JSZip power local batch conversion." },
        { title: "Metadata", body: "exifr and piexifjs handle EXIF extraction and JPG metadata injection." },
        { title: "Hosting", body: "Cloudflare Pages serves the static site globally." },
      ],
      contactTitle: "Contact",
      contactBody: "Questions or feedback? Email hello@heicgo.com.",
    },
    contact: {
      title: "Contact Us",
      description: "We welcome feedback, bug reports, privacy questions, and partnership inquiries.",
      cards: [
        { title: "General inquiries", email: "hello@heicgo.com", body: "Questions about the tool, content, or website." },
        { title: "Bug reports", email: "bugs@heicgo.com", body: "Report conversion issues, browser problems, or layout bugs." },
        { title: "Partnerships", email: "partner@heicgo.com", body: "Product, content, or advertising partnerships." },
        { title: "Privacy", email: "privacy@heicgo.com", body: "Questions about data handling, cookies, or advertising disclosures." },
      ],
      responseTitle: "Response time",
      responseBody: "We typically respond within 24-48 hours on business days. For bugs, include your browser, operating system, file type, and steps to reproduce the issue.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers about privacy, HEIC conversion, EXIF metadata, PNG output, batch downloads, and browser support.",
      items: [
        { q: "Is heicgo really free?", a: "Yes. heicgo is free to use with no account, no watermark, and no fixed conversion limit." },
        { q: "Are my photos uploaded to a server?", a: "No. Conversion happens in your browser. The original HEIC files and converted images never leave your device." },
        { q: "Can I convert HEIC to PNG?", a: "Yes. Choose PNG in the output format control. PNG is lossless and best for screenshots, text-heavy images, and editing workflows." },
        { q: "Does conversion preserve EXIF metadata?", a: "JPG output can preserve supported EXIF metadata including GPS, date, camera model, and orientation. PNG output is treated as lossless pixel output and does not preserve EXIF." },
        { q: "What is the maximum file size?", a: "Each file can be up to 50 MB. Very large batches may use significant browser memory, so split hundreds of files into smaller groups." },
        { q: "Which browsers are supported?", a: "Modern Safari, Chrome, Firefox, and Edge are supported. Safari can use native HEIC decoding; other browsers use WebAssembly." },
        { q: "Can I batch convert multiple files?", a: "Yes. Select or drop multiple HEIC or HEIF files, convert them together, then download individual results or one ZIP archive." },
        { q: "What quality setting should I use?", a: "For JPG, 90-95% is a good balance for photos. Use 100% for maximum quality or 60-80% when smaller files matter more." },
      ],
    },
  },
  "zh-CN": {
    about: {
      title: "关于 heicgo",
      eyebrow: "为 iPhone 照片设计的私密图片转换工具",
      intro: "heicgo 是一个浏览器端 HEIC 转换工具，让 iPhone 照片无需上传服务器也能转换为通用格式。",
      missionTitle: "我们的目标",
      mission: [
        "很多 iPhone 用户需要把 HEIC 照片转换为 JPG 或 PNG，以便在 Windows、网站、邮件、打印服务和旧版图片编辑软件中使用。",
        "许多在线转换器要求上传私人照片。heicgo 采用相反的方式：转换在浏览器本地完成，不需要账号，不排队上传，也不在服务器保存图片。",
      ],
      differenceTitle: "heicgo 的不同之处",
      differences: [
        { title: "隐私优先", body: "原始 HEIC 文件和转换后的图片都留在你的设备上。" },
        { title: "JPG 可保留 EXIF", body: "JPG 输出可保留 GPS、相机型号、拍摄时间和方向等元数据。" },
        { title: "支持 JPG 和 PNG", body: "日常兼容性选择 JPG，截图和后期编辑选择无损 PNG。" },
        { title: "适合批量处理", body: "可一次转换多个文件，并把成功结果打包为 ZIP 下载。" },
      ],
      workflowTitle: "工作方式",
      workflow: [
        { title: "本地读取", body: "浏览器直接从你的设备读取所选 HEIC 或 HEIF 文件。" },
        { title: "安全解码", body: "Safari 可使用原生 HEIC 解码，其它浏览器使用 WebAssembly 解码器。" },
        { title: "Canvas 处理", body: "导出前可进行尺寸调整、方向修正，并选择输出格式。" },
        { title: "下载结果", body: "转换结果以浏览器本地 Blob 形式生成，由用户主动下载。" },
      ],
      technologyTitle: "技术栈",
      technology: [
        { title: "前端", body: "Astro、Preact 和 Tailwind CSS 保持站点静态、快速。" },
        { title: "转换", body: "heic2any、浏览器图片 API、Canvas 和 JSZip 支持本地批量转换。" },
        { title: "元数据", body: "exifr 和 piexifjs 负责 EXIF 提取和 JPG 元数据写入。" },
        { title: "托管", body: "Cloudflare Pages 提供全球静态托管。" },
      ],
      contactTitle: "联系我们",
      contactBody: "有问题或反馈？请发送邮件至 hello@heicgo.com。",
    },
    contact: {
      title: "联系我们",
      description: "欢迎反馈问题、报告错误、咨询隐私政策或洽谈合作。",
      cards: [
        { title: "一般咨询", email: "hello@heicgo.com", body: "关于工具、内容或网站的问题。" },
        { title: "错误报告", email: "bugs@heicgo.com", body: "报告转换失败、浏览器兼容或页面布局问题。" },
        { title: "合作", email: "partner@heicgo.com", body: "产品、内容或广告合作。" },
        { title: "隐私", email: "privacy@heicgo.com", body: "关于数据处理、Cookie 或广告披露的问题。" },
      ],
      responseTitle: "回复时间",
      responseBody: "我们通常会在工作日 24-48 小时内回复。报告错误时，请提供浏览器、系统、文件类型和复现步骤。",
    },
    faq: {
      title: "常见问题",
      description: "关于隐私、HEIC 转换、EXIF 元数据、PNG 输出、批量下载和浏览器支持的回答。",
      items: [
        { q: "heicgo 真的免费吗？", a: "是的。heicgo 免费使用，无需账号、无水印，也没有固定转换次数限制。" },
        { q: "照片会上传到服务器吗？", a: "不会。转换在浏览器中完成，原始 HEIC 和转换后的图片都不会离开你的设备。" },
        { q: "可以把 HEIC 转成 PNG 吗？", a: "可以。在输出格式中选择 PNG。PNG 是无损输出，适合截图、文字较多的图片和后期编辑。" },
        { q: "转换会保留 EXIF 元数据吗？", a: "JPG 输出可保留支持的 EXIF 信息，包括 GPS、拍摄时间、相机型号和方向。PNG 按无损像素输出处理，不保留 EXIF。" },
        { q: "最大文件大小是多少？", a: "单个文件最大 50 MB。超大批量会占用较多浏览器内存，建议几百张照片分批处理。" },
        { q: "支持哪些浏览器？", a: "支持现代 Safari、Chrome、Firefox 和 Edge。Safari 可使用原生 HEIC 解码，其它浏览器使用 WebAssembly。" },
        { q: "可以批量转换吗？", a: "可以。一次选择或拖入多个 HEIC/HEIF 文件，转换后可单独下载或打包成 ZIP。" },
        { q: "JPG 画质应该设置多少？", a: "照片通常使用 90-95% 比较平衡。需要最高画质选 100%，需要更小体积可选 60-80%。" },
      ],
    },
  },
  de: {
    about: {
      title: "Über heicgo",
      eyebrow: "Private Bildkonvertierung für iPhone-Fotos",
      intro: "heicgo ist ein HEIC-Konverter im Browser für alle, die iPhone-Fotos ohne Server-Upload in kompatible Formate umwandeln möchten.",
      missionTitle: "Unsere Mission",
      mission: [
        "Viele iPhone-Nutzer müssen HEIC-Fotos in JPG oder PNG konvertieren, damit sie unter Windows, in Websites, E-Mails, Druckdiensten und älterer Software funktionieren.",
        "Viele Online-Konverter verlangen den Upload privater Fotos. heicgo arbeitet lokal im Browser, ohne Konto, ohne Upload-Warteschlange und ohne serverseitige Bildspeicherung.",
      ],
      differenceTitle: "Was heicgo anders macht",
      differences: [
        { title: "Datenschutz zuerst", body: "Originaldateien und konvertierte Bilder bleiben auf deinem Gerät." },
        { title: "EXIF für JPG", body: "JPG-Ausgaben können GPS, Kameramodell, Zeitstempel und Ausrichtung behalten." },
        { title: "JPG und PNG", body: "JPG für Kompatibilität, PNG für verlustfreie Screenshots und Bearbeitung." },
        { title: "Batch-tauglich", body: "Mehrere Dateien konvertieren und erfolgreiche Ergebnisse als ZIP herunterladen." },
      ],
      workflowTitle: "So funktioniert es",
      workflow: [
        { title: "Lokal lesen", body: "Der Browser liest die gewählte HEIC- oder HEIF-Datei direkt von deinem Gerät." },
        { title: "Sicher dekodieren", body: "Safari kann HEIC nativ dekodieren; andere Browser nutzen WebAssembly." },
        { title: "Mit Canvas verarbeiten", body: "Größe und Ausrichtung können vor dem Export angepasst werden." },
        { title: "Ergebnisse laden", body: "Die Dateien entstehen lokal im Browser und werden von dir heruntergeladen." },
      ],
      technologyTitle: "Technologie",
      technology: [
        { title: "Frontend", body: "Astro, Preact und Tailwind CSS halten die Seite schnell und statisch." },
        { title: "Konvertierung", body: "heic2any, Browser-APIs, Canvas und JSZip ermöglichen lokale Batch-Konvertierung." },
        { title: "Metadaten", body: "exifr und piexifjs extrahieren EXIF und schreiben Metadaten in JPG." },
        { title: "Hosting", body: "Cloudflare Pages liefert die statische Website weltweit aus." },
      ],
      contactTitle: "Kontakt",
      contactBody: "Fragen oder Feedback? Schreibe an hello@heicgo.com.",
    },
    contact: {
      title: "Kontakt",
      description: "Wir freuen uns über Feedback, Fehlermeldungen, Datenschutzfragen und Partnerschaftsanfragen.",
      cards: [
        { title: "Allgemeine Fragen", email: "hello@heicgo.com", body: "Fragen zum Tool, zu Inhalten oder zur Website." },
        { title: "Fehler melden", email: "bugs@heicgo.com", body: "Probleme bei Konvertierung, Browsern oder Layout melden." },
        { title: "Partnerschaften", email: "partner@heicgo.com", body: "Produkt-, Content- oder Werbepartnerschaften." },
        { title: "Datenschutz", email: "privacy@heicgo.com", body: "Fragen zu Datenverarbeitung, Cookies oder Werbung." },
      ],
      responseTitle: "Antwortzeit",
      responseBody: "Wir antworten normalerweise innerhalb von 24-48 Stunden an Werktagen. Bei Fehlern bitte Browser, Betriebssystem, Dateityp und Schritte zur Reproduktion angeben.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      description: "Antworten zu Datenschutz, HEIC-Konvertierung, EXIF, PNG, Batch-Downloads und Browser-Support.",
      items: [
        { q: "Ist heicgo wirklich kostenlos?", a: "Ja. heicgo ist kostenlos, ohne Konto, ohne Wasserzeichen und ohne feste Konvertierungslimits." },
        { q: "Werden meine Fotos hochgeladen?", a: "Nein. Die Konvertierung läuft im Browser. Originale und Ergebnisse verlassen dein Gerät nicht." },
        { q: "Kann ich HEIC in PNG konvertieren?", a: "Ja. Wähle PNG als Ausgabeformat. PNG ist verlustfrei und eignet sich für Screenshots, Textbilder und Bearbeitung." },
        { q: "Bleiben EXIF-Metadaten erhalten?", a: "JPG kann unterstützte EXIF-Daten wie GPS, Datum, Kameramodell und Ausrichtung behalten. PNG wird als verlustfreie Pixelausgabe behandelt." },
        { q: "Wie groß darf eine Datei sein?", a: "Bis zu 50 MB pro Datei. Sehr große Batches können viel Browserspeicher benötigen." },
        { q: "Welche Browser werden unterstützt?", a: "Moderne Versionen von Safari, Chrome, Firefox und Edge. Safari kann HEIC nativ dekodieren." },
        { q: "Kann ich mehrere Dateien konvertieren?", a: "Ja. Mehrere HEIC/HEIF-Dateien auswählen, zusammen konvertieren und einzeln oder als ZIP herunterladen." },
        { q: "Welche JPG-Qualität soll ich verwenden?", a: "90-95% ist für Fotos ein guter Kompromiss. 100% für maximale Qualität, 60-80% für kleinere Dateien." },
      ],
    },
  },
  ja: {
    about: {
      title: "heicgoについて",
      eyebrow: "iPhone写真のためのプライベート画像変換",
      intro: "heicgoは、iPhone写真をサーバーへアップロードせずに互換性の高い形式へ変換するブラウザベースのHEICコンバーターです。",
      missionTitle: "私たちの目的",
      mission: [
        "iPhoneユーザーは、Windows、Webサイト、メール、印刷サービス、古い編集ソフトで使うためにHEIC写真をJPGやPNGへ変換する必要があります。",
        "多くのオンライン変換サービスは個人写真のアップロードを求めます。heicgoは逆に、アカウント不要、アップロード不要、サーバー保存なしでブラウザ内変換を行います。",
      ],
      differenceTitle: "heicgoの違い",
      differences: [
        { title: "プライバシー優先", body: "元のHEICファイルと変換後の画像はデバイス上に残ります。" },
        { title: "JPGのEXIF保持", body: "JPG出力ではGPS、カメラ名、撮影日時、向きなどを保持できます。" },
        { title: "JPGとPNG", body: "互換性にはJPG、スクリーンショットや編集にはロスレスPNGを使えます。" },
        { title: "一括変換", body: "複数ファイルを変換し、成功した結果をZIPで保存できます。" },
      ],
      workflowTitle: "仕組み",
      workflow: [
        { title: "ローカル読み込み", body: "ブラウザが選択したHEIC/HEIFファイルをデバイスから直接読み込みます。" },
        { title: "安全にデコード", body: "SafariはネイティブHEICデコード、他のブラウザはWebAssemblyを使用します。" },
        { title: "Canvasで処理", body: "出力前にリサイズや回転補正を適用できます。" },
        { title: "結果を保存", body: "変換ファイルはブラウザ内で生成され、ユーザーがダウンロードします。" },
      ],
      technologyTitle: "技術",
      technology: [
        { title: "フロントエンド", body: "Astro、Preact、Tailwind CSSで高速な静的サイトを構成しています。" },
        { title: "変換", body: "heic2any、ブラウザ画像API、Canvas、JSZipでローカル一括変換を行います。" },
        { title: "メタデータ", body: "exifrとpiexifjsでEXIF抽出とJPGへの書き込みを行います。" },
        { title: "ホスティング", body: "Cloudflare Pagesで世界中に静的配信しています。" },
      ],
      contactTitle: "お問い合わせ",
      contactBody: "質問やフィードバックは hello@heicgo.com までお送りください。",
    },
    contact: {
      title: "お問い合わせ",
      description: "フィードバック、不具合報告、プライバシーに関する質問、提携相談を受け付けています。",
      cards: [
        { title: "一般的な質問", email: "hello@heicgo.com", body: "ツール、記事、サイトに関する質問。" },
        { title: "不具合報告", email: "bugs@heicgo.com", body: "変換、ブラウザ、レイアウトの問題を報告。" },
        { title: "提携", email: "partner@heicgo.com", body: "製品、コンテンツ、広告に関する提携。" },
        { title: "プライバシー", email: "privacy@heicgo.com", body: "データ処理、Cookie、広告表示に関する質問。" },
      ],
      responseTitle: "返信時間",
      responseBody: "通常、営業日で24-48時間以内に返信します。不具合報告ではブラウザ、OS、ファイル形式、再現手順を含めてください。",
    },
    faq: {
      title: "よくある質問",
      description: "プライバシー、HEIC変換、EXIF、PNG、一括ダウンロード、ブラウザ対応についての回答です。",
      items: [
        { q: "heicgoは本当に無料ですか？", a: "はい。アカウント不要、透かしなし、固定の変換回数制限なしで無料利用できます。" },
        { q: "写真はサーバーにアップロードされますか？", a: "いいえ。変換はブラウザ内で行われ、元画像も変換結果もデバイスから出ません。" },
        { q: "HEICをPNGに変換できますか？", a: "はい。出力形式でPNGを選択できます。PNGはロスレスで、スクリーンショットや文字入り画像、編集に適しています。" },
        { q: "EXIFメタデータは保持されますか？", a: "JPG出力ではGPS、日時、カメラ名、向きなどの対応EXIFを保持できます。PNGはロスレスなピクセル出力として扱います。" },
        { q: "最大ファイルサイズは？", a: "1ファイル50MBまでです。大量のファイルはブラウザメモリを使うため、分割して処理してください。" },
        { q: "対応ブラウザは？", a: "最新のSafari、Chrome、Firefox、Edgeに対応しています。SafariはネイティブHEICデコードを利用できます。" },
        { q: "一括変換できますか？", a: "はい。複数のHEIC/HEIFを選択し、個別またはZIPでダウンロードできます。" },
        { q: "JPG品質はどれを選べばいいですか？", a: "写真には90-95%が良いバランスです。最高品質は100%、小さいファイル重視なら60-80%です。" },
      ],
    },
  },
  ko: {
    about: {
      title: "heicgo 소개",
      eyebrow: "iPhone 사진을 위한 비공개 이미지 변환",
      intro: "heicgo는 iPhone 사진을 서버에 업로드하지 않고 호환성 높은 형식으로 바꾸는 브라우저 기반 HEIC 변환기입니다.",
      missionTitle: "목표",
      mission: [
        "iPhone 사용자는 Windows, 웹사이트, 이메일, 인쇄 서비스, 오래된 편집 프로그램에서 쓰기 위해 HEIC 사진을 JPG 또는 PNG로 변환해야 합니다.",
        "많은 온라인 변환기는 개인 사진 업로드를 요구합니다. heicgo는 계정, 업로드 대기열, 서버 저장 없이 브라우저 안에서 변환합니다.",
      ],
      differenceTitle: "heicgo의 차이점",
      differences: [
        { title: "개인정보 우선", body: "원본 HEIC와 변환된 이미지는 기기 안에 남습니다." },
        { title: "JPG EXIF 보존", body: "JPG 출력은 GPS, 카메라 모델, 촬영 시간, 방향 정보를 보존할 수 있습니다." },
        { title: "JPG와 PNG", body: "호환성은 JPG, 스크린샷과 편집용 무손실 결과는 PNG를 선택하세요." },
        { title: "일괄 처리", body: "여러 파일을 변환하고 성공한 결과를 ZIP으로 받을 수 있습니다." },
      ],
      workflowTitle: "작동 방식",
      workflow: [
        { title: "로컬 읽기", body: "브라우저가 선택한 HEIC/HEIF 파일을 기기에서 직접 읽습니다." },
        { title: "안전한 디코딩", body: "Safari는 네이티브 HEIC 디코딩을, 다른 브라우저는 WebAssembly를 사용합니다." },
        { title: "Canvas 처리", body: "내보내기 전에 크기 조정과 회전 보정을 적용할 수 있습니다." },
        { title: "결과 다운로드", body: "변환 파일은 브라우저 안에서 생성되고 사용자가 다운로드합니다." },
      ],
      technologyTitle: "기술",
      technology: [
        { title: "프론트엔드", body: "Astro, Preact, Tailwind CSS로 빠른 정적 사이트를 구성합니다." },
        { title: "변환", body: "heic2any, 브라우저 이미지 API, Canvas, JSZip으로 로컬 일괄 변환을 수행합니다." },
        { title: "메타데이터", body: "exifr와 piexifjs가 EXIF 추출과 JPG 메타데이터 삽입을 처리합니다." },
        { title: "호스팅", body: "Cloudflare Pages가 정적 사이트를 전 세계에 제공합니다." },
      ],
      contactTitle: "문의",
      contactBody: "질문이나 의견은 hello@heicgo.com 으로 보내주세요.",
    },
    contact: {
      title: "문의하기",
      description: "피드백, 오류 보고, 개인정보 질문, 제휴 문의를 환영합니다.",
      cards: [
        { title: "일반 문의", email: "hello@heicgo.com", body: "도구, 콘텐츠, 웹사이트에 관한 질문." },
        { title: "오류 보고", email: "bugs@heicgo.com", body: "변환, 브라우저, 레이아웃 문제 보고." },
        { title: "제휴", email: "partner@heicgo.com", body: "제품, 콘텐츠, 광고 제휴." },
        { title: "개인정보", email: "privacy@heicgo.com", body: "데이터 처리, 쿠키, 광고 고지 관련 질문." },
      ],
      responseTitle: "응답 시간",
      responseBody: "영업일 기준 보통 24-48시간 내에 답변합니다. 오류 보고에는 브라우저, 운영체제, 파일 형식, 재현 단계를 포함해 주세요.",
    },
    faq: {
      title: "자주 묻는 질문",
      description: "개인정보, HEIC 변환, EXIF, PNG, 일괄 다운로드, 브라우저 지원에 대한 답변입니다.",
      items: [
        { q: "heicgo는 정말 무료인가요?", a: "예. 계정, 워터마크, 고정 변환 제한 없이 무료로 사용할 수 있습니다." },
        { q: "사진이 서버에 업로드되나요?", a: "아니요. 변환은 브라우저에서 이루어지며 원본과 결과 이미지는 기기를 떠나지 않습니다." },
        { q: "HEIC를 PNG로 변환할 수 있나요?", a: "예. 출력 형식에서 PNG를 선택하세요. PNG는 무손실이며 스크린샷, 텍스트 이미지, 편집에 적합합니다." },
        { q: "EXIF 메타데이터가 보존되나요?", a: "JPG 출력은 GPS, 촬영 시간, 카메라 모델, 방향 등 지원되는 EXIF를 보존할 수 있습니다. PNG는 무손실 픽셀 출력으로 처리합니다." },
        { q: "최대 파일 크기는 얼마인가요?", a: "파일당 최대 50MB입니다. 매우 큰 배치는 브라우저 메모리를 많이 사용하므로 나누어 처리하세요." },
        { q: "어떤 브라우저를 지원하나요?", a: "최신 Safari, Chrome, Firefox, Edge를 지원합니다. Safari는 네이티브 HEIC 디코딩을 사용할 수 있습니다." },
        { q: "여러 파일을 한 번에 변환할 수 있나요?", a: "예. 여러 HEIC/HEIF 파일을 선택하고 개별 다운로드 또는 ZIP 다운로드를 사용할 수 있습니다." },
        { q: "JPG 품질은 어떻게 설정하나요?", a: "사진에는 90-95%가 좋은 균형입니다. 최고 품질은 100%, 작은 파일은 60-80%를 사용하세요." },
      ],
    },
  },
  fr: {
    about: {
      title: "À propos de heicgo",
      eyebrow: "Conversion privée pour les photos iPhone",
      intro: "heicgo est un convertisseur HEIC dans le navigateur pour rendre les photos iPhone compatibles sans envoyer de fichiers privés à un serveur.",
      missionTitle: "Notre mission",
      mission: [
        "Les utilisateurs d'iPhone doivent souvent convertir des photos HEIC en JPG ou PNG pour Windows, les sites web, les e-mails, l'impression et les anciens logiciels.",
        "Beaucoup de convertisseurs en ligne demandent d'uploader des photos personnelles. heicgo fonctionne localement dans le navigateur, sans compte, sans file d'upload et sans stockage serveur.",
      ],
      differenceTitle: "Ce qui rend heicgo différent",
      differences: [
        { title: "Confidentialité d'abord", body: "Les fichiers HEIC originaux et les images converties restent sur votre appareil." },
        { title: "EXIF en JPG", body: "La sortie JPG peut conserver GPS, modèle d'appareil, date et orientation." },
        { title: "JPG et PNG", body: "JPG pour la compatibilité, PNG pour les captures et la retouche sans perte." },
        { title: "Pensé pour le batch", body: "Convertissez plusieurs fichiers et téléchargez les résultats réussis en ZIP." },
      ],
      workflowTitle: "Fonctionnement",
      workflow: [
        { title: "Lecture locale", body: "Le navigateur lit le fichier HEIC ou HEIF directement depuis votre appareil." },
        { title: "Décodage sûr", body: "Safari peut décoder HEIC nativement; les autres navigateurs utilisent WebAssembly." },
        { title: "Traitement Canvas", body: "Redimensionnement et rotation peuvent être appliqués avant l'export." },
        { title: "Téléchargement", body: "Les fichiers convertis sont créés localement dans le navigateur puis téléchargés." },
      ],
      technologyTitle: "Technologie",
      technology: [
        { title: "Frontend", body: "Astro, Preact et Tailwind CSS gardent le site rapide et statique." },
        { title: "Conversion", body: "heic2any, les API image du navigateur, Canvas et JSZip assurent la conversion locale." },
        { title: "Métadonnées", body: "exifr et piexifjs extraient EXIF et l'injectent dans les JPG." },
        { title: "Hébergement", body: "Cloudflare Pages sert le site statique mondialement." },
      ],
      contactTitle: "Contact",
      contactBody: "Questions ou retours ? Écrivez à hello@heicgo.com.",
    },
    contact: {
      title: "Contact",
      description: "Nous acceptons les retours, bugs, questions de confidentialité et demandes de partenariat.",
      cards: [
        { title: "Questions générales", email: "hello@heicgo.com", body: "Questions sur l'outil, le contenu ou le site." },
        { title: "Signaler un bug", email: "bugs@heicgo.com", body: "Problèmes de conversion, navigateur ou mise en page." },
        { title: "Partenariats", email: "partner@heicgo.com", body: "Partenariats produit, contenu ou publicité." },
        { title: "Confidentialité", email: "privacy@heicgo.com", body: "Questions sur les données, cookies ou publicités." },
      ],
      responseTitle: "Délai de réponse",
      responseBody: "Nous répondons généralement sous 24 à 48 heures ouvrées. Pour un bug, indiquez navigateur, système, type de fichier et étapes de reproduction.",
    },
    faq: {
      title: "Questions fréquentes",
      description: "Réponses sur la confidentialité, la conversion HEIC, EXIF, PNG, les téléchargements ZIP et les navigateurs.",
      items: [
        { q: "heicgo est-il vraiment gratuit ?", a: "Oui. heicgo est gratuit, sans compte, sans filigrane et sans limite fixe de conversion." },
        { q: "Mes photos sont-elles envoyées à un serveur ?", a: "Non. La conversion se fait dans le navigateur. Les originaux et résultats restent sur votre appareil." },
        { q: "Puis-je convertir HEIC en PNG ?", a: "Oui. Choisissez PNG comme format de sortie. PNG est sans perte et convient aux captures, images avec texte et retouche." },
        { q: "Les métadonnées EXIF sont-elles conservées ?", a: "La sortie JPG peut conserver GPS, date, modèle d'appareil et orientation. PNG est traité comme sortie pixel sans perte." },
        { q: "Quelle est la taille maximale ?", a: "Chaque fichier peut atteindre 50 Mo. Les très grands lots peuvent consommer beaucoup de mémoire navigateur." },
        { q: "Quels navigateurs sont pris en charge ?", a: "Safari, Chrome, Firefox et Edge modernes. Safari peut utiliser le décodage HEIC natif." },
        { q: "Puis-je convertir plusieurs fichiers ?", a: "Oui. Sélectionnez plusieurs HEIC/HEIF, convertissez-les et téléchargez-les séparément ou en ZIP." },
        { q: "Quel réglage de qualité JPG utiliser ?", a: "90-95% est un bon équilibre pour les photos. 100% pour la qualité maximale, 60-80% pour réduire la taille." },
      ],
    },
  },
};
