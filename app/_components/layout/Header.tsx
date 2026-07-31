"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { mainNav, aboutNav, treatmentNav } from "./nav";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import BrandMark from "./BrandMark";
import { languages } from "../../_data/languages";

function DropdownMenu({
  items,
  label,
  light,
}: {
  items: readonly { label: string; href: string }[];
  label: string;
  light: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className={`cursor-default text-sm tracking-widest transition-colors select-none group-hover:text-gold ${
          light ? "text-canvas" : "text-ink"
        }`}
      >
        {label}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50"
          >
            <div className="bg-canvas border border-rule shadow-lg py-2 w-40">
              {items.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block px-5 py-2.5 text-xs tracking-widest text-ink hover:text-gold hover:bg-rule/30 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const light = isHome && !scrolled;

  return (
    <header className="relative h-16">
      <div
        className={`absolute inset-0 border-b transition-all duration-300 ${
          light
            ? "bg-transparent border-transparent"
            : "bg-canvas/95 backdrop-blur-sm border-rule"
        }`}
      />
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* 로고 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            href="/"
            className={`flex items-center gap-2 font-serif-ko font-light text-xl tracking-[0.15em] transition-colors hover:text-gold ${
              light ? "text-canvas" : "text-ink"
            }`}
          >
            <BrandMark className="w-5 h-5" />
            리브한의원
          </Link>
        </motion.div>

        {/* 데스크탑 내비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          <DropdownMenu items={aboutNav} label="병원소개" light={light} />

          {treatmentNav.map((group) => (
            <DropdownMenu key={group.href} items={group.sub} label={group.label} light={light} />
          ))}

          {mainNav.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href={item.href}
                className={`text-sm tracking-widest transition-colors hover:text-gold ${
                  light ? "text-canvas" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <LanguageSwitcher languages={languages} light={light} />
        </nav>

        {/* 모바일 메뉴 */}
        <MobileMenu light={light} />
      </div>
    </header>
  );
}
