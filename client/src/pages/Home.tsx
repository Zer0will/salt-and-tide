// SALT & TIDE — Pacific Brutalist. Home page ported from redesign/index.html while preserving the existing logo/nav system.
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { FEATURED } from "@/data/portfolio";
import { Seo, localBusinessSchema, websiteSchema, organizationSchema } from "@/components/Seo";

const sectionLabel = (n: string, label: string) => `§ ${n} / ${label}`;

export default function Home() {
  useReveal();

  return (
    <>
      <Seo
        title="Web Design + Marketing Studio | Salt & Tide Creative"
        description="Salt & Tide Creative builds high-converting websites, SEO foundations, and marketing systems for small businesses across Edmonds, Seattle, and Puget Sound."
        path="/"
        keywords={[
          "web design agency Seattle",
          "digital marketing agency Seattle",
          "small business website design Seattle",
          "Puget Sound web design studio",
        ]}
        jsonLd={[
          localBusinessSchema({
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "4", bestRating: "5", worstRating: "5" },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Pancake Haus" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody: "Salt & Tide rebuilt our site in two weeks and bookings doubled within sixty days.",
                datePublished: "2026-04-12",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Luigi's Breakfast" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody: "Best agency we've worked with. They understand restaurants and local growth.",
                datePublished: "2026-03-05",
              },
            ],
          }),
          organizationSchema(),
          websiteSchema(),
        ]}
      />
      <Hero />
      <Credibility />
      <div className="seam" aria-hidden />
      <Services />
      <FeaturedWork />
      <Difference />
      <Process />
      <SocialProof />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

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
    <section id="hero" className="relative isolate min-h-[100dvh] overflow-hidden pt-[140px] pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 50% at 82% 18%, rgba(63,174,124,0.16), transparent 70%), radial-gradient(60% 45% at 8% 86%, rgba(63,174,124,0.07), transparent 70%)",
        }}
      />
      <HeroContours />

      <div className="container relative z-10 grid gap-14 lg:grid-cols-[88px_minmax(0,1fr)_240px] lg:gap-8">
        <aside className="hidden flex-col gap-5 pt-3 lg:flex" aria-hidden>
          <div className="accent-bar" />
          <div className="mono-label" style={{ color: "var(--color-text-muted)" }}>{sectionLabel("01", "Hero")}</div>
          <div className="mono-label [writing-mode:vertical-rl] rotate-180 mt-4" style={{ letterSpacing: "0.3em", color: "var(--color-text-muted)" }}>Plate I of VIII</div>
        </aside>

        <div className="min-w-0">
          <div className="mono-label inline-flex items-center gap-3" style={{ color: "var(--color-kelp)" }}>
            <span className="h-px w-7" style={{ background: "var(--color-kelp)" }} />
            Web Design &amp; Marketing — Pacific Northwest
          </div>

          <h1
            ref={headlineRef}
            aria-label="We build websites that earn their keep."
            className="display mt-7"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.035em" }}
          >
            <Line>We build</Line>
            <Line>websites that</Line>
            <Line accent>earn their keep.</Line>
          </h1>

          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.05vw,1.125rem)] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Salt &amp; Tide is a boutique <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>web design and digital marketing studio</strong> for restaurants and small businesses in <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>Edmonds, Washington</strong> and the greater <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>Seattle</strong> area. Strategy, design, and growth — under one roof, by the same team.
          </p>
          <span className="sr-only">Salt &amp; Tide Creative — web design agency serving Edmonds, Lynnwood, Shoreline, Mukilteo, and Seattle, WA.</span>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/work" className="btn-primary">See selected work <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn-ghost">Start a project <ArrowUpRight size={18} /></Link>
            <Link href="/about" className="btn-link">About the studio</Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-hairline)" }}>
            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>In good company</span>
            <ClientRoster />
          </div>
        </div>

        <aside className="hidden flex-col gap-6 pt-4 lg:flex" aria-label="Studio status">
          <StatusKicker label="Status"><span className="inline-flex items-center gap-2 mono-label" style={{ color: "var(--color-kelp)" }}><span className="live-dot" /> 1 slot remaining</span></StatusKicker>
          <StatusKicker label="Next opening">June 2026 <span className="ml-2 font-mono text-[11px]" style={{ color: "var(--color-text-secondary)" }}>/ 4-wk engagement</span></StatusKicker>
          <StatusKicker label="Response time">≈ 4 hrs <span className="ml-2 font-mono text-[11px]" style={{ color: "var(--color-text-secondary)" }}>Mon–Fri</span></StatusKicker>
          <StatusKicker label="From the desk">Edmonds, WA</StatusKicker>
        </aside>
      </div>

      <hr className="hr-tide absolute bottom-0 left-0 right-0" />
    </section>
  );
}

