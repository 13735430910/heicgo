import type { Translation } from "../translations";

const ko: Translation = {
  siteTitle: "HEIC을 JPG로 변환 — 무료, 비공개, 업로드 불필요",
  siteDescription:
    "HEIC 사진을 온라인으로 JPG로 변환하세요. 100% 비공개 — 파일이 기기를 떠나지 않습니다. EXIF 데이터 보존.",
  nav: { home: "홈", blog: "블로그", faq: "FAQ", about: "소개", contact: "문의하기" },
  hero: { title: "HEIC을 JPG로 변환", subtitle: "무료 · 비공개 · 업로드 불필요" },
  dropZone: {
    title: "HEIC 파일을 여기에 드롭하세요",
    browse: "파일 선택",
    supported: "HEIC, HEIF 지원",
    maxSize: "파일당 최대 50MB",
  },
  options: {
    quality: "품질",
    maxWidth: "최대 너비",
    preserveExif: "EXIF 데이터 보존",
    autoRotate: "자동 회전",
    maxWidthOptions: {
      original: "원본",
      "1920": "1920px (Full HD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "JPG로 변환",
    converting: "변환 중...",
    download: "다운로드",
    downloadAll: "전체 다운로드 (ZIP)",
    clear: "지우기",
  },
  results: {
    title: "변환 결과",
    originalSize: "원본",
    convertedSize: "변환됨",
    saved: "절약",
    exifPreserved: "EXIF 보존됨",
    noExif: "EXIF 데이터 없음",
  },
  errors: {
    noFiles: "최소 하나의 파일을 선택하세요.",
    unsupportedFormat: "지원되지 않는 형식입니다. HEIC 또는 HEIF 파일을 사용하세요.",
    fileTooLarge: "이(가) 너무 큽니다. 최대 크기는 50MB입니다.",
    conversionFailed: "변환에 실패했습니다. 다시 시도하세요.",
    unknown: "알 수 없는 오류가 발생했습니다.",
  },
  footer: {
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    about: "소개",
    copyright: "heicgo.com — 무료 온라인 HEIC to JPG 변환기.",
  },
  seo: {
    homeTitle: "HEIC을 JPG로 변환 — 무료, 비공개, 업로드 불필요",
    homeDescription: "HEIC 사진을 온라인으로 JPG로 변환하세요. 100% 비공개. EXIF 데이터 보존.",
    privacyTitle: "개인정보 처리방침 — HEIC to JPG 변환",
    privacyDescription: "heicgo.com의 개인정보 처리방침. 모든 변환은 기기에서 로컬로 처리됩니다.",
    termsTitle: "이용약관 — HEIC to JPG 변환",
    termsDescription: "heicgo.com의 이용약관.",
    aboutTitle: "소개 — HEIC to JPG 변환",
    aboutDescription: "heicgo.com 소개 — EXIF를 보존하는 무료 비공개 HEIC to JPG 변환기.",
    faqTitle: "FAQ — HEIC to JPG 변환",
    faqDescription: "HEIC to JPG 변환에 관한 자주 묻는 질문.",
    blogTitle: "블로그 — HEIC to JPG 변환",
    blogDescription: "HEIC 이미지 변환 팁과 가이드.",
  },
};

export default ko;
