"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, type Locale } from "../../_i18n/LanguageContext";
import BrandMark from "./BrandMark";

export default function LanguageGate() {
  const { setLocale, hasChosen, ready } = useLocale();
  const visible = ready && !hasChosen;

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const choose = (locale: Locale) => {
    setLocale(locale);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-night px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <BrandMark className="mx-auto mb-8 h-12 w-12 text-sand" />
            <p className="font-serif-ko font-light text-canvas text-xl sm:text-2xl mb-2">
              어느 언어가 편하신가요?
            </p>
            <p className="font-sans text-dim text-sm mb-10">
              Which language would you prefer?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => choose("ko")}
                className="w-48 rounded-full border border-canvas/30 py-4 font-serif-ko font-light text-canvas text-base tracking-wide transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                한국어
              </button>
              <button
                onClick={() => choose("en")}
                className="w-48 rounded-full border border-canvas/30 py-4 font-sans text-canvas text-base tracking-wide transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                English
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
