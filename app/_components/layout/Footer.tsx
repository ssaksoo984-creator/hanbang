"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getMainNav, getAboutNav, getTreatmentNav } from "./nav";
import { useLocale } from "../../_i18n/LanguageContext";
import { brandName, nav as navText, footer as footerText, location as locationText } from "../../_i18n/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Footer() {
  const { locale } = useLocale();
  const mainNav = getMainNav(locale);
  const aboutNav = getAboutNav(locale);
  const treatmentNav = getTreatmentNav(locale);
  const t = footerText[locale];
  const loc = locationText[locale];

  return (
    <footer className="bg-night text-canvas">
      {/* 메인 푸터 */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* 브랜드 */}
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="font-serif-ko font-light text-2xl tracking-[0.15em] text-canvas hover:text-gold transition-colors"
            >
              {brandName[locale]}
            </Link>
            <p className="mt-4 text-dim text-sm leading-relaxed whitespace-pre-line">
              {t.tagline}
            </p>
          </motion.div>

          {/* 사이트맵 */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 sm:gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">{t.menu}</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                    {navText[locale].home}
                  </Link>
                </li>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">{t.about}</p>
              <ul className="flex flex-col gap-2">
                {aboutNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">{t.treatmentsLabel}</p>
              <ul className="flex flex-col gap-2">
                {treatmentNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 연락처 */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-[0.2em] text-dim mb-4">{t.contact}</p>
            <address className="not-italic flex flex-col gap-2 text-xs text-canvas/70 leading-relaxed">
              <a href="tel:02-0000-0000" className="tracking-widest hover:text-gold transition-colors">
                {loc.phone}
              </a>
              <p className="tracking-wide">{loc.address}</p>
              <div className="mt-2">
                {t.hours.map((line, i) => (
                  <p
                    key={line}
                    className={`tracking-wide ${i === t.hours.length - 1 ? "text-dim" : ""}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </address>
          </motion.div>
        </motion.div>
      </div>

      {/* 하단 바 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-canvas/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dim tracking-wide">
            © 2026 Liv Hanbang Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-dim hover:text-canvas transition-colors tracking-wide">
              {t.terms}
            </Link>
            <Link href="#" className="text-xs text-dim hover:text-canvas transition-colors tracking-wide">
              {t.privacy}
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
