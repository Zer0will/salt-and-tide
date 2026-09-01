import fs from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://salttidecreative.com";
const OUT_DIR = path.resolve("dist");
const INDEX_PATH = path.join(OUT_DIR, "index.html");
const DEFAULT_IMAGE = `${SITE_ORIGIN}/og/og-default.png`;
const ORG_NAME = "Salt & Tide Creative";
const ORG_PHONE = "+1-253-660-8555";
const ORG_EMAIL = "hello@salttidecreative.com";

const projects = [
  ["luigis-breakfast", "Luigi's Breakfast", "Restaurant Launch", "Edmonds, WA", "A new breakfast concept needed brand, site, and a growth plan before doors opened.", "/screenshots/luigis-breakfast-desktop.jpg"],
  ["pancake-haus", "Pancake Haus", "Restaurant", "Edmonds, WA", "An Edmonds breakfast institution: full menu redesign + digital refresh built around average ticket.", "/screenshots/pancake-haus-desktop.jpg"],
  ["walnut-street-coffee", "Walnut Street Coffee", "Cafe / Hospitality", "Edmonds, WA", "A neighborhood cafe with the digital warmth to match the in-shop experience.", "/screenshots/walnut-street-coffee-desktop.jpg"],
  ["medina-painting", "Medina Painting", "Service Business", "Greater Seattle", "Painting contractor site engineered for trust, proof, and direct booking.", "/screenshots/medina-painting-desktop.jpg"],
  ["lgm-landscaping", "LGM Landscaping", "Service Business", "Greater Seattle", "A landscaping crew with a website that finally matches the quality of the work.", "/screenshots/lgm-landscaping-desktop.jpg"],
  ["island-hawaiian-bbq", "Island Hawaiian BBQ", "Restaurant", "Greater Seattle", "Quick-service Hawaiian site optimized for hungry mobile traffic at 11:47 a.m.", "/screenshots/island-hawaiian-bbq-desktop.jpg"],
  ["plate-of-africa", "Plate of Africa", "Restaurant", "Greater Seattle", "A culture-rich restaurant that needed a site as warm as its kitchen.", "/screenshots/plate-of-africa-desktop.jpg"],
  ["forevergreen", "Forevergreen", "Service Business", "Greater Seattle", "A high-end service brand with a digital presence that justifies the price.", "/screenshots/forevergreen-desktop.jpg"],
];

