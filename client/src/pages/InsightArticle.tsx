// SALT & TIDE — Pacific Brutalist. Insight article (single).
import type { ReactElement } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { INSIGHTS } from "@/data/insights";
import NotFound from "./NotFound";
import { Seo, SITE_ORIGIN, ORG_NAME, breadcrumbSchema } from "@/components/Seo";

export default function InsightArticle() {
  useReveal();
  const [, params] = useRoute<{ slug: string }>("/insights/:slug");
  const idx = INSIGHTS.findIndex((i) => i.slug === params?.slug);
  if (idx < 0) return <NotFound />;
  const post = INSIGHTS[idx];
  const next = INSIGHTS[(idx + 1) % INSIGHTS.length];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.hero,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: { "@type": "Organization", name: ORG_NAME, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/og/og-default.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}/insights/${post.slug}` },
    keywords: post.keywords.join(", "),
    inLanguage: "en-US",
  };

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/insights/${post.slug}`}
        image={post.hero}
        type="article"
        keywords={post.keywords}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
          articleLd,
        ]}
      />

      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
        <div className="container max-w-3xl">
          <Link href="/insights" className="ul-grow inline-flex items-center gap-2 mono-label" style={{ color: "var(--color-text-secondary)" }}>
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <div className="mt-8 mono-label" style={{ color: "var(--color-kelp)" }}>{post.category.toUpperCase()}</div>
          <h1 className="display mt-4" style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)", lineHeight: 1.02 }}>{post.title}</h1>
          <div className="mt-6 mono-label" style={{ color: "var(--color-text-muted)" }}>
            <Clock size={12} className="inline-block mr-1.5 align-text-bottom" />
            {post.readMinutes} MIN READ &middot; {new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            {post.updatedDate !== post.publishDate && <> &middot; UPDATED {new Date(post.updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</>}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container max-w-4xl reveal">
          <div style={{ border: "1px solid var(--color-hairline)" }}>
            <img
              src={post.hero}
              alt={`${post.title} \u2014 hero image`}
              width={1600}
              height={900}
              decoding="async"
              style={{ display: "block", width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container max-w-2xl">
          <ArticleBody markdown={post.body} />
        </div>
        <hr className="hr-tide mt-20" />
      </section>

      <section className="py-20 md:py-24">
        <div className="container max-w-3xl grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="mono-label">Up next</div>
            <Link href={`/insights/${next.slug}`} className="block mt-3 group">
              <div className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.05 }}>
                {next.title}
              </div>
              <div className="mono-label mt-2" style={{ color: "var(--color-text-secondary)" }}>{next.category} &middot; {next.readMinutes} min</div>
            </Link>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="display-thin" style={{ fontSize: "1.3rem", maxWidth: 380, marginLeft: "auto" }}>
              Want this kind of thinking applied to your business?
            </div>
            <Link href="/contact" className="btn-primary mt-5">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Markdown-lite renderer ----------
   Supports:  ## headings, **bold**, [text](url) links, paragraphs, blank lines.
   Keeps the article body source readable + performant without a heavy MD lib.
*/
function ArticleBody({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: ReactElement[] = [];
  let buffer: string[] = [];
  const flush = () => {
    if (!buffer.length) return;
    const text = buffer.join(" ").trim();
    if (text) blocks.push(<P key={blocks.length} text={text} />);
    buffer = [];
  };
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) {
      flush();
      return;
    }
    if (line.startsWith("## ")) {
      flush();
      blocks.push(
        <h2 key={`h-${i}`} className="display mt-14 mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", lineHeight: 1.1 }}>
          {line.replace(/^##\s+/, "")}
        </h2>
      );
      return;
    }
    buffer.push(line);
  });
  flush();
  return <div>{blocks}</div>;
}

function P({ text }: { text: string }) {
  // Inline: **bold**, [text](href). Internal hrefs (start with /) become <Link>.
  const tokens: (string | ReactElement)[] = [];
  let rest = text;
  let key = 0;
  const inlineRe = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/;
  while (true) {
    const m = inlineRe.exec(rest);
    if (!m) {
      tokens.push(rest);
      break;
    }
    if (m.index > 0) tokens.push(rest.slice(0, m.index));
    if (m[1]) {
      tokens.push(<strong key={key++} style={{ color: "var(--color-text-primary)" }}>{m[2]}</strong>);
    } else if (m[3]) {
      const label = m[4]; const href = m[5];
      const isInternal = href.startsWith("/");
      tokens.push(
        isInternal
          ? <Link key={key++} href={href} className="ul-grow" style={{ color: "var(--color-kelp)" }}>{label}</Link>
          : <a key={key++} href={href} target="_blank" rel="noreferrer" className="ul-grow" style={{ color: "var(--color-kelp)" }}>{label}</a>
      );
    }
    rest = rest.slice(m.index + m[0].length);
  }
  return (
    <p className="reveal" style={{ marginTop: "1.4em", color: "var(--color-text-secondary)", fontSize: "1.07rem", lineHeight: 1.75 }}>
      {tokens}
    </p>
  );
}
