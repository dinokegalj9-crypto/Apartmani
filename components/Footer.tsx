import { navLinks, site, whatsappLink } from "@/data/site";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-400 text-cream/80">
      <div className="container-luxe py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-cream">Apartments Kegalj</p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-olive-200">
              Podstrana · Croatia · Near Split
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              A private Mediterranean escape — four boutique apartments with a
              pool, jacuzzi, garden and the sea just 600m away.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest2 text-cream/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest2 text-cream/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.contact.phone}`} className="flex items-center gap-3 transition-colors hover:text-cream">
                  <PhoneIcon className="h-5 w-5 text-olive-200" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 transition-colors hover:text-cream">
                  <MailIcon className="h-5 w-5 text-olive-200" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.location.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-cream">
                  <MapPinIcon className="h-5 w-5 text-olive-200" />
                  {site.location.place}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {year} Apartments Kegalj. All rights reserved.</p>
          <p>Podstrana, Split-Dalmatia County, Croatia</p>
        </div>
      </div>
    </footer>
  );
}