const insights = [
  ["how-much-does-a-website-cost-seattle", "How Much Does a Website Cost in Seattle? | 2026 Guide", "What does a small business website really cost in Seattle? Real 2026 pricing, what drives the number, and how to avoid the most common pricing mistakes.", "How Much Does a Website Cost in Seattle? (2026 Guide)", "2026-05-10", "2026-05-15", "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80"],
  ["why-seattle-small-businesses-need-a-website", "Why Seattle Small Businesses Need a Website (2026)", "Social media is rented land. Your website is owned. Here's why a real website still matters for Seattle small businesses in 2026 — and what to look for.", "Why Every Seattle Small Business Needs a Real Website in 2026", "2026-05-08", "2026-05-15", "https://images.unsplash.com/photo-1493932484895-752d1471eab5?auto=format&fit=crop&w=1600&q=80"],
  ["restaurant-website-design-guide", "Restaurant Website Design Guide for Seattle (2026)", "What every Seattle restaurant website needs in 2026: menu, reservation, mobile speed, local SEO, schema, photography, and design that drives ticket size.", "Restaurant Website Design: A 2026 Guide for Seattle Operators", "2026-05-02", "2026-05-15", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"],
];

const routeMeta = [
  {
    path: "/",
    title: "Web Design + Marketing Studio | Salt & Tide Creative",
    description: "Salt & Tide Creative builds high-converting websites, SEO foundations, and marketing systems for small businesses across Edmonds, Seattle, and Puget Sound.",
    jsonLd: [localBusinessSchema()],
  },
  {
    path: "/work",
    title: "Web Design Portfolio | Salt & Tide — Seattle Agency",
    description: "See our web design and digital marketing work for Seattle and Edmonds, WA businesses. Real restaurant, service, and retail case studies from Salt & Tide Creative.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Selected Work", path: "/work" }])],
  },
  {
    path: "/services",
    title: "Web Design & Marketing Services | Salt & Tide Creative",
    description: "Web design, local SEO, voice search optimization, and digital marketing services from $3,500 for small businesses in Seattle and Edmonds, WA.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]), serviceSchema(), voiceSearchSchema(), faqSchema()],
  },
  {
    path: "/local-growth-engine",
    title: "Local Growth Engine — Lead Response System | Salt & Tide",
    description: "Missed-call text-back, instant lead response, SMS/email follow-up, qualification, booking, and CRM reporting for PNW contractors and service businesses.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Local Growth Engine", path: "/local-growth-engine" }]), leadEngineSchema(), leadEngineFaqSchema()],
  },
  {
    path: "/lead-leak-audit",
    title: "Free Lead Leak Snapshot | Salt & Tide Creative",
    description: "Send your website or Google listing, phone number, and email. Salt & Tide will check where local leads may be slipping through and send a free snapshot.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Lead Leak Snapshot", path: "/lead-leak-audit" }]), leadLeakAuditSchema()],
  },
  {
    path: "/kochi",
    title: "Kochi Po-cha Ordering Demo | Salt & Tide Creative",
    description: "A Salt & Tide Creative owned preview of Kochi Po-cha's QR table-ordering experience: mobile menu, guest names, shared cart, and closeout flow.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Kochi Po-cha Ordering Demo", path: "/kochi" }]), kochiDemoSchema()],
  },
  {
    path: "/better-first-impression",
    title: "Build a Better First Impression | Salt & Tide Creative",
    description: "Web design and local SEO for Edmonds, Seattle, and Puget Sound businesses that need a clearer, more professional first impression.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Better First Impression", path: "/better-first-impression" }]), adLandingServiceSchema("Build a Better First Impression", "/better-first-impression")],
  },
  {
    path: "/free-website-audit",
    title: "Get Your Free Website Audit | Salt & Tide Creative",
    description: "Request a free website audit from Salt & Tide Creative. See what may be costing you calls, leads, and local business opportunities.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Free Website Audit", path: "/free-website-audit" }]), adLandingServiceSchema("Free Website Audit", "/free-website-audit")],
  },
  {
    path: "/restaurant-websites",
    title: "Restaurant Website Design | Salt & Tide Creative",
    description: "Polished restaurant and café websites for independent Puget Sound food businesses: menus, reservations, hours, mobile UX, and local SEO.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Restaurant Websites", path: "/restaurant-websites" }]), adLandingServiceSchema("Restaurant Website Design", "/restaurant-websites")],
  },

  {
    path: "/restaurant-online-ordering",
    title: "Restaurant Online Ordering Websites | Salt & Tide Creative",
    description: "Clearer restaurant websites that help customers go from hungry to ordered with fewer steps, stronger mobile UX, and easier online ordering paths.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Restaurant Online Ordering", path: "/restaurant-online-ordering" }]), adLandingServiceSchema("Restaurant Online Ordering Websites", "/restaurant-online-ordering")],
  },
  {
    path: "/bakery-cafe-online-ordering",
    title: "Bakery & Café Online Ordering Websites | Salt & Tide Creative",
    description: "Polished websites for local bakeries and cafés that make it easier to browse products, choose pickup times, and place orders from a phone.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bakery & Café Online Ordering", path: "/bakery-cafe-online-ordering" }]), adLandingServiceSchema("Bakery & Café Online Ordering Websites", "/bakery-cafe-online-ordering")],
  },
  {
    path: "/painting-company-websites",
    title: "Websites for Local Painting Companies | Salt & Tide Creative",
    description: "Websites for local painters that showcase finished projects, transformations, workmanship, reviews, and a simple estimate request path.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Painting Company Websites", path: "/painting-company-websites" }]), adLandingServiceSchema("Websites for Local Painting Companies", "/painting-company-websites")],
  },
  {
    path: "/contractor-websites",
    title: "Contractor & Remodeler Websites | Salt & Tide Creative",
    description: "Websites for local contractors and remodelers designed to build trust before the estimate and create a clear path to request a quote.",
    image: DEFAULT_IMAGE,
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contractor & Remodeler Websites", path: "/contractor-websites" }]), adLandingServiceSchema("Contractor & Remodeler Websites", "/contractor-websites")],
  },
  {
    path: "/about",
    title: "About Salt & Tide Creative | Edmonds, WA Web Design Studio",
    description: "Meet the founders of Salt & Tide Creative — an Edmonds, WA boutique studio building websites and marketing strategies for Pacific Northwest businesses.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])],
  },
  {
    path: "/contact",
    title: "Contact Salt & Tide Creative | Free Strategy Call",
    description: "Start your project with Salt & Tide Creative. Free 30-minute strategy call for Seattle and Edmonds, WA businesses. We respond within one business day.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]), contactSchema()],
  },
  {
    path: "/seattle-web-design",
    title: "Web Design Seattle WA | Salt & Tide Creative",
    description: "Seattle-area web design and digital marketing for restaurants and small businesses. Custom websites that convert.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Seattle Web Design", path: "/seattle-web-design" }]), localBusinessSchema({ areaServed: { "@type": "City", name: "Seattle, WA" } })],
  },
  {
    path: "/edmonds-web-design",
    title: "Web Design Edmonds WA | Salt & Tide Creative",
    description: "Locally-rooted Edmonds web design — restaurants, retail, and service businesses. Boutique studio on the Edmonds waterfront.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Edmonds Web Design", path: "/edmonds-web-design" }]), localBusinessSchema({ areaServed: { "@type": "City", name: "Edmonds, WA" } })],
  },
  {
    path: "/lynnwood-web-design",
    title: "Web Design Lynnwood WA | Salt & Tide Creative",
    description: "Lynnwood and South Snohomish County web design and digital marketing — service-business specialists.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Lynnwood Web Design", path: "/lynnwood-web-design" }]), localBusinessSchema({ areaServed: { "@type": "City", name: "Lynnwood, WA" } })],
  },
  {
    path: "/insights",
    title: "Insights — Web Design & Marketing Notes | Salt & Tide",
    description: "Field notes on web design, local SEO, restaurant marketing, and what actually moves the needle for Seattle and Edmonds, WA small businesses.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Salt & Tide Creative",
    description: "How Salt & Tide Creative collects, uses, protects, and shares information submitted through our website and project inquiry forms.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])],
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Salt & Tide Creative",
    description: "The terms that apply when visitors use the Salt & Tide Creative website or contact us about web design and marketing services.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms-of-service" }])],
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy | Salt & Tide Creative",
    description: "How Salt & Tide Creative may use cookies, analytics, and similar technologies on our website.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }])],
  },
  {
    path: "/accessibility",
    title: "Accessibility Statement | Salt & Tide Creative",
    description: "Salt & Tide Creative's accessibility commitment and how visitors can report barriers on the website.",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Accessibility Statement", path: "/accessibility" }])],
  },
  {
    path: "/404",
    title: "Page not found | Salt & Tide",
    description: "This page has drifted off the chart. Head back to Salt & Tide Creative — web design and digital marketing for Seattle and Edmonds, WA.",
    noindex: true,
  },
];

