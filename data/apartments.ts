import type { ComponentType, SVGProps } from "react";
import { BoxingIcon, GrassIcon, FitnessIcon } from "@/components/icons";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type GalleryImage = { src: string; alt: string };

export type Apartment = {
  id: string;
  number: number;
  name: string;
  capacity: string;
  bedrooms: string;
  beds?: string;
  bathrooms?: string;
  size?: string;
  seaView?: boolean;
  tagline: string;
  description: string;
  features: string[];
  gallery: GalleryImage[];
  featured?: boolean;
  highlight?: {
    title: string;
    description: string;
    items: { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[];
  };
};

export const apartments: Apartment[] = [
  {
    id: "apartment-1",
    number: 1,
    name: "Apartment One — The Active Retreat",
    capacity: "Up to 5 guests",
    bedrooms: "1 bedroom + living room",
    beds: "1 double bed · sofa bed (2) · sofa bed (1)",
    bathrooms: "1 bathroom",
    seaView: true,
    tagline: "Where relaxation meets play",
    description:
      "Our most distinctive apartment — with a private sea-view balcony and a one-of-a-kind sports and entertainment area. A double bedroom plus flexible sofa beds in the living room sleep up to five, making it the natural choice for active families and groups of friends who want more than a place to sleep.",
    features: [
      "Private sports & activity area",
      "Sea-view balcony & terrace",
      "Open-plan living with sofa beds",
      "Fully equipped kitchen & dining",
      "Air conditioning",
      "Flat-screen TV & free WiFi",
    ],
    featured: true,
    highlight: {
      title: "A Private Sports & Entertainment Area",
      description:
        "Exclusive to Apartment One — a fun recreational space designed to keep every generation moving and laughing all holiday long.",
      items: [
        { label: "Boxing Bag", Icon: BoxingIcon },
        { label: "Artificial Grass Area", Icon: GrassIcon },
        { label: "Fitness & Activity Space", Icon: FitnessIcon },
      ],
    },
    gallery: [
      { src: "/photos/sports-1.jpg", alt: "Private sports area with boxing bag, artificial grass and basketball hoop" },
      { src: "/photos/sports-2.jpg", alt: "Fitness and activity space with boxing bag, agility ladder and exercise bike" },
      { src: "/photos/pool.jpg", alt: "Swimming pool and garden at Apartments Kegalj" },
      { src: "/photos/jacuzzi.jpg", alt: "Outdoor jacuzzi" },
    ],
  },
  {
    id: "apartment-2",
    number: 2,
    name: "Apartment Two — Garden Calm",
    capacity: "Up to 3 guests",
    bedrooms: "1 bedroom",
    beds: "1 double bed · sofa bed (1)",
    bathrooms: "1 bathroom",
    tagline: "Wake to birdsong and lavender",
    description:
      "A calm, light-filled apartment with its own terrace — table, seating and a parasol for shaded, slow Mediterranean mornings. A double bedroom plus a single sofa bed sleeps up to three, with the pool and garden just steps away. Ideal for couples and small families.",
    features: [
      "Private terrace with table, seating & parasol",
      "Comfortable double bedroom",
      "Fully equipped kitchen & dining",
      "Air conditioning",
      "Flat-screen TV & free WiFi",
      "Own part of the garden",
    ],
    gallery: [
      { src: u("photo-1522708323590-d24dbb6b0267"), alt: "Inviting bedroom in Apartment Two" },
      { src: u("photo-1505691938895-1758d7feb511"), alt: "Comfortable living space" },
      { src: u("photo-1556909212-d5b604d0c90d"), alt: "Modern kitchen" },
      { src: "/photos/garden.jpg", alt: "Mediterranean garden beside Apartment Two" },
    ],
  },
  {
    id: "apartment-3",
    number: 3,
    name: "Apartment Three — Sun Terrace",
    capacity: "Up to 4 guests",
    bedrooms: "1 bedroom + living room",
    beds: "1 double bed · sofa bed (2)",
    bathrooms: "1 bathroom",
    tagline: "Long lunches, golden sunsets",
    description:
      "Designed for slow summer days, Apartment Three opens onto a private terrace with table and seating — made for long lunches and golden-hour aperitifs. A double bedroom plus a sofa bed for two in the living room sleeps up to four, airy and elegantly finished for the whole family.",
    features: [
      "Private terrace with table & seating",
      "Double bedroom + sofa bed for two",
      "Fully equipped kitchen & dining",
      "Air conditioning",
      "Flat-screen TV & free WiFi",
      "Own part of the garden",
    ],
    gallery: [
      { src: u("photo-1502005229762-cf1b2da7c5d6"), alt: "Stylish interior of Apartment Three" },
      { src: u("photo-1560185007-cde436f6a4d0"), alt: "Bedroom with terrace view" },
      { src: u("photo-1502672260266-1c1ef2d93688"), alt: "Sunny private terrace" },
      { src: "/photos/garden-flowers-2.jpg", alt: "Flowering Mediterranean garden by Apartment Three" },
    ],
  },
  {
    id: "apartment-4",
    number: 4,
    name: "Apartment Four — Poolside",
    capacity: "Up to 4 guests",
    bedrooms: "1 bedroom + living room",
    beds: "1 double bed · sofa bed (2)",
    bathrooms: "1 bathroom",
    tagline: "Two steps from the pool & jacuzzi",
    description:
      "The closest you can get to the water — the pool and jacuzzi are just two metres from your door, with a table and seating right out front for easy, sun-soaked days. A double bedroom plus a sofa bed for two in the living room sleeps up to four. The perfect choice for guests who want the pool as their front garden.",
    features: [
      "Pool & jacuzzi just 2 m from the door",
      "Private seating area out front",
      "Double bedroom + sofa bed for two",
      "Fully equipped kitchen & dining",
      "Air conditioning",
      "Flat-screen TV & free WiFi",
    ],
    gallery: [
      { src: "/photos/pool.jpg", alt: "Swimming pool just steps from Apartment Four" },
      { src: "/photos/jacuzzi.jpg", alt: "Outdoor jacuzzi beside the pool" },
      { src: "/photos/pool-night.jpg", alt: "Pool illuminated in the evening" },
      { src: "/photos/jacuzzi-night.jpg", alt: "Jacuzzi glowing at night" },
    ],
  },
];
