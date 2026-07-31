"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  en: string;
  ko: string;
  center?: boolean;
  light?: boolean;
  enColor?: string;
}

export default function SectionTitle({
  en,
  ko,
  center = false,
  light = false,
  enColor = "text-sand",
}: SectionTitleProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={center ? "text-center" : ""}
    >
      <motion.p
        variants={itemVariants}
        className={`font-serif ${enColor} text-xs tracking-[0.3em] mb-3`}
      >
        {en}
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className={`font-serif-ko text-3xl md:text-4xl font-light tracking-tight leading-snug ${
          light ? "text-canvas" : "text-ink"
        }`}
      >
        {ko}
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className={`mt-4 w-10 h-px bg-sand ${center ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
