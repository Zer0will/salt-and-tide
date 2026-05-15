// SALT & TIDE — Pacific Brutalist. Home page. 8 sections: Hero / Credibility / Services / Featured Work / The Difference / Process / Social Proof / CTA.
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { FEATURED } from "@/data/portfolio";

export default function Home() {
  useReveal();

  return (
    <>
      <Hero />
      <Credibility />
      <Services />
      <FeaturedWork />
      <Difference />
      <Process />
      <SocialProof />
      <FinalCTA />
    </>
  );
}

/* ─────────────────────────────────────────────────────────── HERO */
function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Word-stagger reveal for headline
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".hero-char");
    words.forEach((c, i) => {
      c.style.transition = `transform 900ms ${220 + i * 70}ms var(--ease-out-pacific)`;
      requestAnimationFrame(() => { c.style.transform = "translateY(0)"; });
    });
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", background: "var(--color-ink)" }}>
      {/* slow gradient mesh */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background:
          "radial-gradient(60% 50% at 80% 20%, rgba(63,174,124,0.18), transparent 70%), \
           radial-gradient(60% 50% at 10% 80%, rgba(63,174,124,0.10), transparent 70%), \
           radial-gradient(50% 40% at 60% 60%, rgba(255,255,255,0.04), transparent 70%)",
      }} />

      {/* corner-tag */}
      <div className="absolute top-24 left-5 sm:left-7 lg:left-10 z-10 mono-label">
        <div>SALT &amp; TIDE</div>
        <div style={{ color: "var(--color-text-muted)" }}>EST. 2026 · EDMONDS, WA</div>
      </div>
      {/* sec num */}
      <div className="absolute top-24 right-5 sm:right-7 lg:right-10 z-10 sec-num">§ 01 / HERO</div>

      <div className="container relative z-10 grid grid-cols-12 gap-y-8" style={{ paddingTop: "min(22vh, 200px)", paddingBottom: "8vh" }}>
        <div className="col-span-12 md:col-span-1 hidden md:block">
          <div className="accent-bar mt-3" />
        </div>

        <div className="col-span-12 md:col-span-11">
          <div className="mono-label" style={{ color: "var(--color-kelp)" }}>
            Web Design + Marketing — Edmonds, WA
          </div>

          <h1
            ref={headlineRef}
            className="display mt-6"
            style={{ fontSize: "clamp(3rem, 9.5vw, 9rem)", lineHeight: 0.92 }}
          >
            <Line>We Build Websites</Line>
            <Line>That Actually</Line>
            <Line accent>Win Business.</Line>
          </h1>

          <p
            className="mt-7 max-w-2xl"
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",
              lineHeight: 1.55,
            }}
          >
            Salt &amp; Tide is a boutique web design and digital marketing studio for restaurants and small businesses in
            Edmonds and the greater Seattle area. We pair bold design with marketing strategy to build digital experiences
            that convert visitors into customers — fast.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/work" className="btn-primary">
              See Our Work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Start a Project <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <span className="mono-label">Trusted by</span>
            <ClientPlaceholderRow />
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 mono-label flex flex-col items-center gap-2 z-10" style={{ animation: "drop 2.4s ease-in-out infinite" }}>
        <span>Scroll</span>
        <span style={{ width: 1, height: 28, background: "var(--color-text-muted)" }} />
      </div>

      <style>{`
        @keyframes drop {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.55; }
          50%      { transform: translate(-50%, 8px); opacity: 1; }
        }
      `}</style>

      <hr className="hr-tide" />
    </section>
  );
}

function Line({ children, accent }: { children: string; accent?: boolean }) {
  // Wrap each WORD in an inline-block so wrapping happens on word boundaries,
  // and each word's characters animate up together.
  const words = children.split(" ");
  return (
    <span className="block" style={{ color: accent ? "var(--color-kelp)" : "inherit" }}>
      {words.map((w, wi) => (
        <span key={wi} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", marginRight: "0.28em" }}>
          <span className="hero-char" style={{ display: "inline-block" }}>{w}</span>
        </span>
      ))}
    </span>
  );
}

