"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "bg-cream/80 shadow-luxe-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-luxe flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className={`group flex flex-col leading-none transition-colors ${
            scrolled ? "text-charcoal" : "text-cream"
          }`}
        >
          <span className="font-display text-xl font-semibold tracking-tight">
            Apartments Kegalj
          </span>
          <span
            className={`mt-0.5 text-[10px] uppercase tracking-widest2 ${
              scrolled ? "text-olive-600" : "text-cream/80"
            }`}
          >
            Podstrana · Croatia
          </span>
        </a>

        {/* Desktop nav */}
        <ul
          className={`hidden items-center gap-8 lg:flex ${
            scrolled ? "text-charcoal" : "text-cream"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm font-medium tracking-wide opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book Direct
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open ? "text-charcoal" : "text-cream"
          }`}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-display text-4xl font-medium text-charcoal"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-10 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <p className="mt-6 text-sm text-charcoal-50">
                {site.contact.phoneDisplay}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
