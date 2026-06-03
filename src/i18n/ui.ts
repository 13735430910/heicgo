import type { Locale } from "./translations";

export const SUPPORTED_LOCALES: Locale[] = ["en", "zh-CN"];
const LOCALE_STORAGE_KEY = "heicgo-locale";

export function isValidLocale(s: string): s is Locale {
  return SUPPORTED_LOCALES.includes(s as Locale);
}

/** Server-side: get locale from Astro.params (used in [locale] routes) */
export function getLocaleFromParams(params: Record<string, string | undefined>): Locale {
  const locale = params.locale;
  return locale && isValidLocale(locale) ? locale : "en";
}

/** Server-side: get locale from URL pathname */
export function getLocaleFromUrl(url: URL): Locale {
  const pathLocale = url.pathname.split("/").filter(Boolean)[0];
  return isValidLocale(pathLocale) ? pathLocale : "en";
}

/** Client-side: detect locale from browser, saved preference, or default */
export function detectLocale(): Locale {
  try {
    const saved = localStorage?.getItem(LOCALE_STORAGE_KEY);
    if (saved && isValidLocale(saved)) return saved;
  } catch {}

  try {
    const browserLang = navigator.language;
    if (browserLang.startsWith("zh")) return "zh-CN";
  } catch {}

  return "en";
}

/** Client-side: save user's locale preference */
export function saveLocalePreference(locale: Locale): void {
  try {
    localStorage?.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {}
}
