"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site, whatsappLink } from "@/data/site";
import { ArrowIcon } from "@/components/icons";

const HERO_IMG = "/photos/podstrana-aerial.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMG}
          alt="Aerial view of Podstrana, Croatia, at golden hour near Apartments Kegalj"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 bg-charcoal/25" />
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-luxe relative z-10 text-center text-cream"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-widest2 backdrop-blur-md"
        >
          Podstrana · Croatia · Near Split
        </motion.p>

        <h1
          className="heading-xl mx-auto flex max-w-full flex-nowrap items-baseline justify-center gap-x-[0.28em] whitespace-nowrap text-cream drop-shadow-sm"
          style={{ fontSize: "clamp(0.78rem, 3.8vw, 3.4rem)" }}
        >
          {["Mediterranean", "Studio", "Retreat", "Near", "Split"].map(
            (word, i) => (
              <span key={word} className="inline-block overflow-hidden pb-[0.12em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base font-light tracking-wide text-cream/90 sm:text-lg"
        >
          Pool · Jacuzzi · Garden · BBQ · 300m from the Sea
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Book Your Stay
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a href="#apartments" className="btn-light w-full sm:w-auto">
            Explore Apartments
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-2.5 text-sm text-cream/85"
        >
          <span className="flex" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current text-olive-200">
                <path d="m12 17.3 5.2 3.1-1.4-5.9 4.6-4-6-.5L12 4 9.6 9.9l-6 .5 4.6 4-1.4 5.9z" />
              </svg>
            ))}
          </span>
          <span>
            <strong className="font-semibold text-cream">{site.rating.score}</strong>
            /{site.rating.max} · {site.rating.count} reviews on {site.rating.source}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/50 p-1.5">
          <span className="h-2 w-1 rounded-full bg-cream/80 animate-scroll-hint" />
        </div>
      </motion.div>
    </section>
  );
}
