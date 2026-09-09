// SALT & TIDE — Pacific Brutalist. No rounded everything. No purple gradients. No centered SaaS hero. Type-led. Kelp accent only on active state.
// Centralized portfolio data. To add a new project: append a Project object below and the Work page will pick it up automatically.

export type Project = {
  slug: string;
  title: string;
  client: string;
  projectType: string;
  category: string;     // restaurant | service | retail | hospitality
  location: string;
  year: string;
  liveUrl?: string;     // public preview/live URL of the work
  desktop: string;      // hero screenshot
  mobile: string;       // mobile shot
  full: string;         // long-form screenshot for case study
  blurb: string;        // 1-line summary
  challenge: string;    // 2–3 sentences
  approach: string;     // 2–3 sentences
  result: string;       // 2–3 sentences
  services: string[];
  resultCallout: string;
  filters: string[];    // tags used by Work page filter bar
  featured?: boolean;   // appears on home page
};

export const PROJECTS: Project[] = [
  {
    slug: "luigis-breakfast",
    projectType: "Website showcase",
    title: "Luigi’s — Breakfast in Redmond Ridge",
    client: "Luigi's Breakfast",
    category: "Restaurant Launch",
    location: "Redmond Ridge, WA",
    year: "2026",
    liveUrl: "https://luigisrestaurant.online/",
    desktop: "/screenshots/luigis-breakfast-desktop.jpg",
    mobile:  "/screenshots/luigis-breakfast-mobile.jpg",
    full:    "/screenshots/luigis-breakfast-full.jpg",
    blurb: "A food-led website with a readable menu, family story, hours, and directions.",
    challenge:
      "A first-time visitor needs to understand the food, find current hours, and decide how to visit from a phone.",
    approach:
      "The design brings breakfast photography together with an HTML menu, category navigation, a family story, and visible telephone and directions links.",
    result:
      "The public site brings the menu, daily hours, Redmond Ridge address, and call-ahead information into one place.",
    services: ["Web Design & Build", "Menu Experience", "Visitor Information"],
    resultCallout: "Menu, hours, and directions in a focused visitor experience",
    filters: ["all", "restaurant", "web", "strategy"],
    featured: true,
  },
  {
    slug: "pancake-haus",
    projectType: "Website showcase",
    title: "Pancake Haus — A Digital Home for a Local Favorite",
    client: "Pancake Haus",
    category: "Restaurant",
    location: "Edmonds, WA",
    year: "2026",
    liveUrl: "https://pancakehaus.vercel.app/",
    desktop: "/screenshots/pancake-haus-desktop.jpg",
    mobile:  "/screenshots/pancake-haus-mobile.jpg",
    full:    "/screenshots/pancake-haus-full.jpg",
    blurb: "A warm restaurant website with an extensive breakfast menu and clear visitor information.",
    challenge:
      "A restaurant with a long menu needs a page that remains easy to scan and useful on a phone.",
    approach:
      "The site uses menu categories, food photography, prominent directions, and a consistent visual identity across its visitor and shop pages.",
    result:
      "The showcase brings together the menu, photos, hours, gift-card information, and shop. Contact delivery remains a separate integration to complete.",
    services: ["Web Design & Build", "Menu Experience", "Visual Identity"],
    resultCallout: "A digital showcase for an Edmonds breakfast spot established in 1969",
    filters: ["all", "restaurant", "web", "strategy"],
    featured: true,
  },
  {
    slug: "walnut-street-coffee",
    projectType: "Website preview",
    title: "Walnut Street Coffee — A Cafe With Presence",
    client: "Walnut Street Coffee",
    category: "Cafe / Hospitality",
    location: "Edmonds, WA",
    year: "2026",
    liveUrl: "https://walnutstreetcoffeepreview.vercel.app/",
    desktop: "/screenshots/walnut-street-coffee-desktop.jpg",
    mobile:  "/screenshots/walnut-street-coffee-mobile.jpg",
    full:    "/screenshots/walnut-street-coffee-full.jpg",
    blurb: "A neighborhood cafe with the digital warmth to match the in-shop experience.",
    challenge:
      "Walnut Street's regulars knew the place by feel. New visitors and out-of-towners didn't get that warmth from the website at all — hours, vibe, and what made the place special were buried.",
    approach:
      "Editorial typography, real photography of the shop and the people, hours and location pinned at every scroll depth, and a frictionless mobile experience for someone deciding where to go in the next ten minutes.",
    result:
      "A preview of the cafe’s menu, story, and visit information. Online gift cards and newsletter delivery require verified services before activation.",
    services: ["Web Design & Build", "Content Strategy", "Local SEO"],
    resultCallout: "A digital home that finally feels like the shop",
    filters: ["all", "restaurant", "web"],
    featured: true,
  },
  {
    slug: "medina-painting",
    projectType: "Website showcase",
    title: "Medina Painting — Project Work Front and Center",
    client: "Medina Painting",
    category: "Service Business",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://medina-painting-main.vercel.app/",
    desktop: "/screenshots/medina-painting-desktop.jpg",
    mobile:  "/screenshots/medina-painting-mobile.jpg",
    full:    "/screenshots/medina-painting-full.jpg",
    blurb: "A painting contractor website organized around services, project photography, and estimate inquiries.",
    challenge:
      "Painting is a trust purchase. Without a real portfolio, clear pricing posture, and an obvious path to a quote, leads go to the competitor with the better website — not the better painter.",
    approach:
      "Three priorities: proof (real project photography surfaced fast), trust (licensing, insurance, and process visible without scrolling forever), and conversion (a quote form that takes ninety seconds, not five minutes).",
    result:
      "Services, gallery, company information, and contact options are presented in a consistent design. Estimate requests need a configured delivery service or a clearly labelled email handoff.",
    services: ["Web Design & Build", "Lead Capture", "Local SEO"],
    resultCallout: "Project evidence and a clear path to an estimate",
    filters: ["all", "service", "web"],
  },
  {
    slug: "lgm-landscaping",
    projectType: "Website showcase",
    title: "LGM Landscaping — Field Work, Digital Front",
    client: "LGM Landscaping",
    category: "Service Business",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://lgm-landscaping.vercel.app/",
    desktop: "/screenshots/lgm-landscaping-desktop.jpg",
    mobile:  "/screenshots/lgm-landscaping-mobile.jpg",
    full:    "/screenshots/lgm-landscaping-full.jpg",
    blurb: "A landscaping crew with a website that finally matches the quality of the work.",
    challenge:
      "A landscaping website needs to make the crew’s work and service area easy to understand before a visitor asks for an estimate.",
    approach:
      "Lead with the photography. Service grid people can scan in five seconds. Seasonal callouts for retainers and recurring contracts. Phone CTA persistent on mobile.",
    result:
      "The site organizes services, project imagery, and an estimate form into a single-page experience. Actual lead results have not been measured in this showcase.",
    services: ["Web Design & Build", "Photography Direction", "Local SEO"],
    resultCallout: "Services, project imagery, and an estimate request in one place",
    filters: ["all", "service", "web"],
  },
  {
    slug: "island-hawaiian-bbq",
    projectType: "Website showcase",
    title: "Island Hawaiian BBQ — Built For The Lunch Rush",
    client: "Island Hawaiian BBQ",
    category: "Restaurant",
    location: "Everett, WA",
    year: "2026",
    liveUrl: "https://island-hawaiian-bbq-web.vercel.app/",
    desktop: "/screenshots/island-hawaiian-bbq-desktop.jpg",
    mobile:  "/screenshots/island-hawaiian-bbq-mobile.jpg",
    full:    "/screenshots/island-hawaiian-bbq-full.jpg",
    blurb: "Quick-service Hawaiian — site optimized for hungry mobile traffic at 11:47 a.m.",
    challenge:
      "QSR success is decided on phones, in the five-minute window before lunch. The previous site loaded slow, hid the menu, and made directions a chore.",
    approach:
      "The site separates a detailed HTML menu from visitor information and links to the restaurant’s online ordering provider.",
    result:
      "The showcase includes a photographed menu, daily hours, and location information. Direct route loading needs a hosting configuration repair.",
    services: ["Web Design & Build", "Menu Photography", "Local SEO"],
    resultCallout: "A menu and visitor experience for an Everett restaurant",
    filters: ["all", "restaurant", "web"],
  },
  {
    slug: "plate-of-africa",
    projectType: "Educational project",
    title: "Plate of Africa — A Restaurant Concept",
    client: "Plate of Africa",
    category: "Restaurant Concept",
    location: "TSA project",
    year: "2025",
    liveUrl: "https://official-plate-of-africa.vercel.app/",
    desktop: "/screenshots/plate-of-africa-desktop.jpg",
    mobile:  "/screenshots/plate-of-africa-mobile.jpg",
    full:    "/screenshots/plate-of-africa-full.jpg",
    blurb: "An educational restaurant website exploring African plant-based food, storytelling, and visitor journeys.",
    challenge:
      "The project explores how a fictional restaurant can introduce its cuisine and make a large set of visitor information easy to navigate.",
    approach:
      "The original TSA project combines a categorized menu, editorial story pages, and interactive demonstrations of reservations and other forms. Original team and resource credits remain on the References page.",
    result:
      "An interactive educational showcase. Reservations, contact requests, and applications are demonstrations; they do not represent live restaurant operations.",
    services: ["Website Design", "Menu Experience", "Interactive Prototyping"],
    resultCallout: "Educational restaurant concept · Original TSA credits preserved",
    filters: ["all", "restaurant", "web"],
  },
  {
    slug: "forevergreen",
    projectType: "Educational website",
    title: "ForeverGreen — Making Green Energy Understandable",
    client: "Forevergreen",
    category: "Educational Resource",
    location: "United States",
    year: "2026",
    liveUrl: "https://forevergreen-five.vercel.app/index.html",
    desktop: "/screenshots/forevergreen-desktop.jpg",
    mobile:  "/screenshots/forevergreen-mobile.jpg",
    full:    "/screenshots/forevergreen-full.jpg",
    blurb: "An educational site about home energy options, everyday practices, and solar estimates.",
    challenge:
      "Home energy information can be difficult to compare. Visitors need clear explanations and visible assumptions behind any estimate.",
    approach:
      "The site separates solutions, incentives, everyday practices, and a solar calculator, with consistent navigation and relevant imagery.",
    result:
      "A green-energy learning experience. Calculator assumptions and incentive dates are part of the review process; results are illustrative rather than a personalized quote.",
    services: ["Web Design & Build", "Information Design", "Interactive Calculator"],
    resultCallout: "Clear energy information with an illustrative calculator",
    filters: ["all", "web", "strategy"],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
