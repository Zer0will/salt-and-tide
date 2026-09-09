// SALT & TIDE — Pacific Brutalist. Home page ported from redesign/index.html while preserving the existing logo/nav system.
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { STUDIO_AVAILABILITY } from "@/lib/studio";
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
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
        ]}
      />
      <Hero />
      <FeaturedWork />
      <Services />
      <Credibility />
      <Difference />
      <Process />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const project = FEATURED[0];
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-36 pb-16 lg:pt-40 lg:pb-20">
      <HeroContours />
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <div className="mono-label" style={{ color: "var(--color-kelp)" }}>Edmonds · Seattle · Puget Sound</div>
          <h1 className="display mt-6" style={{ fontSize: "clamp(2.8rem, 5.8vw, 5.8rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            Websites for<br /><span style={{ color: "var(--color-kelp)" }}>what comes next.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Web design and digital marketing for local businesses. Help customers find your menu, explore your work, and take the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/free-website-audit" className="btn-primary justify-center">Get a free website audit <ArrowRight size={18} /></Link>
            <Link href="/work" className="btn-ghost justify-center">Explore our work <ArrowUpRight size={18} /></Link>
          </div>
          <p className="mt-5 text-sm" style={{ color: "var(--color-text-secondary)" }}>A two-person studio. A reply within one business day.</p>
        </div>
        <div className="min-w-0">
          <Link href={`/work/${project.slug}`} className="block group" aria-label={`Explore the ${project.client} website project`}>
            <div className="border p-2" style={{ borderColor: "var(--color-hairline)", background: "var(--color-surface)" }}>
              <img src={project.desktop} alt="Luigi’s breakfast website with food photography and clear menu navigation" width={1600} height={1000} fetchPriority="high" className="w-full aspect-[4/3] object-cover object-top" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="display text-lg">{project.client}</span>
              <span className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--color-kelp)" }}>Explore project <ArrowUpRight size={16} /></span>
            </div>
          </Link>
          <div className="mt-6 border-t pt-4 text-sm flex flex-wrap justify-between gap-2" style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-secondary)" }}>
            <span>{STUDIO_AVAILABILITY}</span><Link href="/about" className="ul-grow">Meet Yael &amp; Chaz</Link>
          </div>
        </div>
      </div>
      <hr className="hr-tide absolute bottom-0 inset-x-0" />
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