for (const [slug, client, category, location, blurb, image] of projects) {
  const desc = `${client} (${location}) — ${blurb} See the strategy, design, and result behind this ${category.toLowerCase()} project by Salt & Tide Creative.`;
  routeMeta.push({
    path: `/work/${slug}`,
    title: `${client} Case Study | Salt & Tide`,
    description: truncate(desc, 160),
    image: `${SITE_ORIGIN}${image}`,
    type: "article",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: client, path: `/work/${slug}` }]), creativeWorkSchema(slug, client, category, location, blurb, image)],
  });
}

for (const [slug, title, description, headline, published, updated, image] of insights) {
  routeMeta.push({
    path: `/insights/${slug}`,
    title,
    description,
    image,
    type: "article",
    jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: headline, path: `/insights/${slug}` }]), articleSchema(slug, title, description, headline, published, updated, image)],
  });
}

function truncate(value, max) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function localBusinessSchema(extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: ORG_NAME,
    description: "Web design and digital marketing agency serving small businesses in Seattle and Edmonds, Washington.",
    url: SITE_ORIGIN,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    image: DEFAULT_IMAGE,
    logo: DEFAULT_IMAGE,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: "Edmonds", addressRegion: "WA", postalCode: "98020", addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: 47.8107, longitude: -122.3774 },
    areaServed: ["Edmonds, WA", "Seattle, WA", "Lynnwood, WA", "Shoreline, WA", "Mukilteo, WA", "Bothell, WA", "Kirkland, WA", "Bellevue, WA"].map((name) => ({ "@type": "Place", name })),
    serviceType: ["Web Design", "Web Development", "Digital Marketing", "SEO", "Brand Strategy"],
    hasOfferCatalog: serviceCatalogSchema(),
    review: testimonialReviewSchema(),
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }],
    sameAs: [],
    ...extra,
  };
}

function serviceCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    name: "Salt & Tide Creative services",
    itemListElement: [
      "Custom website design and development",
      "Website redesigns",
      "Local SEO and technical SEO foundations",
      "Conversion-focused landing pages",
      "Local Growth Engine lead-response systems",
      "Website care and marketing retainers",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
        areaServed: ["Edmonds, WA", "Seattle, WA", "Lynnwood, WA", "Shoreline, WA", "Mukilteo, WA", "Bothell, WA", "Kirkland, WA", "Bellevue, WA"].map((area) => ({ "@type": "Place", name: area })),
      },
    })),
  };
}

function testimonialReviewSchema() {
  return [
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Luigi's Breakfast" },
      itemReviewed: { "@id": `${SITE_ORIGIN}/#localbusiness` },
      reviewBody: "We were brand new and needed everything — strategy, website, the works. They delivered a complete digital foundation that made us look established from day one.",
    },
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Seattle metro service business" },
      itemReviewed: { "@id": `${SITE_ORIGIN}/#localbusiness` },
      reviewBody: "I was skeptical working with such a young team — they outperformed agencies I've paid twice as much. The design and marketing thinking in one team is rare.",
    },
  ];
}

function organizationSchema() {
  return { "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME, url: SITE_ORIGIN, logo: DEFAULT_IMAGE, foundingDate: "2026", contactPoint: { "@type": "ContactPoint", contactType: "sales", email: ORG_EMAIL, telephone: ORG_PHONE, areaServed: "US-WA", availableLanguage: ["English"] } };
}

function websiteSchema() {
  return { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_ORIGIN}/#website`, url: SITE_ORIGIN, name: ORG_NAME, publisher: { "@id": `${SITE_ORIGIN}/#organization` }, inLanguage: "en-US" };
}

function breadcrumbSchema(items) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_ORIGIN}${it.path}` })) };
}

function serviceSchema() {
  return { "@context": "https://schema.org", "@type": "Service", serviceType: "Web Design, Local SEO, Voice Search Optimization, and Digital Marketing", provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME }, areaServed: ["Seattle, WA", "Edmonds, WA", "Lynnwood, WA"].map((name) => ({ "@type": "Place", name })), offers: [{ "@type": "Offer", name: "Launch Tier", price: "3500", priceCurrency: "USD", url: `${SITE_ORIGIN}/services` }, { "@type": "Offer", name: "Growth Tier with Local SEO and Voice Search Optimization", price: "6500", priceCurrency: "USD", url: `${SITE_ORIGIN}/services` }, { "@type": "Offer", name: "Partnership Tier", price: "8500", priceCurrency: "USD", url: `${SITE_ORIGIN}/services` }] };
}

function voiceSearchSchema() {
  return { "@context": "https://schema.org", "@type": "Service", "@id": `${SITE_ORIGIN}/services#voice-search-optimization`, name: "Voice Search Optimization", serviceType: "Voice Search Optimization and Local SEO", provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME }, areaServed: ["Seattle, WA", "Edmonds, WA", "Lynnwood, WA", "Shoreline, WA", "Mukilteo, WA"].map((name) => ({ "@type": "Place", name })), url: `${SITE_ORIGIN}/services#voice-search-optimization`, description: "Conversational SEO, local business schema, FAQ schema, Google Business Profile guidance, and near-me search optimization for small businesses in the Seattle and Edmonds area.", audience: { "@type": "Audience", audienceType: "Restaurants and small businesses" } };
}

