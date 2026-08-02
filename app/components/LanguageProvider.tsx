"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "en" | "he" | "ar" | "ru";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const supportedLanguages: Language[] = ["en", "he", "ar", "ru"];

function isLanguage(value: string | null): value is Language {
  return supportedLanguages.includes(value as Language);
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("plectrum-language");
    if (!isLanguage(saved) || saved === "en") return;

    const frame = window.requestAnimationFrame(() => {
      setLanguageState(saved);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("plectrum-language", nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" || language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
