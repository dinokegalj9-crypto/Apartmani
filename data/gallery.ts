const u = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type MasonryImage = {
  src: string;
  alt: string;
  /** Visual weight in the masonry grid. */
  span: "tall" | "wide" | "regular";
};

/** Curated masonry gallery (Section 5). Real property photos lead the set. */
export const galleryImages: MasonryImage[] = [
  { src: "/photos/pool-night.jpg", alt: "Swimming pool glowing turquoise in the evening", span: "wide" },
  { src: "/photos/sports-1.jpg", alt: "Private sports area with boxing bag and artificial grass", span: "tall" },
  { src: "/photos/jacuzzi.jpg", alt: "Outdoor jacuzzi with bubbling water", span: "regular" },
  { src: "/photos/garden.jpg", alt: "Mediterranean garden with oleander and lawn", span: "regular" },
  { src: "/photos/bbq-komin.jpg", alt: "Traditional stone oven and komin with an open fire", span: "tall" },
  { src: "/photos/pool.jpg", alt: "Swimming pool and garden by day", span: "wide" },
  { src: "/photos/sports-2.jpg", alt: "Fitness area with agility ladder, exercise bike and trophies", span: "regular" },
  { src: "/photos/garden-flowers.jpg", alt: "Flowering garden beds beside the apartments", span: "regular" },
  { src: "/photos/jacuzzi-night.jpg", alt: "Jacuzzi illuminated at night", span: "tall" },
  { src: "/photos/garden-flowers-2.jpg", alt: "Red verbena flowers in the garden", span: "regular" },
  { src: u("photo-1499793983690-e29da59ef1c2", 1200), alt: "Adriatic coastline near Podstrana", span: "wide" },
  { src: u("photo-1512917774080-9991f1c4c750"), alt: "Sunset over the Dalmatian hills", span: "regular" },
];
