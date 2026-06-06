"use client";

import Image from "next/image";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon, PhoneIcon, MailIcon, ArrowIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const perks = [
  "Best available rate — no platform fees",
  "Direct, personal communication with your host",
  "Flexible arrangements & local recommendations",
];

export function BookDirect() {
  return (
    <section id="book" className="relative overflow-hidden bg-charcoal py-24 text-cream sm:py-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/pool-night.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/60" />
      </div>

      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow text-olive-200">Reservations</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Book Direct &amp; Save
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light text-cream/75">
              Reserve straight with us for the best rate and a warmer welcome.
              We reply quickly and personally — usually within the hour.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Primary: WhatsApp */}
          <Reveal className="lg:col-span-3">
            <div className="group relative h-full overflow-hidden rounded-3xl bg-olive p-8 shadow-luxe sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cream/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-cream ring-1 ring-cream/25">
                Recommended
              </span>
              <h3 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
                Book on WhatsApp
              </h3>
              <p className="mt-3 max-w-md text-cream/85">
                The fastest way to check availability and secure your dates. Tap
                below and we&apos;ll take care of the rest.
              </p>

              <ul className="mt-6 space-y-2.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-cream/90">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-cream" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-8 w-full bg-cream text-olive-700 hover:bg-white hover:-translate-y-0.5 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message us on WhatsApp
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Secondary options + contact */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="glass-dark rounded-3xl p-7">
                <p className="text-sm font-medium uppercase tracking-widest2 text-cream/60">
                  Or book via
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href={site.booking.bookingCom}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                  >
                    <span className="font-display text-lg">Booking.com</span>
                    <ArrowIcon className="h-4 w-4 text-cream/70" />
                  </a>
                  <a
                    href={site.booking.airbnb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                  >
                    <span className="font-display text-lg">Airbnb</span>
                    <ArrowIcon className="h-4 w-4 text-cream/70" />
                  </a>
                </div>
              </div>

              <div className="glass-dark rounded-3xl p-7">
                <p className="text-sm font-medium uppercase tracking-widest2 text-cream/60">
                  Talk to us
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={`tel:${site.contact.phone}`} className="flex items-center gap-3 text-cream/90 transition-colors hover:text-cream">
                    <PhoneIcon className="h-5 w-5 text-olive-200" />
                    {site.contact.phoneDisplay}
                  </a>
                  <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 text-cream/90 transition-colors hover:text-cream">
                    <MailIcon className="h-5 w-5 text-olive-200" />
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
