import type { Locale } from "./translations";

export interface HomeContent {
  introTitle: string;
  intro: string[];
  benefitsTitle: string;
  benefits: Array<{ title: string; body: string }>;
  workflowTitle: string;
  steps: Array<{ title: string; body: string }>;
  useCasesTitle: string;
  useCases: string[];
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    introTitle: "Free HEIC conversion that stays on your device",
    intro: [
      "heicgo converts iPhone HEIC and HEIF photos to JPG or PNG directly in your browser. Your files are not uploaded, queued, or stored on a server, which makes the tool suitable for personal photos, work documents, receipts, location-tagged images, and other files you do not want to hand to a cloud converter.",
      "Choose JPG when you need broad compatibility, smaller files, email attachments, web uploads, or printed photos. Choose PNG when you need lossless pixel output for screenshots, text-heavy images, or later editing. Batch mode can process multiple files and package the converted results into one ZIP download.",
    ],
    benefitsTitle: "Why heicgo is useful",
    benefits: [
      { title: "No upload", body: "Conversion runs locally with browser APIs and WebAssembly. The original HEIC file never leaves your device." },
      { title: "JPG EXIF preservation", body: "When JPG is selected, camera model, timestamps, orientation, and GPS metadata can be copied into the converted file." },
      { title: "JPG or PNG output", body: "Use JPG for everyday sharing and PNG for lossless output when file size is less important than exact pixels." },
      { title: "Batch ZIP download", body: "Drop several HEIC files, convert them together, and download the results as individual files or one ZIP archive." },
    ],
    workflowTitle: "How the converter works",
    steps: [
      { title: "Select files", body: "Drop HEIC or HEIF photos into the upload area, or browse from your device." },
      { title: "Choose output", body: "Pick JPG or PNG, adjust JPG quality, and optionally resize large images." },
      { title: "Convert locally", body: "The browser decodes the HEIC file, draws it to Canvas, and exports the selected output format." },
      { title: "Download results", body: "Save each converted image or download all successful conversions as a ZIP file." },
    ],
    useCasesTitle: "Common use cases",
    useCases: [
      "Open iPhone photos on Windows PCs or older photo editors.",
      "Upload images to websites that reject HEIC files.",
      "Send smaller JPG files by email while keeping useful photo metadata.",
      "Create PNG output for screenshots, documentation, and image editing workflows.",
    ],
    faqTitle: "HEIC conversion questions",
    faqs: [
      { q: "Are my photos uploaded?", a: "No. The selected files are read and converted in your browser. heicgo does not receive the original or converted images." },
      { q: "Should I choose JPG or PNG?", a: "Use JPG for photos and everyday sharing. Use PNG for lossless output, screenshots, and text-heavy images where larger files are acceptable." },
      { q: "Does PNG preserve EXIF?", a: "No. EXIF preservation is implemented for JPG output. PNG metadata support is inconsistent, so PNG is treated as pixel-only lossless output." },
      { q: "Can I convert many files at once?", a: "Yes. Batch conversion supports multiple HEIC or HEIF files and can download successful results as one ZIP archive." },
    ],
  },
  "zh-CN": {
    introTitle: "文件留在本机的免费 HEIC 转换工具",
    intro: [
      "heicgo 可以在浏览器中直接把 iPhone 的 HEIC、HEIF 照片转换为 JPG 或 PNG。文件不会上传、排队或保存在服务器上，因此适合处理个人照片、工作资料、票据、带定位信息的照片等不适合交给云端转换器的文件。",
      "需要通用兼容性、较小体积、邮件附件、网页上传或冲印照片时，选择 JPG。需要无损像素输出、截图、文字较多的图片或后续编辑时，选择 PNG。批量模式可以一次处理多个文件，并把转换结果打包成 ZIP 下载。",
    ],
    benefitsTitle: "为什么选择 heicgo",
    benefits: [
      { title: "无需上传", body: "转换过程依赖浏览器 API 和 WebAssembly 在本机运行，原始 HEIC 文件不会离开设备。" },
      { title: "JPG 可保留 EXIF", body: "选择 JPG 输出时，可把相机型号、拍摄时间、方向和 GPS 等元数据写回转换后的图片。" },
      { title: "支持 JPG 或 PNG", body: "日常分享选 JPG；需要无损输出、且能接受更大体积时选 PNG。" },
      { title: "批量 ZIP 下载", body: "一次拖入多张 HEIC，统一转换后可逐个下载，也可打包为一个 ZIP。" },
    ],
    workflowTitle: "转换流程",
    steps: [
      { title: "选择文件", body: "把 HEIC 或 HEIF 照片拖入上传区域，或从设备中浏览选择。" },
      { title: "设置输出", body: "选择 JPG 或 PNG，调整 JPG 画质，并可按最大宽度缩小大图。" },
      { title: "本地转换", body: "浏览器解码 HEIC，绘制到 Canvas，再导出为所选格式。" },
      { title: "下载结果", body: "单独保存每张转换后的图片，或把所有成功结果打包为 ZIP。" },
    ],
    useCasesTitle: "常见使用场景",
    useCases: [
      "在 Windows 电脑或旧版图片编辑器中打开 iPhone 照片。",
      "把图片上传到不支持 HEIC 的网站、表单或社交平台。",
      "用较小的 JPG 文件发送邮件，同时保留有用的照片元数据。",
      "为截图、教程文档和后期编辑生成 PNG 输出。",
    ],
    faqTitle: "HEIC 转换常见问题",
    faqs: [
      { q: "照片会上传吗？", a: "不会。所选文件只在浏览器中读取和转换，heicgo 不会接收原图或转换后的图片。" },
      { q: "应该选择 JPG 还是 PNG？", a: "照片和日常分享通常选 JPG。需要无损输出、截图或文字边缘清晰时选 PNG，但文件会更大。" },
      { q: "PNG 会保留 EXIF 吗？", a: "不会。EXIF 保留目前只用于 JPG 输出。PNG 的元数据兼容性不稳定，因此按无损像素输出处理。" },
      { q: "可以一次转换很多文件吗？", a: "可以。批量转换支持多张 HEIC 或 HEIF，并能把成功结果下载为一个 ZIP。" },
    ],
  },
  de: {
    introTitle: "Kostenlose HEIC-Konvertierung direkt auf deinem Gerät",
    intro: [
      "heicgo konvertiert iPhone-Fotos im HEIC- oder HEIF-Format direkt im Browser zu JPG oder PNG. Deine Dateien werden nicht hochgeladen, nicht in eine Warteschlange gelegt und nicht auf einem Server gespeichert.",
      "Wähle JPG für breite Kompatibilität, kleinere Dateien, E-Mail-Anhänge, Web-Uploads und Fotoabzüge. Wähle PNG für verlustfreie Pixel, Screenshots, textlastige Bilder oder spätere Bearbeitung.",
    ],
    benefitsTitle: "Warum heicgo praktisch ist",
    benefits: [
      { title: "Kein Upload", body: "Die Konvertierung läuft lokal mit Browser-APIs und WebAssembly. Die HEIC-Datei bleibt auf deinem Gerät." },
      { title: "EXIF bei JPG", body: "Bei JPG-Ausgabe können Kameramodell, Datum, Ausrichtung und GPS-Daten übernommen werden." },
      { title: "JPG oder PNG", body: "JPG eignet sich zum Teilen, PNG für verlustfreie Ausgabe, wenn die Dateigröße zweitrangig ist." },
      { title: "Batch als ZIP", body: "Mehrere HEIC-Dateien zusammen konvertieren und einzeln oder als ZIP herunterladen." },
    ],
    workflowTitle: "So funktioniert es",
    steps: [
      { title: "Dateien wählen", body: "HEIC- oder HEIF-Fotos in den Upload-Bereich ziehen oder vom Gerät auswählen." },
      { title: "Ausgabe wählen", body: "JPG oder PNG auswählen, JPG-Qualität einstellen und große Bilder optional verkleinern." },
      { title: "Lokal konvertieren", body: "Der Browser dekodiert HEIC, zeichnet das Bild auf Canvas und exportiert das gewählte Format." },
      { title: "Herunterladen", body: "Einzelne Dateien speichern oder alle erfolgreichen Konvertierungen als ZIP laden." },
    ],
    useCasesTitle: "Häufige Anwendungsfälle",
    useCases: [
      "iPhone-Fotos auf Windows-PCs oder in älteren Editoren öffnen.",
      "Bilder auf Websites hochladen, die HEIC nicht akzeptieren.",
      "Kleinere JPGs per E-Mail versenden und wichtige Metadaten behalten.",
      "PNG für Screenshots, Dokumentation und Bearbeitung erzeugen.",
    ],
    faqTitle: "Fragen zur HEIC-Konvertierung",
    faqs: [
      { q: "Werden meine Fotos hochgeladen?", a: "Nein. Die Dateien werden im Browser gelesen und konvertiert. heicgo erhält weder Originale noch Ergebnisse." },
      { q: "JPG oder PNG?", a: "JPG ist ideal für Fotos und Teilen. PNG passt für verlustfreie Ausgabe, Screenshots und Textgrafiken." },
      { q: "Erhält PNG EXIF?", a: "Nein. EXIF-Erhalt ist für JPG implementiert. PNG wird als verlustfreie Pixelausgabe behandelt." },
      { q: "Funktioniert Batch-Konvertierung?", a: "Ja. Mehrere HEIC- oder HEIF-Dateien können zusammen konvertiert und als ZIP geladen werden." },
    ],
  },
  ja: {
    introTitle: "デバイス上で完結する無料HEIC変換",
    intro: [
      "heicgoは、iPhoneのHEIC/HEIF写真をブラウザ内でJPGまたはPNGに変換します。ファイルはアップロード、保存、サーバー処理されないため、個人写真や位置情報付き画像にも使いやすい設計です。",
      "互換性、メール添付、Webアップロード、写真共有にはJPGを選びます。スクリーンショット、文字の多い画像、後から編集する素材には、ファイルサイズが大きくてもPNGが向いています。",
    ],
    benefitsTitle: "heicgoの特徴",
    benefits: [
      { title: "アップロード不要", body: "変換はブラウザAPIとWebAssemblyでローカル実行され、元のHEICはデバイスから出ません。" },
      { title: "JPGでEXIF保持", body: "JPG出力では、カメラ情報、撮影日時、向き、GPSなどのメタデータを保持できます。" },
      { title: "JPG/PNG対応", body: "日常共有はJPG、ロスレス出力が必要な場合はPNGを選べます。" },
      { title: "一括ZIP", body: "複数のHEICをまとめて変換し、個別またはZIPでダウンロードできます。" },
    ],
    workflowTitle: "変換の流れ",
    steps: [
      { title: "ファイル選択", body: "HEICまたはHEIF写真をドロップするか、端末から選択します。" },
      { title: "出力設定", body: "JPGまたはPNGを選び、JPG品質や最大幅を調整します。" },
      { title: "ローカル変換", body: "ブラウザがHEICをデコードし、Canvas経由で選択した形式に書き出します。" },
      { title: "保存", body: "画像を個別に保存するか、成功した結果をZIPでまとめて保存します。" },
    ],
    useCasesTitle: "よくある用途",
    useCases: [
      "Windows PCや古い画像編集ソフトでiPhone写真を開く。",
      "HEIC非対応のWebサイトやフォームに画像をアップロードする。",
      "メール用に扱いやすいJPGにし、写真メタデータを残す。",
      "スクリーンショットや資料作成用にPNGを作成する。",
    ],
    faqTitle: "HEIC変換のFAQ",
    faqs: [
      { q: "写真はアップロードされますか？", a: "いいえ。選択したファイルはブラウザ内で読み込まれ、変換されます。heicgoが画像を受信することはありません。" },
      { q: "JPGとPNGのどちらを選ぶべきですか？", a: "写真や共有にはJPG、ロスレス出力や文字の多い画像にはPNGが向いています。" },
      { q: "PNGでEXIFは保持されますか？", a: "いいえ。EXIF保持はJPG出力向けです。PNGはロスレスなピクセル出力として扱います。" },
      { q: "複数ファイルを変換できますか？", a: "はい。複数のHEIC/HEIFを一括変換し、ZIPでまとめてダウンロードできます。" },
    ],
  },
  ko: {
    introTitle: "기기 안에서 끝나는 무료 HEIC 변환",
    intro: [
      "heicgo는 iPhone HEIC/HEIF 사진을 브라우저에서 바로 JPG 또는 PNG로 변환합니다. 파일은 업로드되거나 서버에 저장되지 않으므로 개인 사진, 업무 이미지, 위치 정보가 포함된 사진을 다룰 때도 부담이 적습니다.",
      "호환성, 이메일, 웹 업로드, 일반 사진 공유에는 JPG를 선택하세요. 스크린샷, 텍스트가 많은 이미지, 이후 편집을 위한 무손실 결과가 필요하면 PNG가 더 적합합니다.",
    ],
    benefitsTitle: "heicgo가 유용한 이유",
    benefits: [
      { title: "업로드 없음", body: "브라우저 API와 WebAssembly로 로컬에서 변환되며 원본 HEIC 파일은 기기를 떠나지 않습니다." },
      { title: "JPG EXIF 보존", body: "JPG 출력에서는 카메라 모델, 촬영 시간, 방향, GPS 메타데이터를 복사할 수 있습니다." },
      { title: "JPG 또는 PNG", body: "일상 공유는 JPG, 정확한 픽셀이 중요한 무손실 출력은 PNG를 사용하세요." },
      { title: "일괄 ZIP 다운로드", body: "여러 HEIC 파일을 함께 변환하고 개별 파일 또는 ZIP으로 다운로드할 수 있습니다." },
    ],
    workflowTitle: "변환 과정",
    steps: [
      { title: "파일 선택", body: "HEIC 또는 HEIF 사진을 업로드 영역에 놓거나 기기에서 선택합니다." },
      { title: "출력 선택", body: "JPG 또는 PNG를 고르고 JPG 품질과 최대 너비를 설정합니다." },
      { title: "로컬 변환", body: "브라우저가 HEIC를 디코딩하고 Canvas에서 선택한 형식으로 내보냅니다." },
      { title: "결과 저장", body: "각 이미지를 저장하거나 성공한 변환 결과를 ZIP으로 받을 수 있습니다." },
    ],
    useCasesTitle: "일반적인 사용 사례",
    useCases: [
      "Windows PC나 오래된 사진 편집기에서 iPhone 사진 열기.",
      "HEIC를 허용하지 않는 웹사이트나 폼에 이미지 업로드하기.",
      "유용한 사진 메타데이터를 유지하며 JPG 파일을 이메일로 보내기.",
      "스크린샷, 문서, 편집용 PNG 결과 만들기.",
    ],
    faqTitle: "HEIC 변환 질문",
    faqs: [
      { q: "사진이 업로드되나요?", a: "아니요. 선택한 파일은 브라우저에서 읽고 변환됩니다. heicgo는 원본이나 결과 이미지를 받지 않습니다." },
      { q: "JPG와 PNG 중 무엇을 선택해야 하나요?", a: "사진과 일반 공유에는 JPG, 무손실 결과와 텍스트가 많은 이미지에는 PNG를 선택하세요." },
      { q: "PNG도 EXIF를 보존하나요?", a: "아니요. EXIF 보존은 JPG 출력에 구현되어 있습니다. PNG는 무손실 픽셀 출력으로 처리됩니다." },
      { q: "여러 파일을 한 번에 변환할 수 있나요?", a: "예. 여러 HEIC/HEIF 파일을 일괄 변환하고 성공한 결과를 ZIP으로 다운로드할 수 있습니다." },
    ],
  },
  fr: {
    introTitle: "Conversion HEIC gratuite qui reste sur votre appareil",
    intro: [
      "heicgo convertit les photos HEIC et HEIF d'iPhone en JPG ou PNG directement dans le navigateur. Les fichiers ne sont ni envoyés, ni mis en file, ni stockés sur un serveur.",
      "Choisissez JPG pour la compatibilité, les fichiers plus petits, les pièces jointes, les uploads web et les tirages photo. Choisissez PNG pour une sortie sans perte, les captures d'écran, les images avec texte ou une retouche ultérieure.",
    ],
    benefitsTitle: "Pourquoi utiliser heicgo",
    benefits: [
      { title: "Sans upload", body: "La conversion s'exécute localement avec les API du navigateur et WebAssembly. Le fichier HEIC reste sur votre appareil." },
      { title: "EXIF en JPG", body: "En sortie JPG, le modèle d'appareil, la date, l'orientation et les données GPS peuvent être conservés." },
      { title: "JPG ou PNG", body: "JPG convient au partage courant, PNG à une sortie sans perte lorsque la taille est moins importante." },
      { title: "Batch en ZIP", body: "Convertissez plusieurs fichiers HEIC et téléchargez les résultats séparément ou dans une archive ZIP." },
    ],
    workflowTitle: "Fonctionnement",
    steps: [
      { title: "Choisir les fichiers", body: "Déposez des photos HEIC ou HEIF dans la zone d'upload, ou parcourez votre appareil." },
      { title: "Choisir la sortie", body: "Sélectionnez JPG ou PNG, ajustez la qualité JPG et redimensionnez si nécessaire." },
      { title: "Conversion locale", body: "Le navigateur décode HEIC, dessine l'image dans Canvas et exporte le format choisi." },
      { title: "Télécharger", body: "Enregistrez chaque image ou téléchargez toutes les conversions réussies en ZIP." },
    ],
    useCasesTitle: "Cas d'utilisation",
    useCases: [
      "Ouvrir des photos iPhone sur Windows ou dans d'anciens éditeurs.",
      "Uploader des images sur des sites qui refusent HEIC.",
      "Envoyer des JPG plus petits par e-mail tout en gardant les métadonnées utiles.",
      "Créer une sortie PNG pour captures, documentation et retouche.",
    ],
    faqTitle: "Questions sur la conversion HEIC",
    faqs: [
      { q: "Mes photos sont-elles uploadées ?", a: "Non. Les fichiers sont lus et convertis dans le navigateur. heicgo ne reçoit pas les originaux ni les résultats." },
      { q: "JPG ou PNG ?", a: "Utilisez JPG pour les photos et le partage. Utilisez PNG pour une sortie sans perte, les captures et les images avec texte." },
      { q: "Le PNG conserve-t-il EXIF ?", a: "Non. La préservation EXIF est implémentée pour JPG. PNG est traité comme une sortie pixel sans perte." },
      { q: "Puis-je convertir plusieurs fichiers ?", a: "Oui. La conversion par lots prend plusieurs fichiers HEIC ou HEIF et télécharge les résultats en ZIP." },
    ],
  },
};
