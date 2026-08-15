"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../_i18n/LanguageContext";
import { eventBanner } from "../../_i18n/content";

export default function EventBanner() {
  const { locale } = useLocale();
  const message = eventBanner[locale];

  return (
    <div className="relative w-full h-10 bg-sand border-b border-rule flex items-center overflow-hidden">
      {/* 배경 광택 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none" />

      {/* 애니메이션 텍스트 — 시작부터 바로 보이는 이음매 없는 루프 */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="shimmer-text font-sans-ko font-medium text-[10px] sm:text-sm tracking-[0.05em] sm:tracking-[0.2em] select-none pr-10 sm:pr-16"
          >
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
