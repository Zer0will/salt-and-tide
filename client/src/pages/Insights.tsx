// SALT & TIDE — Pacific Brutalist. Insights / blog index.
import { Link } from "wouter";
import { ArrowUpRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { INSIGHTS } from "@/data/insights";
import { Seo, SITE_ORIGIN, breadcrumbSchema } from "@/components/Seo";

export default function Insights() {
  useReveal();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_ORIGIN}/insights`,
    name: "Salt & Tide Insights",
    blogPost: INSIGHTS.map((i) => ({
      "@type": "BlogPosting",
      headline: i.title,
      url: `${SITE_ORIGIN}/insights/${i.slug}`,
      datePublished: i.publishDate,
      dateModified: i.updatedDate,
      keywords: i.keywords.join(", "),
      author: { "@type": "Organization", name: "Salt & Tide Creative" },
    })),
  };

  return (
    <>
      <Seo
        title="Insights — Web Design & Marketing Notes | Salt & Tide"
        description="Field notes on web design, local SEO, restaurant marketing, and what actually moves the needle for Seattle and Edmonds, WA small businesses."
        path="/insights"
        keywords={["web design blog Seattle", "small business marketing tips", "restaurant SEO", "Edmonds web design blog"]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          blogLd,
        ]}
      />

      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
        <div className="container">
          <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Insights</div>
          <h1 className="display mt-5" style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", lineHeight: 0.92, maxWidth: "18ch" }}>
            Field notes from the studio.
          </h1>
          <p className="mt-7 max-w-2xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.55 }}>
            Practical pieces on web design, local SEO, and what we've learned building digital experiences for restaurants and small businesses across the Puget Sound.
          </p>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-16">
            {INSIGHTS.map((i, idx) => (
              <article key={i.slug} className={`reveal ${idx === 0 ? "md:col-span-12" : "md:col-span-6"} group`}>
                <Link href={`/insights/${i.slug}`} className="block">
                  <div className="relative overflow-hidden" style={{ border: "1px solid var(--color-hairline)" }}>
                    <img
                      src={i.hero}
                      alt={`${i.title} \u2014 Salt & Tide Creative`}
                      width={1600}
                      height={1000}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      style={{ display: "block", width: "100%", aspectRatio: idx === 0 ? "21/9" : "16/10", objectFit: "cover",
                        transition: "transform 700ms var(--ease-out-pacific)" }}
                      className="group-hover:scale-[1.02]"
                    />
                    <div aria-hidden className="absolute inset-0" style={{
                      background: "linear-gradient(to top, rgba(15,17,21,0.7), transparent 60%)",
                    }} />
                    <div className="absolute top-4 left-4 mono-label">{i.category.toUpperCase()}</div>
                    <div className="absolute top-4 right-4 inline-flex items-center justify-center" style={{
                      width: 36, height: 36, border: "1px solid var(--color-hairline)", background: "rgba(15,17,21,0.55)",
                    }}>
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                      <Clock size={12} className="inline-block mr-1.5 align-text-bottom" />
                      {i.readMinutes} MIN READ &middot; {new Date(i.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </div>
                    <h2 className="display mt-3" style={{ fontSize: idx === 0 ? "clamp(1.8rem, 3.4vw, 2.8rem)" : "clamp(1.3rem, 2vw, 1.7rem)" }}>
                      {i.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[0.98rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {i.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
