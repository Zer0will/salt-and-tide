// SALT & TIDE — Pacific Brutalist. Services page — pillars, packages, add-ons, FAQ, CTA.
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  useReveal();
  return (
    <>
      <Hero />
      <Pillars />
      <Packages />
      <AddOns />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}>
      <div className="container">
        <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Services</div>
        <h1 className="display mt-5" style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)", lineHeight: 0.92, maxWidth: "16ch" }}>
          Strategy, design, and marketing — <span style={{ color: "var(--color-kelp)" }}>under one roof.</span>
        </h1>
        <p className="mt-7 max-w-2xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.55 }}>
          We're not a website shop and we're not a marketing agency. We're the team you hire when you want both, aligned around
          one goal: growing the business.
        </p>
      </div>
      <hr className="hr-tide mt-16" />
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      id: "web",
      n: "01",
      t: "Websites That Convert",
      sub: "Custom-built. Mobile-first. Engineered to turn visitors into customers.",
      points: [
        "Custom design — no templates, no shortcuts",
        "AI-assisted build means faster delivery without sacrificing craft",
        "SEO-ready architecture from day one",
        "Conversion-focused: every page has a job",
        "Mobile-perfect — most of your traffic arrives on a phone",
        "Easy-to-edit content systems your team can actually use",
      ],
    },
    {
      id: "marketing",
      n: "02",
      t: "Marketing That Moves The Needle",
      sub: "Strategy-led marketing from a team with real credentials.",
      points: [
        "Brand strategy and positioning that actually translates to copy and design",
        "Local SEO (Google Business Profile, reviews, schema, citations)",
        "Social media strategy with content frameworks your team can run",
        "Paid ads (Meta, Google) — measured against real revenue, not impressions",
        "Email marketing flows: welcome, win-back, retention",
        "Analytics setup that tells you what's working — in plain English",
      ],
    },
    {
      id: "full",
      n: "03",
      t: "Full-Service Growth Partner",
      sub: "From first impression to final conversion — we handle the digital side so you can run the rest.",
      points: [
        "Quarterly strategy reviews tied to revenue and customer goals",
        "Continuous design + content updates as your business evolves",
        "Marketing campaigns aligned with seasonality and product launches",
        "Conversion optimization based on real visitor behavior",
        "Reporting you'll actually read — short, clear, and tied to outcomes",
        "A single point of contact who knows your business",
      ],
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mono-label mb-10">§ Three Pillars</div>
        <div className="space-y-px" style={{ background: "var(--color-hairline)" }}>
          {pillars.map((p) => (
            <div key={p.id} id={p.id} className="reveal grid md:grid-cols-12 gap-8 p-8 md:p-12" style={{ background: "var(--color-ink)" }}>
              <div className="md:col-span-1 display" style={{ fontSize: "3rem", color: "var(--color-kelp)", lineHeight: 1 }}>{p.n}</div>
              <div className="md:col-span-5">
                <h2 className="display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1.05 }}>{p.t}</h2>
                <p className="mt-4 display-thin" style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", lineHeight: 1.45 }}>{p.sub}</p>
              </div>
              <div className="md:col-span-6">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                      <Check size={16} className="mt-1 flex-shrink-0" style={{ color: "var(--color-kelp)" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function Packages() {
  const tiers = [
    {
      n: "01",
      label: "Tier 1",
      title: "Launch",
      price: "From $3,500",
      sub: "Perfect for new businesses or anyone who needs to look established fast.",
      bullets: [
        "Up to 5-page custom website",
        "Mobile-first responsive design",
        "Basic SEO setup",
        "Google Business Profile optimization",
        "Contact form + analytics",
        "30-day post-launch support",
      ],
      timeline: "Delivered in 2–3 weeks",
      best: false,
    },
    {
      n: "02",
      label: "Tier 2",
      title: "Growth",
      price: "From $6,500",
      sub: "Our most popular tier — for businesses ready to grow online, not just exist online.",
      bullets: [
        "Up to 10-page custom website",
        "Conversion-optimized design system",
        "Full local SEO setup + 90-day plan",
        "Email marketing (1 flow)",
        "Brand voice + content guidelines",
        "60-day post-launch support",
      ],
      timeline: "Delivered in 3–5 weeks",
      best: true,
    },
    {
      n: "03",
      label: "Tier 3",
      title: "Partnership",
      price: "From $8,500 + $1,000/mo",
      sub: "A full-service growth partnership for businesses that want a real team, not a one-time project.",
      bullets: [
        "Everything in Growth, plus:",
        "Ongoing content + design updates",
        "Monthly social or paid-ads management",
        "Quarterly strategy reviews",
        "Conversion optimization sprints",
        "Priority response, single point of contact",
      ],
      timeline: "Ongoing engagement",
      best: false,
    },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ Packages</div>
          <div className="mono-label hidden md:block" style={{ color: "rgba(15,17,21,0.55)" }}>STARTING POINTS — EVERY ENGAGEMENT IS SCOPED</div>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", maxWidth: "16ch" }}>
          Pricing that scales with your business.
        </h2>
        <p className="reveal mt-5 max-w-xl" style={{ color: "rgba(15,17,21,0.7)" }}>
          Honest pricing. No hidden fees. We'll help you pick the tier that fits — and never sell you what you don't need.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-px" style={{ background: "rgba(15,17,21,0.12)" }}>
          {tiers.map((t) => (
            <div
              key={t.n}
              className="reveal p-8 md:p-10 relative"
              style={{
                background: t.best ? "var(--color-ink)" : "var(--color-fog)",
                color: t.best ? "var(--color-text-primary)" : "var(--color-ink)",
              }}
            >
              {t.best && (
                <div className="absolute top-4 right-4 mono-label" style={{ color: "var(--color-kelp)" }}>MOST POPULAR</div>
              )}
              <div className="mono-label" style={{ color: t.best ? "var(--color-kelp)" : "rgba(15,17,21,0.55)" }}>{t.n} / {t.label}</div>
              <h3 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)" }}>{t.title}</h3>
              <div className="display mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", color: t.best ? "var(--color-kelp)" : "var(--color-ink)" }}>
                {t.price}
              </div>
              <p className="mt-3 text-[0.96rem]" style={{ color: t.best ? "var(--color-text-secondary)" : "rgba(15,17,21,0.7)", lineHeight: 1.55 }}>{t.sub}</p>
              <ul className="mt-7 space-y-2.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.95rem]" style={{ color: t.best ? "var(--color-text-secondary)" : "rgba(15,17,21,0.78)", lineHeight: 1.5 }}>
                    <Check size={15} className="mt-1 flex-shrink-0" style={{ color: "var(--color-kelp)" }} /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 mono-label" style={{ color: t.best ? "var(--color-text-secondary)" : "rgba(15,17,21,0.55)" }}>{t.timeline}</div>
              <Link
                href="/contact"
                className="mt-8 inline-flex"
                style={{
                  padding: "1rem 1.4rem",
                  background: t.best ? "var(--color-kelp)" : "var(--color-ink)",
                  color: t.best ? "var(--color-ink)" : "var(--color-fog)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                Start With {t.title} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddOns() {
  const addons = [
    "Logo / Brand Identity",
    "Photography Direction",
    "Menu Engineering (Restaurants)",
    "E-commerce Integration",
    "Booking / Reservations Setup",
    "Custom Email Templates",
    "Copywriting (per page)",
    "Multi-language Support",
    "Web Care Retainer",
  ];
  return (
    <section id="addons" className="py-20 md:py-28">
      <div className="container">
        <div className="mono-label mb-8">§ Add-Ons</div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)" }}>
          Need something specific?
        </h2>
        <p className="reveal mt-5 max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
          A la carte additions to any package — quoted to scope, not by the hour.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--color-hairline)" }}>
          {addons.map((a, i) => (
            <div key={a} className="reveal p-6 flex items-center justify-between" style={{ background: "var(--color-ink)" }}>
              <div className="flex items-center gap-4">
                <span className="mono-label">A.{String(i+1).padStart(2,"0")}</span>
                <span className="display" style={{ fontSize: "1.05rem" }}>{a}</span>
              </div>
              <Plus size={16} className="opacity-50" />
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Tier 1 launches in 2–3 weeks. Tier 2 takes 3–5 weeks. Tier 3 is ongoing. We can move faster than most agencies because we use AI to accelerate the build phase — but every project is paced to give you time to review, not to rush you.",
    },
    {
      q: "What happens after launch?",
      a: "Every package includes post-launch support (30–60 days). After that, you can either move to a Care retainer, work with us on Tier 3, or simply own the site outright. We don't lock you into anything.",
    },
    {
      q: "Do you work with clients outside Edmonds?",
      a: "Yes. We're rooted in Edmonds and we love working with PNW businesses, but we work remotely with clients across the country. The work is the same.",
    },
    {
      q: "Why is your pricing lower than big Seattle agencies?",
      a: "Two reasons. First, we use AI to accelerate the parts of the work that used to take weeks of manual coding — that's a real efficiency gain we pass on to you. Second, we're a focused two-person studio with low overhead. You're paying for the work, not for a downtown office.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. Most of our work to date has been redesigns of existing sites that weren't pulling their weight. We'll audit what you have, identify what's working, and rebuild what isn't.",
    },
    {
      q: "Do you handle hosting and domains?",
      a: "We can. We have preferred hosting partners we recommend, but we're happy to deploy to any platform you already use. We'll never lock you into a proprietary system.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono-label">§ FAQ</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1 }}>
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)" }}>
            Got a question we didn't answer? <Link href="/contact" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Drop us a line.</Link>
          </p>
        </div>
        <div className="md:col-span-7">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={i} className="reveal border-b" style={{ borderColor: "var(--color-hairline)" }}>
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="display" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>{f.q}</span>
                  <span className="mt-1.5 flex-shrink-0">{active ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-300"
                  style={{ maxHeight: active ? 400 : 0, opacity: active ? 1 : 0 }}
                >
                  <p className="pb-6 max-w-2xl text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0" style={{
        background: "radial-gradient(60% 60% at 50% 30%, rgba(63,174,124,0.18), transparent 70%)",
      }} />
      <div className="container relative text-center">
        <h2 className="display reveal" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: "20ch", marginInline: "auto" }}>
          Not sure which tier? <span style={{ color: "var(--color-kelp)" }}>Let's talk.</span>
        </h2>
        <p className="reveal mt-6 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
          A 30-minute strategy call — no pitch, no pressure. We'll help you figure out what you actually need.
        </p>
        <Link href="/contact" className="btn-primary mt-9">
          Book a Strategy Call <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
