import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Features } from "@/components/Features";
import { Apartments } from "@/components/Apartments";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { BookDirect } from "@/components/BookDirect";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { site } from "@/data/site";

// Structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  priceRange: "€€",
  petsAllowed: false,
  numberOfRooms: 4,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Podstrana",
    addressRegion: "Split-Dalmatia County",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.location.lat,
    longitude: site.location.lng,
  },
  amenityFeature: [
    "Swimming Pool",
    "Outdoor Jacuzzi",
    "Private Parking",
    "Garden",
    "BBQ Area",
    "Stone Oven",
    "Free WiFi",
    "Sports & Fitness Area",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Experience />
        <Features />
        <Apartments />
        <Gallery />
        <Location />
        <BookDirect />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
