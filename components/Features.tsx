"use client";

import { features } from "@/data/features";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-charcoal py-24 text-cream sm:py-32"
    >
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />

      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow text-olive-200">Everything You Need</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Thoughtful comforts, effortlessly provided
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light text-cream/70">
              Every detail of the property is designed to make your stay feel
              easy, indulgent and unmistakably Mediterranean.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <StaggerItem key={title}>
              <div className="group h-full bg-charcoal p-7 transition-colors duration-500 hover:bg-charcoal-200 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-olive-300/40 text-olive-200 transition-all duration-500 group-hover:border-olive-200 group-hover:bg-olive/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm uppercase tracking-widest2 text-cream/40">
            4 Apartments · 3 Private Parking Spaces · Sun Loungers · Outdoor
            Relaxation Areas
          </p>
        </Reveal>
      </div>
    </section>
  );
}
