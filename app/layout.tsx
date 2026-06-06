import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Apartments Kegalj",
    "Podstrana apartments",
    "Split accommodation",
    "Croatia vacation rental",
    "luxury apartments Podstrana",
    "apartments near Split with pool",
    "Dalmatia holiday",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/photos/bbq-komin.jpg",
        width: 1800,
        height: 1314,
        alt: "Apartments Kegalj — traditional stone oven and komin in the garden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-olive focus:px-5 focus:py-2.5 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
