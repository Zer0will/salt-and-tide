// SALT & TIDE — Pacific Brutalist. No rounded everything. No purple gradients. No centered SaaS hero. Type-led. Kelp accent only on active state.
// Centralized portfolio data. To add a new project: append a Project object below and the Work page will pick it up automatically.

export type Project = {
  slug: string;
  title: string;
  client: string;
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
    title: "Luigi's — Launch-Ready From Day One",
    client: "Luigi's Breakfast",
    category: "Restaurant Launch",
    location: "Edmonds, WA",
    year: "2026",
    liveUrl: "https://luigisbreakfast.vercel.app/",
    desktop: "/screenshots/luigis-breakfast-desktop.jpg",
    mobile:  "/screenshots/luigis-breakfast-mobile.jpg",
    full:    "/screenshots/luigis-breakfast-full.jpg",
    blurb: "A new breakfast concept needed brand, site, and a growth plan before doors opened.",
    challenge:
      "Luigi's was opening with no online footprint, no audience, and a 60-day runway to first service. Every reservation, every walk-in had to be earned from zero. They didn't need a website — they needed a launch.",
    approach:
      "We led with strategy. Positioning, target customer, menu narrative, and a six-week local-marketing roadmap all locked before a single page was designed. Then we built a fast, mobile-first site engineered for one job: drive reservations and weekend walk-ins.",
    result:
      "Luigi's opened with a complete digital foundation: a launch site, Google Business Profile, social presence, and a clear playbook for the first 90 days. They looked established on day one — not new.",
    services: ["Brand Strategy", "Web Design & Build", "Local SEO", "Launch Playbook"],
    resultCallout: "Full launch foundation delivered in 3 weeks",
    filters: ["all", "restaurant", "web", "strategy"],
    featured: true,
  },
  {
    slug: "pancake-haus",
    title: "Pancake Haus — Menu That Sells",
    client: "Pancake Haus",
    category: "Restaurant",
    location: "Edmonds, WA",
    year: "2026",
    liveUrl: "https://pancakehaus.vercel.app/",
    desktop: "/screenshots/pancake-haus-desktop.jpg",
    mobile:  "/screenshots/pancake-haus-mobile.jpg",
    full:    "/screenshots/pancake-haus-full.jpg",
    blurb: "An Edmonds breakfast institution: full menu redesign + digital refresh built around average ticket.",
    challenge:
      "Pancake Haus had loyal customers but a menu and digital presence that under-sold the experience. The menu read like a list; the site read like a brochure. Neither was doing the work of growing average ticket or weekend covers.",
    approach:
      "We treated the menu as a sales document, not a list — re-architected categories around margin and reorder behavior, rewrote item copy for crave, and rebuilt the site to mirror the in-store warmth.",
    result:
      "A menu engineered to lift average check and a digital home that finally matches the reputation. The kind of foundation a 20-year breakfast institution should have had a decade ago.",
    services: ["Menu Strategy", "Web Design & Build", "Brand Refresh"],
    resultCallout: "Menu redesign + brand refresh built around revenue",
    filters: ["all", "restaurant", "web", "strategy"],
    featured: true,
  },
  {
    slug: "walnut-street-coffee",
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
      "A site that finally feels like the cafe — and a foundation for online ordering, gift cards, and email when they're ready to add them.",
    services: ["Web Design & Build", "Content Strategy", "Local SEO"],
    resultCallout: "A digital home that finally feels like the shop",
    filters: ["all", "restaurant", "web"],
    featured: true,
  },
  {
    slug: "medina-painting",
    title: "Medina Painting — A Service Business That Books Itself",
    client: "Medina Painting",
    category: "Service Business",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://medina-painting-main.vercel.app/",
    desktop: "/screenshots/medina-painting-desktop.jpg",
    mobile:  "/screenshots/medina-painting-mobile.jpg",
    full:    "/screenshots/medina-painting-full.jpg",
    blurb: "Painting contractor site engineered for trust, proof, and direct booking.",
    challenge:
      "Painting is a trust purchase. Without a real portfolio, clear pricing posture, and an obvious path to a quote, leads go to the competitor with the better website — not the better painter.",
    approach:
      "Three priorities: proof (real project photography surfaced fast), trust (licensing, insurance, and process visible without scrolling forever), and conversion (a quote form that takes ninety seconds, not five minutes).",
    result:
      "A site small contractors actually wish they had: it answers the questions before the call, qualifies the lead, and lets the team focus on quoting jobs they'll actually win.",
    services: ["Web Design & Build", "Lead Capture", "Local SEO"],
    resultCallout: "Quote-form built to qualify leads before the call",
    filters: ["all", "service", "web"],
  },
  {
    slug: "lgm-landscaping",
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
      "Great work, no proof online. Most leads were word-of-mouth and Google Maps drive-bys — leaving 80% of potential customers untouched.",
    approach:
      "Lead with the photography. Service grid people can scan in five seconds. Seasonal callouts for retainers and recurring contracts. Phone CTA persistent on mobile.",
    result:
      "A site that earns the call before the call. The crew kept doing what they're great at; the website finally pulls its weight.",
    services: ["Web Design & Build", "Photography Direction", "Local SEO"],
    resultCallout: "Lead capture and seasonal retainer push, built in",
    filters: ["all", "service", "web"],
  },
  {
    slug: "island-hawaiian-bbq",
    title: "Island Hawaiian BBQ — Built For The Lunch Rush",
    client: "Island Hawaiian BBQ",
    category: "Restaurant",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://island-hawaiian-bbq-web.vercel.app/",
    desktop: "/screenshots/island-hawaiian-bbq-desktop.jpg",
    mobile:  "/screenshots/island-hawaiian-bbq-mobile.jpg",
    full:    "/screenshots/island-hawaiian-bbq-full.jpg",
    blurb: "Quick-service Hawaiian — site optimized for hungry mobile traffic at 11:47 a.m.",
    challenge:
      "QSR success is decided on phones, in the five-minute window before lunch. The previous site loaded slow, hid the menu, and made directions a chore.",
    approach:
      "Top of mobile is hours, address, phone — full stop. Menu is one tap away with photos that sell. Order-online and directions stay sticky as you scroll.",
    result:
      "A QSR site that does the one job it has: convert lunch traffic before someone else gets the order.",
    services: ["Web Design & Build", "Menu Photography", "Local SEO"],
    resultCallout: "Mobile-first QSR site engineered for the lunch rush",
    filters: ["all", "restaurant", "web"],
  },
  {
    slug: "plate-of-africa",
    title: "Plate of Africa — A Story Worth Showing Up For",
    client: "Plate of Africa",
    category: "Restaurant",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://official-plate-of-africa.vercel.app/",
    desktop: "/screenshots/plate-of-africa-desktop.jpg",
    mobile:  "/screenshots/plate-of-africa-mobile.jpg",
    full:    "/screenshots/plate-of-africa-full.jpg",
    blurb: "A culture-rich restaurant that needed a site as warm as its kitchen.",
    challenge:
      "Plate of Africa serves cuisine most of their visitors haven't tried. The site had to do education and invitation simultaneously — without dimming the brand's heat.",
    approach:
      "Lead with story and dish photography. Menu reads like a guided tour, not a list. Reservation and directions front-and-center for the first-time visitor.",
    result:
      "A site that introduces newcomers without alienating regulars — and pulls its weight as the restaurant's primary on-ramp.",
    services: ["Web Design & Build", "Brand Voice", "Local SEO"],
    resultCallout: "Editorial site that doubles as an on-ramp for first-timers",
    filters: ["all", "restaurant", "web"],
  },
  {
    slug: "forevergreen",
    title: "Forevergreen — Premium Service, Premium Site",
    client: "Forevergreen",
    category: "Service Business",
    location: "Greater Seattle",
    year: "2026",
    liveUrl: "https://forevergreen-five.vercel.app/index.html",
    desktop: "/screenshots/forevergreen-desktop.jpg",
    mobile:  "/screenshots/forevergreen-mobile.jpg",
    full:    "/screenshots/forevergreen-full.jpg",
    blurb: "A high-end service brand with a digital presence that justifies the price.",
    challenge:
      "Forevergreen's pricing sits above commodity competitors. Without a website that signals premium, every quote starts from the wrong anchor.",
    approach:
      "Editorial tone, deliberate whitespace, real photography, and a quote form that pre-qualifies — designed to attract clients who value the work, not shoppers chasing the lowest bid.",
    result:
      "A site that signals quality before a single conversation — and a foundation for a higher-margin lead pipeline.",
    services: ["Web Design & Build", "Brand Positioning", "Lead Capture"],
    resultCallout: "Premium positioning built into every page",
    filters: ["all", "service", "web", "strategy"],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
