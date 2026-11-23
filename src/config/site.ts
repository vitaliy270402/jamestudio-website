/**
 * James Studio Construction — business configuration.
 *
 * Edit this file to change contact info, the service list, the cities shown
 * for the service area, the quote-form backend, and analytics. Page copy
 * reads from here. Job photos are listed separately in src/data/gallery.ts.
 *
 * Hours and license numbers are unknown. Leave those fields null.
 * Do not invent them.
 */

export const serviceGroups = ["Remodels", "Outdoor", "Exterior", "Repairs"] as const;

export type ServiceGroup = (typeof serviceGroups)[number];

export type Service = {
  slug: string;
  /** Short name used on cards and in the menu. */
  name: string;
  /** Phrase used in the H1, e.g. "Bathroom Remodeling". */
  seoName: string;
  group: ServiceGroup;
  summary: string;
  meta: string;
  paragraphs: string[];
  /** Only include scope items James has actually stated. */
  includes?: string[];
};

export type City = {
  name: string;
  /** home = DeSoto base. past = a city where he has done work. Omit for service-area cities. */
  role?: "home" | "past";
};

export const site = {
  name: "JAMESTUDIO CONSTRUCTION",
  legalName: "James Studio Construction",
  owner: "James Koban",
  tagline: "We take care of your home needs!",
  taglines: [
    "We take care of your home needs!",
    "Quality of work and friendly atmosphere are our priorities!",
    "We are insured and give warranty!",
  ],
  description:
    "James Studio Construction is a home-improvement contractor based in DeSoto, Texas, serving DeSoto and the Dallas–Fort Worth area.",

  phoneDisplay: "(254) 833-7392",
  phoneTel: "+12548337392",

  /**
   * Public email. This is the only address the site prints and the only
   * address used in mailto links. Change it here when the new Gmail is ready,
   * then point the form provider at that same inbox (see the README).
   */
  email: "jamestudio1115@hotmail.com",

  address: {
    city: "DeSoto",
    region: "TX",
    postalCode: "75134",
    country: "US",
  },

  serviceAreaLabel: "DeSoto & the Dallas–Fort Worth area",

  /**
   * Cities shown in the service-area section.
   * role "home" is the home base. role "past" is a city with stated past work.
   * Cities without a role are part of the Dallas–Fort Worth service area,
   * not a claim that a job was finished there. Add or remove freely.
   */
  cities: [
    { name: "DeSoto", role: "home" },
    { name: "McKinney", role: "past" },
    { name: "Garland", role: "past" },
    { name: "Dallas" },
    { name: "Duncanville" },
    { name: "Cedar Hill" },
    { name: "Lancaster" },
    { name: "Grand Prairie" },
    { name: "Arlington" },
    { name: "Fort Worth" },
    { name: "Irving" },
    { name: "Mesquite" },
    { name: "Richardson" },
    { name: "Plano" },
    { name: "Carrollton" },
    { name: "Mansfield" },
  ] as City[],

  facebook: {
    url: "https://www.facebook.com/jamestudioconstruction",
    recommendPercent: 98,
    reviewCount: 13,
    label: "98% recommend on Facebook (13 reviews)",
  },

  /**
   * TODO: Business hours are not on file. Leave null until James confirms them.
   * Example once known: "Monday–Saturday, 8:00 a.m.–6:00 p.m."
   */
  hours: null as string | null,

  /**
   * TODO: License number is not on file. Leave null until James confirms it.
   * Example once known: "Texas contractor license #000000"
   */
  license: null as string | null,

  /**
   * Canonical site URL, no trailing slash.
   * Override at build time with the SITE_URL environment variable.
   * Update this before launch if the live domain is different.
   */
  siteUrl: "https://jamestudioconstruction.com",

  /**
   * Google Analytics 4 measurement ID. Leave "" to keep the tag off the site.
   * Example: "G-XXXXXXXXXX"
   */
  gaMeasurementId: "",

  form: {
    /**
     * Which service receives quote requests.
     * "" shows a call / email fallback and does not post anywhere.
     * "formspree" | "web3forms" | "netlify"
     */
    provider: "" as "" | "formspree" | "web3forms" | "netlify",
    /** The id in https://formspree.io/f/YOUR_ID */
    formspreeId: "",
    /** Web3Forms access key. The key is tied to the inbox that should get leads. */
    web3formsAccessKey: "",
    netlifyFormName: "free-estimate",
  },

  brand: {
    navy: "#1F1E3D",
    orange: "#F27E17",
  },
};

