import type { ComponentType, SVGProps } from "react";
import {
  PoolIcon,
  JacuzziIcon,
  ParkingIcon,
  GardenIcon,
  BbqIcon,
  OvenIcon,
  WifiIcon,
  BeachIcon,
} from "@/components/icons";

export type Feature = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Primary property features shown in the premium icon grid (Section 3). */
export const features: Feature[] = [
  {
    title: "Swimming Pool",
    description: "A glittering pool framed by sun loungers and olive shade.",
    Icon: PoolIcon,
  },
  {
    title: "Outdoor Jacuzzi",
    description: "Unwind under the stars in the warm bubbling jacuzzi.",
    Icon: JacuzziIcon,
  },
  {
    title: "Private Parking",
    description: "Three private parking spaces, secure and steps from your door.",
    Icon: ParkingIcon,
  },
  {
    title: "Mediterranean Garden",
    description: "Fragrant herbs, lavender and flowers in a lush green retreat.",
    Icon: GardenIcon,
  },
  {
    title: "BBQ Area",
    description: "A large outdoor BBQ for long, slow Dalmatian evenings.",
    Icon: BbqIcon,
  },
  {
    title: "Stone Oven & Komin",
    description: "Traditional bread & pizza oven and a stone fireplace (komin).",
    Icon: OvenIcon,
  },
  {
    title: "Free WiFi",
    description: "Fast, complimentary WiFi throughout the entire property.",
    Icon: WifiIcon,
  },
  {
    title: "Beach Nearby",
    description: "The Adriatic Sea is a gentle 600m stroll away.",
    Icon: BeachIcon,
  },
];
