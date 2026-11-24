/**
 * Job photos for Jamestudio Construction.
 *
 * Drop new images in src/assets/gallery/ (jpg, png, or webp). Add a matching
 * entry below so the photo is categorized and captioned. Files with no entry
 * still show on the gallery page under "More project photos".
 *
 * Privacy: 484788982, 484167216, 484110966, and 484329282 are tighter crops
 * so workers and vehicles are not in the published frame. 482033939 is not
 * in the folder because the yard in that shot has children's toys.
 */
import type { ImageMetadata } from "astro";
import { newWork } from "./newWork";

export const categories = [
  { id: "pergolas", label: "Pergolas & Covered Patios" },
  { id: "fences", label: "Fences" },
  { id: "bathrooms", label: "Bathroom Remodels" },
  { id: "kitchens", label: "Kitchens" },
  { id: "hardscape", label: "Hardscape & Stone" },
  { id: "painting", label: "Painting" },
  { id: "roofing", label: "Roofing & Siding" },
  { id: "decks", label: "Decks" },
  { id: "openings", label: "Doors & Windows" },
  { id: "flooring", label: "Flooring" },
  { id: "remodels", label: "Whole-home" },
  { id: "carpentry", label: "Built-ins & Carpentry" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type StoryId =
  | "patio"
  | "tub"
  | "bath-progress"
  | "shelves"
  | "siding"
  | "garage"
  | "fireplace"
  | "drain"
  | "planter";

export type PhotoRecord = {
  id: string;
  file: string;
  alt: string;
  caption: string;
  category: CategoryId;
  services: string[];
  /** 1–6, in the order James's hero candidates should appear. */
  hero?: number;
  featured?: boolean;
  /** Shown in the homepage recent-work grid. */
  highlight?: boolean;
  /** Crew-at-work photo for the homepage and about page. */
  crew?: boolean;
  /** Soft frame. Show it small, never as a hero. */
  soft?: boolean;
  story?: StoryId;
  step?: number;
  stepLabel?: string;
};

const catalog: PhotoRecord[] = [
  {
    id: "482226989",
    file: "482226989.jpg",
    alt: "Cedar pergola with a metal roof over a new concrete patio",
    caption: "Cedar pergola with a metal roof",
    category: "pergolas",
    services: ["covered-patios", "fencing-pergolas", "concrete-patio-slabs"],
    featured: true,
  },
  {
    id: "484344220",
    file: "484344220.jpg",
    alt: "Wood patio cover with a metal roof in warm evening light",
    caption: "Finished patio cover",
    category: "pergolas",
    services: ["covered-patios", "fencing-pergolas", "metal-roofing"],
    hero: 2,
    story: "patio",
    step: 5,
    stepLabel: "Finished cover",
  },
  {
    id: "906782984",
    file: "906782984.jpg",
    alt: "Dark-stained wood pergola attached to a brick house",
    caption: "Stained wood pergola",
    category: "pergolas",
    services: ["covered-patios", "fencing-pergolas"],
    hero: 3,
  },
  {
    id: "913214665",
    file: "913214665.jpg",
    alt: "Stained wood privacy fence with river rock along the base",
    caption: "Stained privacy fence",
    category: "fences",
    services: ["fencing-pergolas"],
    hero: 4,
  },
  {
    id: "482319841",
    file: "482319841.jpg",
    alt: "Shower with white subway tile, a hexagon marble stripe, and a black-framed glass enclosure",
    caption: "Subway tile and hexagon shower",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
    hero: 5,
  },
  {
    id: "716950483",
    file: "716950483.jpg",
    alt: "Walk-in shower lined with large stone-look tile and matte black fixtures",
    caption: "Stone-look tile shower",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
    hero: 6,
  },
  {
    id: "913214464",
    file: "913214464.jpg",
    alt: "Wide stained-wood pergola across the back of a brick house",
    caption: "Stained pergola on a brick house",
    category: "pergolas",
    services: ["covered-patios", "fencing-pergolas"],
    featured: true,
  },
  {
    id: "912661641",
    file: "912661641.jpg",
    alt: "Stained wood ceiling and beams under a pergola",
    caption: "Pergola ceiling",
    category: "pergolas",
    services: ["covered-patios", "fencing-pergolas"],
  },
  {
    id: "480702614",
    file: "480702614.jpg",
    alt: "Wood patio cover beside a pool at dusk, with string lights on",
    caption: "Patio cover at dusk",
    category: "pergolas",
    services: ["covered-patios"],
    featured: true,
  },
  {
    id: "484123925",
    file: "484123925.jpg",
    alt: "Corrugated metal roof on a wood patio cover, next to a metal house roof",
    caption: "Metal roof on a patio cover",
    category: "pergolas",
    services: ["covered-patios", "metal-roofing"],
  },
  {
    id: "484134578",
    file: "484134578.jpg",
    alt: "Wood posts set on a concrete slab in front of a house with a metal roof",
    caption: "Posts set on the slab",
    category: "pergolas",
    services: ["covered-patios", "framing", "metal-roofing", "concrete-patio-slabs"],
    story: "patio",
    step: 3,
    stepLabel: "Posts",
  },
  {
    id: "484788982",
    file: "484788982.jpg",
    alt: "String lines and stakes marking the layout of a patio before the slab",
    caption: "Layout lines before the pour",
    category: "pergolas",
    services: ["covered-patios", "concrete-patio-slabs"],
    story: "patio",
    step: 1,
    stepLabel: "Layout",
  },
  {
    id: "484167216",
    file: "484167216.jpg",
    alt: "Freshly finished concrete patio slab along the back of a house",
    caption: "Concrete slab",
    category: "pergolas",
    services: ["concrete-patio-slabs", "covered-patios"],
    story: "patio",
    step: 2,
    stepLabel: "Concrete slab",
  },
  {
    id: "484110966",
    file: "484110966.jpg",
    alt: "Wood framing of a patio cover, with posts, beams, and rafters in place",
    caption: "Patio cover framing",
    category: "pergolas",
    services: ["covered-patios", "framing"],
    story: "patio",
    step: 4,
    stepLabel: "Framing",
  },
  {
    id: "484329282",
    file: "484329282.jpg",
    alt: "Close view of patio-cover rafters meeting a post",
    caption: "Rafters",
    category: "pergolas",
    services: ["covered-patios", "framing"],
    story: "patio",
    step: 4,
    stepLabel: "Framing",
  },
  {
    id: "913214640",
    file: "913214640.jpg",
    alt: "Stained wood fence panels on galvanized steel posts",
    caption: "Fence on steel posts",
    category: "fences",
    services: ["fencing-pergolas"],
    featured: true,
  },
  {
    id: "913432971",
    file: "913432971.jpg",
    alt: "Stained wood fence wrapping a corner around a concrete pad",
    caption: "Fence corner",
    category: "fences",
    services: ["fencing-pergolas"],
  },
  {
    id: "125819266",
    file: "125819266.jpg",
    alt: "Gray tile shower with a glass panel, two niches, and a pebble floor",
    caption: "Gray tile shower",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
    featured: true,
  },
  {
    id: "125217072-vanity",
    file: "125217072-vanity.jpg",
    alt: "White double vanity with a marble-look top in a remodeled bathroom",
    caption: "Double vanity",
    category: "bathrooms",
    services: ["bathroom-remodeling"],
    featured: true,
  },
  {
    id: "125256598",
    file: "125256598.jpg",
    alt: "Close view of a double vanity with a marble-look countertop and chrome faucets",
    caption: "Vanity countertop",
    category: "bathrooms",
    services: ["bathroom-remodeling"],
  },
  {
    id: "482253333",
    file: "482253333.jpg",
    alt: "Dark hexagon floor tile in a bathroom, next to a light wood vanity",
    caption: "Hexagon floor tile",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
  },
  {
    id: "125217072-toilet",
    file: "125217072-toilet.jpg",
    alt: "Bathroom with a new toilet and a shelf above it",
    caption: "Bathroom",
    category: "bathrooms",
    services: ["bathroom-remodeling"],
  },
  {
    id: "484083838",
    file: "484083838.jpg",
    alt: "Freestanding tub with white subway tile, black fixtures, and dark hexagon floor tile",
    caption: "Freestanding tub",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
    featured: true,
  },
  {
    id: "482253237",
    file: "482253237.jpg",
    alt: "Before and after of a tub replacement: a built-in corner tub above, a freestanding tub with subway tile below",
    caption: "Tub replacement, before and after",
    category: "bathrooms",
    services: ["bathroom-remodeling", "tub-shower-tile"],
    story: "tub",
    step: 1,
    stepLabel: "Before and after",
  },
  {
    id: "875946269",
    file: "875946269.jpg",
    alt: "Bathroom before the remodel, with the original tub, vanity, and tile",
    caption: "How it started",
    category: "bathrooms",
    services: ["bathroom-remodeling"],
    story: "bath-progress",
    step: 1,
    stepLabel: "How it started",
  },
  {
    id: "876440748",
    file: "876440748.jpg",
    alt: "The same bathroom during demo, with walls opened and the tub removed",
    caption: "How it's going",
    category: "bathrooms",
    services: ["bathroom-remodeling", "demolition", "framing"],
    story: "bath-progress",
    step: 2,
    stepLabel: "How it's going",
  },
  {
    id: "485867711",
    file: "485867711.jpg",
    alt: "Light wood deck with a picket railing beside a pool",
    caption: "Deck beside a pool",
    category: "decks",
    services: ["wood-decks"],
    featured: true,
  },
  {
    id: "486095857",
    file: "486095857.jpg",
    alt: "Wood deck built around a mature tree, with a boxed opening at the trunk",
    caption: "Deck around a tree",
    category: "decks",
    services: ["wood-decks"],
  },
  {
    id: "486118953",
    file: "486118953.jpg",
    alt: "Curved wood deck wrapping around a tree next to a pool",
    caption: "Curved deck",
    category: "decks",
    services: ["wood-decks"],
  },
  {
    id: "486416866",
    file: "486416866.jpg",
    alt: "Wood deck with a railing and steps, built around a tree in a backyard",
    caption: "Deck with railing and steps",
    category: "decks",
    services: ["wood-decks"],
    featured: true,
  },
  {
    id: "483493419",
    file: "483493419.jpg",
    alt: "Floor-to-ceiling built-in shelves in unfinished plywood",
    caption: "Shelves, before paint",
    category: "carpentry",
    services: ["built-in-shelving"],
    story: "shelves",
    step: 1,
    stepLabel: "Raw",
  },
  {
    id: "483598728",
    file: "483598728.jpg",
    alt: "The same built-in shelves after paint, with doors on the lower cabinets",
    caption: "Shelves, painted",
    category: "carpentry",
    services: ["built-in-shelving"],
    featured: true,
    story: "shelves",
    step: 2,
    stepLabel: "Painted",
  },
  {
    id: "482212796",
    file: "482212796.jpg",
    alt: "Cedar siding and architectural shingles on a dormer",
    caption: "Cedar siding and shingles",
    category: "roofing",
    services: ["siding", "shingle-roofing"],
    featured: true,
  },
  {
    id: "482962072",
    file: "482962072.jpg",
    alt: "Cedar siding on a dormer beside a brick chimney",
    caption: "Cedar siding",
    category: "roofing",
    services: ["siding", "shingle-roofing"],
  },
  {
    id: "482985566",
    file: "482985566.jpg",
    alt: "Cedar siding and a double-hung window on a dormer with a shingle roof",
    caption: "Cedar siding and window",
    category: "roofing",
    services: ["siding", "shingle-roofing"],
  },
  {
    id: "480868413",
    file: "480868413.jpg",
    alt: "Light corrugated metal roof panels installed above an existing shingle roof",
    caption: "Metal roof over shingles",
    category: "roofing",
    services: ["metal-roofing", "shingle-roofing", "covered-patios"],
  },
  ...(newWork as PhotoRecord[]),
];

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
);

function findSrc(file: string) {
  const entry = Object.entries(modules).find(([path]) => path.endsWith("/" + file));
  if (!entry) {
    throw new Error(`Gallery file missing: src/assets/gallery/${file}`);
  }
  return entry[1];
}

export type Photo = PhotoRecord & { src: ImageMetadata };

const knownFiles = new Set(catalog.map((item) => item.file));

export const photos: Photo[] = catalog.map((item) => ({
  ...item,
  src: findSrc(item.file),
}));

export const extraPhotos: Photo[] = Object.entries(modules)
  .filter(([path]) => !knownFiles.has(path.split("/").pop() ?? ""))
  .map(([path, src]) => {
    const file = path.split("/").pop() ?? "photo";
    const id = file.replace(/\.[^.]+$/, "");
    return {
      id,
      file,
      alt: "Jamestudio Construction project photo",
      caption: "Project photo",
      category: "pergolas",
      services: [],
      src,
    };
  });

export function heroes() {
  return photos.filter((photo) => photo.hero).sort((a, b) => (a.hero ?? 0) - (b.hero ?? 0));
}

export function featuredPhotos() {
  return photos.filter((photo) => photo.featured);
}

export function highlightPhotos() {
  return photos.filter((photo) => photo.highlight);
}

export function crewPhotos() {
  return photos.filter((photo) => photo.crew);
}

export function photosInCategory(id: CategoryId) {
  return photos.filter((photo) => photo.category === id);
}

export function photosForService(slug: string) {
  return photos.filter((photo) => photo.services.includes(slug));
}

export function storySteps(id: StoryId) {
  const items = photos
    .filter((photo) => photo.story === id)
    .sort((a, b) => (a.step ?? 0) - (b.step ?? 0) || a.id.localeCompare(b.id));
  const groups: { step: number; label: string; photos: Photo[] }[] = [];
  for (const photo of items) {
    const step = photo.step ?? 0;
    const current = groups[groups.length - 1];
    if (current && current.step === step) {
      current.photos.push(photo);
    } else {
      groups.push({ step, label: photo.stepLabel ?? photo.caption, photos: [photo] });
    }
  }
  return groups;
}

export function categoryLabel(id: CategoryId) {
  return categories.find((category) => category.id === id)?.label ?? id;
}
