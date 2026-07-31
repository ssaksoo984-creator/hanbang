"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import BrandMark from "../layout/BrandMark";
import SafeImage from "../ui/SafeImage";

const treatments = [
  {
    keyword: "다이어트",
    label: "클리닉",
    en: "DIET",
    href: "/diet",
    desc: "체질 맞춤·산후·성장기 다이어트",
  },
  {
    keyword: "미용",
    label: "클리닉",
    en: "BEAUTY",
    href: "/beauty",
    desc: "한방 동안침·약침 리프팅",
  },
  {
    keyword: "체형교정",
    label: "클리닉",
    en: "POSTURE",
    href: "/posture",
    desc: "추나요법·거북목·성장판 검사",
  },
  {
    keyword: "척추관절",
    label: "클리닉",
    en: "SPINE & JOINT",
    href: "/spine",
    desc: "허리·목 디스크, 어깨·관절 통증",
  },
  {
    keyword: "교통사고",
    label: "클리닉",
    en: "ACCIDENT",
    href: "/spine/accident",
    desc: "자동차보험 처리·입원 치료 가능",
  },
  {
    keyword: "보양",
    label: "클리닉",
    en: "WELLNESS",
    href: "/care",
    desc: "공진단·경옥고, 체질 맞춤 보약",
  },
];

const leftItems = treatments.slice(0, 3);
const rightItems = treatments.slice(3, 6);

type Treatment = (typeof treatments)[number];

function TreatmentBox({
  item,
  index,
  fromRight,
}: {
  item: Treatment;
  index: number;
  fromRight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
    >
      <Link
        href={item.href}
        className="group block rounded-2xl border border-sand/30 bg-black/20 p-6 transition-colors duration-300 hover:border-sand/50 hover:bg-black/30"
      >
        <p className="font-serif text-sand/50 text-[10px] tracking-[0.25em] mb-2">{item.en}</p>
        <h3 className="font-serif-ko text-canvas text-lg md:text-xl font-light leading-snug">
          <span className="text-sand">{item.keyword}</span> {item.label}
        </h3>
        <p className="font-sans-ko text-canvas/55 text-xs mt-2 leading-relaxed">{item.desc}</p>
        <div className="mt-3 flex items-center gap-1.5 text-canvas/45 transition-colors duration-300 group-hover:text-sand">
          <span className="text-[10px] tracking-widest">자세히</span>
          <svg
            width="12"
            height="9"
            viewBox="0 0 14 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="0" y1="5" x2="12" y2="5" />
            <polyline points="8,1 12,5 8,9" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TreatmentCards() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 px-6">
      <SafeImage
        src="/images/treatments/hanbang_treatments_bg.png"
        alt=""
        fill
        className="hidden object-cover sm:block"
        sizes="100vw"
      />
      <SafeImage
        src="/images/treatments/hanbang_treatments_bg_mo.png"
        alt=""
        fill
        className="object-cover sm:hidden"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle en="TREATMENTS" ko="진료분야" center light />

        <div className="mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* 왼쪽 3개 */}
          <div className="order-2 flex flex-col gap-4 lg:order-1">
            {leftItems.map((item, i) => (
              <TreatmentBox key={item.href} item={item} index={i} />
            ))}
          </div>

          {/* 가운데 로고 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 flex flex-col items-center justify-self-center py-4 lg:order-2 lg:py-0"
          >
            <BrandMark
              className="h-32 w-32 text-sand sm:h-40 sm:w-40"
              strokeWidth={1}
              animate
            />
            <p className="mt-6 text-center font-serif-ko font-light text-sm leading-relaxed tracking-wide text-canvas sm:text-base">
              환자를 위한
              <br />
              맞춤 치료 설계
            </p>
          </motion.div>

          {/* 오른쪽 3개 */}
          <div className="order-3 flex flex-col gap-4">
            {rightItems.map((item, i) => (
              <TreatmentBox key={item.href} item={item} index={i} fromRight />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
