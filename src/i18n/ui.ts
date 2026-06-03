import type { Locale, Translation } from "./translations";
import { ALL_LOCALES } from "./translations";
import en from "./locales/en";
import zhCN from "./locales/zh-CN";
import de from "./locales/de";
import ja from "./locales/ja";
import ko from "./locales/ko";
import fr from "./locales/fr";

const translations: Record<Locale, Translation> = { en, "zh-CN": zhCN, de, ja, ko, fr };

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-CN": "中文",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  fr: "Français",
};

const LOCALE_STORAGE_KEY = "heicgo-locale";

export function isValidLocale(s: string): s is Locale {
  return ALL_LOCALES.includes(s as Locale);
}

/** Server-side: get locale from Astro.params */
export function getLocaleFromParams(params: Record<string, string | undefined>): Locale {
  const locale = params.locale;
  return locale && isValidLocale(locale) ? locale : "en";
}

/** Server-side: get locale from URL pathname */
export function getLocaleFromUrl(url: URL): Locale {
  const pathLocale = url.pathname.split("/").filter(Boolean)[0];
  return isValidLocale(pathLocale) ? pathLocale : "en";
}

/** Load translation object for a given locale */
export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.en;
}

/** Client-side: detect locale from browser */
export function detectLocale(): Locale {
  try {
    const saved = localStorage?.getItem(LOCALE_STORAGE_KEY);
    if (saved && isValidLocale(saved)) return saved;
  } catch {}

  try {
    const lang = navigator.language;
    if (lang.startsWith("zh")) return "zh-CN";
    if (lang.startsWith("de")) return "de";
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("ko")) return "ko";
    if (lang.startsWith("fr")) return "fr";
  } catch {}

  return "en";
}

/** Client-side: save locale preference */
export function saveLocalePreference(locale: Locale): void {
  try {
    localStorage?.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {}
}
