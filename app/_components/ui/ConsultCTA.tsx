"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import SafeImage from "./SafeImage";
import { useLocale } from "../../_i18n/LanguageContext";
import { consultCta } from "../../_i18n/content";

interface ConsultCTAProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  bgImageMobile?: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ConsultCTA({
  title,
  subtitle,
  bgImage,
  bgImageMobile,
}: ConsultCTAProps) {
  const { locale } = useLocale();
  const t = consultCta[locale];
  const resolvedTitle = title ?? t.title;
  const resolvedSubtitle = subtitle ?? t.subtitle;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-night py-24 px-6">
      {bgImage && (
        <>
          <SafeImage
            src={bgImage}
            alt=""
            fill
            className="hidden object-cover sm:block"
            sizes="100vw"
          />
          <SafeImage
            src={bgImageMobile ?? bgImage}
            alt=""
            fill
            className="object-cover sm:hidden"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-night/80" />
        </>
      )}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <motion.p
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-sand text-xs tracking-[0.35em] mb-5"
        >
          {t.eyebrow}
        </motion.p>
        <motion.h2
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif-ko text-canvas text-4xl md:text-5xl font-light tracking-tight leading-snug mb-6"
        >
          {resolvedTitle}
        </motion.h2>
        <motion.p
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-dim text-sm leading-relaxed mb-10 whitespace-pre-line"
        >
          {resolvedSubtitle}
        </motion.p>

        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="tel:02-0000-0000"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="font-serif text-canvas text-2xl tracking-[0.15em] hover:text-gold transition-colors duration-300"
          >
            02-0000-0000
          </motion.a>
        </motion.div>

        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button variant="outline-light" size="lg" href="/contact">
            {t.bookOnline}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
