"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Apartment } from "@/data/apartments";
import { whatsappLink, site } from "@/data/site";
import {
  UsersIcon,
  BedIcon,
  BathIcon,
  EyeIcon,
  ArrowIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function ApartmentCard({
  apartment,
  index,
}: {
  apartment: Apartment;
  index: number;
}) {
  const [active, setActive] = useState(0);
  const reverse = index % 2 === 1;
  const activeImage = apartment.gallery[active];

  return (
    <Reveal>
      <article
        id={apartment.id}
        className={`scroll-mt-24 overflow-hidden rounded-3xl ${
          apartment.featured
            ? "bg-olive-700 text-cream shadow-luxe ring-1 ring-olive-400/40"
            : "bg-white shadow-luxe-sm"
        }`}
      >
        <div
          className={`grid items-stretch lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Gallery */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.src}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {apartment.featured && (
                <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-olive-700 shadow-luxe-sm">
                  Signature · Sports Area
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {apartment.gallery.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View ${img.alt}`}
                  aria-current={i === active}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                    i === active
                      ? "ring-olive scale-100"
                      : "ring-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span
              className={`text-xs font-medium uppercase tracking-widest2 ${
                apartment.featured ? "text-olive-100" : "text-olive-600"
              }`}
            >
              Apartment {String(apartment.number).padStart(2, "0")}
            </span>
            <h3
              className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${
                apartment.featured ? "text-cream" : "text-charcoal"
              }`}
            >
              {apartment.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p
                className={`font-display text-lg italic ${
                  apartment.featured ? "text-olive-100" : "text-olive-600"
                }`}
              >
                {apartment.tagline}
              </p>
              {apartment.seaView && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                    apartment.featured
                      ? "bg-cream/15 text-cream ring-1 ring-cream/25"
                      : "bg-ocean-50 text-ocean-400 ring-1 ring-ocean-200/60"
                  }`}
                >
                  <EyeIcon className="h-3.5 w-3.5" />
                  Sea view
                </span>
              )}
            </div>

            <p
              className={`mt-5 leading-relaxed ${
                apartment.featured ? "text-cream/80" : "text-charcoal-50"
              }`}
            >
              {apartment.description}
            </p>

            {/* Spec strip */}
            <div
              className={`mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm ${
                apartment.featured ? "text-cream/90" : "text-charcoal"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <UsersIcon className="h-5 w-5 opacity-70" />
                {apartment.capacity}
              </span>
              <span className="inline-flex items-center gap-2">
                <BedIcon className="h-5 w-5 opacity-70" />
                {apartment.bedrooms}
              </span>
              {apartment.bathrooms && (
                <span className="inline-flex items-center gap-2">
                  <BathIcon className="h-5 w-5 opacity-70" />
                  {apartment.bathrooms}
                </span>
              )}
            </div>

            {apartment.beds && (
              <p
                className={`mt-3 text-sm ${
                  apartment.featured ? "text-cream/65" : "text-charcoal-50"
                }`}
              >
                <span className="font-medium">Sleeping:</span> {apartment.beds}
              </p>
            )}

            {/* Features */}
            <ul
              className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 ${
                apartment.featured ? "text-cream/80" : "text-charcoal-50"
              }`}
            >
              {apartment.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      apartment.featured ? "bg-olive-200" : "bg-olive"
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* Special highlight for the featured apartment */}
            {apartment.highlight && (
              <div className="mt-8 rounded-2xl border border-olive-200/30 bg-cream/10 p-6 backdrop-blur-sm">
                <p className="font-display text-xl text-cream">
                  {apartment.highlight.title}
                </p>
                <p className="mt-2 text-sm text-cream/75">
                  {apartment.highlight.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {apartment.highlight.items.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-sm font-medium text-cream ring-1 ring-cream/20"
                    >
                      <Icon className="h-5 w-5 text-olive-100" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <a
                href={whatsappLink(
                  `Hello ${site.name}! I'm interested in Apartment ${apartment.number}. Is it available for my dates?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  apartment.featured
                    ? "btn bg-cream text-olive-700 hover:bg-white hover:-translate-y-0.5"
                    : "btn-primary"
                }
              >
                Enquire about this apartment
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
