"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SideIconItem } from "../../_data/sideIcons";
import { useLocale } from "../../_i18n/LanguageContext";
import { sideIcons as sideIconsText } from "../../_i18n/content";

interface SideIconBarProps {
  items: SideIconItem[];
}

const icons = {
  naver: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 4v8.2L9.6 4H4v16h5.5v-8.2l4.9 8.2H20V4h-5.5z" />
    </svg>
  ),
  kakao: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4C6.48 4 2 7.4 2 11.6c0 2.68 1.83 5.04 4.6 6.4-.2.75-.73 2.7-.84 3.12-.13.52.19.51.4.37.16-.11 2.6-1.77 3.66-2.48.7.1 1.42.15 2.18.15 5.52 0 10-3.4 10-7.56S17.52 4 12 4z" />
    </svg>
  ),
  call: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.1 3.5c.5-.1 1 .1 1.3.6l1.8 2.9c.3.4.2 1-.1 1.4l-1.4 1.5c-.2.2-.2.5-.1.7 1 1.9 2.6 3.5 4.5 4.5.2.1.5.1.7-.1l1.5-1.4c.4-.3 1-.4 1.4-.1l2.9 1.8c.5.3.7.8.6 1.3l-.5 2.3c-.1.6-.6 1-1.2 1C10.5 20.4 3.6 13.5 3.4 5.4c0-.6.4-1.1 1-1.2l2.3-.5z" />
    </svg>
  ),
};

export default function SideIconBar({ items }: SideIconBarProps) {
  const [showTop, setShowTop] = useState(false);
  const { locale } = useLocale();
  const t = sideIconsText[locale];

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-6 md:right-6 md:bottom-24 z-40 flex flex-col gap-2 md:gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
        >
          {item.href.startsWith("/") ? (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                aria-label={t[item.id]}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-ink text-canvas hover:bg-gold hover:text-ink transition-colors duration-300"
              >
                {icons[item.id]}
              </Link>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={t[item.id]}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-ink text-canvas hover:bg-gold hover:text-ink transition-colors duration-300 inline-flex"
              >
                {icons[item.id]}
              </a>
            </motion.div>
          )}
        </motion.div>
      ))}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t.top}
        whileHover={showTop ? { scale: 1.1 } : undefined}
        whileTap={showTop ? { scale: 0.95 } : undefined}
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-ink text-canvas text-[11px] tracking-wide hover:bg-gold hover:text-ink transition-colors duration-300 ${
          showTop ? "" : "pointer-events-none"
        }`}
      >
        TOP
      </motion.button>
    </div>
  );
}
