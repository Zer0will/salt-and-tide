// SALT & TIDE — City landing page configs.
// Each entry powers one route under /<slug>-web-design.
import type { LocationPageConfig } from "@/pages/LocationPage";

export const SEATTLE: LocationPageConfig = {
  city: "Seattle",
  state: "WA",
  slug: "/seattle-web-design",
  headline: "Web Design Built For |Seattle Businesses.",
  intro:
    "We design and build conversion-focused websites for restaurants, service businesses, and small operators across Seattle and the greater Puget Sound region.",
  reasons: [
    {
      t: "Local market knowledge",
      d: "We know how Seattle customers search, how reviews drive booking, and what \u2018good\u2019 looks like next to your competition. Strategy is grounded in your zip code, not a national playbook.",
    },
    {
      t: "Faster than typical agencies",
      d: "AI-assisted build pipelines compress the engineering phase from weeks to days, so you launch faster without trading craft \u2014 every layout, image, and word is still hand-finished.",
    },
    {
      t: "SEO-ready from day one",
      d: "Schema, sitemap, page speed, mobile-first architecture, and Google Business Profile optimization are baked in \u2014 not bolted on later.",
    },
    {
      t: "Honest pricing, no lock-in",
      d: "Tier 1 starts at $3,500. You own the site, the domain, and the content. We never trap clients in proprietary systems.",
    },
  ],
  faq: [
    {
      q: "How much does a Seattle small business website cost?",
      a: "Most Seattle small business sites we build run $3,500\u2013$8,500 depending on scope. Restaurant sites and service businesses with bookings tend to land in the $5,000\u2013$8,500 range. Larger Seattle agencies often quote $15,000\u2013$30,000 for the same scope; our pricing reflects a focused two-person studio with low overhead.",
    },
    {
      q: "Do you only work with Seattle businesses?",
      a: "We're based in Edmonds and work with clients across the Seattle metro \u2014 Capitol Hill, Ballard, West Seattle, Queen Anne, SoDo, and beyond \u2014 plus the Eastside. We also accept remote clients nationwide.",
    },
    {
      q: "Can you handle local SEO for our Seattle location?",
      a: "Yes. Local SEO is part of our marketing offering: Google Business Profile setup and optimization, local citation building, on-page SEO targeting your service area, and a 90-day plan tied to actual revenue, not vanity metrics.",
    },
    {
      q: "How long does a Seattle web design project take?",
      a: "Tier 1 (Launch) ships in 2\u20133 weeks. Tier 2 (Growth) ships in 3\u20135 weeks. Tier 3 (Partnership) is an ongoing engagement with a launch in roughly the same window plus continuous iteration.",
    },
  ],
};

export const EDMONDS: LocationPageConfig = {
  city: "Edmonds",
  state: "WA",
  slug: "/edmonds-web-design",
  headline: "Locally Rooted |Edmonds Web Design.",
  intro:
    "We're based in Edmonds. We know the businesses on Main Street, the regulars at the cafe, and what makes a downtown Edmonds storefront work online \u2014 because we live here.",
  reasons: [
    {
      t: "Truly local studio",
      d: "Salt & Tide is registered in Washington and headquartered in Edmonds. We meet on the waterfront, not in a Slack DM \u2014 unless you prefer Slack.",
    },
    {
      t: "Edmonds Creative District network",
      d: "We're plugged into the Edmonds Chamber of Commerce, Creative District, and the Edmonds small-business community. Referrals are real.",
    },
    {
      t: "Restaurant + retail focus",
      d: "Restaurants, breakfast spots, retailers, and service operators are our specialty \u2014 the exact mix Edmonds runs on.",
    },
    {
      t: "Same-week response",
      d: "Local clients get same-week meetings. Most projects start within two weeks of the first call.",
    },
  ],
  faq: [
    {
      q: "Are you actually based in Edmonds, WA?",
      a: "Yes. Salt & Tide Creative LLC is registered in Washington with an Edmonds business address. We have an Edmonds business endorsement on file with the city.",
    },
    {
      q: "Can we meet in person?",
      a: "Absolutely. Coffee on the waterfront, a working session at one of our Edmonds clients\u2019 spaces, or a screen-share \u2014 your call.",
    },
    {
      q: "Do you work with restaurants in downtown Edmonds?",
      a: "Yes \u2014 our portfolio includes Pancake Haus and Luigi's Breakfast, both Edmonds operators. Restaurant marketing is a core capability.",
    },
    {
      q: "What's your typical Edmonds project timeline?",
      a: "Tier 1: 2\u20133 weeks. Tier 2: 3\u20135 weeks. Local clients get priority scheduling \u2014 often we can start the same week you sign.",
    },
  ],
};

export const LYNNWOOD: LocationPageConfig = {
  city: "Lynnwood",
  state: "WA",
  slug: "/lynnwood-web-design",
  headline: "Web Design For |Lynnwood Businesses.",
  intro:
    "Lynnwood and South Snohomish County businesses get the same focused, conversion-driven design and marketing we deliver across the Puget Sound region.",
  reasons: [
    {
      t: "Snohomish County roots",
      d: "We work with operators across Lynnwood, Mill Creek, Mountlake Terrace, and Edmonds. Local knowledge means local context.",
    },
    {
      t: "Service-business specialists",
      d: "Painting contractors, landscapers, home services, retail \u2014 we know how to make service businesses look booked and trustworthy online.",
    },
    {
      t: "Bookings, not just brochures",
      d: "Every site is engineered to convert browsers into bookings, calls, or quote requests \u2014 not just sit there looking nice.",
    },
    {
      t: "Pricing that fits Snohomish County",
      d: "Starting at $3,500. Most Lynnwood clients land in the $5,000\u2013$8,500 range \u2014 a fraction of what downtown Seattle agencies charge for the same scope.",
    },
  ],
  faq: [
    {
      q: "Do you work with Lynnwood service businesses?",
      a: "Yes. Painting, landscaping, home services, and retail are core verticals for us. See Medina Painting and LGM Landscaping in our portfolio for examples.",
    },
    {
      q: "Will my Lynnwood business rank in local search?",
      a: "We set up Google Business Profile correctly, build local citations, optimize on-page SEO for your service area, and provide a 90-day SEO plan. Most clients see meaningful local search movement within 60\u201390 days.",
    },
    {
      q: "Do I need to come to Edmonds for meetings?",
      a: "No. We do most discovery and review on Zoom, but we'll happily drive up to Lynnwood for kickoffs and major milestones.",
    },
    {
      q: "Can you redesign my existing Lynnwood site?",
      a: "Yes. About half our work is redesigns. We'll audit what you have, identify what's working, and rebuild what isn't.",
    },
  ],
};

export const LOCATIONS = [SEATTLE, EDMONDS, LYNNWOOD] as const;
