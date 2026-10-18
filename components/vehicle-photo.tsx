"use client";

import Image from "next/image";
import { useState } from "react";

type VehiclePhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function VehiclePhoto({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: VehiclePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? "/car-fallback.svg" : src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
