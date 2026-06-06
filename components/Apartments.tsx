"use client";

import { apartments } from "@/data/apartments";
import { ApartmentCard } from "@/components/ApartmentCard";
import { Reveal } from "@/components/Reveal";

export function Apartments() {
  return (
    <section
      id="apartments"
      className="relative bg-gradient-to-b from-sand-50 to-cream py-24 sm:py-32"
    >
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">The Apartments</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-5 text-balance text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              Four distinct retreats, one unforgettable address
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-charcoal-50">
              Each apartment has its own character — from garden calm to a
              one-of-a-kind active retreat — yet all share the pool, jacuzzi,
              garden and the warm hospitality of Apartments Kegalj.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-10 lg:space-y-14">
          {apartments.map((apartment, i) => (
            <ApartmentCard key={apartment.id} apartment={apartment} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
