"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const moments = [
  {
    title: "Poolside mornings",
    body: "Coffee in hand, sunlight on the water, the day still soft and unhurried. This is how every morning should begin.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Long summer evenings",
    body: "The scent of rosemary and woodsmoke from the stone oven and komin, laughter around the table as the fire glows and the sky turns dark.",
    img: "/photos/bbq-komin.jpg",
  },
  {
    title: "Family gatherings",
    body: "Space to come together — and space to slip away. A lush Mediterranean garden made for the people you love most.",
    img: "/photos/garden.jpg",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-8%", "8%"]
  );

  return (
    <section id="experience" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">The Experience</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-5 text-balance text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              Not just a place to stay — a way to live the Mediterranean
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-charcoal-50">
              Time slows here. Days drift between the pool, the garden and the
              sea. Evenings linger over shared meals beneath the stars. Apartments
              Kegalj was made for the moments you&apos;ll remember long after summer
              ends.
            </p>
          </Reveal>
        </div>

        {/* Large feature image with parallax */}
        <Reveal delay={0.1} className="mt-16">
          <div
            ref={ref}
            className="relative h-[55vh] min-h-[360px] overflow-hidden rounded-3xl shadow-luxe"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80"
                alt="Sunlit pool and terrace at Apartments Kegalj"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12">
              <p className="font-display text-2xl text-cream sm:text-4xl">
                Where relaxation comes naturally
              </p>
            </div>
          </div>
        </Reveal>

        {/* Moments grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-2xl bg-sand-50 shadow-luxe-sm">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-charcoal">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal-50">
                    {m.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
