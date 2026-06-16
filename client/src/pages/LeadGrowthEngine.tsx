// SALT & TIDE — Pacific Brutalist. Local Growth Engine — productized lead-response system
// for PNW contractors and service businesses. Missed-call text-back, instant lead response,
// SMS/email follow-up, qualification, booking, and CRM/reporting.
// HONESTY NOTE: No guaranteed sales, rankings, or revenue. The ROI calculator is an
// illustrative estimate from the visitor's own inputs — not a prediction or promise.
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Plus, Minus, PhoneMissed, Zap, MessageSquare, CalendarCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Seo, SITE_ORIGIN, ORG_NAME, breadcrumbSchema, leadEngineSchema } from "@/components/Seo";

const FAQS = [
  {
    q: "Do you guarantee more sales or booked jobs?",
    a: "No. No honest provider can. What the system does is make sure every call, form, and message gets an instant, consistent response and a clear path to book — so fewer real opportunities slip away. Results depend on your lead volume, pricing, service area, and how you run the conversations we hand you.",
  },
  {
    q: "Is automated texting legal? What about TCPA and consent?",
    a: "Texting works within consent rules. Missed-call text-back replies to people who just called you, which is a clear inquiry. For ongoing SMS follow-up we collect consent, identify your business in messages, and honor STOP and HELP keywords automatically. We do not buy lists, blast cold numbers, or send messages outside the consent you've gathered.",
  },
  {
    q: "What is A2P 10DLC registration and do I need it?",
    a: "U.S. carriers require business texting numbers to be registered (A2P 10DLC) with your legal business name and use case. We guide you through registration as part of onboarding. Unregistered traffic gets filtered or blocked, so this step is required, not optional — and timelines depend on carrier approval, which is outside our control.",
  },
  {
    q: "Can people opt out of messages?",
    a: "Always. Every SMS thread supports STOP to opt out and HELP for assistance, and opt-outs are honored automatically and permanently unless the contact re-opts in. Email follow-up includes a working unsubscribe link. We treat opt-out as a hard rule, not a suggestion.",
  },
  {
    q: "Will this replace my receptionist or my CRM?",
    a: "It's designed to support your team, not silently replace judgment. The system handles instant response, reminders, and routing; a human still closes the work. If you already use a CRM, we integrate with it where we can rather than forcing a migration.",
  },
  {
    q: "What do you actually need from me to set it up?",
    a: "Your business phone setup, a registered texting number (we help you register), your services and service area, your booking preferences, and the questions you ask to qualify a lead. We build the flows around how you already work.",
  },
  {
    q: "Do you work outside the Seattle / Puget Sound area?",
    a: "We're rooted in Edmonds and focused on Pacific Northwest contractors and service businesses, but the system itself works anywhere in the U.S. with proper carrier registration. The reporting and support are the same wherever you are.",
  },
  {
    q: "What does reporting show me?",
    a: "Plain-English numbers: calls captured, response times, conversations started, leads qualified, and bookings created — so you can see what the system is handling. We report on activity we can measure honestly, not invented revenue figures.",
  },
];

export default function LeadGrowthEngine() {
  useReveal();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="Local Growth Engine — Lead Response System | Salt & Tide"
        description="Missed-call text-back, instant lead response, SMS/email follow-up, qualification, booking, and CRM reporting for PNW contractors and service businesses."
        path="/local-growth-engine"
        keywords={[
          "missed call text back",
          "lead response automation contractors",
          "service business lead follow up",
          "appointment booking system contractors",
          "CRM for home service businesses Seattle",
          "speed to lead Puget Sound",
        ]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Local Growth Engine", path: "/local-growth-engine" },
          ]),
          leadEngineSchema(),
          faqLd,
        ]}
      />
      <Hero />
      <Problem />
      <HowItWorks />
      <RoiCalculator />
      <Tiers />
      <FAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}>
      <div className="container">
        <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Local Growth Engine · Lead System</div>
        <h1 className="display mt-5" style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", lineHeight: 0.92, maxWidth: "18ch" }}>
          Stop letting good leads <span style={{ color: "var(--color-kelp)" }}>go to voicemail.</span>
        </h1>
        <p className="mt-7 max-w-2xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.6 }}>
          A done-for-you lead-response system for Pacific Northwest contractors and service businesses. Every missed call gets
          an instant text back. Every new lead gets a fast, consistent reply, qualification, and a path to book — with follow-up
          and reporting handled for you.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="/lead-leak-audit" className="btn-primary">
            Check My Lead Leaks <ArrowRight size={18} />
          </Link>
          <a href="#how-it-works" className="btn-ghost inline-flex">See how it works</a>
        </div>
        <p className="mt-6 mono-label" style={{ color: "var(--color-text-muted)", fontSize: "0.7rem" }}>
          NO GUARANTEED SALES · NO COLD TEXTING · CONSENT-FIRST · BUILT AROUND HOW YOU ALREADY WORK
        </p>
      </div>
      <hr className="hr-tide mt-16" />
    </section>
  );
}

