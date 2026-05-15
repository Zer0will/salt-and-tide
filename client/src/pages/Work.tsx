// SALT & TIDE — Pacific Brutalist. Work index — asymmetric mosaic with filter bar.
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/portfolio";
import { Seo, SITE_ORIGIN, breadcrumbSchema, ORG_NAME } from "@/components/Seo";

const FILTERS = [
  { k: "all",        l: "All Work" },
  { k: "restaurant", l: "Restaurants" },
  { k: "service",    l: "Service Businesses" },
  { k: "web",        l: "Web Design" },
  { k: "strategy",   l: "Strategy" },
];

export default function Work() {
  useReveal();
  const [active, setActive] = useState<string>("all");
  const list = useMemo(() => active === "all" ? PROJECTS : PROJECTS.filter(p => p.filters.includes(active)), [active]);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Salt & Tide Creative — Selected Web Design & Marketing Work",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_ORIGIN}/work/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <Seo
        title="Web Design Portfolio | Salt & Tide — Seattle Agency"
        description="See our web design and digital marketing work for Seattle and Edmonds, WA businesses. Real restaurant, service, and retail case studies from Salt & Tide Creative."
        path="/work"
        keywords={[
          "web design portfolio Seattle",
          "Edmonds web design portfolio",
          "restaurant website design Seattle",
          "small business web design case studies",
        ]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Selected Work", path: "/work" },
          ]),
          itemListLd,
        ]}
      />
      {/* HEAD */}
      <section className="relative" style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(80px, 10vh, 130px)" }}>
        <div aria-hidden className="absolute inset-0" style={{
          background: "radial-gradient(50% 50% at 75% 30%, rgba(63,174,124,0.10), transparent 70%)",
        }} />
        <div className="container relative z-10">
          <div className="flex items-baseline justify-between mb-6">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Selected Work</div>
            <div className="mono-label hidden md:block">{PROJECTS.length} PROJECTS · 2026</div>
          </div>
          <h1 className="display" style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)", lineHeight: 0.92, maxWidth: "16ch" }}>
            Work that <span style={{ color: "var(--color-kelp)" }}>earns its keep.</span>
          </h1>
          <p className="mt-7 max-w-2xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.55 }}>
            Restaurants, service businesses, and small operators across the greater Seattle area. Every project below is a real
            client engagement — link out to the live work or read the case study.
          </p>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      {/* FILTERS */}
      <section className="sticky top-[64px] z-30 backdrop-blur" style={{ background: "rgba(15,17,21,0.85)", borderBottom: "1px solid var(--color-hairline)" }}>
        <div className="container py-4 flex flex-wrap gap-2 items-center">
          <span className="mono-label mr-2 hidden sm:inline">Filter:</span>
          {FILTERS.map((f) => (
            <button key={f.k} className={`filter-pill ${active === f.k ? "is-active" : ""}`} onClick={() => setActive(f.k)}>
              {f.l}
            </button>
          ))}
        </div>
      </section>

      {/* GRID — asymmetric mosaic: alternating large/small blocks */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-20 md:gap-y-28">
            {list.map((p, i) => {
              const big = i % 3 === 0;
              return (
                <article
                  key={p.slug}
                  className={`reveal ${big ? "md:col-span-12" : "md:col-span-6"} group`}
                >
                  <Link href={`/work/${p.slug}`} className="block">
                    <div className="relative overflow-hidden" style={{
                      border: "1px solid var(--color-hairline)",
                      background: "var(--color-surface)",
                    }}>
                      <img
                        src={p.desktop}
                        alt={`${p.client} — ${p.category.toLowerCase()} website design by ${ORG_NAME} in ${p.location}`}
                        title={p.title}
                        width={1600}
                        height={1000}
                        loading={i < 4 ? "eager" : "lazy"}
                        decoding="async"
                        style={{
                          display: "block",
                          width: "100%",
                          aspectRatio: big ? "16/9" : "4/3",
                          objectFit: "cover",
                          objectPosition: "top",
                          transition: "transform 700ms var(--ease-out-pacific)",
                        }}
                        className="group-hover:scale-[1.025]"
                      />
                      <div aria-hidden className="absolute inset-0" style={{
                        background: "linear-gradient(to top, rgba(15,17,21,0.85), transparent 50%)",
                        opacity: 0.6,
                      }} />
                      <div className="absolute top-4 left-4 mono-label" style={{ color: "var(--color-text-primary)" }}>
                        {String(i+1).padStart(2,"0")} / {p.category.toUpperCase()}
                      </div>
                      <div className="absolute top-4 right-4 inline-flex items-center justify-center" style={{
                        width: 38, height: 38, border: "1px solid var(--color-hairline)", background: "rgba(15,17,21,0.55)",
                      }}>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    <div className={`mt-6 grid ${big ? "md:grid-cols-12" : ""} gap-6`}>
                      <div className={big ? "md:col-span-7" : ""}>
                        <h3 className="display" style={{ fontSize: big ? "clamp(1.8rem, 3.4vw, 2.8rem)" : "clamp(1.3rem, 2vw, 1.7rem)" }}>
                          {p.title}
                        </h3>
                      </div>
                      <div className={big ? "md:col-span-5" : ""}>
                        <p className="text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                          {p.blurb}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.services.slice(0, 3).map((s) => <span key={s} className="chip">{s}</span>)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {list.length === 0 && (
            <div className="py-20 text-center" style={{ color: "var(--color-text-secondary)" }}>
              No projects match that filter (yet).
            </div>
          )}
        </div>
        <hr className="hr-tide mt-24" />
      </section>

      <section className="py-24 md:py-32">
        <div className="container text-center">
          <div className="mono-label">END OF WORK</div>
          <h2 className="display mt-5" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
            See yourself on this page next?
          </h2>
          <Link href="/contact" className="btn-primary mt-8">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