export const services: Service[] = [
  {
    slug: "complete-house-remodels",
    name: "Complete House Remodels",
    seoName: "Complete House Remodeling",
    group: "Remodels",
    summary: "Whole-home remodeling for homeowners who want one contractor on the job.",
    meta: "Complete house remodeling in DeSoto, TX and the Dallas–Fort Worth area by James Studio Construction. Insured, with a warranty. Call for a free estimate.",
    paragraphs: [
      "James Studio Construction takes on complete house remodels for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Quality of work and a friendly atmosphere are the priorities. The company is insured and gives a warranty. Call or request a free estimate and describe the rooms you want redone.",
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    seoName: "Bathroom Remodeling",
    group: "Remodels",
    summary: "Bathroom remodels, including showers, tubs, vanities, and tile.",
    meta: "Bathroom remodeling in DeSoto, TX. Showers, tubs, vanities, and tile by James Studio Construction. Free estimates for the Dallas–Fort Worth area.",
    paragraphs: [
      "Bathroom remodeling in DeSoto, TX and across the Dallas–Fort Worth area. James Studio Construction remodels bathrooms for local homeowners.",
      "Recent projects include tiled showers, tub replacements, vanities, and floor tile. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    seoName: "Kitchen Remodeling",
    group: "Remodels",
    summary: "Kitchen remodels, from the layout you have to the kitchen you want.",
    meta: "Kitchen remodeling in DeSoto, TX and the Dallas–Fort Worth area. Request a free estimate from James Studio Construction.",
    paragraphs: [
      "Kitchen remodeling is one of the services James Studio Construction offers homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Tell James what you want changed and he will follow up with a free estimate. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "tub-shower-tile",
    name: "Tub, Shower & Tile",
    seoName: "Tub, Shower & Tile Installation",
    group: "Remodels",
    summary: "Tub replacements, shower builds, and tile on walls and floors.",
    meta: "Tub, shower, and tile installation in DeSoto, TX. James Studio Construction replaces tubs and builds tiled showers across Dallas–Fort Worth.",
    paragraphs: [
      "James Studio Construction installs tubs, showers, and tile for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Recent work includes a tub replacement, subway-tile and hexagon showers, a stone-look shower, and a gray tile shower with a niche. Insured, with a warranty.",
    ],
  },
  {
    slug: "fencing-pergolas",
    name: "Fencing & Pergolas",
    seoName: "Fencing & Pergolas",
    group: "Outdoor",
    summary: "Wood fences and pergolas, including stained privacy fences and shade structures.",
    meta: "Fencing and pergolas in DeSoto, TX. Stained wood fences and pergolas by James Studio Construction across the Dallas–Fort Worth area.",
    paragraphs: [
      "Fencing and pergolas are part of the outdoor work James Studio Construction does in DeSoto and the Dallas–Fort Worth area.",
      "Recent projects include stained wood privacy fences and stained wood pergolas on brick homes. Quality of work and a friendly atmosphere are the priorities.",
    ],
  },
  {
    slug: "covered-patios",
    name: "Covered Patios",
    seoName: "Covered Patios & Patio Covers",
    group: "Outdoor",
    summary: "Wood patio covers and pergolas, including covers with metal roofs.",
    meta: "Covered patios and patio covers in DeSoto, TX. Wood frames and metal roofs by James Studio Construction in the Dallas–Fort Worth area.",
    paragraphs: [
      "James Studio Construction builds covered patios and patio covers for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Recent projects include cedar pergolas, stained pergolas, and wood patio covers with metal roofs, from the slab and posts through the finished cover.",
    ],
  },
  {
    slug: "wood-decks",
    name: "Wood Decks",
    seoName: "Wood Deck Construction",
    group: "Outdoor",
    summary: "Wood decks, including decks built around existing trees.",
    meta: "Wood deck construction in DeSoto, TX and Dallas–Fort Worth. James Studio Construction builds wood decks, including decks around trees.",
    paragraphs: [
      "James Studio Construction builds wood decks for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Recent decks include straight and curved layouts, railings, steps, and a deck built around a mature tree. Insured, with a warranty.",
    ],
  },
  {
    slug: "concrete-patio-slabs",
    name: "Concrete Patio Slabs",
    seoName: "Concrete Patio Slabs",
    group: "Outdoor",
    summary: "Concrete slabs poured as the floor for a new patio or cover.",
    meta: "Concrete patio slabs in DeSoto, TX. James Studio Construction pours slabs for patios and covers across Dallas–Fort Worth.",
    paragraphs: [
      "Concrete patio slabs are part of the patio work James Studio Construction does in DeSoto and the Dallas–Fort Worth area.",
      "On a recent covered patio, the slab was poured and finished before the posts and roof went up. Ask for a free estimate if you need a slab of your own.",
    ],
  },
  {
    slug: "built-in-shelving",
    name: "Built-in Shelving",
    seoName: "Built-in Shelving & Carpentry",
    group: "Remodels",
    summary: "Built-in shelves and finish carpentry, from raw boxes to paint.",
    meta: "Built-in shelving and carpentry in DeSoto, TX. Floor-to-ceiling shelves by James Studio Construction in the Dallas–Fort Worth area.",
    paragraphs: [
      "James Studio Construction builds built-in shelving and other carpentry for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "A recent project is a floor-to-ceiling shelving wall, photographed raw and again after it was painted, with doors on the lower cabinets.",
    ],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    seoName: "Interior & Exterior Painting",
    group: "Exterior",
    summary: "Interior and exterior paint for the rooms and the outside of the house.",
    meta: "Interior and exterior painting in DeSoto, TX. James Studio Construction paints for homeowners across the Dallas–Fort Worth area.",
    paragraphs: [
      "Interior and exterior painting is one of the services James Studio Construction offers in DeSoto and the Dallas–Fort Worth area.",
      "Quality of work and a friendly atmosphere are the priorities. Call or send a few photos of the walls or siding and James will follow up with a free estimate.",
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    seoName: "Cedar & Exterior Siding",
    group: "Exterior",
    summary: "Exterior siding, including cedar siding on dormers and additions.",
    meta: "Cedar and exterior siding in DeSoto, TX. James Studio Construction installs siding, including cedar, across Dallas–Fort Worth.",
    paragraphs: [
      "James Studio Construction installs siding for homeowners in DeSoto and the Dallas–Fort Worth area, including cedar siding.",
      "Recent photos show cedar siding on a dormer, set next to a brick chimney and a shingle roof. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "framing",
    name: "Framing",
    seoName: "Framing",
    group: "Exterior",
    summary: "Wood framing for covers, remodels, and the structure under the finish.",
    meta: "Framing in DeSoto, TX. Wood framing for patios and remodels by James Studio Construction in the Dallas–Fort Worth area.",
    paragraphs: [
      "Framing is part of the work James Studio Construction does on remodels and outdoor covers in DeSoto and the Dallas–Fort Worth area.",
      "Recent framing includes the posts and rafters under a patio cover, and the opened walls of a bathroom during a remodel.",
    ],
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    seoName: "Metal Roofing",
    group: "Exterior",
    summary: "Metal roofs, including metal roofs on patio covers.",
    meta: "Metal roofing in DeSoto, TX. Patio-cover and house metal roofs by James Studio Construction across the Dallas–Fort Worth area.",
    paragraphs: [
      "James Studio Construction installs metal roofing in DeSoto and the Dallas–Fort Worth area.",
      "Recent work includes corrugated metal roofs on wood patio covers and metal roofing on the house those covers are attached to. Shingle roofing is available too.",
    ],
  },
  {
    slug: "shingle-roofing",
    name: "Shingle Roofing",
    seoName: "Shingle Roofing",
    group: "Exterior",
    summary: "Asphalt shingle roofs, including shingles tied into cedar siding.",
    meta: "Shingle roofing in DeSoto, TX. James Studio Construction installs shingle roofs for homeowners in the Dallas–Fort Worth area.",
    paragraphs: [
      "Shingle roofing is part of the exterior work James Studio Construction does in DeSoto and the Dallas–Fort Worth area.",
      "Recent photos show architectural shingles on a dormer finished with cedar siding, and shingles meeting a new metal patio roof. Metal roofing is available as well.",
    ],
  },
  {
    slug: "house-repairs",
    name: "House Repairs",
    seoName: "House Repairs",
    group: "Repairs",
    summary: "House repairs for the problems that do not need a full remodel.",
    meta: "House repairs in DeSoto, TX. James Studio Construction handles home repairs across the Dallas–Fort Worth area. Free estimates.",
    paragraphs: [
      "James Studio Construction handles house repairs for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "Describe what broke or what you want fixed. Quality of work and a friendly atmosphere are the priorities, and the company is insured and gives a warranty.",
    ],
  },
  {
    slug: "demolition",
    name: "Demolition",
    seoName: "Demolition",
    group: "Repairs",
    summary: "Demolition that clears a room or a damaged area before the new work.",
    meta: "Demolition in DeSoto, TX. James Studio Construction does demolition for remodels and repairs across Dallas–Fort Worth.",
    paragraphs: [
      "Demolition is part of the remodel and repair work James Studio Construction does in DeSoto and the Dallas–Fort Worth area.",
      "On a recent bathroom, the old finishes came out before the new tub and tile. Water-damage jobs can include demo as well, along with extraction, drying, and moisture monitoring.",
    ],
  },
  {
    slug: "water-damage",
    name: "Water Damage",
    seoName: "Water Damage Mitigation",
    group: "Repairs",
    summary: "Extraction, demo, drying, and moisture monitoring after a leak or flood.",
    meta: "Water damage mitigation in DeSoto, TX. Extraction, demo, drying, and moisture monitoring by James Studio Construction.",
    paragraphs: [
      "James Studio Construction does water damage mitigation for homeowners in DeSoto and the Dallas–Fort Worth area.",
      "The work covers extraction, demo, drying, and moisture monitoring. The company is insured and gives a warranty. Call if you have an active leak.",
    ],
    includes: ["Extraction", "Demo", "Drying", "Moisture monitoring"],
  },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(slug: string, count = 3) {
  const current = serviceBySlug(slug);
  if (!current) return [];
  const same = services.filter((service) => service.group === current.group && service.slug !== slug);
  const rest = services.filter((service) => service.group !== current.group);
  return [...same, ...rest].slice(0, count);
}

export function formState() {
  const { provider, formspreeId, web3formsAccessKey, netlifyFormName } = site.form;
  if (provider === "formspree" && formspreeId.trim()) {
    return {
      ready: true as const,
      provider,
      action: `https://formspree.io/f/${formspreeId.trim()}`,
      name: "free-estimate",
      accessKey: "",
    };
  }
  if (provider === "web3forms" && web3formsAccessKey.trim()) {
    return {
      ready: true as const,
      provider,
      action: "https://api.web3forms.com/submit",
      name: "free-estimate",
      accessKey: web3formsAccessKey.trim(),
    };
  }
  if (provider === "netlify" && netlifyFormName.trim()) {
    return {
      ready: true as const,
      provider,
      action: "/thank-you/",
      name: netlifyFormName.trim(),
      accessKey: "",
    };
  }
  return {
    ready: false as const,
    provider: "unconfigured" as const,
    action: "",
    name: "free-estimate",
    accessKey: "",
  };
}

export function businessJsonLd(origin: string) {
  const url = origin.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    slogan: site.tagline,
    description: site.description,
    url,
    image: `${url}/brand/logo-drive.jpg`,
    logo: `${url}/brand/logo-drive.jpg`,
    telephone: "+1-254-833-7392",
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.cities.map((city) => ({
      "@type": "City",
      name: `${city.name}, ${site.address.region}`,
    })),
    sameAs: [site.facebook.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home improvement services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.seoName,
          url: `${url}/services/${service.slug}/`,
          areaServed: `${site.address.city}, ${site.address.region}`,
          provider: { "@id": `${url}/#business` },
        },
      })),
    },
  };
}

export function gaId() {
  return /^G-[A-Z0-9]+$/.test(site.gaMeasurementId) ? site.gaMeasurementId : "";
}
