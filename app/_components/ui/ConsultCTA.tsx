"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import SafeImage from "./SafeImage";

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
  title = "지금, 상담을 시작하세요",
  subtitle = "전문 한의사와의 1:1 무료 상담을 통해\n체질에 맞는 치료법을 찾아드립니다.",
  bgImage,
  bgImageMobile,
}: ConsultCTAProps) {
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
          CONSULTATION
        </motion.p>
        <motion.h2
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif-ko text-canvas text-4xl md:text-5xl font-light tracking-tight leading-snug mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-dim text-sm leading-relaxed mb-10 whitespace-pre-line"
        >
          {subtitle}
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
            온라인 상담 신청
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
