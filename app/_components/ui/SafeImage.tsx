"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SafeImage({
  src,
  alt,
  fill,
  className = "",
  priority,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-rule ${fill ? "absolute inset-0" : ""} ${className}`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
      className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className}`}
    />
  );
}
