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
    size: "75 m²",
    seaView: true,
    tagline: "Where relaxation meets play",
    description:
      "Our largest and most distinctive apartment — a generous 75 m² with a private sea-view balcony and a one-of-a-kind sports and entertainment area. A double bedroom plus flexible sofa beds in the living room sleep up to five, making it the natural choice for active families and groups of friends who want more than a place to sleep.",
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
      { src: u("photo-1560448204-e02f11c3d0e2"), alt: "Bright modern living room of Apartment One" },
      { src: u("photo-1505693416388-ac5ce068fe85"), alt: "Serene bedroom with soft natural light" },
      { src: u("photo-1571896349842-33c89424de2d"), alt: "Swimming pool beside the apartment" },
      { src: u("photo-1571902943202-507ec2618e8f"), alt: "Outdoor activity and lounge area" },
    ],
  },
  {
    id: "apartment-2",
    number: 2,
    name: "Apartment Two — Garden Calm",
    capacity: "2–4 guests",
    bedrooms: "1 bedroom + sofa",
    tagline: "Wake to birdsong and lavender",
    description:
      "A calm, light-filled apartment opening onto the Mediterranean garden. Sip your morning coffee among the herbs and flowers, then drift to the pool just steps away. Ideal for couples and small families.",
    features: [
      "Direct garden access",
      "Cosy double bedroom",
      "Modern kitchen & dining",
      "Air conditioning",
      "Smart TV & fast WiFi",
      "Shaded outdoor seating",
    ],
    gallery: [
      { src: u("photo-1522708323590-d24dbb6b0267"), alt: "Inviting bedroom in Apartment Two" },
      { src: u("photo-1505691938895-1758d7feb511"), alt: "Comfortable living space" },
      { src: u("photo-1556909212-d5b604d0c90d"), alt: "Modern kitchen" },
      { src: u("photo-1416879595882-3373a0480b5b"), alt: "Mediterranean garden setting" },
    ],
  },
  {
    id: "apartment-3",
    number: 3,
    name: "Apartment Three — Sun Terrace",
    capacity: "4 guests",
    bedrooms: "2 bedrooms",
    tagline: "Long lunches, golden sunsets",
    description:
      "Designed for slow summer days, Apartment Three offers a generous private terrace made for long lunches and golden-hour aperitifs. Spacious, airy and elegantly finished for the whole family.",
    features: [
      "Large private terrace",
      "Two comfortable bedrooms",
      "Full kitchen & dining",
      "Air conditioning",
      "Smart TV & fast WiFi",
      "Outdoor dining set",
    ],
    gallery: [
      { src: u("photo-1502005229762-cf1b2da7c5d6"), alt: "Stylish interior of Apartment Three" },
      { src: u("photo-1560185007-cde436f6a4d0"), alt: "Bedroom with terrace view" },
      { src: u("photo-1502672260266-1c1ef2d93688"), alt: "Sunny private terrace" },
      { src: u("photo-1584622650111-993a426fbf0a"), alt: "Contemporary bathroom" },
    ],
  },
  {
    id: "apartment-4",
    number: 4,
    name: "Apartment Four — Coastal Light",
    capacity: "2–3 guests",
    bedrooms: "1 bedroom",
    tagline: "Effortless Mediterranean ease",
    description:
      "An intimate, beautifully styled apartment bathed in coastal light. Everything you need for an effortless escape, with the pool, jacuzzi and garden waiting just outside. A favourite for couples.",
    features: [
      "Bright open living area",
      "Restful double bedroom",
      "Compact modern kitchen",
      "Air conditioning",
      "Smart TV & fast WiFi",
      "Access to all shared areas",
    ],
    gallery: [
      { src: u("photo-1493809842364-78817add7ffb"), alt: "Light-filled living room of Apartment Four" },
      { src: u("photo-1540518614846-7eded433c457"), alt: "Peaceful bedroom" },
      { src: u("photo-1484154218962-a197022b5858"), alt: "Modern kitchen corner" },
      { src: u("photo-1522771739844-6a9f6d5f14af"), alt: "Cosy dining nook" },
    ],
  },
];
