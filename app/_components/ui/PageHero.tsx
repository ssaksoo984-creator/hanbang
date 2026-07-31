"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  en?: string;
  title: string;
  description?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PageHero({ en, title, description }: PageHeroProps) {
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-night flex flex-col items-center justify-center text-center py-32 px-6 min-h-[40vh]"
    >
      {en && (
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-sand text-xs tracking-[0.35em] mb-5"
        >
          {en}
        </motion.p>
      )}
      <motion.h1
        variants={itemVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-serif-ko text-canvas text-5xl md:text-6xl font-light tracking-tight leading-tight"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 text-dim text-sm md:text-base leading-relaxed max-w-md"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 w-10 h-px bg-sand"
      />
    </motion.section>
  );
}
