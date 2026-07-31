"use client";

import { motion } from "framer-motion";

const PATH_D = `M 74 63
  C 67 71, 57 80, 50 86
  C 22 68, 6 46, 14 25
  C 20 7, 44 7, 50 25
  C 56 7, 80 7, 86 25
  C 92 48, 75 65, 60 54
  C 50 32, 38 24, 24 33
  C 28 55, 42 65, 58 55
  C 50 52, 42 46, 36 40`;

interface BrandMarkProps {
  className?: string;
  strokeWidth?: number;
  /** 뷰포트에 들어올 때 선이 그려지는 애니메이션 */
  animate?: boolean;
}

export default function BrandMark({
  className = "w-6 h-6",
  strokeWidth = 4,
  animate = false,
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {animate ? (
        <motion.path
          d={PATH_D}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      ) : (
        <path d={PATH_D} />
      )}
    </svg>
  );
}
