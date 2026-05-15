// SALT & TIDE — Pacific Brutalist. Case study route — uses the slug param to render a project.
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/portfolio";
import NotFound from "./NotFound";

export default function CaseStudy() {
  useReveal();
  const [, params] = useRoute<{ slug: string }>("/work/:slug");
  const slug = params?.slug;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx < 0) return <NotFound />;
  const p = PROJECTS[idx];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      {/* HEAD */}
      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
        <div className="container">
          <Link href="/work" className="ul-grow inline-flex items-center gap-2 mono-label" style={{ color: "var(--color-text-secondary)" }}>
            <ArrowLeft size={14} /> Back to Work
          </Link>
          <div className="mt-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>{p.category} · {p.location} · {p.year}</div>
              <h1 className="display mt-5" style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)", lineHeight: 0.95 }}>
                {p.title}
              </h1>
              <p className="mt-6 max-w-2xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.55 }}>
                {p.blurb}
              </p>
            </div>
            <aside className="md:col-span-4">
              <dl className="grid grid-cols-2 gap-y-5 gap-x-6 mt-2">
                <div><dt className="mono-label">Client</dt><dd className="mt-1.5 display" style={{ fontSize: "1rem" }}>{p.client}</dd></div>
                <div><dt className="mono-label">Year</dt><dd className="mt-1.5 display" style={{ fontSize: "1rem" }}>{p.year}</dd></div>
                <div className="col-span-2"><dt className="mono-label">Services</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">{p.services.map((s) => <span key={s} className="chip">{s}</span>)}</dd>
                </div>
                {p.liveUrl && (
                  <div className="col-span-2 pt-2">
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost inline-flex">
                      Visit Live Site <ExternalLink size={15} />
                    </a>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-16">
        <div className="container reveal">
          <div style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
            <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
              <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
              <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#3a3d44" }} />
              <span className="ml-3 text-[10px]" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{p.client}</span>
            </div>
            <img src={p.desktop} alt={p.title} style={{ display: "block", width: "100%" }} />
          </div>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      {/* CHALLENGE / APPROACH / RESULT */}
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-12 gap-12">
          <Block n="01" t="The Challenge" body={p.challenge} />
          <Block n="02" t="Our Approach"  body={p.approach} />
          <Block n="03" t="The Result"    body={p.result} accent />
        </div>
      </section>

      {/* MOBILE FRAME + RESULT CALLOUT */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-surface)" }}>
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="mono-label">Mobile Experience</div>
            <h3 className="display mt-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
              Designed mobile-first.
            </h3>
            <p className="mt-5" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              Most of our clients' visitors arrive on a phone — usually distracted, usually in a hurry. We design for that
              reality first, desktop second.
            </p>
            <div className="mt-7 display-thin" style={{ fontSize: "1.4rem", color: "var(--color-kelp)" }}>
              {p.resultCallout}
            </div>
          </div>
          <div className="md:col-span-7 reveal flex justify-center">
            <PhoneFrame src={p.mobile} alt={`${p.client} mobile`} />
          </div>
        </div>
      </section>

      {/* FULL PAGE PREVIEW */}
      <section className="py-16 md:py-24">
        <div className="container reveal">
          <div className="mono-label">Full Page</div>
          <h3 className="display mt-3 mb-8" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>
            The complete experience.
          </h3>
          <div style={{ border: "1px solid var(--color-hairline)", maxHeight: 720, overflow: "hidden", position: "relative" }}>
            <img src={p.full} alt={`${p.title} full page`} style={{ display: "block", width: "100%" }} />
            <div aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 200,
              background: "linear-gradient(to bottom, transparent, var(--color-ink))" }} />
          </div>
          {p.liveUrl && (
            <div className="mt-8 text-center">
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                Open Live Site <ExternalLink size={15} />
              </a>
            </div>
          )}
        </div>
        <hr className="hr-tide mt-24" />
      </section>

      {/* NEXT + CTA */}
      <section className="py-20 md:py-24">
        <div className="container grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="mono-label">Next Project</div>
            <Link href={`/work/${next.slug}`} className="block mt-3 group">
              <div className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05 }}>
                {next.title} <ArrowUpRight className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
              <div className="mono-label mt-2" style={{ color: "var(--color-text-secondary)" }}>{next.category} · {next.location}</div>
            </Link>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="display-thin" style={{ fontSize: "1.4rem", maxWidth: 380, marginLeft: "auto" }}>
              Want a result like this?
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

function Block({ n, t, body, accent }: { n: string; t: string; body: string; accent?: boolean }) {
  return (
    <div className="md:col-span-4 reveal">
      <div className="mono-label" style={{ color: accent ? "var(--color-kelp)" : "var(--color-text-secondary)" }}>{n} / {t}</div>
      <p className="mt-5 display-thin" style={{ fontSize: "1.4rem", lineHeight: 1.4, color: accent ? "var(--color-kelp)" : "var(--color-text-primary)" }}>
        {body}
      </p>
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative" style={{ width: 300 }}>
      <div style={{
        border: "10px solid #0F1115",
        borderRadius: 36,
        background: "#15171C",
        padding: 6,
        boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
      }}>
        <img src={src} alt={alt} style={{ display: "block", width: "100%", borderRadius: 26 }} />
      </div>
    </div>
  );
}
