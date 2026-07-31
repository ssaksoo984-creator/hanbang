"use client";

import { useRef, useState } from "react";
import SafeImage from "../ui/SafeImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    sub: "LIV HANBANG CLINIC",
    title: "근본을 다스리는\n리브한의원",
    desc: "체질을 살펴 처방하는 정직한 한의학",
    bg: "/images/hero/hero_hanbang_01.png",
    bgMobile: "/images/hero/hero_hanbang_01_mo.png",
  },
  {
    sub: "20 YEARS OF EXPERIENCE",
    title: "20년 임상 경력\n한의사 직접 진료",
    desc: "처음 상담부터 치료 끝까지 원장이 함께합니다",
    bg: "/images/hero/hero_hanbang_02.png",
    bgMobile: "/images/hero/hero_hanbang_02_mo.png",
  },
  {
    sub: "CUSTOM DIET CLINIC",
    title: "체질을 알면 다이어트가 쉬워집니다",
    desc: "한약·침·상담이 함께하는 체질 맞춤 다이어트",
    bg: "/images/hero/hero_hanbang_03.png",
    bgMobile: "/images/hero/hero_hanbang_03_mo.png",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  return (
    <section className="relative -mt-[6.5rem] h-screen min-h-[640px] overflow-hidden bg-night">
      {/* Swiper — 배경 이미지 */}
      <Swiper
        onSwiper={(s) => { swiperRef.current = s; }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000}
        onSlideChange={(s) => {
          setActiveIndex(s.realIndex);
          setProgressWidth(0);
        }}
        onAutoplayTimeLeft={(_s, _t, pct) => {
          // pct: 1→0 (time remaining ratio). We want 0→1 for fill.
          setProgressWidth((1 - pct) * 100);
        }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <SafeImage
                src={slide.bg}
                alt={slide.title}
                fill
                className="hidden object-cover sm:block"
                priority={i === 0}
                sizes="100vw"
              />
              <SafeImage
                src={slide.bgMobile}
                alt={slide.title}
                fill
                className="object-cover sm:hidden"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 하단 블랙 그라데이션 딤 */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-[5]" />

      {/* 텍스트 오버레이 — 좌측 하단, Framer Motion */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-20 sm:pb-28 pointer-events-none">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl text-left"
            >
              <p className="font-serif text-sand text-xs tracking-[0.4em] mb-5">
                {slides[activeIndex].sub}
              </p>
              <h1 className="font-serif-ko text-canvas font-light leading-tight tracking-tight whitespace-pre-line"
                style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
              >
                {slides[activeIndex].title}
              </h1>
              <div className="w-10 h-px bg-sand my-6" />
              <p className="font-sans-ko text-canvas/75 text-sm md:text-base leading-relaxed">
                {slides[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 좌우 화살표 */}
      <motion.button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="이전 슬라이드"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-canvas/30 bg-ink/20 backdrop-blur-sm items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors duration-300"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="12,2 5,9 12,16" />
        </svg>
      </motion.button>
      <motion.button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="다음 슬라이드"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-canvas/30 bg-ink/20 backdrop-blur-sm items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors duration-300"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="6,2 13,9 6,16" />
        </svg>
      </motion.button>

      {/* 슬라이드 번호 */}
      <div className="hidden sm:flex absolute right-8 bottom-16 z-20 flex-col items-end gap-1">
        <span className="font-serif text-canvas text-xl leading-none">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="w-5 h-px bg-canvas/30" />
        <span className="font-serif text-canvas/40 text-sm leading-none">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* 하단 프로그레스바 */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-canvas/15 z-20">
        <div
          className="h-full bg-gold"
          style={{ width: `${progressWidth}%`, transition: "width 100ms linear" }}
        />
      </div>
    </section>
  );
}
