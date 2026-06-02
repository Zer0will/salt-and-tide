// SALT & TIDE — Pacific Brutalist. About page — story, founders, values, why-name, location, CTA.
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Seo, SITE_ORIGIN, ORG_NAME, breadcrumbSchema } from "@/components/Seo";

export default function About() {
  useReveal();

  const peopleLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Yael", // OWNER: full name
      jobTitle: "Co-Founder & Web Developer",
      worksFor: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
      address: { "@type": "PostalAddress", addressLocality: "Edmonds", addressRegion: "WA", addressCountry: "US" },
      knowsAbout: ["Web Design", "Web Development", "AI-assisted build", "React", "Conversion-focused UX"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Chaz", // OWNER: full name
      jobTitle: "Co-Founder & Marketing Strategist",
      worksFor: { "@id": `${SITE_ORIGIN}/#organization`, name: ORG_NAME },
      address: { "@type": "PostalAddress", addressLocality: "Edmonds", addressRegion: "WA", addressCountry: "US" },
      knowsAbout: ["Brand Strategy", "Local SEO", "Email Marketing", "Paid Media", "Restaurant Marketing"],
    },
  ];

  return (
    <>
      <Seo
        title="About Salt & Tide Creative | Edmonds, WA Web Design Studio"
        description="Meet the founders of Salt & Tide Creative — an Edmonds, WA boutique studio building websites and marketing strategies for Pacific Northwest businesses."
        path="/about"
        keywords={[
          "Edmonds web design studio",
          "about Salt & Tide Creative",
          "web designer Edmonds WA",
          "PNW marketing agency",
        ]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...peopleLd,
        ]}
      />
      <Hero />
      <Story />
      <Founders />
      <Values />
      <WhyName />
      <Location />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}>
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ About</div>
          <h1 className="display mt-5" style={{ fontSize: "clamp(2.6rem, 7.5vw, 7rem)", lineHeight: 0.92 }}>
            We started this studio for one reason — <span style={{ color: "var(--color-kelp)" }}>local businesses deserve better digital.</span>
          </h1>
        </div>
        <div className="md:col-span-4 self-end">
          <p className="display-thin" style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
            Salt &amp; Tide Creative is a boutique web design and digital marketing studio based in Edmonds, Washington. We
            partner with restaurants and small businesses across the Puget Sound region.
          </p>
        </div>
      </div>
      <hr className="hr-tide mt-16" />
    </section>
  );
}

