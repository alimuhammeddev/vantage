"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import VehiclePhoto from "@/components/vehicle-photo";

export default function VehicleGallery({
  images,
  name,
}: {
  images: { src: string; alt: string }[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const mainButtonRef = useRef<HTMLButtonElement>(null);
  const hasOpened = useRef(false);
  useEffect(() => {
    if (expanded) {
      hasOpened.current = true;
      dialogRef.current?.focus();
    } else if (hasOpened.current) {
      mainButtonRef.current?.focus();
    }
  }, [expanded]);
  const move = (step: number) =>
    setActive((current) => (current + step + images.length) % images.length);
  const image = images[active];

  return (
    <>
      <div className="vehicle-gallery">
        <button
          ref={mainButtonRef}
          className="gallery-main"
          type="button"
          onClick={() => setExpanded(true)}
          aria-label={`Expand ${name} image`}
        >
          <VehiclePhoto
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 820px) 100vw, 60vw"
            priority
          />
          <span className="gallery-count">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
          <span className="gallery-expand" aria-hidden="true">
            ↗
          </span>
        </button>
        <div className="gallery-thumbnails">
          {images.map((item, index) => (
            <button
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={index === active}
              className={index === active ? "selected" : ""}
              key={item.src}
              onClick={() => setActive(index)}
              type="button"
            >
              <VehiclePhoto src={item.src} alt="" sizes="100px" />
            </button>
          ))}
          <div className="gallery-controls">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => move(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => move(1)}
            >
              →
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} image gallery`}
          onKeyDown={(event) => {
            if (event.key === "Escape") setExpanded(false);
            if (event.key === "ArrowLeft") move(-1);
            if (event.key === "ArrowRight") move(1);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close image gallery"
            onClick={() => setExpanded(false)}
          >
            ×
          </button>
          <button
            className="lightbox-previous"
            type="button"
            aria-label="Previous image"
            onClick={() => move(-1)}
          >
            ←
          </button>
          <div className="lightbox-image">
            <VehiclePhoto src={image.src} alt={image.alt} sizes="100vw" />
          </div>
          <button
            className="lightbox-next"
            type="button"
            aria-label="Next image"
            onClick={() => move(1)}
          >
            →
          </button>
          <p>{image.alt}</p>
        </div>
      )}
    </>
  );
}
