/**
 * Jamestudio Construction — business configuration.
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
  /** past = a city where he has done work. Omit for service-area cities. */
  role?: "home" | "past";
};

export const site = {
  name: "JAMESTUDIO CONSTRUCTION",
  legalName: "Jamestudio Construction",
  owner: "James Koban",
  tagline: "We take care of your home needs!",
  taglines: [
    "We take care of your home needs!",
    "Quality of work and friendly atmosphere are our priorities!",
    "We are insured and give warranty!",
  ],
  description:
    "Jamestudio Construction is a small, hands-on crew for home remodeling and renovation in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area.",

  phoneDisplay: "(254) 833-7392",
  phoneTel: "+12548337392",

  /**
   * Public email. This is the only address the site prints, the only address
   * used in mailto links, and the address in structured data. Change it here
   * if the public inbox changes, then point the form provider at that same
   * inbox (see the README).
   */
  email: "contact@jamestudioconstruction.com",

  address: {
    region: "TX",
    country: "US",
  },

  /** Shown in place of a street address. No street is published. */
  displayArea: "DeSoto, Cedar Hill, Lancaster, and the Dallas–Fort Worth area, TX",
  /** Used in page titles and H1s. */
  titlePlace: "DeSoto, Cedar Hill & Lancaster, TX",
  /** Used in structured data for the wider service area. */
  schemaArea: "Dallas–Fort Worth",
  serviceAreaLabel: "DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area",

  /**
   * Cities shown in the service-area section.
   * role "past" is a city with stated past work.
   * Cities without a role are part of the service area,
   * not a claim that a job was finished there. Add or remove freely.
   */
  cities: [
    { name: "DeSoto" },
    { name: "Cedar Hill" },
    { name: "Lancaster" },
    { name: "Dallas" },
    { name: "Duncanville" },
    { name: "Grand Prairie" },
    { name: "Arlington" },
    { name: "Fort Worth" },
    { name: "Irving" },
    { name: "Mesquite" },
    { name: "Richardson" },
    { name: "Plano" },
    { name: "Carrollton" },
    { name: "Mansfield" },
    { name: "McKinney", role: "past" },
    { name: "Garland", role: "past" },
  ] as City[],

  yelp: {
    url: "https://www.yelp.com/biz/jamestudio-construction-desoto",
    rating: "5.0",
    reviewCount: 7,
    label: "5.0 stars from 7 reviews on Yelp",
  },

  facebook: {
    url: "https://www.facebook.com/jamestudioconstruction/",
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
    provider: "formsubmit" as "" | "formspree" | "web3forms" | "netlify" | "formsubmit",
    /**
     * Activated FormSubmit alias for contact@jamestudioconstruction.com.
     * Submissions go to that inbox without putting the address in the form action.
     */
    formsubmitId: "bbcaa55d9d6baefbe05c2a237c1ade4e",
    /** The id in https://formspree.io/f/YOUR_ID */
    formspreeId: "",
    /** Web3Forms access key. The key is tied to the inbox that should get leads. */
    web3formsAccessKey: "",
    netlifyFormName: "free-estimate",
  },

  /**
   * Large estimate files upload straight to Drive. Leave scriptUrl empty until
   * the Apps Script web app is deployed; the upload control stays hidden.
   * Paste the /exec URL here when it is ready.
   */
  uploads: {
    scriptUrl: "",
    maxBytes: 2 * 1024 * 1024 * 1024,
  },

  brand: {
    navy: "#1F1E3D",
    orange: "#F27E17",
  },
};

export const reviews = [
  {
    name: "Shannon G.",
    date: "August 3, 2021",
    source: "Yelp",
    quote:
      "If you want an honest construction company that does the absolute best work, is always on time and pays attention to detail, then look no further and hire Jamestudio Construction.",
  },
  {
    name: "Rich S.",
    date: "June 17, 2023",
    source: "Yelp",
    quote:
      "James did an excellent job. In today's 'never hear back' from construction companies, James followed up, followed through, and finished the job as promised.",
  },
  {
    name: "Hasnain S.",
    date: "November 9, 2020",
    source: "Yelp",
    quote:
      "I've got nothing but good things to say about James and his team. From punctuality to attention to detail, this team exceeded all my expectations. Would definitely hire again!",
  },
  {
    name: "Wolfgang D.",
    date: "April 13, 2021",
    source: "Yelp",
    quote:
      "Jamestudio Construction provided me with a wonderful remodeling experience. The workers, Aaron and Marcos, were friendly, punctual, and courteous...",
  },
  {
    name: "Kathleen P.",
    date: "January 9, 2022",
    source: "Yelp",
    quote:
      "Highly recommend James and his team. His services were completed in a timely and professional manner...",
  },
] as const;

