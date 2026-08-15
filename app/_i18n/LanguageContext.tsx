"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "ko" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "hanbang-locale";

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ko",
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  useEffect(() => {
    const restoreStoredLocale = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ko" || stored === "en") {
        setLocaleState(stored);
      }
    };
    restoreStoredLocale();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