function Credibility() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(1200px 600px at 100% 0%, rgba(15,17,21,0.05), transparent 60%), repeating-linear-gradient(180deg, rgba(15,17,21,0.04) 0 1px, transparent 1px 80px)" }} />
      <div className="container relative">
        <SectionHead left={sectionLabel("02", "Credibility")} right="By the numbers" dark />
        <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div className="reveal border-b pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-16" style={{ borderColor: "rgba(15,17,21,0.10)" }}>
            <div className="display font-extrabold" style={{ fontSize: "clamp(5rem,9vw,8rem)", lineHeight: 0.86, letterSpacing: "-0.06em", color: "var(--color-ink)" }}>8<span className="align-top text-[0.45em]" style={{ color: "var(--color-kelp-deep)" }}>+</span></div>
            <p className="mt-6 display-thin max-w-[22ch]" style={{ fontSize: "clamp(1.25rem,2vw,1.75rem)", color: "rgba(15,17,21,0.85)" }}>Website projects across restaurants, local services, and educational concepts.</p>
          </div>
          <div className="flex flex-col gap-7">
            <CredRow num="Web" text={<><strong>Explore the work.</strong> Open the project pages to see the design, scope, and project type.</>} />
            <CredRow num="2" text={<><strong>People behind the work.</strong> Design and marketing with Yael and Chaz.</>} />
            <CredRow num="PNW" text={<><strong>Locally rooted</strong>, globally informed — Edmonds, Lynnwood, Shoreline, Seattle.</>} />
            <CredRow num="You" text={<><strong>A clear scope.</strong> Agree on deliverables, timing, and ownership before the project starts.</>} />
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
                <DeviceFrame
                  desktopSrc={p.desktop}
                  mobileSrc={p.mobile}
                  alt={`${p.title} website screenshot`}
                  url={p.liveUrl?.replace(/^https?:\/\//, "") ?? "salttidecreative.com"}
                  caseStudyHref={`/work/${p.slug}`}
                  projectTitle={p.title}
                />
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

type DeviceView = "desktop" | "mobile";

export function DeviceFrame({
  desktopSrc,
  mobileSrc,
  alt,
  url = "salttidecreative.com",
  caseStudyHref,
  projectTitle,
}: {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  url?: string;
  caseStudyHref?: string;
  projectTitle?: string;
}) {
  const [devicePreference, setDevicePreference] = useState<DeviceView | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobileViewport(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const activeView: DeviceView = devicePreference ?? (isMobileViewport ? "mobile" : "desktop");
  const isMobilePreview = activeView === "mobile";
  const activeSrc = isMobilePreview ? mobileSrc : desktopSrc;
  const previewFrame = (
    <div
      className={`relative mx-auto border transition-all duration-500 ease-out group-hover/device:-translate-y-1 ${
        isMobilePreview ? "max-w-[265px] rounded-[2rem] p-2" : "max-w-full rounded-none"
      }`}
      style={{
        borderColor: "var(--color-hairline)",
        background: "var(--color-surface)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(63,174,124,0.08)",
      }}
    >
      <div
        className={`flex items-center gap-1.5 border-b px-3.5 py-2.5 ${isMobilePreview ? "rounded-t-[1.45rem]" : ""}`}
        style={{ borderColor: "var(--color-hairline)", background: "var(--color-surface)" }}
      >
        <span className="h-2 w-2 rounded-full bg-[#3a3d44]" /><span className="h-2 w-2 rounded-full bg-[#3a3d44]" /><span className="h-2 w-2 rounded-full bg-[#3a3d44]" />
        <span className="ml-3 truncate font-mono text-[10px] tracking-wide" style={{ color: "var(--color-text-muted)" }}>{url}</span>
      </div>
      <div className={`overflow-hidden ${isMobilePreview ? "rounded-b-[1.45rem]" : ""}`}>
        <img
          key={activeSrc}
          src={activeSrc}
          alt={`${alt} — ${activeView} preview`}
          loading="lazy"
          className={`block w-full transition duration-500 ease-out ${isMobilePreview ? "max-h-[520px] object-cover object-top" : "object-contain"}`}
        />
      </div>
    </div>
  );

  return (
    <div className="group/device">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="mono-label" style={{ color: "var(--color-text-muted)" }}>
          Showing {isMobilePreview ? "mobile" : "desktop"} design
          {caseStudyHref && <span className="ml-2" style={{ color: "var(--color-kelp)" }}>· click preview for case study</span>}
        </div>
        <div className="inline-flex border" style={{ borderColor: "var(--color-hairline)", background: "var(--color-surface)" }}>
          {(["desktop", "mobile"] as DeviceView[]).map((view) => {
            const active = activeView === view;
            return (
              <button
                key={view}
                type="button"
                onClick={() => setDevicePreference(view)}
                className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition"
                style={{
                  background: active ? "var(--color-kelp)" : "transparent",
                  color: active ? "var(--color-ink)" : "var(--color-text-secondary)",
                }}
                aria-pressed={active}
                aria-label={`Preview ${view} version without opening the project`}
              >
                {view}
              </button>
            );
          })}
        </div>
      </div>
      {caseStudyHref ? (
        <Link
          href={caseStudyHref}
          aria-label={`Read the ${projectTitle ?? alt} case study`}
          className="block cursor-pointer outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--color-kelp)]"
        >
          {previewFrame}
        </Link>
      ) : (
        previewFrame
      )}
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
          <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>Not ready for a full project form? Send your website or Google listing, business phone, and email. We'll find the first places leads may be slipping through.</p>
          <Link href="/lead-leak-audit" className="btn-primary mt-8 inline-flex px-7 py-4">Check my lead leaks <ArrowRight size={18} /></Link>
          <div className="mt-7 grid gap-5 border-t pt-6" style={{ borderColor: "var(--color-hairline)" }}>
            <CTARow n="01" title="30-second intake" sub="No budget gate. No essay required." />
            <CTARow n="02" title="Lead leak snapshot" sub="3–5 practical friction points." />
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
