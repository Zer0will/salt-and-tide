# SEO Implementation Todo — Salt & Tide Creative

## Phase 1 — Pull + Audit
- [ ] Pull latest from `user_github` via `webdev_save_checkpoint`
- [ ] Audit current `/home/ubuntu/salt-and-tide/client/index.html` for meta state
- [ ] Inventory current routes and confirm portfolio data

## Phase 2 — Stage 1 Technical
- [ ] Create `client/public/robots.txt` (allow all + sitemap reference)
- [ ] Create `client/public/sitemap.xml` covering home, work, 8 case studies, services, about, contact, 3 location pages, 3 insights stubs
- [ ] Add per-route SEO head manager (Helmet-style) for canonical, title, description, OG/Twitter
- [ ] Add `<link rel="preconnect">` + `dns-prefetch` for fonts.googleapis.com / fonts.gstatic.com
- [ ] Add `font-display: swap` (already set via Google Fonts URL `&display=swap` — verify)
- [ ] Add explicit width/height + lazy-loading discipline on all `<img>`
- [ ] Add `decoding="async"` everywhere

## Phase 3 — Stage 2 On-page
- [ ] Per-route title tags (under 60 chars)
- [ ] Per-route meta descriptions (150–160 chars)
- [ ] Verify single H1 per page with primary keyword
- [ ] Keyword-rich alt text on every portfolio image and brand asset
- [ ] Internal linking pass with descriptive anchor text

## Phase 4 — Stage 3 + 4 Local + Schema
- [ ] LocalBusiness JSON-LD on home (with geo, areaServed, hours, sameAs)
- [ ] Organization schema on home
- [ ] Service schema on /services
- [ ] CreativeWork schema on each /work/:slug
- [ ] Person schema on /about (Yael + Chaz)
- [ ] FAQPage schema on /contact (and reuse on /services FAQ)
- [ ] BreadcrumbList on all interior pages
- [ ] NAP block in footer (already partially present — formalize)
- [ ] Location pages: /seattle-web-design, /edmonds-web-design, /lynnwood-web-design

## Phase 5 — Stage 5 + 6 Social + Content
- [ ] OG + Twitter Card tags via per-route SEO head
- [ ] `og-images-spec.md` documenting OG image production guidelines
- [ ] Insights index `/insights` + 3 article stubs with full meta + Article schema
- [ ] Review schema on testimonials block (home)

## Phase 6 — Stage 7 Reports
- [ ] `SEO-REPORT.md` — every change made
- [ ] `KEYWORD-MAP.md` — keyword → URL mapping
- [ ] `README-GBP.md` — Google Business Profile setup checklist
- [ ] `SEO-NEXT-STEPS.md` — Month 1 / 2–3 / 3–6 roadmap

## Phase 7 — Deliver
- [ ] Save checkpoint
- [ ] Deliver final report with single highest-impact action statement
