/**
 * Central site configuration — the single source of truth for contact details,
 * booking links and metadata. Update the values here to change them everywhere.
 */

export const site = {
  name: "Apartments Kegalj",
  shortName: "Kegalj",
  tagline: "A Private Mediterranean Escape Near Split",
  description:
    "Apartments Kegalj — a boutique Mediterranean retreat in Podstrana, Croatia, near Split. Four luxury apartments with a swimming pool, outdoor jacuzzi, garden, BBQ area and the sea just 300m away.",
  url: "https://www.apartments-kegalj.com",
  locale: "en",

  location: {
    place: "Podstrana, Croatia",
    near: "Near Split",
    beachDistanceMeters: 300,
    street: "Bartola Kašića 8",
    address: "Bartola Kašića 8, 21312 Podstrana, Croatia",
    // Podstrana coordinates
    lat: 43.4869,
    lng: 16.5556,
    googleMapsEmbed:
      "https://www.google.com/maps?q=Bartola+Ka%C5%A1i%C4%87a+8,+Podstrana,+Croatia&output=embed",
    googleMapsLink:
      "https://maps.google.com/?q=Bartola+Ka%C5%A1i%C4%87a+8,+Podstrana,+Croatia",
    // Verified distances from the listings
    distances: {
      split: "10 km",
      airport: "27 km",
      grocery: "150 m",
      busStop: "200 m",
    },
  },

  rating: {
    score: 8.7,
    max: 10,
    count: 38,
    source: "Booking.com",
  },

  contact: {
    // Update these to the real details before going live.
    phoneDisplay: "+385 91 234 5678",
    phone: "+385912345678",
    whatsapp: "385912345678", // digits only, country code first
    email: "info@apartments-kegalj.com",
  },

  booking: {
    whatsappMessage:
      "Hello Apartments Kegalj! I would like to book a stay. Could you please share availability?",
    bookingCom: "https://www.booking.com/hotel/hr/apartments-kegalj.html",
    airbnb: "https://www.airbnb.com/rooms/31461431",
  },

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Features", href: "#features" },
  { label: "Apartments", href: "#apartments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Book", href: "#book" },
] as const;

/** Builds a pre-filled WhatsApp deep link. */
export function whatsappLink(message: string = site.booking.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}