function HeroContours() {
  return (
    <svg className="absolute inset-0 -z-10 h-full w-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="contour" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(63,174,124,0.16)" />
          <stop offset="1" stopColor="rgba(63,174,124,0.02)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#contour)" strokeWidth="1">
        {[720, 760, 800, 840, 880].map((y) => (
          <path key={y} d={`M -80 ${y} Q 240 ${y - 60} 480 ${y - 20} T 1080 ${y - 60} T 1520 ${y - 30}`} />
        ))}
      </g>
    </svg>
  );
}

function Line({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <span className="block overflow-hidden" style={{ color: accent ? "var(--color-kelp)" : "inherit", fontStyle: accent ? "italic" : undefined, fontWeight: accent ? 500 : undefined }}>
      {children.split(" ").map((w, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-top" style={{ marginRight: "0.28em" }}>
          <span className="hero-char inline-block">{w}</span>
        </span>
      ))}
    </span>
  );
}

function StatusKicker({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t pt-3" style={{ borderColor: "var(--color-hairline)" }}>
      <div className="mono-label mb-2" style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>{label}</div>
      <div className="display-thin text-lg tracking-tight">{children}</div>
    </div>
  );
}

function ClientRoster() {
  const list = ["Pancake Haus", "Luigi's", "Walnut St. Coffee", "Medina Painting", "LGM Landscaping"];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {list.map((n, i) => (
        <span key={n} className="inline-flex items-center gap-5 display-thin text-[0.98rem]" style={{ color: "var(--color-text-secondary)" }}>
          {n}
          {i < list.length - 1 && <span className="h-1 w-1 rounded-full opacity-60" style={{ background: "var(--color-text-muted)" }} />}
        </span>
      ))}
    </div>
  );
}

function Credibility() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(1200px 600px at 100% 0%, rgba(15,17,21,0.05), transparent 60%), repeating-linear-gradient(180deg, rgba(15,17,21,0.04) 0 1px, transparent 1px 80px)" }} />
      <div className="container relative">
        <SectionHead left={sectionLabel("02", "Credibility")} right="By the numbers" dark />
        <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div className="reveal border-b pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-16" style={{ borderColor: "rgba(15,17,21,0.10)" }}>
            <div className="display font-extrabold" style={{ fontSize: "clamp(6rem,14vw,13.75rem)", lineHeight: 0.86, letterSpacing: "-0.06em", color: "var(--color-ink)" }}>8<span className="align-top text-[0.45em]" style={{ color: "var(--color-kelp-deep)" }}>+</span></div>
            <p className="mt-6 display-thin max-w-[22ch]" style={{ fontSize: "clamp(1.25rem,2vw,1.75rem)", color: "rgba(15,17,21,0.85)" }}>Sites designed and shipped — every one built for a business we'd return to ourselves.</p>
          </div>
          <div className="flex flex-col gap-7">
            <CredRow num="100%" text={<><strong>Client satisfaction</strong> — every project still standing, still trusted by its owner.</>} />
            <CredRow num="2.4×" text={<><strong>Faster delivery</strong> with AI-assisted build vs. our previous workflow.</>} />
            <CredRow num="PNW" text={<><strong>Locally rooted</strong>, globally informed — Edmonds, Lynnwood, Shoreline, Seattle.</>} />
            <CredRow num="3 wks" text={<><strong>Median engagement.</strong> Strategy + brand + site in the time most agencies write a proposal.</>} />
          </div>
        </div>
        <p className="reveal mt-24 display-thin max-w-[32ch]" style={{ fontSize: "clamp(1.35rem,2.5vw,2.25rem)", color: "rgba(15,17,21,0.92)", lineHeight: 1.25 }}>
          From Edmonds restaurants to regional service businesses — we build digital experiences that <span className="italic font-semibold" style={{ color: "var(--color-kelp-deep)" }}>grow with you,</span> not past you.
        </p>
      </div>
    </section>
  );
}

