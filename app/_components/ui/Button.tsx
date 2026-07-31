"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "outline" | "outline-light" | "filled" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  outline:
    "border border-ink text-ink",
  "outline-light":
    "border border-canvas text-canvas",
  filled:
    "bg-ink text-canvas border border-ink",
  ghost:
    "text-ink hover:text-gold underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-xs tracking-widest",
  lg: "px-8 py-4 text-sm tracking-widest",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children?: ReactNode;
}

export default function Button({
  variant = "outline",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-sans select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.button
      whileHover={variant !== "ghost" ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={variant === "outline" ? "group" : ""}
    >
      {variant === "outline" ? (
        <span className="relative">
          <span className="block transition-colors duration-300 group-hover:text-gold">
            {children}
          </span>
        </span>
      ) : variant === "outline-light" ? (
        <span className="relative">
          <span className="block transition-colors duration-300 group-hover:text-ink">
            {children}
          </span>
        </span>
      ) : variant === "filled" ? (
        <span className="relative">
          <span className="block transition-colors duration-300 group-hover:bg-night">
            {children}
          </span>
        </span>
      ) : (
        children
      )}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={variant !== "ghost" ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {variant === "outline" ? (
        <span className="relative group">
          <span className="transition-colors duration-300 group-hover:text-gold">
            {children}
          </span>
        </span>
      ) : variant === "outline-light" ? (
        <span className="relative group">
          <span className="transition-colors duration-300 group-hover:text-ink">
            {children}
          </span>
        </span>
      ) : variant === "filled" ? (
        <span className="transition-colors duration-300 hover:bg-night">
          {children}
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