function faqSchema() {
  const entries = [
    ["How long does a typical project take?", "Tier 1 launches in 2–3 weeks. Tier 2 takes 3–5 weeks. Tier 3 is ongoing. We pace every project so clients have time to review without slowing the build down."],
    ["What happens after launch?", "Every package includes post-launch support. After that, clients can move to a care retainer, ongoing partnership, or own the site outright."],
    ["Do you offer voice search optimization?", "Yes. Voice search optimization is included in our local SEO work through conversational service copy, clear FAQ answers, LocalBusiness and FAQ schema, complete contact details, and Google Business Profile guidance."],
    ["How do you optimize a small business for near me voice searches?", "We focus on accurate business details, service area, hours, reviews, categories, location pages, fast mobile pages, and natural question-and-answer content."],
    ["Do you work with clients outside Edmonds?", "Yes. Salt & Tide Creative is rooted in Edmonds and works with PNW businesses as well as remote clients across the country."],
  ];
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: entries.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
}

function leadEngineSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_ORIGIN}/local-growth-engine#service`,
    name: "Local Growth Engine — Lead Response System",
    serviceType: "Missed-call text-back, lead response automation, SMS and email follow-up, booking, and CRM reporting",
    provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
    areaServed: ["Edmonds, WA", "Seattle, WA", "Lynnwood, WA", "Shoreline, WA", "Mukilteo, WA", "Bothell, WA", "Kirkland, WA", "Bellevue, WA"].map((name) => ({ "@type": "Place", name })),
    url: `${SITE_ORIGIN}/local-growth-engine`,
    description: "A done-for-you lead-response system for Pacific Northwest contractors and service businesses: missed-call text-back, instant lead response, consent-based SMS and email follow-up, qualification, booking, and CRM reporting.",
    audience: { "@type": "Audience", audienceType: "Contractors and home-service businesses in the Pacific Northwest" },
    offers: [
      monthlyOffer("Recovery — Missed-Call Text-Back", "200"),
      monthlyOffer("Response — Instant Lead Response + Booking", "450"),
      monthlyOffer("Growth Engine — Full Lead System + CRM + Reporting", "850"),
    ],
  };
}

function monthlyOffer(name, price) {
  return {
    "@type": "Offer",
    name,
    url: `${SITE_ORIGIN}/local-growth-engine`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  };
}

function leadEngineFaqSchema() {
  const entries = [
    ["Do you guarantee more sales or booked jobs?", "No. No honest provider can. The system makes sure every call, form, and message gets an instant, consistent response and a clear path to book, so fewer real opportunities slip away. Results depend on your lead volume, pricing, service area, and how you run the conversations."],
    ["Is automated texting legal? What about TCPA and consent?", "Texting works within consent rules. Missed-call text-back replies to people who just called you. Ongoing SMS follow-up requires consent, identifies the business, and honors STOP and HELP keywords. We do not buy lists or send cold messages."],
    ["What is A2P 10DLC registration and do I need it?", "U.S. carriers require business texting numbers to be registered (A2P 10DLC) with your legal business name and use case. We guide you through registration during onboarding. Approval timelines depend on the carriers and are outside our control."],
    ["Can people opt out of messages?", "Always. Every SMS thread supports STOP to opt out and HELP for assistance, honored automatically. Email follow-up includes a working unsubscribe link. Opt-out is a hard rule."],
    ["What does reporting show me?", "Plain-English numbers: calls captured, response times, conversations started, leads qualified, and bookings created. We report on activity we can measure honestly, not invented revenue figures."],
  ];
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: entries.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
}

