"use client";

import { motion } from "framer-motion";

export default function EventBanner() {
  const message = "리브한의원 여름맞이 이벤트 · 다이어트 첫 상담 무료 진행 중";

  return (
    <div className="relative w-full h-10 bg-sand border-b border-rule flex items-center justify-center overflow-hidden">
      {/* 배경 광택 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none" />

      {/* 애니메이션 텍스트 */}
      <motion.div
        className="flex whitespace-nowrap px-4"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="shimmer-text font-sans-ko font-medium text-[10px] sm:text-sm tracking-[0.05em] sm:tracking-[0.2em] select-none">
          {message}&nbsp;&nbsp;·&nbsp;&nbsp;{message}
        </span>
      </motion.div>
    </div>
  );
}