function ClientPlaceholderRow() {
  // Stylized text placeholders (NOT empty boxes) — read like a credit roster.
  const list = ["Pancake Haus", "Luigi's", "Walnut St. Coffee", "Medina Painting", "LGM Landscaping"];
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3" style={{ color: "var(--color-text-muted)" }}>
      {list.map((n, i) => (
        <span key={i} className="display-thin tracking-tight" style={{ fontSize: "1.05rem" }}>
          {n}
          {i < list.length - 1 && <span className="mx-3" style={{ opacity: 0.4 }}>·</span>}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── CREDIBILITY */
function Credibility() {
  const stats = [
    { v: "8+",      l: "Sites Designed & Delivered" },
    { v: "100%",    l: "Client Satisfaction Guaranteed" },
    { v: "2×",      l: "Faster With AI-Assisted Build" },
    { v: "PNW",     l: "Locally Rooted, Globally Capable" },
  ];
  return (
    <section className="relative py-20 md:py-28" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container">
        <div className="flex items-baseline justify-between mb-12">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ 02 / CREDIBILITY</div>
          <div className="mono-label hidden md:block" style={{ color: "rgba(15,17,21,0.55)" }}>BY THE NUMBERS</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div key={s.l} className="reveal">
              <CountUp text={s.v} />
              <div className="mt-3 text-sm" style={{ color: "rgba(15,17,21,0.6)", maxWidth: 220 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-14 display-thin reveal" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", maxWidth: 900, color: "rgba(15,17,21,0.85)" }}>
          From Edmonds restaurants to regional service businesses — we build digital experiences that grow with you.
        </p>
      </div>
    </section>
  );
}

function CountUp({ text }: { text: string }) {
  // For non-pure-numeric values like "PNW" or "2×", just render. For pure numerics, animate.
  const numericMatch = text.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!numericMatch || !ref.current) return;
    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      const start = performance.now();
      const dur = 1100;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(target * eased);
        el.textContent = `${v}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [numericMatch]);

  return (
    <div
      ref={ref}
      className="display"
      style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--color-ink)", letterSpacing: "-0.04em", lineHeight: 1 }}
    >
      {text}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── SERVICES */
function Services() {
  const cards = [
    {
      n: "01",
      title: "Websites That Convert",
      blurb: "Custom-built, blazing fast, and designed to turn visitors into customers. No templates. No compromises.",
      tags: ["Custom Design", "Mobile-First", "AI-Accelerated", "SEO Ready"],
      href: "/services#web",
    },
    {
      n: "02",
      title: "Marketing That Moves The Needle",
      blurb: "Strategy-led marketing from a team with real credentials. SEO, social, paid ads — unified around one goal: your growth.",
      tags: ["Brand Strategy", "SEO", "Social", "Paid Ads"],
      href: "/services#marketing",
    },
    {
      n: "03",
      title: "Your Complete Digital Partner",
      blurb: "From first impression to final conversion — we handle the digital side of your business so you can run the rest.",
      tags: ["Strategy", "Design", "Build", "Optimize"],
      href: "/services#full",
    },
  ];
  return (
    <section className="py-24 md:py-32" id="services">
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label">§ 03 / SERVICES</div>
          <div className="mono-label hidden md:block">WHAT WE DO</div>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.3rem, 5.2vw, 5rem)", maxWidth: "16ch" }}>
          Everything your business
          <br />
          needs to <span style={{ color: "var(--color-kelp)" }}>win online.</span>
        </h2>
        <p className="reveal mt-5 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          We don't just build websites. We build growth engines — design, content, and marketing aligned around the same goal.
        </p>

        <div className="mt-16 grid gap-px md:grid-cols-3" style={{ background: "var(--color-hairline)" }}>
          {cards.map((c) => (
            <div key={c.n} className="reveal p-8 md:p-10 group transition-colors duration-300" style={{ background: "var(--color-ink)" }}>
              <div className="flex items-baseline justify-between">
                <span className="mono-label">{c.n}</span>
                <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="display mt-8" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}>{c.title}</h3>
              <p className="mt-5 text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{c.blurb}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {c.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <Link href={c.href} className="ul-grow mono-label inline-flex items-center mt-10" style={{ color: "var(--color-text-primary)" }}>
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── FEATURED WORK */
function FeaturedWork() {
  return (
    <section className="py-24 md:py-32" id="work">
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label">§ 04 / SELECTED WORK</div>
          <Link href="/work" className="ul-grow mono-label hidden md:inline-block" style={{ color: "var(--color-text-primary)" }}>
            View All Work →
          </Link>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.3rem, 5.2vw, 5rem)" }}>
          Results we're proud of.
        </h2>
        <p className="reveal mt-5 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          Every project is a partnership. Here's what we've built together.
        </p>

        <div className="mt-16 space-y-24 md:space-y-32">
          {FEATURED.map((p, i) => (
            <article key={p.slug} className="grid md:grid-cols-12 gap-10 reveal">
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <DeviceFrame src={p.desktop} alt={p.title} variant="laptop" />
              </div>
              <div className={`md:col-span-5 flex flex-col justify-center ${i % 2 ? "md:order-1" : ""}`}>
                <div className="mono-label" style={{ color: "var(--color-kelp)" }}>{p.category} · {p.location}</div>
                <h3 className="display mt-4" style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}>{p.title}</h3>
                <p className="mt-5 text-[1rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{p.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
                <div className="mt-7 display-thin" style={{ fontSize: "1.4rem", color: "var(--color-kelp)" }}>
                  {p.resultCallout}
                </div>
                <Link href={`/work/${p.slug}`} className="btn-ghost self-start mt-8">
                  View Case Study <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/work" className="btn-primary">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

export function DeviceFrame({ src, alt, variant = "laptop" }: { src: string; alt: string; variant?: "laptop" | "phone" }) {
  if (variant === "phone") {
    return (
      <div className="relative mx-auto" style={{ maxWidth: 320 }}>
        <div style={{ border: "8px solid #0F1115", borderRadius: 30, background: "#15171C", padding: 6, boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
          <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", borderRadius: 22 }} />
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <div style={{
        border: "1px solid var(--color-hairline)",
        background: "var(--color-surface)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
      }}>
        <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
          <span className="ml-3 text-[10px]" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            salttidecreative.com
          </span>
        </div>
        <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%" }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── DIFFERENCE */
function Difference() {
  const items = [
    {
      t: "AI-Powered, Human-Led",
      d: "We use cutting-edge AI tools to build faster and smarter — without losing the human creativity that makes design feel made, not generated.",
    },
    {
      t: "Design + Marketing, One Roof",
      d: "Your website and your marketing strategy built together, by the same team. No disconnected handoffs. No excuses.",
    },
    {
      t: "Real Results, Not Pretty Pages",
      d: "We've consulted on restaurant growth strategy, redesigned menus, and built complete business systems. We think beyond the website.",
    },
    {
      t: "Locally Invested, Digitally Global",
      d: "We're Edmonds locals who care about this community — and we're connected to the global design and marketing trends most local agencies miss.",
    },
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-surface)" }}>
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono-label">§ 05 / WHY US</div>
          <h2 className="display mt-6 reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)" }}>
            Most agencies hand you a template and call it a day. <span style={{ color: "var(--color-kelp)" }}>We treat every project like our business depends on it</span> — because it does.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <Founder name="Yael" role="Web + AI Strategy" />
            <Founder name="Partner" role="Marketing + Brand" />
          </div>
        </div>
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-px" style={{ background: "var(--color-hairline)" }}>
          {items.map((x, i) => (
            <div key={i} className="reveal p-7 md:p-9" style={{ background: "var(--color-surface)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>0{i+1}</div>
              <h3 className="display mt-5" style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)" }}>{x.t}</h3>
              <p className="mt-3 text-[0.96rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function Founder({ name, role }: { name: string; role: string }) {
  return (
    <div>
      {/* Initial-monogram placeholder for headshot — labeled as such */}
      <div
        className="display"
        title="Founder photo placeholder"
        style={{
          width: 84, height: 84,
          display: "grid", placeItems: "center",
          background: "linear-gradient(135deg, #1B1E25 0%, #15171C 100%)",
          border: "1px solid var(--color-hairline)",
          color: "var(--color-text-primary)",
          fontSize: "1.6rem",
        }}
      >
        {name[0]}
      </div>
      <div className="mt-3 display" style={{ fontSize: "1.05rem" }}>{name}</div>
      <div className="mono-label" style={{ fontSize: "0.7rem" }}>{role}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── PROCESS */
function Process() {
  const steps = [
    { t: "Discovery",  s: "We Learn Your Business",  w: "Week 1",
      d: "One call to understand your goals, your customers, and what success looks like." },
    { t: "Strategy",   s: "We Build The Blueprint",  w: "Week 1–2",
      d: "Design direction, content structure, and marketing alignment — agreed before a single pixel." },
    { t: "Design + Build", s: "We Get To Work",      w: "Week 2–4",
      d: "AI-accelerated build means you see results faster. You stay in the loop at every milestone." },
    { t: "Launch + Grow", s: "We Launch And Keep Going", w: "Week 4+",
      d: "Go live with confidence. Ongoing support, SEO, and marketing so the site keeps performing." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label">§ 06 / PROCESS</div>
          <div className="mono-label hidden md:block">FROM CALL TO LAUNCH</div>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.3rem, 5.2vw, 5rem)" }}>
          From first call to launch.
        </h2>
        <div className="mt-16 relative grid md:grid-cols-4 gap-px" style={{ background: "var(--color-hairline)" }}>
          {/* horizontal animated line */}
          <div aria-hidden className="hidden md:block absolute left-0 right-0" style={{
            top: 90,
            height: 1,
            background: "linear-gradient(to right, transparent, var(--color-kelp) 50%, transparent)",
            opacity: 0.6,
          }} />
          {steps.map((s, i) => (
            <div key={i} className="reveal p-7 md:p-8 relative" style={{ background: "var(--color-ink)" }}>
              <div className="flex items-center gap-3">
                <div className="display" style={{ fontSize: "2.6rem", color: "var(--color-kelp)", lineHeight: 1 }}>0{i+1}</div>
                <div>
                  <div className="mono-label">{s.w}</div>
                  <div className="display" style={{ fontSize: "1rem", marginTop: 2 }}>{s.t}</div>
                </div>
              </div>
              <div className="display mt-7" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>{s.s}</div>
              <p className="mt-3 text-[0.95rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── SOCIAL PROOF */
function SocialProof() {
  const tx = [
    {
      q: "Salt & Tide completely transformed how our restaurant shows up online. We had reservations for our back room within the first week of launching. These guys know what they're doing.",
      n: "Owner",
      b: "Pancake Haus, Edmonds, WA",
    },
    {
      q: "We were brand new and needed everything — strategy, website, the works. They delivered a complete digital foundation that made us look established from day one. Incredible work.",
      n: "Owner",
      b: "Luigi's Breakfast",
    },
    {
      q: "I was skeptical working with such a young team — honestly they outperformed agencies I've paid twice as much. The combination of design and marketing thinking in one team is rare.",
      n: "Owner",
      b: "Local Service Business, Seattle",
    },
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ 07 / TESTIMONIALS</div>
          <div className="mono-label hidden md:block" style={{ color: "rgba(15,17,21,0.55)" }}>CLIENT LOVE</div>
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2.3rem, 5.2vw, 5rem)" }}>
          Don't take our word for it.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-px" style={{ background: "rgba(15,17,21,0.12)" }}>
          {tx.map((t, i) => (
            <blockquote key={i} className="reveal p-8 md:p-10" style={{ background: "var(--color-fog)" }}>
              <div className="display" style={{ fontSize: "3.5rem", lineHeight: 0.7, color: "var(--color-kelp)" }}>“</div>
              <p className="mt-4 display-thin" style={{ fontSize: "1.2rem", lineHeight: 1.45, color: "rgba(15,17,21,0.9)" }}>
                {t.q}
              </p>
              <footer className="mt-7">
                <div className="display" style={{ fontSize: "0.95rem" }}>{t.n}</div>
                <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>{t.b}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── FINAL CTA */
function FinalCTA() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden" id="cta">
      <div aria-hidden className="absolute inset-0" style={{
        background: "radial-gradient(60% 60% at 50% 30%, rgba(63,174,124,0.18), transparent 70%)",
      }} />
      <div className="container relative z-10 text-center">
        <div className="mono-label">§ 08 / READY?</div>
        <h2 className="display mt-6 reveal" style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", maxWidth: "20ch", marginInline: "auto" }}>
          Ready to build something that <span style={{ color: "var(--color-kelp)" }}>actually works</span>?
        </h2>
        <p className="reveal mt-7 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          Most agencies make you wait weeks just to get a proposal. We'll have a real strategy conversation with you this week.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="btn-primary" style={{ padding: "1.1rem 1.9rem" }}>
            Book a Free Strategy Call <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-7 mono-label" style={{ color: "var(--color-text-muted)" }}>
          ✓ Free 30-min call &nbsp; ·&nbsp; ✓ Custom strategy, not a pitch &nbsp; ·&nbsp; ✓ Reply within 24 hours
        </div>
      </div>
    </section>
  );
}
