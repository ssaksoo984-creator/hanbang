"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "ko" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** localStorage에 저장된 언어 선택이 있는지 여부 (언어 선택 게이트 노출 판단용) */
  hasChosen: boolean;
  /** localStorage 확인이 끝났는지 여부 — 게이트의 깜빡임(flash) 방지용 */
  ready: boolean;
}

const STORAGE_KEY = "hanbang-locale";

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ko",
  setLocale: () => {},
  hasChosen: true,
  ready: true,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");
  const [hasChosen, setHasChosen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const restoreStoredLocale = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ko" || stored === "en") {
        setLocaleState(stored);
        setHasChosen(true);
      }
      setReady(true);
    };
    restoreStoredLocale();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    setHasChosen(true);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, hasChosen, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