function contactSchema() {
  return { "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${ORG_NAME}`, url: `${SITE_ORIGIN}/contact`, mainEntity: { "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME, email: ORG_EMAIL, telephone: ORG_PHONE, address: { "@type": "PostalAddress", addressLocality: "Edmonds", addressRegion: "WA", postalCode: "98020", addressCountry: "US" } } };
}

function leadLeakAuditSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Free Lead Leak Snapshot | ${ORG_NAME}`,
    url: `${SITE_ORIGIN}/lead-leak-audit`,
    description: "A low-friction intake for a free lead-response audit covering missed calls, website forms, booking friction, and follow-up gaps.",
    mainEntity: { "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME, email: ORG_EMAIL, telephone: ORG_PHONE },
  };
}

function kochiDemoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Kochi Po-cha QR Table Ordering Demo",
    url: `${SITE_ORIGIN}/kochi`,
    image: DEFAULT_IMAGE,
    description: "A restaurant-owned QR table-ordering preview built by Salt & Tide Creative for Kochi Po-cha, demonstrating mobile menu browsing, guest identity, shared table carts, and check closeout.",
    creator: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
  };
}

function adLandingServiceSchema(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${SITE_ORIGIN}${path}`,
    provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME, email: ORG_EMAIL, telephone: ORG_PHONE },
    areaServed: ["Edmonds, WA", "Seattle, WA", "Puget Sound"].map((area) => ({ "@type": "Place", name: area })),
    serviceType: "Web design, website redesign, local SEO, and website audit intake",
  };
}

function creativeWorkSchema(slug, client, category, location, blurb, image) {
  return { "@context": "https://schema.org", "@type": "CreativeWork", name: `${client} Case Study`, url: `${SITE_ORIGIN}/work/${slug}`, image: `${SITE_ORIGIN}${image}`, description: blurb, keywords: [category, "web design", location, "Seattle", "Edmonds WA"].join(", "), creator: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME } };
}

function articleSchema(slug, title, description, headline, published, updated, image) {
  return { "@context": "https://schema.org", "@type": "Article", headline, name: title, description, image, datePublished: published, dateModified: updated, author: { "@type": "Organization", name: ORG_NAME, url: SITE_ORIGIN }, publisher: { "@type": "Organization", name: ORG_NAME, logo: { "@type": "ImageObject", url: DEFAULT_IMAGE } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}/insights/${slug}` } };
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function setTag(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function applyMeta(baseHtml, meta) {
  const url = `${SITE_ORIGIN}${meta.path === "/" ? "/" : meta.path}`;
  const image = meta.image || DEFAULT_IMAGE;
  const type = meta.type || "website";
  const robots = meta.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  let html = baseHtml;
  html = setTag(html, /<title>.*?<\/title>/s, `<title>${escapeText(meta.title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(meta.description)}" />`);
  html = setTag(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`);
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(meta.title)}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(meta.description)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${image}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`);
  html = setTag(html, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${image}" />`);
  html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, [organizationSchema(), websiteSchema(), ...(meta.jsonLd || [])].map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`).join("\n    "));
  return html;
}

if (!fs.existsSync(INDEX_PATH)) {
  throw new Error(`Build output missing: ${INDEX_PATH}`);
}

const baseHtml = fs.readFileSync(INDEX_PATH, "utf8");
for (const meta of routeMeta) {
  const html = applyMeta(baseHtml, meta);
  const target = meta.path === "/" ? INDEX_PATH : path.join(OUT_DIR, meta.path.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

console.log(`Prerendered SEO metadata for ${routeMeta.length} routes.`);
