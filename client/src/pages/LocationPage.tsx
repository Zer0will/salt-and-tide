// SALT & TIDE — Pacific Brutalist. Location landing pages.
// Reusable template for city-targeted SEO landings: Seattle, Edmonds, Lynnwood.
import { Link } from "wouter";
import { ArrowRight, MapPin, Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Seo, SITE_ORIGIN, ORG_NAME, breadcrumbSchema, localBusinessSchema } from "@/components/Seo";
import { PROJECTS } from "@/data/portfolio";

export type LocationPageConfig = {
  city: string;             // "Seattle"
  state: string;            // "WA"
  slug: string;             // "/seattle-web-design"
  headline: string;
  intro: string;
  reasons: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

export default function LocationPage({ config }: { config: LocationPageConfig }) {
  useReveal();
  const { city, state, slug, headline, intro, reasons, faq } = config;

  const seoTitle = `Web Design ${city} ${state} | Salt & Tide Creative`;
  const seoDescription = `${city}-area web design and digital marketing for restaurants and small businesses. Custom websites that convert, built by Salt & Tide Creative \u2014 ${city}, ${state}.`;
  const localPageLd = localBusinessSchema({ areaServed: { "@type": "City", name: `${city}, ${state}` } });
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const localProjects = PROJECTS.slice(0, 4);

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={slug}
        keywords={[
          `web design ${city}`,
          `web designer ${city} ${state}`,
          `${city} small business website`,
          `${city} restaurant web design`,
          `digital marketing ${city}`,
        ]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: `${city} Web Design`, path: slug },
          ]),
          localPageLd,
          faqLd,
        ]}
      />

      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}>
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>
              <MapPin size={14} className="inline-block mr-1.5 align-text-bottom" />
              {city.toUpperCase()}, {state}
            </div>
            <h1 className="display mt-5" style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.5rem)", lineHeight: 0.94 }}>
              {headline.split("|")[0]}
              {headline.includes("|") && <span style={{ color: "var(--color-kelp)" }}>{headline.split("|")[1]}</span>}
            </h1>
          </div>
          <div className="md:col-span-4 self-end">
            <p className="display-thin" style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              {intro}
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Free Strategy Call <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </div>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mono-label mb-10">§ Why {city} businesses choose Salt &amp; Tide</div>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--color-hairline)" }}>
            {reasons.map((r, i) => (
              <div key={r.t} className="reveal p-8 md:p-10" style={{ background: "var(--color-ink)" }}>
                <div className="mono-label" style={{ color: "var(--color-kelp)" }}>{String(i + 1).padStart(2, "0")}</div>
                <h2 className="display mt-3" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>{r.t}</h2>
                <p className="mt-4" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="hr-tide mt-24" />
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="mono-label mb-8">§ Recent {city}-area work</div>
          <div className="grid md:grid-cols-2 gap-8">
            {localProjects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="block group reveal">
                <div className="relative overflow-hidden" style={{ border: "1px solid var(--color-hairline)" }}>
                  <img
                    src={p.desktop}
                    alt={`${p.client} \u2014 ${p.category} website by ${ORG_NAME} (${city}, ${state})`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    style={{ display: "block", width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "top",
                      transition: "transform 700ms var(--ease-out-pacific)" }}
                    className="group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="display mt-5" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>{p.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>{p.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="mono-label">§ FAQ</div>
            <h2 className="display mt-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
              Frequently asked.
            </h2>
            <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)" }}>
              Have a question we didn't answer? <Link href="/contact" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Reach out.</Link>
            </p>
          </div>
          <div className="md:col-span-7">
            {faq.map((f, i) => (
              <details key={i} className="reveal border-b py-6 group" style={{ borderColor: "var(--color-hairline)" }}>
                <summary className="cursor-pointer flex items-center justify-between gap-6">
                  <span className="display" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)" }}>{f.q}</span>
                  <span className="mono-label">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
            <ul className="mt-12 space-y-2.5">
              {[
                `Free strategy call for ${city} businesses`,
                "Same Pacific-Time hours, same week response",
                "Local references and live case studies",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Check size={16} className="mt-1 flex-shrink-0" style={{ color: "var(--color-kelp)" }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: "var(--color-fog)", color: "var(--color-ink)" }}>
        <div className="container text-center">
          <div className="mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>§ Ready when you are</div>
          <h2 className="display mt-6" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", maxWidth: "20ch", marginInline: "auto" }}>
            Let's build something <span style={{ color: "var(--color-kelp)" }}>your {city} customers</span> can't ignore.
          </h2>
          <Link href="/contact" className="inline-flex mt-9" style={{
            padding: "1.05rem 1.5rem",
            background: "var(--color-ink)",
            color: "var(--color-fog)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
          }}>
            Start a Project <ArrowRight size={18} className="ml-2" />
          </Link>
          <div className="mt-6 mono-label" style={{ color: "rgba(15,17,21,0.55)" }}>
            <a href={`${SITE_ORIGIN}${slug}`} className="ul-grow">{`salttidecreative.com${slug}`}</a>
          </div>
        </div>
      </section>
    </>
  );
}
