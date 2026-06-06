"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { Reveal } from "@/components/Reveal";

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  regular: "",
};

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );
  const prev = useCallback(
    () =>
      setOpen((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Gallery</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-5 text-balance text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              A glimpse of life at Apartments Kegalj
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-2xl ${spanClass[img.span]}`}
                aria-label={`Open image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-white/10 hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-white/10 hover:text-cream sm:left-6"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <motion.div
              key={galleryImages[open].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[78vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[open].src.replace(/w=\d+/, "w=1600")}
                alt={galleryImages[open].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-cream/70">
                {galleryImages[open].alt}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-white/10 hover:text-cream sm:right-6"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