// Villain / Victim / Vow
function Problem() {
  const cards = [
    {
      tag: "The Villain",
      title: "The silent leak: speed-to-lead.",
      body:
        "Most service-business leads go cold not because the work is bad, but because no one answered fast enough. A missed call rarely leaves a voicemail — it calls the next contractor on the list. Forms sit in an inbox until the evening. The lead was real; the response just lost the race.",
    },
    {
      tag: "The Victim",
      title: "You — busy doing the actual work.",
      body:
        "You're on a ladder, under a sink, or driving between jobs. You can't answer every call the second it rings, and you shouldn't have to choose between finishing today's job and catching tomorrow's. The leads that slip through aren't a hustle problem. They're a coverage problem.",
    },
    {
      tag: "The Vow",
      title: "Every inquiry gets answered — instantly.",
      body:
        "We set up the system so no call, form, or message goes unanswered. Missed calls get an instant text. New leads get qualified and offered a time to book. Follow-up runs on its own. You stay focused on the work, and the front desk never closes.",
    },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container">
        <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ Why leads leak</div>
        <h2 className="display reveal mt-5" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", maxWidth: "18ch" }}>
          Lost jobs are rarely lost on price. They're lost on <span style={{ color: "var(--color-kelp-deep)" }}>response time.</span>
        </h2>
        <div className="mt-14 grid gap-px md:grid-cols-3" style={{ background: "rgba(15,17,21,0.12)" }}>
          {cards.map((c, i) => (
            <article key={c.tag} className="reveal p-8 md:p-10" style={{ background: "var(--color-fog)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp-deep)" }}>{String(i + 1).padStart(2, "0")} · {c.tag}</div>
              <h3 className="display mt-4" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", lineHeight: 1.08, color: "var(--color-ink)" }}>{c.title}</h3>
              <p className="mt-4" style={{ color: "rgba(15,17,21,0.72)", lineHeight: 1.65 }}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: PhoneMissed,
      t: "Missed-call text-back",
      a: "The moment a call goes unanswered, the caller gets an automatic, branded text: a real reply within seconds instead of silence. The conversation starts before they dial your competitor.",
    },
    {
      icon: Zap,
      t: "Instant lead response",
      a: "Form fills, web chats, and new messages get an immediate first response any hour of the day — so the lead knows they reached a real business that's on it.",
    },
    {
      icon: MessageSquare,
      t: "Follow-up + qualification",
      a: "Consent-based SMS and email sequences nudge quiet leads, answer common questions, and ask your qualifying questions so the people who reach your phone are ready to talk.",
    },
    {
      icon: CalendarCheck,
      t: "Booking, CRM + reporting",
      a: "Qualified leads are offered a time to book, logged in your CRM (or ours), and summarized in plain-English reports: calls captured, response times, conversations, and bookings.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <div className="mono-label mb-8">§ How it works</div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)", maxWidth: "20ch" }}>
          One system, four jobs — running while you run yours.
        </h2>
        <div className="mt-14 grid gap-px sm:grid-cols-2" style={{ background: "var(--color-hairline)" }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.t} className="reveal p-8 md:p-10" style={{ background: "var(--color-ink)" }}>
                <div className="flex items-center justify-between">
                  <span className="mono-label" style={{ color: "var(--color-kelp)" }}>STEP {String(i + 1).padStart(2, "0")}</span>
                  <Icon size={22} style={{ color: "var(--color-kelp)" }} />
                </div>
                <h3 className="display mt-5" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>{s.t}</h3>
                <p className="mt-3" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{s.a}</p>
              </article>
            );
          })}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function RoiCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(8);
  const [jobValue, setJobValue] = useState(450);
  const [recoverRate, setRecoverRate] = useState(20); // % of recaptured conversations that turn into booked work

  const conversationsPerMonth = Math.round(missedPerWeek * 4.33);
  const recoveredJobs = (conversationsPerMonth * recoverRate) / 100;
  const lowJobs = Math.floor(recoveredJobs * 0.6);
  const highJobs = Math.ceil(recoveredJobs);
  const lowRevenue = lowJobs * jobValue;
  const highRevenue = highJobs * jobValue;
  const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ Lead-leak calculator</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)", lineHeight: 1.02 }}>
            What might a faster response be worth?
          </h2>
          <p className="reveal mt-6" style={{ color: "rgba(15,17,21,0.72)", lineHeight: 1.65 }}>
            Move the sliders to use your own numbers. This is an illustrative estimate built entirely from your inputs — not a
            prediction, quote, or guarantee. Real results depend on your market, pricing, and how you handle the conversations.
          </p>
          <div className="mt-8 space-y-7">
            <Slider label="Missed or unanswered calls per week" value={missedPerWeek} min={0} max={50} step={1} suffix=" calls" onChange={setMissedPerWeek} />
            <Slider label="Average value of a booked job" value={jobValue} min={50} max={5000} step={50} prefix="$" onChange={setJobValue} />
            <Slider label="Share of recaptured conversations you'd book" value={recoverRate} min={0} max={100} step={5} suffix="%" onChange={setRecoverRate} />
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="grid h-full content-between gap-px" style={{ background: "rgba(15,17,21,0.12)" }}>
            <div className="grid sm:grid-cols-2 gap-px" style={{ background: "rgba(15,17,21,0.12)" }}>
              <Metric label="Conversations recaptured / mo" value={`~${conversationsPerMonth}`} sub="Missed calls answered by text instead of silence" />
              <Metric label="Potential booked jobs / mo" value={`${lowJobs}–${highJobs}`} sub="From your own booking-rate estimate" />
            </div>
            <div className="p-8 md:p-10" style={{ background: "var(--color-ink)", color: "var(--color-text-primary)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>Illustrative monthly range</div>
              <div className="display mt-4" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", lineHeight: 0.95, color: "var(--color-kelp)" }}>
                {fmt(lowRevenue)}<span style={{ color: "var(--color-text-muted)" }}> – </span>{fmt(highRevenue)}
              </div>
              <p className="mt-5 text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Potential recaptured revenue from leads that would otherwise have gone unanswered — based only on the numbers you
                entered above. We don't promise these results; we promise the system responds so the chance exists.
              </p>
              <Link href="/lead-leak-audit" className="btn-primary mt-8 inline-flex">
                Check My Lead Leaks <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, min, max, step, prefix = "", suffix = "", onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; prefix?: string; suffix?: string; onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm" style={{ color: "rgba(15,17,21,0.72)" }}>{label}</span>
        <span className="display" style={{ fontSize: "1.25rem", color: "var(--color-ink)" }}>{prefix}{value.toLocaleString("en-US")}{suffix}</span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full"
        style={{ accentColor: "var(--color-kelp-deep)" }}
        aria-label={label}
      />
    </label>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="p-8" style={{ background: "var(--color-fog)" }}>
      <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>{label}</div>
      <div className="display mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-ink)", lineHeight: 1 }}>{value}</div>
      <p className="mt-3 text-sm" style={{ color: "rgba(15,17,21,0.6)", lineHeight: 1.5 }}>{sub}</p>
    </div>
  );
}

