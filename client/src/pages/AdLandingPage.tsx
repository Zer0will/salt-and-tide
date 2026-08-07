// SALT & TIDE — Paid ad landing pages. Message-matched, low-friction capture.
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Mail, Search, Smartphone, MapPin, Utensils, MousePointerClick } from "lucide-react";
import { toast } from "sonner";
import { Seo, SITE_ORIGIN, ORG_NAME, ORG_EMAIL, ORG_PHONE, breadcrumbSchema } from "@/components/Seo";

type Variant = "first-impression" | "free-audit" | "restaurant" | "restaurant-ordering" | "bakery-ordering" | "painting" | "contractor";

type PageConfig = {
  variant: Variant;
  path: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: React.ReactNode;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  formTitle: string;
  formIntro: string;
  serviceValue: string;
  proofKicker: string;
  proofTitle: string;
  proofBody: string;
  bullets: string[];
  auditItems: string[];
  fitTitle: string;
  fitItems: string[];
};

const CONFIGS: Record<Variant, PageConfig> = {
  "first-impression": {
    variant: "first-impression",
    path: "/better-first-impression",
    eyebrow: "Puget Sound Web Design + Local SEO",
    seoTitle: "Build a Better First Impression | Salt & Tide Creative",
    seoDescription: "Web design and local SEO for Edmonds, Seattle, and Puget Sound businesses that need a clearer, more professional first impression.",
    heroTitle: <>Build a better <span style={{ color: "var(--color-kelp)" }}>first impression.</span></>,
    heroBody: "Your website is often the first conversation a potential customer has with your business. If it feels dated, confusing, or hard to use on a phone, they may leave before they ever contact you.",
    primaryCta: "Fill Out the Form",
    secondaryCta: "Request a Website Review",
    formTitle: "Tell us what your website needs to do better.",
    formIntro: "Send your website and the outcome you want. We’ll reply with a practical next step — not a generic agency pitch.",
    serviceValue: "Better First Impression Campaign",
    proofKicker: "What we build",
    proofTitle: "Professional websites and local marketing foundations for businesses across Edmonds, Seattle, and Puget Sound.",
    proofBody: "A good website should make the next step obvious: call, book, visit, order, request a quote, or trust you enough to keep reading.",
    bullets: ["Modern visual credibility", "Mobile-first layout and speed", "Clear messaging and calls to action", "Local SEO basics for nearby searches"],
    auditItems: ["Does the page instantly say who you help?", "Can a phone visitor find the next step in seconds?", "Do calls, forms, maps, and trust signals feel obvious?", "Is the local SEO foundation helping you show up?"],
    fitTitle: "Good fit if your current site feels…",
    fitItems: ["Dated compared with the quality of your actual work", "Hard to navigate on a phone", "Too vague about what you do or where you serve", "Disconnected from your Google Business Profile and local search presence"],
  },
  "free-audit": {
    variant: "free-audit",
    path: "/free-website-audit",
    eyebrow: "Free Website Audit",
    seoTitle: "Get Your Free Website Audit | Salt & Tide Creative",
    seoDescription: "Request a free website audit from Salt & Tide Creative. See what may be costing you calls, leads, and local business opportunities.",
    heroTitle: <>See what may be <span style={{ color: "var(--color-kelp)" }}>costing you calls.</span></>,
    heroBody: "Is your website helping your business — or quietly costing you opportunities? Request a free website audit and get clear, practical feedback on the most important improvement to make first.",
    primaryCta: "Fill Out the Form",
    secondaryCta: "Get My Free Audit",
    formTitle: "Request your free website audit.",
    formIntro: "No pressure. Send your website and contact info. We’ll review the major friction points and send back practical feedback.",
    serviceValue: "Free Website Audit Campaign",
    proofKicker: "What we review",
    proofTitle: "A practical audit of your first impression, mobile experience, calls to action, and local SEO foundation.",
    proofBody: "The goal is not a 40-page PDF. It is clarity: what is probably costing you leads, and what to improve first.",
    bullets: ["First impression", "Mobile usability", "Messaging and calls to action", "Local SEO foundations", "The first improvement to prioritize"],
    auditItems: ["Does the homepage quickly build trust?", "Can mobile visitors call, book, or request help without friction?", "Are the words specific enough to make someone act?", "Are basic local SEO signals present and consistent?"],
    fitTitle: "Use this if you suspect…",
    fitItems: ["People visit the site but do not call", "Your site looks fine on desktop but awkward on mobile", "Your Google/social traffic lands somewhere weak", "You want a clear first step before spending on a redesign"],
  },

  "restaurant-ordering": {
    variant: "restaurant-ordering",
    path: "/restaurant-online-ordering",
    eyebrow: "Restaurant Online Ordering",
    seoTitle: "Restaurant Online Ordering Websites | Salt & Tide Creative",
    seoDescription: "Clearer restaurant websites that help customers go from hungry to ordered with fewer steps, stronger mobile UX, and easier online ordering paths.",
    heroTitle: <>Make it easier to go from <span style={{ color: "var(--color-kelp)" }}>hungry to ordered.</span></>,
    heroBody: "A customer finds your restaurant, likes what they see, and is ready to order. Then your website makes them call, download a menu, or hunt for a separate ordering link. Every extra step gives them another reason to leave. Salt & Tide Creative helps local restaurants create a clearer online-ordering experience that makes it easier for customers to order from their phone.",
    primaryCta: "Request a Free Review",
    secondaryCta: "Request a Free Review",
    formTitle: "Request a free review of your restaurant website.",
    formIntro: "Send your website, menu, or ordering link. We’ll look for the biggest friction points between a hungry visitor and a completed order.",
    serviceValue: "Restaurant Online Ordering Campaign",
    proofKicker: "Ordering friction check",
    proofTitle: "When someone is ready to order, the path should be obvious.",
    proofBody: "We look at the steps customers have to take on mobile and identify where menus, ordering links, pickup details, and calls to action create unnecessary drop-off.",
    bullets: ["Mobile ordering path review", "Menu and pickup flow clarity", "CTA hierarchy for hungry visitors", "Local SEO and trust basics"],
    auditItems: ["Can a phone visitor find the menu and order path fast?", "Are pickup, delivery, hours, and location clear?", "Is the ordering CTA visible before someone gets frustrated?", "Does the site reduce dependence on calls and PDF menus?"],
    fitTitle: "Good fit if your site currently makes customers…",
    fitItems: ["Call just to place a simple order", "Download or pinch-zoom a PDF menu", "Search for a separate ordering link", "Bounce to Instagram or third-party platforms before ordering"],
  },
  "bakery-ordering": {
    variant: "bakery-ordering",
    path: "/bakery-cafe-online-ordering",
    eyebrow: "Bakery + Café Online Ordering",
    seoTitle: "Bakery & Café Online Ordering Websites | Salt & Tide Creative",
    seoDescription: "Polished websites for local bakeries and cafés that make it easier to browse products, choose pickup times, and place orders from a phone.",
    heroTitle: <>Turn browsers into <span style={{ color: "var(--color-kelp)" }}>orders.</span></>,
    heroBody: "Your pastries stop people from scrolling. Your website should make it just as easy for them to order. Give customers a simple way to browse your products, select a pickup time, and place an order from their phone. Salt & Tide Creative creates polished websites for local bakeries and cafés that want to turn more interest into convenient online orders.",
    primaryCta: "Learn More",
    secondaryCta: "Plan My Ordering Page",
    formTitle: "Tell us about your bakery or café ordering flow.",
    formIntro: "Send your current website, Instagram, menu, or ordering link. We’ll reply with the clearest next step for turning mobile interest into orders.",
    serviceValue: "Bakery Café Online Ordering Campaign",
    proofKicker: "Built for mobile orders",
    proofTitle: "Beautiful products still need a simple path to purchase.",
    proofBody: "A stronger bakery or café site makes browsing, pickup timing, product details, and order requests feel natural on a phone.",
    bullets: ["Product browsing clarity", "Pickup-time and order flow UX", "Mobile-first visual design", "Local SEO for nearby customers"],
    auditItems: ["Can customers browse what you sell without digging?", "Is pickup timing clear before they contact you?", "Does the page turn visual interest into an order step?", "Are phone visitors guided instead of sent to scattered links?"],
    fitTitle: "Built for bakeries and cafés that want…",
    fitItems: ["More convenient pickup orders", "A cleaner alternative to DMs and scattered links", "A polished home for seasonal products", "A site that feels as good as the product looks"],
  },
  painting: {
    variant: "painting",
    path: "/painting-company-websites",
    eyebrow: "Painting Company Websites",
    seoTitle: "Websites for Local Painting Companies | Salt & Tide Creative",
    seoDescription: "Websites for local painters that showcase finished projects, transformations, workmanship, reviews, and a simple estimate request path.",
    heroTitle: <>Give them a reason to <span style={{ color: "var(--color-kelp)" }}>choose you.</span></>,
    heroBody: "Before homeowners call a painting company, they look for proof. They want to see finished projects, transformations, professional workmanship, and evidence that they can trust you with their home. If your best work is buried in your camera roll or social media page, your website isn’t making the strongest case for your business. Salt & Tide Creative builds websites that help local painters showcase their work and make requesting an estimate simple.",
    primaryCta: "Get Quote",
    secondaryCta: "Request a Quote Review",
    formTitle: "Tell us about your painting company website.",
    formIntro: "Send your website, Google listing, or project photos link. We’ll reply with the clearest way to make your proof and estimate request path stronger.",
    serviceValue: "Painting Company Website Campaign",
    proofKicker: "Proof before contact",
    proofTitle: "Your website should make your best work easy to believe in.",
    proofBody: "We structure painting company websites around the evidence homeowners need: before/after work, service areas, reviews, process, professionalism, and a simple quote request.",
    bullets: ["Before-and-after project proof", "Service and location clarity", "Review and trust signal placement", "Simple estimate request path"],
    auditItems: ["Can homeowners quickly see finished work?", "Are transformations and workmanship easy to compare?", "Does the page explain where you work and what you paint?", "Is requesting an estimate simple on mobile?"],
    fitTitle: "Good fit if your best proof is stuck in…",
    fitItems: ["Your camera roll", "A social media feed", "Old project posts nobody sees", "A website that does not show enough finished work"],
  },
  contractor: {
    variant: "contractor",
    path: "/contractor-websites",
    eyebrow: "Contractor + Remodeler Websites",
    seoTitle: "Contractor & Remodeler Websites | Salt & Tide Creative",
    seoDescription: "Websites for local contractors and remodelers designed to build trust before the estimate and create a clear path to request a quote.",
    heroTitle: <>Build trust before the <span style={{ color: "var(--color-kelp)" }}>estimate.</span></>,
    heroBody: "Customers don’t wait until the estimate to decide whether they trust your business. They evaluate your projects, reviews, services, professionalism, and website before they ever contact you. Salt & Tide Creative creates contractor websites designed around the information homeowners need — and a clear path to request a quote.",
    primaryCta: "Get Quote",
    secondaryCta: "Request a Quote Review",
    formTitle: "Tell us about your contractor website.",
    formIntro: "Send your current website or Google listing. We’ll review whether the page gives homeowners enough proof and a clear quote request path.",
    serviceValue: "Contractor Website Campaign",
    proofKicker: "Trust before the call",
    proofTitle: "Homeowners decide whether you feel credible before they reach out.",
    proofBody: "A stronger contractor website organizes services, project proof, reviews, service areas, and quote requests around how homeowners actually choose who to contact.",
    bullets: ["Project proof and case examples", "Services and service-area clarity", "Review and credibility signals", "Quote request flow for mobile visitors"],
    auditItems: ["Can homeowners understand what you do in seconds?", "Is project proof easy to find and trust?", "Are reviews, process, and professionalism visible?", "Is requesting a quote obvious without extra searching?"],
    fitTitle: "Useful for local businesses like…",
    fitItems: ["Remodelers", "General contractors", "Home service specialists", "Trades that need more trust before the estimate"],
  },
  restaurant: {
    variant: "restaurant",
    path: "/restaurant-websites",
    eyebrow: "Restaurant + Café Websites",
    seoTitle: "Restaurant Website Design | Salt & Tide Creative",
    seoDescription: "Polished restaurant and café websites for independent Puget Sound food businesses: menus, reservations, hours, mobile UX, and local SEO.",
    heroTitle: <>Your food looks great. <span style={{ color: "var(--color-kelp)" }}>Your website should too.</span></>,
    heroBody: "Your food might be incredible — but does your website make people want to visit? We create polished restaurant websites that showcase your food, simplify reservations, display essential information, and look great on every phone.",
    primaryCta: "Fill Out the Form",
    secondaryCta: "Plan My Restaurant Site",
    formTitle: "Tell us about your restaurant or café.",
    formIntro: "Send your current site, Instagram, or menu link. We’ll reply with what your guest experience needs online.",
    serviceValue: "Restaurant Website Campaign",
    proofKicker: "Built for diners on phones",
    proofTitle: "A better restaurant website makes the guest experience begin before they arrive.",
    proofBody: "Hungry visitors need the basics fast: menu, hours, location, reservation/order links, photos, and a reason to choose you tonight.",
    bullets: ["Mobile-first menu and hours", "Reservation, order, or call paths", "Food-first visual design", "Local SEO for nearby diners", "Launch support for new concepts"],
    auditItems: ["Can guests find menu, hours, and location instantly?", "Does the food photography create appetite and trust?", "Are reservation, order, and call buttons obvious?", "Does your site look as good on a phone as the dining room feels in person?"],
    fitTitle: "Built for independent food businesses like…",
    fitItems: ["Restaurants launching a new concept", "Cafés that need a warmer digital presence", "Established spots with outdated menus/sites", "Owners relying too heavily on Instagram, PDFs, or third-party platforms"],
  },
};

