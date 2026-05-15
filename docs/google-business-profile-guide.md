# Google Business Profile (GBP) — Setup Guide for Salt & Tide Creative

**Estimated time:** 90 minutes initial setup + ~20 minutes/month ongoing
**Difficulty:** Easy. No technical skills required.
**Why it matters:** GBP is the single highest-leverage local-SEO action you can take. A complete, optimized GBP is the difference between appearing in the Edmonds local pack and being invisible in your own city.

---

## Part 1 — Claim & Verify (Day 1)

### Step 1.1 — Create or claim the listing

1. Sign in to Google with the account you want to own this profile permanently. **Recommendation:** Use a dedicated email like `gbp@salttidecreative.com` rather than a personal Gmail. You will own this for years.
2. Go to **[business.google.com](https://business.google.com)**.
3. Click **Manage now** (or **Add your business**).
4. Search for "Salt & Tide Creative". If a listing exists, claim it. If not, click **Add your business to Google**.

### Step 1.2 — Choose category

This is the most important field on the entire profile. Google uses your primary category as the main signal for *which* searches you appear in.

- **Primary category:** `Web designer` (this is the category Google shows for "web design near me")
- **Additional categories:** `Marketing agency`, `Internet marketing service`, `Graphic designer`, `Advertising agency`

### Step 1.3 — Address & service area

You're a service-area business (you go to clients or work remotely), not a walk-in business. Set up accordingly:

- **Do you have a location customers can visit?** → **No**
- **Where do you serve customers?** → Add the following service areas one at a time:
  - Edmonds, WA
  - Seattle, WA
  - Shoreline, WA
  - Mountlake Terrace, WA
  - Lynnwood, WA
  - Mukilteo, WA
  - Bothell, WA
  - Kirkland, WA
  - Bellevue, WA

### Step 1.4 — Contact info

Use the **exact same** values as the website footer NAP block. Character-for-character.

- **Business name:** `Salt & Tide Creative` (no LLC suffix on GBP — consumers don't search for "Salt & Tide Creative LLC")
- **Phone:** Your real business number (forward it to your cell if needed)
- **Website:** `https://salttidecreative.com`

### Step 1.5 — Verify

Google offers four verification methods. Most likely you'll get **postcard** or **video** verification. Pick whichever Google offers you and complete it the same day. Do not skip this step — an unverified GBP doesn't show in search results.

---

## Part 2 — Optimize (Day 2)

Once verified, fill out every remaining field. The "completeness" score is a real ranking factor.

### Step 2.1 — Description

Write a 750-character description. Include your primary keyword once, your city once, and your unique angle. Example:

> Salt & Tide Creative is a boutique web design and digital marketing studio based in Edmonds, WA, serving small businesses across Seattle and the greater Puget Sound region. We design, build, and ship custom websites in 2–5 weeks, paired with conversion-focused marketing strategy. Our specialty: restaurants, retailers, and service businesses that have outgrown a template site and want digital that actually earns its keep. AI-accelerated build pipelines let us ship faster than typical agencies, with the craft of a small studio. Founded in 2026 on the Edmonds waterfront. We work with clients across the Puget Sound and remotely nationwide.

### Step 2.2 — Hours

Match the website footer exactly:

- Mon–Fri: 9:00 AM – 6:00 PM PT
- Sat–Sun: Closed

### Step 2.3 — Photos

Upload at least 10 high-quality photos. Google specifically rewards profiles with regular new photo uploads. Recommended set:

- **Logo** (square, 720×720 minimum)
- **Cover photo** (16:9, 1080×608 or larger) — exterior of Edmonds, brand mark, or hero from website
- **Founders** (2 photos) — both of you, working
- **Workspace** (3–4 photos) — your desk, screens, sketches
- **Work in progress** (3–4 photos) — wireframes, design files, screens
- **Client work** (4–6 photos) — screenshots of shipped sites, with permission

**Refresh cadence:** Add 2 new photos per month going forward. This is a real ranking factor, not just polish.

### Step 2.4 — Services

Add each service as its own item, with a short description. Use the exact same names as the website Services page so Google can correlate.

| Service | Price (optional) | Description |
|---|---|---|
| Launch Tier — Custom Website | from $3,500 | A focused 5-page website built in 2–3 weeks. Strategy, design, build, launch, and 30 days of post-launch support. |
| Growth Tier — Website + Local SEO | from $6,500 | A 10-page site with full local SEO setup, schema markup, GBP optimization, and a 90-day growth plan. 3–5 weeks. |
| Partnership Tier — Full-Service Growth | from $8,500 + $1,000/mo | Ongoing partnership including site, marketing, content, and strategic advisory. |
| Brand Refresh + Website | starting $4,500 | Logo, identity, and a new site that reflects it. |
| Local SEO Audit | $500 | A 30-page audit of your current site + GBP + citations with prioritized fixes. |

### Step 2.5 — Products

If applicable. Skip if your offering is purely services.

### Step 2.6 — Q&A (proactive)

Before customers ask, seed your own Q&A. Sign in as the business, switch to a personal Google account, and post these as questions. Then sign back in as the business and answer them.

Suggested questions:

1. *"How much do your websites cost?"*
2. *"Do you work with restaurants?"*
3. *"How long does a typical project take?"*
4. *"Do you handle SEO and marketing too?"*
5. *"Are you actually based in Edmonds?"*

Each question is a chance to use a primary keyword naturally.

---

## Part 3 — Reviews (Week 1 onward)

Reviews are the **#2 local-pack ranking factor** behind proximity. They're also what closes deals from people who find you. Treat this as a permanent process, not a one-time push.

### Step 3.1 — Get to 5 reviews fast

The first 5 reviews are the hardest because there's no social proof yet. Strategy:

1. **Send a review request to every founder testimonial source.** Pancake Haus, Luigi's Breakfast, Walnut Street Coffee — anyone you've worked with.
2. **Make it absurdly easy.** Use Google's [shortlink generator](https://business.google.com/links) to create a review URL like `https://g.page/r/CXXXX`. Send via text: *"Would you mind leaving us a quick Google review? Here's the direct link: [URL]"*
3. **Don't ask for 5 stars. Ask for honest.** Asking for stars violates Google's terms.
4. **Aim for one new review per month minimum** going forward.

### Step 3.2 — Respond to every review

- **Positive:** Thank by name, mention something specific from the review, sign with your first name. ~2 sentences.
- **Negative:** Respond within 24 hours. Acknowledge, don't argue, take it offline. *"We're sorry your experience didn't match our standard. Would you mind emailing me directly at hello@salttidecreative.com so I can make this right?"*
- **Spam/fake:** Flag for removal. Don't engage publicly.

### Step 3.3 — Sync to website

Once you have 5+ verified Google reviews, copy the best 2–3 quotes into the `Review` schema in `client/src/pages/Home.tsx`. Update `aggregateRating` to reflect the real count. Star ratings in search results activate at this point.

---

## Part 4 — Posts (Ongoing)

GBP Posts appear in your knowledge panel and in some local-pack views. Google rewards weekly posting. Each post should be ~150–300 words with a CTA.

### Recommended cadence

- **Weekly:** 1 GBP post
- **Monthly:** 1 photo upload (minimum)
- **Quarterly:** 1 service update or offer

### Post types to rotate

1. **Project showcase** — "We just shipped Pancake Haus's new site. Bookings doubled in 60 days." Link to `/work/pancake-haus`.
2. **Insight teaser** — Pull a paragraph from your latest Insights article. Link to `/insights/[slug]`.
3. **Offer** — "Free 30-minute strategy call for Edmonds restaurants. No commitment." Link to `/contact`.
4. **Local content** — "Loved working with [Edmonds business] this week." Tag and credit.

---

## Part 5 — Insights & Performance

After 30 days you'll have data. Pay attention to:

- **Searches** — The actual queries people typed before clicking your profile. This tells you which keywords are working.
- **Direct vs Discovery searches** — Direct = brand search (good, but limited ceiling). Discovery = unbranded category search (the holy grail).
- **Photo views** — High photo views = high engagement = Google notices and rewards you.
- **Calls + Direction requests + Website clicks** — These are your conversion metrics. Track monthly trend.

Pull this data into a simple spreadsheet at the end of each month. Patterns emerge in months 3–6.

---

## Part 6 — Common Mistakes to Avoid

1. **Don't keyword-stuff the business name.** "Salt & Tide Creative — Best Web Design Edmonds" gets you suspended. Just "Salt & Tide Creative."
2. **Don't change the address frequently.** Each change resets some of your ranking signal.
3. **Don't use a virtual office address.** Google can detect it. Either use a real address or be a service-area business (which you are).
4. **Don't buy reviews.** Ever. Google detects bought reviews and the penalty is severe.
5. **Don't ignore negative reviews.** Silence reads as guilt.
6. **Don't post then disappear.** Inconsistent posting hurts more than no posting.

---

## Part 7 — Linked Citations (Day 2 onward)

Once GBP is live, every local citation directory (Yelp, Bing Places, Apple Business Connect, etc.) should be updated to match. See **`local-citation-checklist.md`** for the full submission queue.

---

## Owner Sign-Off Checklist

Don't move on until each item is checked.

- [ ] GBP claimed and verified
- [ ] Primary category set to "Web designer"
- [ ] All 9 service areas added
- [ ] Description written (750 chars, includes "Edmonds, WA" and "web design")
- [ ] Hours match the website footer exactly
- [ ] Logo + cover photo + 8 additional photos uploaded
- [ ] All 5 services added with prices
- [ ] 5 self-seeded Q&A items posted
- [ ] First 3 review requests sent
- [ ] First GBP post published
- [ ] Calendar reminder set for weekly posting
- [ ] Calendar reminder set for monthly review
- [ ] Profile shortlink generated and saved

---

*This guide is a living document. Update it as Google's GBP product evolves.*