function Tiers() {
  const tiers = [
    {
      n: "01",
      label: "Tier 1",
      title: "Recovery",
      price: "From $300 setup + $200/mo",
      sub: "Plug the most common leak first: missed calls that never call back.",
      bullets: [
        "Missed-call text-back on your business line",
        "Branded, instant auto-reply to every missed call",
        "Registered texting number setup guidance (A2P 10DLC)",
        "STOP / HELP opt-out handling built in",
        "Basic monthly activity report",
      ],
      best: false,
    },
    {
      n: "02",
      label: "Tier 2",
      title: "Response",
      price: "From $750 setup + $450/mo",
      sub: "Our most popular tier — instant response across every channel, plus booking.",
      bullets: [
        "Everything in Recovery, plus:",
        "Instant response to form fills and web chat",
        "Consent-based SMS + email follow-up sequences",
        "Lead qualification questions built around your trade",
        "Online booking / appointment scheduling",
        "Plain-English reporting dashboard",
      ],
      best: true,
    },
    {
      n: "03",
      label: "Tier 3",
      title: "Growth Engine",
      price: "From $1,500 setup + $850/mo",
      sub: "The full managed system for businesses that want it run for them.",
      bullets: [
        "Everything in Response, plus:",
        "CRM setup or integration with your existing tools",
        "Pipeline tracking and lead routing rules",
        "Database reactivation campaigns (to opted-in contacts)",
        "Monthly review of response times and bookings",
        "Priority support, single point of contact",
      ],
      best: false,
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label">§ Offer tiers</div>
          <div className="mono-label hidden md:block" style={{ color: "var(--color-text-muted)" }}>STARTING POINTS — EVERY SETUP IS SCOPED</div>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", maxWidth: "16ch" }}>
          Start where you're leaking. Grow when you're ready.
        </h2>
        <p className="reveal mt-5 max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
          Honest, recurring pricing. Carrier fees for texting are billed at cost. No long lock-ins — month-to-month after setup.
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-px" style={{ background: "var(--color-hairline)" }}>
          {tiers.map((t) => (
            <div
              key={t.n}
              className="reveal p-8 md:p-10 relative"
              style={{
                background: t.best ? "var(--color-fog)" : "var(--color-ink)",
                color: t.best ? "var(--color-ink)" : "var(--color-text-primary)",
              }}
            >
              {t.best && (
                <div className="absolute top-4 right-4 mono-label" style={{ color: "var(--color-kelp-deep)" }}>MOST POPULAR</div>
              )}
              <div className="mono-label" style={{ color: t.best ? "rgba(15,17,21,0.55)" : "var(--color-kelp)" }}>{t.n} / {t.label}</div>
              <h3 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)" }}>{t.title}</h3>
              <div className="display mt-3" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", color: t.best ? "var(--color-kelp-deep)" : "var(--color-kelp)" }}>
                {t.price}
              </div>
              <p className="mt-3 text-[0.96rem]" style={{ color: t.best ? "rgba(15,17,21,0.7)" : "var(--color-text-secondary)", lineHeight: 1.55 }}>{t.sub}</p>
              <ul className="mt-7 space-y-2.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.95rem]" style={{ color: t.best ? "rgba(15,17,21,0.78)" : "var(--color-text-secondary)", lineHeight: 1.5 }}>
                    <Check size={15} className="mt-1 flex-shrink-0" style={{ color: t.best ? "var(--color-kelp-deep)" : "var(--color-kelp)" }} /> {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/lead-leak-audit"
                className="mt-8 inline-flex"
                style={{
                  padding: "1rem 1.4rem",
                  background: t.best ? "var(--color-ink)" : "var(--color-kelp)",
                  color: t.best ? "var(--color-fog)" : "var(--color-ink)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                Check {t.title} Fit <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono-label">§ FAQ · Compliance</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1 }}>
            Honest answers, including the legal ones.
          </h2>
          <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)" }}>
            Texting is powerful and regulated. Here's how we keep it consent-first.{" "}
            <Link href="/contact" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Still have a question?</Link>
          </p>
        </div>
        <div className="md:col-span-7">
          {FAQS.map((f, i) => {
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
                  style={{ maxHeight: active ? 600 : 0, opacity: active ? 1 : 0 }}
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
        <h2 className="display reveal" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: "22ch", marginInline: "auto" }}>
          Find out where your leads are leaking. <span style={{ color: "var(--color-kelp)" }}>For free.</span>
        </h2>
        <p className="reveal mt-6 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
          A 30-minute Lead Leak Audit — we map where calls and inquiries are slipping through, and show you what the system would
          cover. No pitch deck, no pressure, no guaranteed-results theatrics.
        </p>
        <Link href="/lead-leak-audit" className="btn-primary mt-9">
          Check My Lead Leaks <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