export const faqs = [
  {
    question: "Where do you work?",
    answer:
      "DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area. Past jobs also include work in McKinney and Garland.",
  },
  {
    question: "Who shows up?",
    answer:
      "James and a small crew. The same people who walk the job are the people doing the work.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. Jamestudio Construction is insured and gives a warranty on the work.",
  },
  {
    question: "What kind of projects do you take?",
    answer:
      "Kitchen and bath remodels, whole-home remodels, interior and exterior paint, flooring and tile, siding, fencing, pergolas and decks, metal R-panel roofs, covers, and carports, windows and doors, and hardscape. On a remodel, the crew can also help with cabinetry, plumbing, electrical, and HVAC.",
  },
  {
    question: "How do I get a price?",
    answer:
      "Call (254) 833-7392 or send the form with your name, city, and what you want done. James follows up.",
  },
] as const;

export const services: Service[] = [
  {
    slug: "complete-house-remodels",
    name: "Complete House Remodels",
    seoName: "Complete House Remodeling",
    group: "Remodels",
    summary: "Whole-home remodeling for homeowners who want one contractor on the job.",
    meta: "Complete house remodeling in Dallas & Fort Worth, TX by Jamestudio Construction. Insured, with a warranty. Call for a free estimate.",
    paragraphs: [
      "A whole-home remodel is easier with one small crew on it from demo to the last detail. Jamestudio Construction takes that on for homeowners in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area.",
      "James and the crew handle the building work, and they can help with cabinetry, plumbing, electrical, and HVAC as part of the job. The company is insured and gives a warranty. Call or send the rooms you want redone.",
    ],
    includes: ["Kitchens and baths", "Flooring and paint", "Cabinetry help", "Plumbing, electrical, and HVAC help"],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    seoName: "Bathroom Remodeling",
    group: "Remodels",
    summary: "Bathroom remodels, including showers, tubs, vanities, and tile.",
    meta: "Bathroom remodeling in Dallas & Fort Worth, TX. Showers, tubs, vanities, and tile by Jamestudio Construction. Free estimates for the Dallas and Fort Worth area.",
    paragraphs: [
      "Bathroom remodeling in the Dallas and Fort Worth area. Jamestudio Construction remodels bathrooms for local homeowners.",
      "Recent projects include tiled showers, tub replacements, vanities, and floor tile. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    seoName: "Kitchen Remodeling",
    group: "Remodels",
    summary: "Kitchen remodels, from the layout you have to the kitchen you want.",
    meta: "Kitchen remodeling in Dallas & Fort Worth, TX. Request a free estimate from Jamestudio Construction.",
    paragraphs: [
      "Kitchen remodeling is one of the services Jamestudio Construction offers homeowners in the Dallas and Fort Worth area.",
      "Tell James what you want changed and he will follow up with a free estimate. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "tub-shower-tile",
    name: "Tub, Shower & Tile",
    seoName: "Tub, Shower & Tile Installation",
    group: "Remodels",
    summary: "Tub replacements, shower builds, and tile on walls and floors.",
    meta: "Tub, shower, and tile installation in Dallas & Fort Worth, TX. Jamestudio Construction replaces tubs and builds tiled showers across the Dallas and Fort Worth area.",
    paragraphs: [
      "Jamestudio Construction installs tubs, showers, and tile for homeowners in the Dallas and Fort Worth area.",
      "Recent work includes a tub replacement, subway-tile and hexagon showers, a stone-look shower, and a gray tile shower with a niche. Insured, with a warranty.",
    ],
  },
  {
    slug: "fencing-pergolas",
    name: "Fencing & Pergolas",
    seoName: "Fencing & Pergolas",
    group: "Outdoor",
    summary: "Wood fences and pergolas, including stained privacy fences and shade structures.",
    meta: "Fencing and pergolas in Dallas & Fort Worth, TX. Stained wood fences and pergolas by Jamestudio Construction across the Dallas and Fort Worth area.",
    paragraphs: [
      "Fencing and pergolas are part of the outdoor work Jamestudio Construction does in the Dallas and Fort Worth area.",
      "Recent projects include stained wood privacy fences and stained wood pergolas on brick homes. Quality of work and a friendly atmosphere are the priorities.",
    ],
  },
  {
    slug: "covered-patios",
    name: "Covered Patios",
    seoName: "Covered Patios & Patio Covers",
    group: "Outdoor",
    summary: "Wood patio covers and pergolas, including covers with metal roofs.",
    meta: "Covered patios and patio covers in Dallas & Fort Worth, TX. Wood frames and metal roofs by Jamestudio Construction in the Dallas and Fort Worth area.",
    paragraphs: [
      "Jamestudio Construction builds covered patios and patio covers for homeowners in the Dallas and Fort Worth area.",
      "Recent projects include cedar pergolas, stained pergolas, and wood patio covers with metal roofs, from the slab and posts through the finished cover.",
    ],
  },
  {
    slug: "wood-decks",
    name: "Wood Decks",
    seoName: "Wood Deck Construction",
    group: "Outdoor",
    summary: "Wood decks, including decks built around existing trees.",
    meta: "Wood deck construction in Dallas & Fort Worth, TX. Jamestudio Construction builds wood decks, including decks around trees.",
    paragraphs: [
      "Jamestudio Construction builds wood decks for homeowners in the Dallas and Fort Worth area.",
      "Recent decks include straight and curved layouts, railings, steps, and a deck built around a mature tree. Insured, with a warranty.",
    ],
  },
  {
    slug: "concrete-patio-slabs",
    name: "Concrete Patio Slabs",
    seoName: "Concrete Patio Slabs",
    group: "Outdoor",
    summary: "Concrete slabs poured as the floor for a new patio or cover.",
    meta: "Concrete patio slabs in Dallas & Fort Worth, TX. Jamestudio Construction pours slabs for patios and covers across the Dallas and Fort Worth area.",
    paragraphs: [
      "Concrete patio slabs are part of the patio work Jamestudio Construction does in the Dallas and Fort Worth area.",
      "On a recent covered patio, the slab was poured and finished before the posts and roof went up. Ask for a free estimate if you need a slab of your own.",
    ],
  },
  {
    slug: "built-in-shelving",
    name: "Built-in Shelving",
    seoName: "Built-in Shelving & Carpentry",
    group: "Remodels",
    summary: "Built-in shelves and finish carpentry, from raw boxes to paint.",
    meta: "Built-in shelving and carpentry in Dallas & Fort Worth, TX. Floor-to-ceiling shelves by Jamestudio Construction in the Dallas and Fort Worth area.",
    paragraphs: [
      "Jamestudio Construction builds built-in shelving and other carpentry for homeowners in the Dallas and Fort Worth area.",
      "A recent project is a floor-to-ceiling shelving wall, photographed raw and again after it was painted, with doors on the lower cabinets.",
    ],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    seoName: "Interior & Exterior Painting",
    group: "Exterior",
    summary: "Interior and exterior paint for the rooms and the outside of the house.",
    meta: "Interior and exterior painting in Dallas & Fort Worth, TX. Jamestudio Construction paints for homeowners across the Dallas and Fort Worth area.",
    paragraphs: [
      "Interior and exterior painting is one of the services Jamestudio Construction offers in the Dallas and Fort Worth area.",
      "Quality of work and a friendly atmosphere are the priorities. Call or send a few photos of the walls or siding and James will follow up with a free estimate.",
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    seoName: "Cedar & Exterior Siding",
    group: "Exterior",
    summary: "Exterior siding, including cedar siding on dormers and additions.",
    meta: "Cedar and exterior siding in Dallas & Fort Worth, TX. Jamestudio Construction installs siding, including cedar, across the Dallas and Fort Worth area.",
    paragraphs: [
      "Jamestudio Construction installs siding for homeowners in the Dallas and Fort Worth area, including cedar siding.",
      "Recent photos show cedar siding on a dormer, set next to a brick chimney and a shingle roof. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "framing",
    name: "Framing",
    seoName: "Framing",
    group: "Exterior",
    summary: "Wood framing for covers, remodels, and the structure under the finish.",
    meta: "Framing in Dallas & Fort Worth, TX. Wood framing for patios and remodels by Jamestudio Construction in the Dallas and Fort Worth area.",
    paragraphs: [
      "Framing is part of the work Jamestudio Construction does on remodels and outdoor covers in the Dallas and Fort Worth area.",
      "Recent framing includes the posts and rafters under a patio cover, and the opened walls of a bathroom during a remodel.",
    ],
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    seoName: "Metal Roofing",
    group: "Exterior",
    summary: "Metal R-panel roofs, patio covers, and carports.",
    meta: "Metal roofing in DeSoto, Cedar Hill & Lancaster, TX. R-panel roofs, patio covers, and carports by Jamestudio Construction.",
    paragraphs: [
      "Jamestudio Construction installs metal roofing in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area, including R-panel roofs, patio covers, and carports.",
      "Recent work includes a red R-panel shed roof, plus metal roofs on wood patio covers and on the houses those covers attach to. Shingle roofing is available too.",
    ],
    includes: ["R-panel roofs", "Patio covers", "Carports"],
  },
  {
    slug: "shingle-roofing",
    name: "Shingle Roofing",
    seoName: "Shingle Roofing",
    group: "Exterior",
    summary: "Asphalt shingle roofs, including shingles tied into cedar siding.",
    meta: "Shingle roofing in Dallas & Fort Worth, TX. Jamestudio Construction installs shingle roofs for homeowners in the Dallas and Fort Worth area.",
    paragraphs: [
      "Shingle roofing is part of the exterior work Jamestudio Construction does in the Dallas and Fort Worth area.",
      "Recent photos show architectural shingles on a dormer finished with cedar siding, and shingles meeting a new metal patio roof. Metal roofing is available as well.",
    ],
  },
  {
    slug: "house-repairs",
    name: "House Repairs",
    seoName: "House Repairs",
    group: "Repairs",
    summary: "House repairs for the problems that do not need a full remodel.",
    meta: "House repairs in Dallas & Fort Worth, TX. Jamestudio Construction handles home repairs across the Dallas and Fort Worth area. Free estimates.",
    paragraphs: [
      "Jamestudio Construction handles house repairs for homeowners in the Dallas and Fort Worth area.",
      "Describe what broke or what you want fixed. Quality of work and a friendly atmosphere are the priorities, and the company is insured and gives a warranty.",
    ],
  },
  {
    slug: "demolition",
    name: "Demolition",
    seoName: "Demolition",
    group: "Repairs",
    summary: "Demolition that clears a room or a damaged area before the new work.",
    meta: "Demolition in Dallas & Fort Worth, TX. Jamestudio Construction does demolition for remodels and repairs across the Dallas and Fort Worth area.",
    paragraphs: [
      "Demolition is part of the remodel and repair work Jamestudio Construction does in the Dallas and Fort Worth area.",
      "On a recent bathroom, the old finishes came out before the new tub and tile. Water-damage jobs can include demo as well, along with extraction, drying, and moisture monitoring.",
    ],
  },
  {
    slug: "water-damage",
    name: "Water Damage",
    seoName: "Water Damage Mitigation",
    group: "Repairs",
    summary: "Extraction, demo, drying, and moisture monitoring after a leak or flood.",
    meta: "Water damage mitigation in Dallas & Fort Worth, TX. Extraction, demo, drying, and moisture monitoring by Jamestudio Construction.",
    paragraphs: [
      "Jamestudio Construction does water damage mitigation for homeowners in the Dallas and Fort Worth area.",
      "The work covers extraction, demo, drying, and moisture monitoring. The company is insured and gives a warranty. Call if you have an active leak.",
    ],
    includes: ["Extraction", "Demo", "Drying", "Moisture monitoring"],
  },
  {
    slug: "flooring",
    name: "Flooring & Tile",
    seoName: "Flooring and Tile",
    group: "Remodels",
    summary: "Flooring and tile, including large-format porcelain.",
    meta: "Flooring and tile in DeSoto, Cedar Hill & Lancaster, TX. Jamestudio Construction installs tile and flooring as part of a remodel. Free estimates.",
    paragraphs: [
      "Flooring and tile are part of the remodel work Jamestudio Construction does for homeowners in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area.",
      "Recent work includes large-format porcelain tile. Tell James the rooms and the material you have in mind. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "windows-and-doors",
    name: "Windows & Doors",
    seoName: "Window and Door Replacement",
    group: "Exterior",
    summary: "New windows and exterior doors, including installs tied to siding work.",
    meta: "Window and door replacement in DeSoto, Cedar Hill & Lancaster, TX by Jamestudio Construction. Free estimates across the Dallas–Fort Worth area.",
    paragraphs: [
      "Jamestudio Construction replaces windows and exterior doors for homeowners in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area.",
      "Recent work includes a new exterior door and windows set while new siding went on. The company is insured and gives a warranty.",
    ],
  },
  {
    slug: "hardscape-stone",
    name: "Hardscape & Stone",
    seoName: "Hardscape and Stone",
    group: "Outdoor",
    summary: "Stone cladding, planters, walkways, and drainage around the house.",
    meta: "Hardscape and stone work in DeSoto, Cedar Hill & Lancaster, TX. Planters, walkways, and drainage by Jamestudio Construction.",
    paragraphs: [
      "Jamestudio Construction builds hardscape and stonework for homeowners in DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area.",
      "Recent work includes travertine walkways, stone planters, wall cladding, and trench drains. The company is insured and gives a warranty.",
    ],
    includes: ["Stone planters", "Walkways", "Wall cladding", "Drainage"],
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
  if (provider === "formsubmit" && site.form.formsubmitId.trim()) {
    const id = site.form.formsubmitId.trim();
    return {
      ready: true as const,
      provider,
      action: `https://formsubmit.co/ajax/${id}`,
      name: "free-estimate",
      accessKey: "",
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
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.cities.map((city) => ({
      "@type": "City",
      name: city.name,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    })),
    sameAs: [site.yelp.url, site.facebook.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home improvement services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.seoName,
          url: `${url}/services/${service.slug}/`,
          areaServed: site.schemaArea,
          provider: { "@id": `${url}/#business` },
        },
      })),
    },
  };
}

export function gaId() {
  return /^G-[A-Z0-9]+$/.test(site.gaMeasurementId) ? site.gaMeasurementId : "";
}
