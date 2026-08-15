"use client";

import { motion } from "framer-motion";
import SafeImage from "../ui/SafeImage";
import { useLocale } from "../../_i18n/LanguageContext";
import { doctorIntro } from "../../_i18n/content";

export default function DoctorIntro() {
  const { locale } = useLocale();
  const t = doctorIntro[locale];

  return (
    <section className="bg-night px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* 왼쪽 타이틀 */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-serif text-sand text-xs tracking-[0.3em] mb-5">{t.eyebrow}</p>
          <h2 className="font-serif-ko text-canvas text-3xl md:text-4xl font-light leading-snug">
            {t.titleLine1}
          </h2>
          <h2 className="mt-2 font-serif-ko text-dim text-2xl md:text-3xl font-light leading-snug">
            {t.titleLine2}
          </h2>
          <div className="mt-8 h-px w-10 bg-sand" />
        </div>

        {/* 오른쪽 — 스크롤 시 등장하는 원장 사진 & 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-canvas/10">
            <SafeImage
              src="/images/doctors/doctor-01.jpg"
              alt={t.doctorName}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-serif text-gold text-5xl leading-none">&ldquo;</p>
            <p className="mt-2 font-sans-ko text-canvas/85 text-base md:text-lg leading-loose whitespace-pre-line">
              {t.quote}
            </p>
            <p className="mt-6 font-serif-ko font-light text-canvas text-sm tracking-widest">
              {t.doctorName}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
