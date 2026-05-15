# Salt & Tide Creative — Studio Website

A production-ready, conversion-focused portfolio site for **Salt & Tide Creative**, a boutique web design and digital marketing studio based in Edmonds, Washington. Built as a static React + TypeScript application with Vite, Tailwind 4, GSAP-flavored motion, and a custom Pacific Brutalist design system.

## Design Direction

The visual language is **Pacific Brutalist**: type-led, monochrome graphite (`#0F1115` ink, `#F2EEE3` fog) with a single editorial accent of **kelp green** (`#3FAE7C`). Display type is **Fraunces** (a sharp, slightly idiosyncratic serif) paired with **JetBrains Mono** for technical labels and **Inter** for body copy. Layouts favor asymmetric compositions, hairline 1px rules, paragraph-style section markers (e.g. `§ 02 / Selected Work`), and brutalist corner-tags. There are no rounded everything, no purple gradients, and no centered-grid clichés.

The full brainstorm document is in `ideas.md` at the project root.

## Pages Shipped

| Route | Purpose |
|---|---|
| `/` | Home: hero, stats, three service pillars, results/case studies, differentiators, process timeline, testimonials, CTA |
| `/work` | Portfolio index with category filter (Restaurants, Service Businesses, Specialty Retail, Hospitality) |
| `/work/:slug` | Case study template — hero, metadata, browser-frame mockup, Challenge/Approach/Result, mobile phone-frame, full page preview, next-project link |
| `/services` | Three pillars, pricing tiers, add-ons, FAQ, CTA |
| `/about` | Origin story, founders, four values, the meaning of "Salt & Tide", location, CTA |
| `/contact` | Inquiry form (EmailJS-ready) with side rail and success state |

Eight case studies are pre-populated using real screenshots of the founders' demo sites, located in `client/src/data/portfolio.ts`.

## Tech Stack

The frontend uses React 19 with TypeScript, Vite 7, Tailwind CSS 4, Wouter for client-side routing, GSAP and `@emailjs/browser` for motion and form delivery, and the shadcn/ui primitives included in the template (Sonner toasts, Tooltip, ErrorBoundary). All screenshots and other large media live on Manus storage and are referenced through `manus-storage` URLs — there are no large binaries inside the repo.

## EmailJS Setup (Contact Form)

The contact form is wired to EmailJS but ships in a graceful-fallback mode: if the three required environment variables are not set, the form still validates, accepts input, displays a success state, and logs the payload to the console. To send real emails, add the following variables under **Settings → Secrets** in the project management UI:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

The form posts the following fields to EmailJS, which can be referenced as `{{name}}`, `{{email}}`, `{{business}}`, `{{phone}}`, `{{service}}`, `{{budget}}`, `{{timeline}}`, `{{message}}`, and `{{source}}` inside the EmailJS template.

## Local Development

```bash
pnpm install
pnpm dev          # starts Vite at http://localhost:3000
pnpm build        # production build
pnpm check        # TypeScript type-check
```

## File Structure (project-specific files only)

```
client/src/
  App.tsx                  # routes
  index.css                # full Pacific Brutalist design system
  components/
    Layout.tsx             # nav + cursor + footer wrapper
    Nav.tsx                # sticky brutalist nav
    Footer.tsx             # 4-column footer with ticker
    Cursor.tsx             # custom cursor (desktop only, respects reduced motion)
  hooks/
    useReveal.ts           # IntersectionObserver-based scroll reveal
  data/
    portfolio.ts           # 8 case studies, single source of truth
  pages/
    Home.tsx
    Work.tsx
    CaseStudy.tsx          # /work/:slug
    Services.tsx
    About.tsx
    Contact.tsx
    NotFound.tsx
```

## Domain Recommendation

The studio name and verified-available domain is **salttidecreative.com** (confirmed via WHOIS). The site uses `hello@salttidecreative.com` as the placeholder contact address throughout.

## Notes for the Founders

The site is built so that the eight case studies, services, pricing tiers, and FAQ entries all live in named files (`portfolio.ts`, `Services.tsx`, etc.). Editing any one of those files updates every page that references it. When new client work ships, add a new entry to `portfolio.ts` with the screenshot URLs and copy — the site will pick it up automatically on both the home page and the work index. Founder portrait photography should replace the monogram blocks in `About.tsx`; the structure is already in place.
