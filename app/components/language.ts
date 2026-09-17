export type Language = "en" | "he" | "ar" | "ru";

export const LANGUAGE_COOKIE = "plectrum-language";
/** Arabic and Russian stay in the type/copy, but are hidden from the UI for now. */
export const supportedLanguages: Language[] = ["en", "he"];

export function isLanguage(value: string | null | undefined): value is Language {
  return supportedLanguages.includes(value as Language);
}

export function languageDirection(language: Language): "ltr" | "rtl" {
  return language === "he" ? "rtl" : "ltr";
}

export function readLanguageCookie(raw: string | undefined): Language {
  return isLanguage(raw) ? raw : "en";
}
