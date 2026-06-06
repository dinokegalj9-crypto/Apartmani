const u = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type MasonryImage = {
  src: string;
  alt: string;
  /** Visual weight in the masonry grid. */
  span: "tall" | "wide" | "regular";
};

/** Curated masonry gallery (Section 5). */
export const galleryImages: MasonryImage[] = [
  { src: u("photo-1566073771259-6a8506099945", 1200), alt: "Resort-style pool at dusk", span: "wide" },
  { src: u("photo-1502672260266-1c1ef2d93688"), alt: "Sun terrace overlooking the garden", span: "tall" },
  { src: u("photo-1416879595882-3373a0480b5b"), alt: "Lush Mediterranean garden", span: "regular" },
  { src: u("photo-1571896349842-33c89424de2d"), alt: "Crystal-clear swimming pool", span: "regular" },
  { src: u("photo-1560448204-e02f11c3d0e2"), alt: "Elegant modern living room", span: "tall" },
  { src: u("photo-1499793983690-e29da59ef1c2", 1200), alt: "Adriatic coastline near Podstrana", span: "wide" },
  { src: u("photo-1533777857889-4be7c70b33f7"), alt: "Outdoor dining under the pergola", span: "regular" },
  { src: u("photo-1505693416388-ac5ce068fe85"), alt: "Tranquil bedroom retreat", span: "regular" },
  { src: u("photo-1520250497591-112f2f40a3f4"), alt: "Stone details and Mediterranean charm", span: "tall" },
  { src: u("photo-1602002418816-5c0aeef426aa"), alt: "Evening ambience by the BBQ area", span: "regular" },
  { src: u("photo-1540541338287-41700207dee6"), alt: "Poolside loungers in the sun", span: "wide" },
  { src: u("photo-1512917774080-9991f1c4c750"), alt: "Sunset over the Dalmatian hills", span: "regular" },
];
