# Apartments Kegalj

A premium, boutique-resort website for **Apartments Kegalj** — a private
Mediterranean escape in **Podstrana, Croatia**, near Split.

Built to feel like a luxury villa, not a standard rental page: cinematic hero,
parallax storytelling, glassmorphism, smooth Framer Motion animations and a
strong direct-booking flow.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom Mediterranean palette)
- **Framer Motion** (scroll reveals, parallax, micro-interactions)
- **next/font** — Playfair Display (headings) + Inter (body)
- SEO: metadata, Open Graph, JSON-LD (`LodgingBusiness`), sitemap, robots, manifest
- Accessibility: semantic landmarks, skip link, focus styles, reduced-motion support, keyboard-navigable gallery

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, global SEO metadata
  page.tsx          Section composition + JSON-LD structured data
  globals.css       Tailwind layers, design tokens, utilities
  sitemap.ts / robots.ts / manifest.ts / icon.svg
components/          Navbar, Hero, Experience, Features, Apartments,
                    ApartmentCard, Gallery, Location, BookDirect, Footer,
                    FloatingWhatsApp, Reveal (motion), icons
data/
  site.ts           Contact, booking links, nav, metadata (single source of truth)
  features.ts       Property feature grid
  apartments.ts     The 4 apartments (Apartment 1 = signature sports area)
  gallery.ts        Masonry gallery images
```

## Sections

1. **Hero** — fullscreen cinematic, parallax, dual CTAs
2. **Experience** — emotional storytelling (poolside mornings, summer evenings, family)
3. **Features** — premium icon grid (pool, jacuzzi, parking, garden, BBQ, stone oven, WiFi, beach)
4. **Apartments** — 4 apartments with interactive galleries; Apartment 1 highlighted with its sports/entertainment area
5. **Gallery** — masonry layout with keyboard-accessible lightbox
6. **Location** — interactive map + nearby highlights
7. **Book Direct** — WhatsApp (primary) + Booking.com / Airbnb (secondary)

## Before going live — update these

All editable in [`data/site.ts`](data/site.ts):

- `contact.phone` / `phoneDisplay` / `whatsapp` / `email`
- `booking.bookingCom` and `booking.airbnb` — real listing URLs
- `social.instagram` / `social.facebook`
- `url` — your production domain (used for SEO/canonical)
- `location` coordinates / map embed if you want an exact pin

Replace the placeholder Unsplash imagery in `data/apartments.ts`,
`data/gallery.ts` and the section components with your own photography for the
strongest result.