function Story() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono-label">§ Origin</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            How we got here.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 reveal" style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          <p>
            We met working in completely different worlds. One of us was knee-deep in AI tools and modern web architecture.
            The other was in the field — running brand and growth strategy for restaurants and consumer businesses, including
            time inside a major hospitality group.
          </p>
          <p>
            Over coffees in Edmonds, the same pattern kept showing up: incredible local businesses with menus, brands, and
            stories worth shouting about — and websites that looked like they were built in 2014. The tools to build something
            world-class had quietly become accessible to small teams. The expertise to use those tools well had not.
          </p>
          <p style={{ color: "var(--color-text-primary)" }}>
            <strong>So we built Salt &amp; Tide.</strong> A studio that pairs cutting-edge AI-accelerated development with real
            marketing experience — a single team that can take a small business from "we need a better website" to "we have a
            growth engine that runs every day."
          </p>
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function Founders() {
  const team = [
    {
      name: "Yael",
      role: "Co-founder · Web + AI Strategy",
      bio: "Builds the studio's design and engineering practice. Specializes in AI-accelerated development, modern web architecture, and turning ambiguous business goals into shipped product.",
      tags: ["Design Systems", "AI-Assisted Build", "Product Strategy"],
    },
    {
      name: "Chaz",
      role: "Co-founder · Marketing + Brand",
      bio: "Leads brand strategy, growth marketing, and client engagements. Background includes consulting on restaurant operations and brand strategy for hospitality groups across the Pacific Northwest.",
      tags: ["Brand Strategy", "Restaurant Marketing", "Growth"],
    },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="mono-label mb-10">§ Founders</div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}>The two of us.</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ background: "var(--color-hairline)" }}>
          {team.map((p) => (
            <div key={p.name} className="reveal p-8 md:p-12" style={{ background: "var(--color-surface)" }}>
              <Monogram letter={p.name[0]} />
              <h3 className="display mt-7" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>{p.name}</h3>
              <div className="mono-label mt-1">{p.role}</div>
              <p className="mt-5 text-[1rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{p.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="mono-label mt-8" style={{ color: "var(--color-text-muted)" }}>
          † Founder photography in production. Replace monograms with portraits in Q3 2026.
        </p>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function Monogram({ letter }: { letter: string }) {
  return (
    <div
      className="display"
      style={{
        width: 140, height: 140,
        display: "grid", placeItems: "center",
        background: "linear-gradient(135deg, #1B1E25 0%, #15171C 100%)",
        border: "1px solid var(--color-hairline)",
        position: "relative",
      }}
    >
      <span style={{ fontSize: "3.6rem", color: "var(--color-text-primary)" }}>{letter}</span>
      <span style={{ position: "absolute", bottom: 10, left: 10, width: 16, height: 1, background: "var(--color-kelp)" }} />
    </div>
  );
}

function Values() {
  const v = [
    {
      n: "01",
      t: "Honesty over hype",
      d: "We'll tell you when a project doesn't need what you think it does. We'll tell you when our pricing isn't right for you. The trust is the work.",
    },
    {
      n: "02",
      t: "Make beautiful, useful work",
      d: "Beauty without conversion is decoration. Conversion without beauty is a brochure. We refuse to choose between them.",
    },
    {
      n: "03",
      t: "Local roots, global standards",
      d: "We design like a New York studio, deliver like a small business should — accountable, available, and present in the community.",
    },
    {
      n: "04",
      t: "Use the new tools",
      d: "We're not romantic about how things used to be done. AI is part of the toolkit now. We use it where it makes the work better and faster — and we tell you when it doesn't.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mono-label mb-8">§ Values</div>
        <h2 className="display reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}>
          What we believe.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-px" style={{ background: "var(--color-hairline)" }}>
          {v.map((x) => (
            <div key={x.n} className="reveal p-8 md:p-10" style={{ background: "var(--color-ink)" }}>
              <div className="flex items-center gap-5">
                <div className="display" style={{ fontSize: "2.4rem", color: "var(--color-kelp)", lineHeight: 1 }}>{x.n}</div>
                <h3 className="display" style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.6rem)" }}>{x.t}</h3>
              </div>
              <p className="mt-5" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function WhyName() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ Why "Salt &amp; Tide"</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)", lineHeight: 1 }}>
            The name.
          </h2>
        </div>
        <div className="md:col-span-7 reveal space-y-5" style={{ color: "rgba(15,17,21,0.85)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          <p>
            <strong>Salt</strong> is what stays. The grit, the craft, the work that holds up in weather. The thing about a
            small business is that it has to last — through bad seasons, soft economies, and ten kinds of competition. Good
            digital should help with that, not add to the noise.
          </p>
          <p>
            <strong>Tide</strong> is what moves. Markets change. Customers behave differently every quarter. The platforms,
            the algorithms, the channels — all of it shifts. A good marketing partner reads the tide and helps you move with it
            instead of getting pulled under.
          </p>
          <p>
            That's the work: <em>salt that stays, tide that moves.</em> A studio rooted in Pacific Northwest waterfront towns
            we genuinely care about — and pointed at the work small businesses actually need.
          </p>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div className="mono-label">§ Where we are</div>
          <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Edmonds, Washington.
          </h2>
          <p className="reveal mt-5" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: "55ch" }}>
            On the Puget Sound, twenty minutes north of Seattle, surrounded by the kind of small businesses we love working
            with. We're remote-first by default, but if you want to grab coffee at Walnut Street or breakfast at Pancake Haus,
            we're never far.
          </p>
          <div className="mt-7 flex items-center gap-5 mono-label">
            <MapPin size={16} style={{ color: "var(--color-kelp)" }} />
            <span>47.8107° N · 122.3774° W</span>
          </div>
        </div>
        <div className="md:col-span-6 reveal">
          <div className="aspect-[4/3] relative overflow-hidden" style={{ border: "1px solid var(--color-hairline)" }}>
            {/* Stylized brutalist "map" — abstract topography lines, not a real map embed */}
            <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full" style={{ background: "var(--color-surface)" }}>
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0 L0 0 L0 30" fill="none" stroke="rgba(242,238,227,0.06)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="600" height="450" fill="url(#grid)" />
              {/* contour lines */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={i}
                  d={`M0 ${250 + i * 18} Q 150 ${220 + i * 18 - i * 4} 320 ${260 + i * 18} T 600 ${250 + i * 18}`}
                  fill="none"
                  stroke="rgba(242,238,227,0.18)"
                  strokeWidth="1"
                />
              ))}
              {/* shoreline */}
              <path d="M0 230 Q 120 200 270 245 T 600 220 L 600 0 L 0 0 Z" fill="rgba(63,174,124,0.06)" />
              <path d="M0 230 Q 120 200 270 245 T 600 220" fill="none" stroke="#3FAE7C" strokeWidth="1.2" />
              {/* pin */}
              <g transform="translate(300 240)">
                <circle r="10" fill="#3FAE7C" opacity="0.25"/>
                <circle r="4" fill="#3FAE7C"/>
              </g>
              <text x="320" y="244" fill="#F2EEE3" fontSize="11" fontFamily="JetBrains Mono">
                EDMONDS, WA
              </text>
              <text x="20" y="430" fill="#8E8F8A" fontSize="9" fontFamily="JetBrains Mono">
                PUGET SOUND · NOT TO SCALE
              </text>
            </svg>
          </div>
        </div>
      </div>
      <hr className="hr-tide mt-24" />
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0" style={{
        background: "radial-gradient(60% 60% at 50% 30%, rgba(63,174,124,0.16), transparent 70%)",
      }} />
      <div className="container relative text-center">
        <h2 className="display reveal" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: "20ch", marginInline: "auto" }}>
          That's us. <span style={{ color: "var(--color-kelp)" }}>Now let's talk about you.</span>
        </h2>
        <Link href="/contact" className="btn-primary mt-9">
          Start a Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
