"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";
import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "병원 로비" },
  { src: "/images/gallery/2.jpg", alt: "상담실" },
  { src: "/images/gallery/3.jpg", alt: "진료실" },
  { src: "/images/gallery/4.jpg", alt: "대기실" },
  { src: "/images/gallery/5.jpg", alt: "한약 조제실" },
  { src: "/images/gallery/6.jpg", alt: "추나요법실" },
  { src: "/images/gallery/7.jpg", alt: "원장실" },
  { src: "/images/gallery/8.jpg", alt: "물리치료실" },
];

/* ── 모달 컴포넌트 ─────────────────────────────────── */
function GalleryModal({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) {
  const modalSwiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-night/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute -top-12 right-4 text-canvas/70 hover:text-canvas transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Swiper
          onSwiper={(s) => { modalSwiperRef.current = s; }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".modal-prev",
            nextEl: ".modal-next",
          }}
          initialSlide={initialIndex}
          className="w-full"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full aspect-[4/3]">
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <p className="text-center font-serif text-canvas/60 text-xs tracking-[0.2em] mt-3">
                {img.alt} — {i + 1} / {galleryImages.length}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="modal-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 border border-canvas/30 flex items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="10,2 4,8 10,14" />
          </svg>
        </button>
        <button
          className="modal-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 border border-canvas/30 flex items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6,2 12,8 6,14" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

/* ── 메인 갤러리 컴포넌트 ─────────────────────────── */
export default function HospitalGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % galleryImages.length);
    }, 3500);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoplay]);

  const handleSelectThumbnail = useCallback(
    (index: number) => {
      setActiveIndex(index);
      startAutoplay();
    },
    [startAutoplay]
  );

  const handleOpen = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const active = galleryImages[activeIndex];

  return (
    <section className="py-24 px-6 bg-night border-t border-canvas/10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en="HOSPITAL GALLERY" ko="병원 갤러리" center light />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
          {/* 왼쪽 — 크게 보여지는 대표 이미지 */}
          <button
            onClick={() => handleOpen(activeIndex)}
            className="group relative h-[320px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl focus:outline-none"
            aria-label={`${active.alt} 크게 보기`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <SafeImage
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={activeIndex <= 1}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <p className="absolute bottom-5 left-5 font-serif text-canvas/85 text-xs tracking-[0.2em]">
              {active.alt} — {String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </p>
          </button>

          {/* 오른쪽 — 썸네일 슬라이드 */}
          <div className="grid grid-cols-4 gap-3 lg:h-[480px] lg:grid-cols-2 lg:grid-rows-4">
            {galleryImages.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
                onClick={() => handleSelectThumbnail(i)}
                className={`relative aspect-square overflow-hidden rounded-xl ring-2 transition-all duration-300 focus:outline-none lg:aspect-auto lg:h-full lg:w-full ${
                  i === activeIndex
                    ? "ring-gold opacity-100"
                    : "ring-transparent opacity-55 hover:opacity-90"
                }`}
                aria-label={`${img.alt} 선택`}
              >
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 25vw, 160px"
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handleOpen(activeIndex)}
            className="inline-flex items-center gap-2 border border-canvas/30 px-8 py-3 text-canvas text-xs tracking-[0.25em] transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            더보기
            <svg width="12" height="9" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="0" y1="5" x2="12" y2="5" />
              <polyline points="8,1 12,5 8,9" />
            </svg>
          </button>
        </div>
      </div>

      {selectedIndex !== null && (
        <GalleryModal initialIndex={selectedIndex} onClose={handleClose} />
      )}
    </section>
  );
}
