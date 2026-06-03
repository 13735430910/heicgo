import type { Translation } from "../translations";

const fr: Translation = {
  siteTitle: "Convertisseur HEIC en JPG — Gratuit, privé, sans upload",
  siteDescription:
    "Convertissez vos photos HEIC en JPG en ligne. 100% privé — vos fichiers restent sur votre appareil. Métadonnées EXIF préservées.",
  nav: { home: "Accueil", blog: "Blog", faq: "FAQ", about: "À propos", contact: "Contact" },
  hero: { title: "Convertisseur HEIC en JPG", subtitle: "Gratuit · Privé · Sans upload" },
  dropZone: {
    title: "Déposez vos fichiers HEIC ici",
    browse: "Parcourir",
    supported: "Prend en charge HEIC, HEIF",
    maxSize: "Max 50 Mo par fichier",
  },
  options: {
    quality: "Qualité",
    maxWidth: "Largeur max",
    preserveExif: "Conserver les données EXIF",
    autoRotate: "Rotation auto",
    maxWidthOptions: {
      original: "Original",
      "1920": "1920px (Full HD)",
      "1280": "1280px",
      "800": "800px",
    },
  },
  actions: {
    convert: "Convertir en JPG",
    converting: "Conversion...",
    download: "Télécharger",
    downloadAll: "Tout télécharger (ZIP)",
    clear: "Effacer",
  },
  results: {
    title: "Résultats de la conversion",
    originalSize: "Original",
    convertedSize: "Converti",
    saved: "Économisé",
    exifPreserved: "EXIF préservé",
    noExif: "Pas de données EXIF",
  },
  errors: {
    noFiles: "Veuillez sélectionner au moins un fichier.",
    unsupportedFormat: "Format non pris en charge. Utilisez des fichiers HEIC ou HEIF.",
    fileTooLarge: "est trop volumineux. Taille maximale : 50 Mo.",
    conversionFailed: "La conversion a échoué. Veuillez réessayer.",
    unknown: "Une erreur inconnue est survenue.",
  },
  footer: {
    privacy: "Confidentialité",
    terms: "Conditions d'utilisation",
    about: "À propos",
    copyright: "heicgo.com — Convertisseur HEIC en JPG gratuit en ligne.",
  },
  seo: {
    homeTitle: "Convertisseur HEIC en JPG — Gratuit, privé, sans upload",
    homeDescription: "Convertissez vos photos HEIC en JPG en ligne. 100% privé. EXIF préservé.",
    privacyTitle: "Confidentialité — Convertisseur HEIC en JPG",
    privacyDescription: "Politique de confidentialité de heicgo.com. Toutes les conversions sont locales.",
    termsTitle: "Conditions d'utilisation — Convertisseur HEIC en JPG",
    termsDescription: "Conditions d'utilisation de heicgo.com.",
    aboutTitle: "À propos — Convertisseur HEIC en JPG",
    aboutDescription: "À propos de heicgo.com — un convertisseur HEIC en JPG gratuit et privé.",
    faqTitle: "FAQ — Convertisseur HEIC en JPG",
    faqDescription: "Questions fréquentes sur la conversion HEIC en JPG.",
    blogTitle: "Blog — Convertisseur HEIC en JPG",
    blogDescription: "Astuces et guides pour la conversion d'images HEIC.",
  },
};

export default fr;