function CredRow({ num, text }: { num: string; text: React.ReactNode }) {
  return (
    <div className="reveal grid grid-cols-[80px_1fr] gap-5 border-b pb-6 last:border-b-0" style={{ borderColor: "rgba(15,17,21,0.10)" }}>
      <div className="display text-[2.5rem] leading-none" style={{ color: "var(--color-ink)" }}>{num}</div>
      <div className="text-sm leading-relaxed" style={{ color: "rgba(15,17,21,0.65)" }}>{text}</div>
    </div>
  );
}

function Services() {
  const cards = [
    { n: "01", title: "Websites that convert.", blurb: "Custom-built, blazing fast, and engineered to turn visitors into bookings, calls, and revenue. No templates. No shortcuts. Every detail intentional.", tags: ["Custom design", "Mobile-first", "AI-accelerated", "SEO ready"], href: "/services#web" },
    { n: "02", title: "Marketing that moves the needle.", blurb: "Strategy-led growth from a team with real credentials. SEO, social, and paid — unified around one goal: your business's next quarter, not last year's vanity metric.", tags: ["Brand strategy", "Local SEO", "Social", "Paid ads"], href: "/services#marketing" },
    { n: "03", title: "Your complete digital partner.", blurb: "From first impression to final conversion — we handle the digital side of your business so you can run the rest. One team, one number to call, one invoice.", tags: ["Strategy", "Design", "Build", "Optimize"], href: "/services#full" },
  ];

  return (
    <section className="py-24 md:py-36" id="services">
      <div className="container">
        <SectionHead left={sectionLabel("03", "Services")} right="What we do" />
        <h2 className="display reveal max-w-[16ch]" style={{ fontSize: "clamp(2.5rem,6vw,5.25rem)" }}>Everything your business needs to <span className="italic font-medium" style={{ color: "var(--color-kelp)" }}>win online.</span></h2>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>Three disciplines, one team, one bill. Design that converts, marketing that compounds, partnership that lasts beyond launch day.</p>
        <div className="mt-16 border-t" style={{ borderColor: "var(--color-hairline)" }}>
          {cards.map((c) => (
            <Link key={c.n} href={c.href} className="group grid gap-6 border-b py-10 transition-[background,padding] duration-300 hover:pl-4 md:grid-cols-[120px_minmax(0,1.2fr)_minmax(0,1.4fr)_100px] md:gap-14" style={{ borderColor: "var(--color-hairline)" }}>
              <div className="display text-6xl leading-none md:text-8xl" style={{ color: "var(--color-text-muted)" }}>{c.n}</div>
              <div>
                <h3 className="display" style={{ fontSize: "clamp(1.5rem,2.4vw,2.25rem)", lineHeight: 1.1 }}>{c.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </div>
              <p className="text-[0.98rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{c.blurb}</p>
              <ArrowRight className="hidden self-center justify-self-end opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100 md:block" style={{ color: "var(--color-kelp)" }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="py-24 md:py-36" id="work">
      <div className="container">
        <SectionHead left={sectionLabel("04", "Selected work")} right={<Link href="/work" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Index → all 8 projects</Link>} />
        <h2 className="display reveal" style={{ fontSize: "clamp(2.5rem,6vw,5.25rem)" }}>Results we're proud of.</h2>
        <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>Every project is a partnership. Here is what we have built together — and what those numbers turned into for the people running these businesses.</p>
        <div className="mt-20 grid gap-y-24 md:grid-cols-12 md:gap-x-8 md:gap-y-28">
          {FEATURED.map((p, i) => (
            <article key={p.slug} className={`case-grid reveal ${i === 0 ? "md:col-span-12 md:grid md:grid-cols-12 md:items-center md:gap-8" : i === 1 ? "md:col-span-12 md:grid md:grid-cols-12 md:items-center md:gap-8" : i === 2 ? "md:col-span-7" : "md:col-span-5"}`}>
              <div className={`${i === 0 ? "md:col-span-8" : i === 1 ? "md:order-2 md:col-span-8" : ""}`}>
                <DeviceFrame src={p.desktop} alt={`${p.title} website screenshot`} url={p.liveUrl?.replace(/^https?:\/\//, "") ?? "salttidecreative.com"} />
              </div>
              <div className={`${i === 0 ? "mt-8 md:col-span-4 md:mt-0" : i === 1 ? "mt-8 md:order-1 md:col-span-4 md:mt-0" : "mt-6"}`}>
                <div className="mono-label flex items-center gap-3" style={{ color: "var(--color-kelp)" }}><span className="h-px w-5" style={{ background: "var(--color-kelp)" }} />{p.category} · {p.location} · {p.year}</div>
                <h3 className="display mt-4" style={{ fontSize: i < 2 ? "clamp(1.65rem,2.6vw,2.5rem)" : "1.4rem", lineHeight: 1.05 }}>{p.title}</h3>
                <p className="mt-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{p.blurb}</p>
                {i < 2 && <div className="mt-5 display-thin text-xl italic" style={{ color: "var(--color-kelp)" }}>{p.resultCallout}</div>}
                {i < 2 && <Link href={`/work/${p.slug}`} className="btn-ghost mt-7 inline-flex">Read the case study <ArrowRight size={16} /></Link>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-24 flex flex-col gap-6 border-t pt-6 md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--color-hairline)" }}>
          <p className="display-thin max-w-[24ch] text-2xl italic">A working portfolio of <strong className="font-medium" style={{ color: "var(--color-kelp)" }}>eight live sites</strong> — restaurants, retail, services, hospitality.</p>
          <Link href="/work" className="btn-primary self-start">View all work <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}

export function DeviceFrame({ src, alt, url = "salttidecreative.com" }: { src: string; alt: string; url?: string }) {
  return (
    <div className="relative border transition duration-300 hover:-translate-y-1" style={{ borderColor: "var(--color-hairline)", background: "var(--color-surface)", boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(63,174,124,0.08)" }}>
      <div className="flex items-center gap-1.5 border-b px-3.5 py-2.5" style={{ borderColor: "var(--color-hairline)", background: "var(--color-surface)" }}>
        <span className="h-2 w-2 rounded-full bg-[#3a3d44]" /><span className="h-2 w-2 rounded-full bg-[#3a3d44]" /><span className="h-2 w-2 rounded-full bg-[#3a3d44]" />
        <span className="ml-3 font-mono text-[10px] tracking-wide" style={{ color: "var(--color-text-muted)" }}>{url}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function Difference() {
  const items = [
    ["AI-powered, human-led.", "We use cutting-edge tools to build faster and smarter — without losing the human creativity that makes design feel made, not generated."],
    ["Design + marketing, one roof.", "Your website and your marketing strategy built together, by the same team. No disconnected handoffs. No excuses."],
    ["Real results, not pretty pages.", "We've consulted on restaurant growth strategy, redesigned menus, and built complete business systems. We think beyond the website."],
    ["Locally invested, digitally global.", "Edmonds locals who care about this community — and connected to the global design trends most local agencies miss."],
  ];
  return (
    <section className="border-y py-24 md:py-36" id="about" style={{ background: "var(--color-surface)", borderColor: "var(--color-hairline)" }}>
      <div className="container grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="reveal">
          <div className="mono-label">{sectionLabel("05", "Why us")}</div>
          <h2 className="display mt-6" style={{ fontSize: "clamp(2.1rem,4vw,3.5rem)", lineHeight: 1.04 }}>Most agencies hand you a template and call it a day. <span className="italic font-medium" style={{ color: "var(--color-kelp)" }}>We treat every project like our own business depends on it</span> — because it does.</h2>
          <div className="mt-12 grid max-w-md grid-cols-2 gap-6">
            <Founder name="Yael" role="Web + AI strategy" />
            <Founder name="Chaz" role="Marketing + brand" />
          </div>
        </div>
        <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--color-hairline)" }}>
          {items.map(([title, body], i) => (
            <div key={title} className="reveal p-8 md:p-9" style={{ background: "var(--color-surface)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>0{i + 1}</div>
              <h3 className="display mt-6 text-xl leading-tight">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder({ name, role }: { name: string; role: string }) {
  return (
    <div>
      <div className="display grid h-[84px] w-[84px] place-items-center border text-3xl" style={{ borderColor: "var(--color-hairline)", background: "linear-gradient(135deg, var(--color-surface-2), var(--color-surface))" }}>{name[0]}</div>
      <div className="display mt-3 text-[1.05rem]">{name}</div>
      <div className="mono-label text-[0.65rem]" style={{ color: "var(--color-text-muted)" }}>{role}</div>
    </div>
  );
}

function Process() {
  const steps = [
    ["Week 1", "Discovery.", "We learn your business.", "One call to understand your goals, your customers, and what success looks like — not a brief, a conversation."],
    ["Week 1–2", "Strategy.", "We build the blueprint.", "Design direction, content structure, and marketing alignment — agreed before a single pixel is moved."],
    ["Week 2–4", "Design + build.", "We get to work.", "AI-accelerated build means you see results faster. You stay in the loop at every milestone — no black boxes."],
    ["Week 4+", "Launch + grow.", "We launch and keep going.", "Go live with confidence. Ongoing support, SEO, and marketing so the site keeps performing into year two and beyond."],
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <SectionHead left={sectionLabel("06", "Process")} right="From call to launch" />
        <h2 className="display reveal" style={{ fontSize: "clamp(2.5rem,6vw,5.25rem)" }}>From first call to launch.</h2>
        <div className="relative mt-20 pb-10">
          <div aria-hidden className="absolute left-0 right-0 top-[60px] hidden h-px md:block" style={{ background: "linear-gradient(to right, transparent 0%, var(--color-kelp) 25%, var(--color-kelp) 75%, transparent 100%)", opacity: 0.6 }} />
          <div className="grid gap-14 md:grid-cols-4 md:gap-8">
            {steps.map(([week, title, sub, body], i) => (
              <div key={title} className="reveal relative pt-24 md:[&:nth-child(2)]:pt-36 md:[&:nth-child(3)]:pt-20 md:[&:nth-child(4)]:pt-40">
                <span aria-hidden className="absolute left-0 top-[52px] h-4 w-px" style={{ background: "var(--color-kelp)" }} />
                <div className="absolute left-0 top-0 font-mono text-sm tracking-[0.18em]" style={{ color: "var(--color-kelp)" }}>0{i + 1}</div>
                <div className="mono-label mb-2" style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>{week}</div>
                <h3 className="display text-[1.35rem] leading-tight">{title}</h3>
                <div className="display-thin mt-2 italic" style={{ color: "var(--color-kelp)" }}>{sub}</div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="hr-tide mt-16" />
    </section>
  );
}

function SocialProof() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(800px 400px at 0% 100%, rgba(63,174,124,0.06), transparent 60%)" }} />
      <div className="container relative">
        <SectionHead left={sectionLabel("07", "Testimonials")} right="In their words" dark />
        <div className="grid gap-14 md:grid-cols-[7fr_5fr] md:gap-20">
          <blockquote className="reveal pr-0 md:pr-14">
            <span className="display block text-[clamp(7.5rem,14vw,13.75rem)] leading-[0.6]" style={{ color: "var(--color-kelp)" }}>“</span>
            <p className="display-thin" style={{ fontSize: "clamp(1.5rem,3.2vw,2.75rem)", lineHeight: 1.18, color: "var(--color-ink)" }}>Salt &amp; Tide completely transformed how our restaurant shows up online. We had <em className="font-semibold" style={{ color: "var(--color-kelp-deep)" }}>reservations for our back room within the first week</em> of launching. These guys know what they're doing.</p>
            <footer className="mt-9 border-t pt-5" style={{ borderColor: "rgba(15,17,21,0.12)" }}>
              <div className="display text-[1.05rem]">— Owner, Pancake Haus</div>
              <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>Edmonds, WA · 20 years in business</div>
            </footer>
          </blockquote>
          <div className="grid content-end gap-8">
            <MiniQuote quote="We were brand new and needed everything — strategy, website, the works. They delivered a complete digital foundation that made us look established from day one." name="Owner, Luigi's Breakfast" biz="Edmonds · Launch client, 2026" />
            <MiniQuote quote="I was skeptical working with such a young team — they outperformed agencies I've paid twice as much. The design + marketing thinking in one team is rare." name="Owner, Service Business" biz="Seattle metro · Returning client" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniQuote({ quote, name, biz }: { quote: string; name: string; biz: string }) {
  return (
    <blockquote className="reveal border-l-2 p-7" style={{ borderColor: "var(--color-kelp-deep)", background: "rgba(15,17,21,0.04)" }}>
      <p className="display-thin text-[1.05rem] leading-snug" style={{ color: "rgba(15,17,21,0.88)" }}>“{quote}”</p>
      <footer className="mt-4">
        <div className="display text-sm">{name}</div>
        <div className="mono-label" style={{ fontSize: "10px", color: "rgba(15,17,21,0.55)" }}>{biz}</div>
      </footer>
    </blockquote>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" id="cta">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 80% 30%, rgba(63,174,124,0.16), transparent 60%)" }} />
      <div className="container relative grid gap-12 md:grid-cols-[8fr_4fr] md:items-end md:gap-16">
        <div>
          <div className="mono-label">{sectionLabel("08", "Ready?")}</div>
          <h2 className="display reveal mt-8" style={{ fontSize: "clamp(3rem,8vw,8rem)", lineHeight: 0.9 }}>Ready to build<br />something that <span className="italic font-medium" style={{ color: "var(--color-kelp)" }}>earns its keep?</span></h2>
        </div>
        <div className="reveal">
          <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>Most agencies make you wait weeks just to get a proposal. We'll have a real strategy conversation with you this week — no pitch deck, no NDA, no nonsense.</p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex px-7 py-4">Book a free strategy call <ArrowRight size={18} /></Link>
          <div className="mt-7 grid gap-5 border-t pt-6" style={{ borderColor: "var(--color-hairline)" }}>
            <CTARow n="01" title="Free 30-minute call" sub="No deck, no pitch — just listening." />
            <CTARow n="02" title="Custom strategy memo" sub="Written response, not a template." />
            <CTARow n="03" title="Reply within 24 hours" sub="Mon–Fri · Pacific Time." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTARow({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="grid grid-cols-[14px_1fr] gap-4">
      <div className="font-mono text-[10px] tracking-[0.18em]" style={{ color: "var(--color-kelp)" }}>{n}</div>
      <div>
        <div className="display-thin text-[0.98rem]">{title}</div>
        <div className="mono-label mt-1" style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>{sub}</div>
      </div>
    </div>
  );
}

function SectionHead({ left, right, dark }: { left: React.ReactNode; right: React.ReactNode; dark?: boolean }) {
  return (
    <div className="mb-14 flex items-baseline justify-between gap-4">
      <div className="mono-label" style={{ color: dark ? "rgba(15,17,21,0.55)" : undefined }}>{left}</div>
      <div className="mono-label hidden md:block" style={{ color: dark ? "rgba(15,17,21,0.55)" : undefined }}>{right}</div>
    </div>
  );
}
