"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { whatsappLink } from "@/data/site";
import { ArrowIcon } from "@/components/icons";

const HERO_IMG =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80";

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
          alt="Apartments Kegalj pool and Mediterranean garden at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-fade" />
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

        <h1 className="heading-xl mx-auto max-w-5xl text-balance text-[2.75rem] text-cream drop-shadow-sm sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          {["A Private Mediterranean", "Escape Near Split"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.35 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base font-light tracking-wide text-cream/90 sm:text-lg"
        >
          Pool · Jacuzzi · Garden · BBQ · 600m from the Sea
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
