"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

/** Persistent WhatsApp booking shortcut that appears after the hero. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-olive py-3.5 pl-4 pr-5 text-cream shadow-luxe transition-colors hover:bg-olive-600"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-olive/40" />
          <WhatsAppIcon className="h-6 w-6" />
          <span className="hidden text-sm font-medium sm:inline">Book Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
