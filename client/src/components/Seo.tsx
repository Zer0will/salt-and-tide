// SALT & TIDE — Pacific Brutalist. Per-route SEO head manager.
// Mutates document.head on mount: title, meta description, canonical,
// Open Graph, Twitter Cards, and JSON-LD structured data. SPA-friendly,
// no extra dependencies, idempotent across navigation.
//
// OWNER: SITE_ORIGIN below should match the production canonical host.
import { useEffect } from "react";

export const SITE_ORIGIN = "https://salttidecreative.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og/og-default.png`;

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type SeoProps = {
  title: string;                  // <60 chars
  description: string;            // 150–160 chars
  path: string;                   // e.g. "/services"
  image?: string;                 // absolute or relative
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  jsonLd?: JsonLd;                // single object OR array of objects
  keywords?: string[];
};

function setMeta(attr: "name" | "property", key: string, value: string) {
  if (!value) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ATTR = "data-stc-jsonld";
function setJsonLd(jsonLd?: JsonLd) {
  // Remove any previously injected route-level scripts first.
  document.head
    .querySelectorAll<HTMLScriptElement>(`script[${JSONLD_ATTR}="route"]`)
    .forEach((n) => n.remove());
  if (!jsonLd) return;
  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  blocks.forEach((block) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute(JSONLD_ATTR, "route");
    s.text = JSON.stringify(block);
    document.head.appendChild(s);
  });
}

export function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  jsonLd,
  keywords,
}: SeoProps) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
    const ogImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE_ORIGIN}${image}`
      : DEFAULT_OG_IMAGE;

    document.title = title;
    setMeta("name", "description", description);
    if (keywords?.length) setMeta("name", "keywords", keywords.join(", "));
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setLink("canonical", url);

    // Open Graph
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:alt", title);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name", "Salt & Tide Creative");
    setMeta("property", "og:locale", "en_US");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    setJsonLd(jsonLd);
    return () => {
      // Leave canonical/meta in place; only clear JSON-LD on unmount so the next route can rewrite cleanly.
      setJsonLd(undefined);
    };
  }, [title, description, path, image, type, noindex, jsonLd, keywords]);
  return null;
}

// ---------- Reusable schema builders ----------

export const ORG_NAME = "Salt & Tide Creative";
export const ORG_PHONE = "+1-253-660-8555";
export const ORG_EMAIL = "hello@salttidecreative.com";
export const ORG_LOGO = `${SITE_ORIGIN}/og/og-default.png`;
export const ORG_AREAS = [
  "Edmonds, WA",
  "Seattle, WA",
  "Lynnwood, WA",
  "Shoreline, WA",
  "Mukilteo, WA",
  "Bothell, WA",
  "Kirkland, WA",
  "Bellevue, WA",
];

export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: ORG_NAME,
    description:
      "Web design and digital marketing agency serving small businesses in Seattle and Edmonds, Washington.",
    url: SITE_ORIGIN,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    image: ORG_LOGO,
    logo: ORG_LOGO,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonds",
      addressRegion: "WA",
      postalCode: "98020",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 47.8107, longitude: -122.3774 },
    areaServed: ORG_AREAS.map((a) => ({ "@type": "Place", name: a })),
    serviceType: ["Web Design", "Web Development", "Digital Marketing", "SEO", "Brand Strategy"],
    hasOfferCatalog: serviceCatalogSchema(),
    review: testimonialReviewSchema(),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/salttidecreative/",
      "https://share.google/jvwuOWUdfh3jCB8Al",
    ],
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
        areaServed: ORG_AREAS.map((area) => ({ "@type": "Place", name: area })),
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
      reviewBody:
        "We were brand new and needed everything — strategy, website, the works. They delivered a complete digital foundation that made us look established from day one.",
    },
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Seattle metro service business" },
      itemReviewed: { "@id": `${SITE_ORIGIN}/#localbusiness` },
      reviewBody:
        "I was skeptical working with such a young team — they outperformed agencies I've paid twice as much. The design and marketing thinking in one team is rare.",
    },
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: ORG_NAME,
    url: SITE_ORIGIN,
    logo: ORG_LOGO,
    foundingDate: "2026",
    founders: [
      { "@type": "Person", name: "Yael", jobTitle: "Co-Founder, Web Development" }, // OWNER: full name
      { "@type": "Person", name: "Chaz", jobTitle: "Co-Founder, Marketing Strategy" }, // OWNER: full name
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: ORG_EMAIL,
      telephone: ORG_PHONE,
      areaServed: "US-WA",
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: ORG_NAME,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: "en-US",
  };
}

export function leadEngineSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_ORIGIN}/local-growth-engine#service`,
    name: "Local Growth Engine — Lead Response System",
    serviceType:
      "Missed-call text-back, lead response automation, SMS and email follow-up, booking, and CRM reporting",
    provider: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
    areaServed: ORG_AREAS.map((a) => ({ "@type": "Place", name: a })),
    url: `${SITE_ORIGIN}/local-growth-engine`,
    description:
      "A done-for-you lead-response system for Pacific Northwest contractors and service businesses: missed-call text-back, instant lead response, consent-based SMS and email follow-up, qualification, booking, and CRM reporting.",
    audience: {
      "@type": "Audience",
      audienceType: "Contractors and home-service businesses in the Pacific Northwest",
    },
    offers: [
      monthlyOffer("Recovery — Missed-Call Text-Back", "200"),
      monthlyOffer("Response — Instant Lead Response + Booking", "450"),
      monthlyOffer("Growth Engine — Full Lead System + CRM + Reporting", "850"),
    ],
  };
}

function monthlyOffer(name: string, price: string) {
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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_ORIGIN}${it.path}`,
    })),
  };
}
