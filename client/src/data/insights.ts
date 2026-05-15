// SALT & TIDE — Editorial / Insights data.
// Three SEO-targeted long-form posts. Body uses light Markdown (## / **).
export type Insight = {
  slug: string;
  title: string;             // H1 / og:title
  metaTitle: string;         // <60 chars
  metaDescription: string;   // 150–160 chars
  excerpt: string;
  category: string;
  readMinutes: number;
  publishDate: string;       // ISO
  updatedDate: string;       // ISO
  author: { name: string; role: string };
  hero: string;              // image URL
  keywords: string[];
  body: string;              // markdown-lite
};

export const INSIGHTS: Insight[] = [
  {
    slug: "how-much-does-a-website-cost-seattle",
    title: "How Much Does a Website Cost in Seattle? (2026 Guide)",
    metaTitle: "How Much Does a Website Cost in Seattle? | 2026 Guide",
    metaDescription:
      "What does a small business website really cost in Seattle? Real 2026 pricing, what drives the number, and how to avoid the most common pricing mistakes.",
    excerpt:
      "A no-fluff breakdown of what websites actually cost in Seattle in 2026 — from $1,500 freelancer builds to $30,000 agency projects, and where the real value lives in between.",
    category: "Pricing",
    readMinutes: 9,
    publishDate: "2026-05-10",
    updatedDate: "2026-05-15",
    author: { name: "Salt & Tide", role: "Studio" },
    hero: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80",
    keywords: [
      "website cost Seattle",
      "small business website cost",
      "Seattle web design pricing",
      "how much does a website cost",
    ],
    body: `Most Seattle small business owners we talk to have heard wildly different numbers for the same scope of work — $1,500 from a freelancer, $25,000 from a downtown agency, $4,000 from a "do everything" SaaS site builder. The truth is that all three of those numbers can be correct, and all three can be wrong, depending on what you actually need.

This guide breaks down what websites really cost in Seattle in 2026, where the spend goes, and how to spot a quote that's too low or too high for your situation.

## The four real tiers of Seattle web design pricing

Pricing falls into four honest tiers. Each one reflects a different mix of strategy, design, engineering, and post-launch support — not just "more pages."

**Tier A — DIY templates and freelancers ($500 – $2,500).** Squarespace, Wix, or a freelancer using a pre-built template. Works for the absolute earliest-stage business that just needs a presence. Trade-offs: limited differentiation, weak SEO architecture, and the bill always comes due later when you outgrow it.

**Tier B — Boutique studio launch ($3,500 – $8,500).** A small studio (two to five people) doing custom design and AI-assisted build. This is where most Seattle small businesses land in 2026. You get a custom site, real conversion thinking, mobile-first engineering, and a launch in 2–5 weeks.

**Tier C — Mid-market agency ($10,000 – $25,000).** A 10–30 person agency with formal account management. The work is generally good, but you're paying for the agency's overhead — downtown office, account managers, project managers — at least as much as for the design itself.

**Tier D — Enterprise / specialty ($30,000 – $150,000+).** Custom CMS, integrations, multi-region, ecommerce at scale. Justified only if your business actually has those needs.

## What you're actually paying for

A Seattle website quote in the $5,000–$8,500 range typically covers six things:

**Strategy and discovery.** A real conversation about your business, your customers, and what success looks like. If a quote skips this step, the design will be guesswork.

**Custom design.** Brand-aligned visual design, typography, and layout. Not a template. This is where craft separates a $3,500 site from a $1,500 site.

**Engineering and build.** The actual construction of the site. AI-assisted build pipelines (the way modern boutique studios work in 2026) compress this from weeks to days — that's a real efficiency gain that drops the price for you.

**Mobile + performance.** Most of your traffic will arrive on a phone. A site that loads in three seconds versus one that loads in eight is a measurable revenue difference.

**SEO foundations.** Schema markup, sitemap, on-page optimization, and Google Business Profile setup. Cheap sites often skip this; you pay for it later.

**Post-launch support.** 30–60 days of fixes, content tweaks, and questions answered after you go live. Anyone who hands you a site and disappears is not your partner.

## What drives the price up

The biggest cost drivers in a Seattle web project, in order of impact:

1. **Number of unique page templates** (not page count — templates).
2. **Custom integrations** — booking, ecommerce, CRM, custom calculators.
3. **Original photography or illustration** commissioned for the site.
4. **Multi-language or multi-location** complexity.
5. **Aggressive timelines** that compress strategy and review.

A 10-page site with three unique templates costs about the same as a 5-page site with three unique templates. A 5-page site with five unique templates costs noticeably more.

## What drives the price down

**Reusing your existing brand assets.** If you have a logo and brand guidelines you like, that's hours saved.

**Writing your own copy** — or at least the first draft. Most good studios will polish it. Few will write it from scratch without a copywriting fee.

**A clear single goal.** "Get more direct bookings" is easier to design for than "more bookings, more catering, more events, more reviews, more gift cards, more newsletter signups, more social followers."

**Choosing a focused boutique studio over a mid-market agency.** Same scope, lower overhead, often better craft.

## A real Salt & Tide engagement

To make this concrete: a typical Salt & Tide Growth-tier engagement for a Seattle restaurant in 2026 looks like this — $6,500, 4 weeks, 8 pages including menu and reservation, custom photography direction, full local SEO setup, two weeks of post-launch support, and the client owns everything at the end. No subscription, no lock-in.

## Three pricing mistakes to avoid

**Mistake one — buying on price alone.** A $1,500 site that doesn't convert costs more than a $6,500 site that does. The cheapest quote is rarely the cheapest project.

**Mistake two — paying for an agency office.** If three of the people in the kickoff meeting are not going to do any of the actual work, you're paying for their salaries.

**Mistake three — not asking what happens at month thirteen.** Some "website-as-a-service" plans look reasonable until you realize you've paid $200/month for three years and don't own the site. Always ask: who owns the code, the content, and the domain?

## How to start

If you're a Seattle small business owner trying to scope what you actually need, the right first step is a 30-minute strategy call. We do them free, with no expectation of a sale. We'll either point you to a starting tier that fits, or honestly tell you that you'd be better served by a freelancer or a different studio.

[**Start a free strategy call →**](/contact)
`,
  },

  {
    slug: "why-seattle-small-businesses-need-a-website",
    title: "Why Every Seattle Small Business Needs a Real Website in 2026",
    metaTitle: "Why Seattle Small Businesses Need a Website (2026)",
    metaDescription:
      "Social media is rented land. Your website is owned. Here's why a real website still matters for Seattle small businesses in 2026 — and what to look for.",
    excerpt:
      "If you can run your business on Instagram and Google Maps alone, do you actually need a website in 2026? Short answer: yes — and here's exactly why.",
    category: "Strategy",
    readMinutes: 7,
    publishDate: "2026-05-08",
    updatedDate: "2026-05-15",
    author: { name: "Salt & Tide", role: "Studio" },
    hero: "https://images.unsplash.com/photo-1493932484895-752d1471eab5?auto=format&fit=crop&w=1600&q=80",
    keywords: [
      "do small businesses need a website",
      "Seattle small business website",
      "Edmonds small business",
      "small business marketing 2026",
    ],
    body: `It's a fair question. In 2026, a Seattle small business can technically operate on Instagram, Google Maps, and a Linktree. Customers find you, message you, and book you without ever leaving a platform you don't own. So why bother with a real website?

The answer is leverage. Your social presence rents traffic. Your website owns it. Here is what actually changes when you have one.

## Search is still where intent lives

When a Seattle customer wants to make a decision — book a table tonight, hire a painter for next month, find a new breakfast place — they search. They search on Google. They search "near me." They click on results that look credible.

A Google Business Profile gets you on the map. A real website gets you the click. The two work together; neither replaces the other.

In our own portfolio, we routinely see restaurants double their direct booking traffic within 90 days of launching a real site, because the search results stop sending people to OpenTable, Yelp, and Toast (each of which charges your business per visit) and start sending them to your own page.

## Reviews need a home that's yours

Five-star reviews on Google are gold. Five-star reviews embedded in your own site, with photos and full quotes, are platinum — because the visitor already trusts your brand environment.

Review schema (the structured data that makes star ratings show up in Google search results) only works on a real website. You can't add it to an Instagram bio.

## "Looks legit" matters more than you think

Customers in 2026 are sharper than they were five years ago. A polished, fast website is now the floor, not the ceiling. When a Seattle customer is choosing between two similar restaurants and one has a thoughtful site and one doesn't, the one that doesn't is invisibly losing business it never finds out about.

## Your website is the only platform you control

Instagram changes its algorithm. TikTok gets banned in some country. Yelp throttles your visibility unless you advertise. Your website? Yours forever.

A real website is the only piece of digital real estate you actually own. Everything else is rented.

## What "real website" actually means in 2026

Not every website earns its keep. The ones that do share five traits:

**Mobile-first.** Built for the phone, because that's where 70%+ of small business traffic comes from. If it loads slowly or looks broken on mobile, none of the rest matters.

**Conversion-focused.** Every page has one job. The home page books a table or sells a service or captures a lead — not all three at once with no priority.

**Fast.** Under three seconds to first paint. Page speed is now a Google ranking factor and a measurable revenue lever.

**Locally optimized.** Schema markup, NAP consistency, Google Business Profile linkage, location pages where it makes sense.

**Owned.** You hold the domain, the code, and the content. No SaaS lock-in.

## Three signs your current site isn't pulling its weight

**One — you can't remember the last time it was updated.** Information drift kills credibility. Old hours, old menus, old photos all signal "no longer in business."

**Two — your phone analytics show high bounce rates from mobile.** Usually means it's slow, or the navigation is broken on small screens, or the call-to-action isn't above the fold.

**Three — you can't tell what action a visitor should take.** If you can't summarize the goal of your home page in one sentence, the visitor can't either.

## What to do instead

If your site is a few years old and feeling tired, you do not necessarily need to start from scratch. A focused refresh — sharper messaging, better mobile, fixed SEO foundations — often outperforms a full rebuild and costs half as much.

If you don't have a site yet, skip the SaaS site builders and either learn one well or hire a focused boutique studio. The middle ground (a freelancer using a generic template) tends to age the fastest.

## How we approach it

At Salt & Tide we usually start with a 30-minute strategy call to figure out which of those three paths makes sense — refresh, rebuild, or do-nothing-and-fix-this-instead. About a quarter of our calls end in "you don't need us yet, here's what to do for free." We'd rather earn your trust than your money.

[**Start with a free 30-minute call →**](/contact)
`,
  },

  {
    slug: "restaurant-website-design-guide",
    title: "Restaurant Website Design: A 2026 Guide for Seattle Operators",
    metaTitle: "Restaurant Website Design Guide for Seattle (2026)",
    metaDescription:
      "What every Seattle restaurant website needs in 2026: menu, reservation, mobile speed, local SEO, schema, photography, and design that drives ticket size.",
    excerpt:
      "A restaurant website in 2026 has one job: turn a hungry visitor into a booked seat. Here is what to design for, and what to cut.",
    category: "Restaurants",
    readMinutes: 8,
    publishDate: "2026-05-02",
    updatedDate: "2026-05-15",
    author: { name: "Salt & Tide", role: "Studio" },
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    keywords: [
      "restaurant website design",
      "Seattle restaurant website",
      "restaurant web design Edmonds",
      "restaurant SEO",
    ],
    body: `A restaurant website in 2026 is not a brochure. It is a booking machine. Every layout decision, every photo, every line of copy either earns a reservation or it gets in the way of one.

Here is the framework we use at Salt & Tide for the Seattle and Edmonds restaurants we work with.

## The two questions every restaurant site has to answer in three seconds

When a hungry Seattleite lands on your home page, two questions are firing in their brain at once:

1. **Will I like this place?**
2. **How do I book a table right now?**

If the answer to either is unclear, they leave. They land on OpenTable, or Yelp, or your competitor.

## The five-block restaurant home page

The home pages that consistently win look almost the same in skeleton — and very different in personality. The skeleton is:

**Block one — Hero.** A high-quality photo (food, room, or both), the restaurant name, the cuisine in one phrase, and a single primary call-to-action: Reserve a Table.

**Block two — The pitch.** Two to three sentences that tell the visitor why this place exists and what they should expect. Not "fine dining since 1987." Something specific, voice-y, true.

**Block three — Menu preview.** Not the full menu — that's a click away. A handful of signature dishes with photography that earns the click.

**Block four — Reviews + proof.** Star rating, two or three real review quotes, awards if any. Schema markup so Google can show stars in search.

**Block five — Find / book / order.** Address, hours, map, phone, reservation widget, online order link. Everything the visitor needs to act.

That's it. Most restaurant sites that struggle have eight to twelve blocks competing for attention.

## Mobile-first or you lose

70%+ of restaurant website traffic in 2026 comes from a phone, often standing on a sidewalk choosing between three places. Your site has to:

- Load in under three seconds
- Show the address, phone, and reserve button without a single scroll
- Have menus that don't require pinch-to-zoom
- Work flawlessly on the older iPhone they're carrying

Open your own restaurant site on the oldest phone you own. If it's painful, your customers feel it too.

## Photography is half the project

We've seen $25,000 restaurant websites tank because the photography was an afterthought. We've seen $4,000 sites print money because the photography was excellent.

Budget for it. If it's not in the project, get it on the schedule the week before launch. If you can't afford a commercial food photographer, an iPhone in natural light at the right time of day shot by someone who has watched a YouTube tutorial is still better than stock photos.

## The local SEO checklist for Seattle restaurants

The mechanical pieces matter — none of them are sexy, all of them move the needle:

**Google Business Profile.** Claimed, verified, fully filled out, with current hours, current menu, current photos, and a steady drip of new posts. Update at least monthly.

**On-page SEO.** Title tag includes the city ("Restaurant X — Seattle Italian Restaurant in Belltown"). Meta description includes the cuisine and neighborhood. H1 includes the brand. NAP (name, address, phone) is consistent across the site, GBP, and citations.

**Schema markup.** Restaurant + Menu + Review + LocalBusiness. This is what makes Google show your hours, ratings, and menu items directly in search results.

**Reviews.** Ask for them, respond to all of them (positive and negative), embed the best ones on your home page.

**Citations.** Same name, same address, same phone, same hours on Yelp, OpenTable, Toast, TripAdvisor, and three to five local Seattle directories. Inconsistency hurts.

## Booking flow

If you're using a reservation platform (OpenTable, Resy, Tock, SevenRooms), embed it inline on your site rather than linking out. Every link out is a chance to lose the customer.

If you take reservations by phone, make the phone number a one-tap call-to-action on mobile, fixed to the bottom of the screen.

If you're walk-in only, say so loudly. "No reservations needed — we keep three tables open for walk-ins until 9:30pm" is a clarifying, confidence-building statement.

## The three things to cut

**One — long backstory paragraphs nobody reads.** Three sentences max for the about. Save the long version for the press kit.

**Two — auto-playing music.** Always. Without exception. We have never seen a restaurant site improve by adding music.

**Three — PDF menus.** They don't render well on mobile, they don't work for SEO, and they're a pain to update. Use a real HTML menu page.

## What this looks like in practice

Two of our portfolio restaurants — Pancake Haus and Luigi's Breakfast, both in Edmonds — followed exactly this framework. Both saw direct booking traffic increase substantially within 90 days of launch, and both moved up in local search for their core terms ("breakfast Edmonds," "pancakes near me," etc.) within the first quarter.

The work isn't magic. It's discipline applied to a clear framework.

## Where to start

If you're a Seattle or Edmonds restaurant operator with a website that isn't pulling its weight, the right first step is an honest audit. We do those for free in 30 minutes, and you walk away with a list of fixes you can either do yourself or hand to whoever built your current site.

[**Book a free restaurant website audit →**](/contact)
`,
  },
];
