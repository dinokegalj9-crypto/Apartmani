"use client";

import { site } from "@/data/site";
import { MapPinIcon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const highlights = [
  {
    title: "Sea & Sandy Beach",
    detail: "300 m",
    body: "A quiet, family-friendly sandy beach on the clear Adriatic, just a few minutes' walk away.",
  },
  {
    title: "Split & Diocletian's Palace",
    detail: "10 km",
    body: "The UNESCO-listed old town, Riva waterfront and ferry port — roughly a 15-minute drive.",
  },
  {
    title: "Shops & Bus Stop",
    detail: "150–200 m",
    body: "The nearest grocery store is 150 m away and a local bus stop just 200 m from your door.",
  },
  {
    title: "Split Airport",
    detail: "27 km",
    body: "Easy transfers to and from Split (Resnik) Airport, with islands like Brač & Hvar within reach.",
  },
];

export function Location() {
  return (
    <section id="location" className="bg-sand-50 py-24 sm:py-32">
      <div className="container-luxe">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <Reveal>
              <span className="eyebrow">Location</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-xl mt-5 text-balance text-4xl text-charcoal sm:text-5xl lg:text-6xl">
                Perfectly placed on the Dalmatian coast
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg font-light leading-relaxed text-charcoal-50">
                Tucked into the green hills of Podstrana, Apartments Kegalj
                balances peaceful seclusion with easy access to the sea, Split
                and the very best of the coast.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={site.location.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-olive-600 link-underline"
              >
                <MapPinIcon className="h-5 w-5" />
                {site.location.address}
              </a>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <StaggerItem key={h.title}>
                  <div className="h-full rounded-2xl border border-charcoal/10 bg-cream p-6 transition-shadow duration-300 hover:shadow-luxe-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl text-charcoal">
                        {h.title}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-widest2 text-olive-600">
                        {h.detail}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-50">
                      {h.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-luxe lg:h-[640px]">
              <iframe
                title="Map of Apartments Kegalj in Podstrana, Croatia"
                src={site.location.googleMapsEmbed}
                className="h-full w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