export function BetterFirstImpressionLanding() {
  return <AdLandingPage config={CONFIGS["first-impression"]} />;
}

export function FreeWebsiteAuditLanding() {
  return <AdLandingPage config={CONFIGS["free-audit"]} />;
}

export function RestaurantWebsitesLanding() {
  return <AdLandingPage config={CONFIGS.restaurant} />;
}

export function RestaurantOrderingLanding() {
  return <AdLandingPage config={CONFIGS["restaurant-ordering"]} />;
}

export function BakeryCafeOrderingLanding() {
  return <AdLandingPage config={CONFIGS["bakery-ordering"]} />;
}

export function PaintingCompanyLanding() {
  return <AdLandingPage config={CONFIGS.painting} />;
}

export function ContractorWebsitesLanding() {
  return <AdLandingPage config={CONFIGS.contractor} />;
}

function AdLandingPage({ config }: { config: PageConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const serviceInterest = String(data.get("service_interest") ?? "").trim();
    const timeframe = String(data.get("timeframe") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();

    if (!name) {
      toast.error("Name is required.");
      setSubmitting(false);
      return;
    }

    if (!email && !phone) {
      toast.error("Add an email or phone number so we can contact you.");
      setSubmitting(false);
      return;
    }

    if (!serviceInterest || !timeframe || !budget) {
      toast.error("Choose a service, timeframe, and budget so we can qualify the request quickly.");
      setSubmitting(false);
      return;
    }

    const endpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;
    try {
      if (!endpoint) {
        toast.error(`Form not configured yet. Email ${ORG_EMAIL} directly.`);
        setSubmitting(false);
        return;
      }
      const params = new URLSearchParams(window.location.search);
      const utms = Object.fromEntries(Array.from(params.entries()).filter(([key]) => key.startsWith("utm_") || key === "fbclid"));
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          ...utms,
          page_path: config.path,
          page_variant: config.variant,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as any)?.error ?? "Submission failed");
      }
      setSubmitted(true);
      toast.success("Request received. We'll reply within 24 hours.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(`Something went wrong. Email ${ORG_EMAIL} directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: config.eyebrow, path: config.path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.seoTitle.replace(" | Salt & Tide Creative", ""),
      description: config.seoDescription,
      provider: { "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME, email: ORG_EMAIL, telephone: ORG_PHONE },
      areaServed: ["Edmonds, WA", "Seattle, WA", "Puget Sound"].map((name) => ({ "@type": "Place", name })),
      url: `${SITE_ORIGIN}${config.path}`,
    },
  ];

  return (
    <>
      <Seo
        title={config.seoTitle}
        description={config.seoDescription}
        path={config.path}
        keywords={["Puget Sound web design", "Edmonds web design", "Seattle local SEO", "small business website"]}
        jsonLd={jsonLd}
      />

      <section style={{ paddingTop: "clamp(132px, 15vh, 190px)", paddingBottom: "clamp(48px, 7vh, 88px)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ {config.eyebrow}</div>
            <h1 className="display mt-5" style={{ fontSize: "clamp(2.75rem, 7.5vw, 6.8rem)", lineHeight: 0.9, maxWidth: "12ch" }}>
              {config.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.13rem", lineHeight: 1.62 }}>
              {config.heroBody}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#request" className="btn-primary w-full justify-center sm:w-auto">{config.primaryCta} <ArrowRight size={18} /></a>
            </div>
            <div className="mt-8 grid gap-px sm:grid-cols-3" style={{ background: "var(--color-hairline)", maxWidth: 760 }}>
              <TrustMetric value="24h" label="Typical reply" />
              <TrustMetric value="PNW" label="Edmonds + Seattle" />
              <TrustMetric value="Mobile" label="Designed first" />
            </div>
          </div>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      <section id="request" className="pb-20 md:pb-28 scroll-mt-32">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Next step</div>
            <h2 className="display mt-5" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", lineHeight: 0.98 }}>{config.secondaryCta}</h2>
            <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
Keep it simple: fill out the quick form with basic contact info, business name, website status, what you need, timeframe, and budget. Built for mobile completion.
            </p>
            <div className="mt-8 grid gap-px" style={{ background: "var(--color-hairline)", maxWidth: 520 }}>
              <ContactStrip icon={<Mail size={17} />} label="Email" value={ORG_EMAIL} href={`mailto:${ORG_EMAIL}`} />
              <ContactStrip icon={<MapPin size={17} />} label="Area" value="Edmonds · Seattle · Puget Sound" />
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? <SuccessPanel /> : <RequestForm config={config} onSubmit={onSubmit} submitting={submitting} />}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ {config.proofKicker}</div>
            <h2 className="display mt-5" style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)", lineHeight: 1 }}>
              {config.proofTitle}
            </h2>
            <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{config.proofBody}</p>
          </div>
          <div className="md:col-span-7 grid gap-px sm:grid-cols-2" style={{ background: "var(--color-hairline)" }}>
            {config.bullets.map((item, i) => (
              <Benefit key={item} n={i + 1} title={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mono-label">§ What we look for</div>
            <div className="mt-6 grid gap-px" style={{ background: "var(--color-hairline)" }}>
              {config.auditItems.map((item, i) => <AuditRow key={item} n={i + 1} text={item} />)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="p-7 md:p-9 h-full" style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Fit check</div>
              <h3 className="display mt-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.05 }}>{config.fitTitle}</h3>
              <ul className="mt-6 space-y-4">
                {config.fitItems.map((item) => (
                  <li key={item} className="flex gap-3" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                    <Check size={18} style={{ color: "var(--color-kelp)", flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function TrustMetric({ value, label }: { value: string; label: string }) {
  return <div className="p-5" style={{ background: "var(--color-ink)" }}><div className="display" style={{ fontSize: "1.35rem", color: "var(--color-text-primary)" }}>{value}</div><div className="mono-label mt-1" style={{ color: "var(--color-text-muted)", fontSize: "0.66rem" }}>{label}</div></div>;
}

function Benefit({ n, title }: { n: number; title: string }) {
  const icons = [Smartphone, MousePointerClick, Search, Utensils];
  const Icon = icons[(n - 1) % icons.length];
  return (
    <div className="p-7" style={{ background: "var(--color-ink)" }}>
      <div className="flex items-center justify-between gap-4">
        <Icon size={20} style={{ color: "var(--color-kelp)" }} />
        <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{String(n).padStart(2, "0")}</span>
      </div>
      <h3 className="display mt-6" style={{ fontSize: "clamp(1.25rem, 2vw, 1.65rem)", lineHeight: 1.12 }}>{title}</h3>
    </div>
  );
}

function AuditRow({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex gap-5 p-6 md:p-7" style={{ background: "var(--color-ink)" }}>
      <span className="mono-label" style={{ color: "var(--color-kelp)", minWidth: 32 }}>{String(n).padStart(2, "0")}</span>
      <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

function RequestForm({ config, onSubmit, submitting }: { config: PageConfig; onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; submitting: boolean }) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-[1.35rem] p-5 md:rounded-none md:p-9"
      style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}
    >
      <div>
        <div className="mono-label" style={{ color: "var(--color-kelp)" }}>60-second request</div>
        <h2 className="display mt-3" style={{ fontSize: "clamp(1.65rem, 7vw, 2.7rem)", lineHeight: 1.02 }}>{config.formTitle}</h2>
        <p className="mt-3 text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{config.formIntro}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" autoComplete="name" />
        <Field label="Email" name="email" type="email" placeholder="you@business.com" autoComplete="email" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" placeholder="(253) 555-1234" autoComplete="tel" />
        <Field label="Business name" name="business" placeholder="Your business" autoComplete="organization" />
      </div>

      <WebsiteField />

      <RadioCards
        label="What do you need? *"
        name="service_interest"
        options={["Website", "Redesign", "SEO", "Not sure"]}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Desired starting timeframe *"
          name="timeframe"
          options={["ASAP", "This month", "1–3 months", "3+ months", "Just exploring"]}
        />
        <SelectField
          label="Budget range *"
          name="budget"
          options={["Under $1,000", "$1,000–$2,500", "$2,500–$5,000", "$5,000+", "Not sure yet"]}
        />
      </div>

      <label className="block">
        <div className="mono-label mb-2.5">Optional note</div>
        <textarea
          name="message"
          rows={3}
          placeholder="Example: current site feels dated, need more calls, opening soon, menu/reservations are hard to find…"
          className="w-full rounded-[0.9rem] bg-transparent border px-4 py-4 text-[16px] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)] md:rounded-none"
          style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
        />
      </label>

      <label className="flex gap-3 rounded-[0.9rem] p-3 text-[0.82rem] leading-relaxed md:rounded-none" style={{ color: "var(--color-text-secondary)", background: "rgba(255,255,255,0.03)" }}>
        <input name="sms_consent" type="checkbox" value="yes" className="mt-1 h-5 w-5 shrink-0" />
        <span>If I include a phone number, I agree Salt &amp; Tide may call or text me about this request. Message/data rates may apply. Reply STOP to opt out.</span>
      </label>

      <input type="hidden" name="service" value={config.serviceValue} />
      <input type="hidden" name="form_source" value={`salttidecreative.com${config.path}`} />
      <input type="hidden" name="sms_consent_language" value="If I include a phone number, I agree Salt & Tide may call or text me about this request. Message/data rates may apply. Reply STOP to opt out." />

      <div className="sticky bottom-3 z-20 -mx-1 rounded-[1.15rem] p-1 md:static md:mx-0 md:p-0" style={{ background: "rgba(15,17,21,0.86)", backdropFilter: "blur(14px)" }}>
        <button type="submit" className="btn-primary min-h-[54px] w-full justify-center text-[0.96rem]" disabled={submitting}>
          {submitting ? "Sending…" : config.secondaryCta} <ArrowRight size={18} />
        </button>
        <div className="mono-label mt-3 text-center" style={{ color: "var(--color-text-muted)", fontSize: "0.62rem" }}>NO PRESSURE · PRACTICAL FEEDBACK</div>
      </div>
    </form>
  );
}

function WebsiteField() {
  return (
    <div>
      <div className="mono-label mb-2.5">Website URL</div>
      <div className="grid gap-3">
        <input
          name="website_or_listing"
          type="url"
          inputMode="url"
          placeholder="https://yourbusiness.com"
          className="w-full rounded-[0.9rem] bg-transparent border px-4 py-4 text-[16px] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)] md:rounded-none"
          style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
        />
        <label className="flex min-h-[48px] items-center gap-3 rounded-[0.9rem] border px-4 py-3 text-[0.95rem] md:rounded-none" style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-secondary)" }}>
          <input name="no_website" type="checkbox" value="yes" className="h-5 w-5" />
          <span>I don’t have a website yet</span>
        </label>
      </div>
    </div>
  );
}

function RadioCards({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <fieldset>
      <legend className="mono-label mb-2.5">{label}</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map((option) => (
          <label key={option} className="group relative min-h-[52px] cursor-pointer">
            <input className="peer sr-only" type="radio" name={name} value={option} required />
            <span
              className="flex h-full items-center justify-center rounded-[0.95rem] border px-3 py-3 text-center text-[0.92rem] transition md:rounded-none"
              style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-secondary)", background: "var(--color-ink)" }}
            >
              {option}
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-[0.95rem] border-2 border-transparent peer-checked:border-[var(--color-kelp)] md:rounded-none" />
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <div className="mono-label mb-2.5">{label}</div>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-[0.9rem] border bg-transparent px-4 py-4 text-[16px] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)] md:rounded-none"
        style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", background: "var(--color-ink)" }}
      >
        <option value="" disabled>Select one</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Field({ label, name, type = "text", placeholder, required, autoComplete }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; autoComplete?: string }) {
  return (
    <label className="block">
      <div className="mono-label mb-2.5">{label}{required ? " *" : ""}</div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-[0.9rem] bg-transparent border px-4 py-4 text-[16px] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)] md:rounded-none"
        style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
      />
    </label>
  );
}

function ContactStrip({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = <><div className="flex items-center gap-3" style={{ color: "var(--color-kelp)" }}>{icon}<span className="mono-label">{label}</span></div><div className="display mt-2" style={{ fontSize: "1rem", color: "var(--color-text-primary)" }}>{value}</div></>;
  return href ? <a href={href} className="block p-5" style={{ background: "var(--color-ink)" }}>{inner}</a> : <div className="p-5" style={{ background: "var(--color-ink)" }}>{inner}</div>;
}

function SuccessPanel() {
  return (
    <div className="p-8 md:p-12" style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
      <div className="inline-flex items-center justify-center" style={{ width: 56, height: 56, background: "var(--color-kelp)", color: "var(--color-ink)" }}><Check size={28} /></div>
      <h2 className="display mt-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Request received.</h2>
      <p className="mt-4 max-w-xl" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>We’ll review what you sent and reply within one business day with a clear next step.</p>
      <p className="mt-5 text-sm" style={{ color: "var(--color-text-muted)" }}>Need the full project form instead? <Link href="/contact" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Go to contact.</Link></p>
    </div>
  );
}
