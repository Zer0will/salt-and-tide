// SALT & TIDE — Pacific Brutalist. Footer with marquee tape, NAP block, and column links.
// SEO note: the <address> NAP block must remain identical to your Google Business Profile and any
// citation directories (Yelp, Bing Places, etc.). Inconsistency hurts local rankings.
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative" style={{ background: "var(--color-ink)" }}>
      {/* Marquee tape */}
      <div className="overflow-hidden border-y" style={{ borderColor: "var(--color-hairline)" }}>
        <div className="marquee-track display-thin py-5" style={{ color: "var(--color-text-secondary)" }}>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8" style={{ fontSize: "1.5rem" }}>
              <span>SALT &amp; TIDE CREATIVE</span>
              <KelpDot />
              <span>BOOKING PROJECTS — SUMMER 2026</span>
              <KelpDot />
              <span>EDMONDS · SEATTLE · GREATER PUGET</span>
              <KelpDot />
              <span>WEB DESIGN + DIGITAL MARKETING</span>
              <KelpDot />
            </span>
          ))}
        </div>
      </div>

      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono-label">EST. 2026 · 47.8107°N 122.3774°W</div>
            <h3 className="display mt-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Building digital
              <br />
              <span style={{ color: "var(--color-kelp)" }}>that earns its keep.</span>
            </h3>
            <Link href="/lead-leak-audit" className="btn-primary mt-7">
              Free Lead Check →
            </Link>
          </div>

          <FootCol title="Studio" links={[
            { href: "/work", label: "Selected Work" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/insights", label: "Insights" },
            { href: "/contact", label: "Contact" },
          ]}/>
          <FootCol title="Capabilities" links={[
            { href: "/services#web", label: "Web Design + Build" },
            { href: "/services#marketing", label: "Digital Marketing" },
            { href: "/local-growth-engine", label: "Lead System" },
            { href: "/lead-leak-audit", label: "Lead Leak Snapshot" },
            { href: "/services#full", label: "Full-Service Growth" },
            { href: "/services#addons", label: "Care &amp; Retainers" },
          ]}/>
          <FootCol title="Service Areas" links={[
            { href: "/seattle-web-design", label: "Seattle, WA" },
            { href: "/edmonds-web-design", label: "Edmonds, WA" },
            { href: "/lynnwood-web-design", label: "Lynnwood, WA" },
          ]}/>
        </div>

        <hr className="hr-tide my-12" />

        {/* NAP — Name, Address, Phone (must match GBP exactly) */}
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mono-label">Reach Us · NAP</div>
            <address className="mt-4 not-italic text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              <div className="display" style={{ color: "var(--color-text-primary)", fontSize: "1.05rem" }}>Salt &amp; Tide Creative LLC</div>
              <div>Edmonds, WA 98020 · United States</div>
              <div className="mt-2">
                <a className="ul-grow" href="mailto:hello@salttidecreative.com">hello@salttidecreative.com</a>
                <span className="mx-2 opacity-40">·</span>
                <a className="ul-grow" href="tel:+12536608555">+1 (253) 660-8555</a>
              </div>
              <div className="mt-2 mono-label" style={{ color: "var(--color-text-muted)" }}>
                MON–FRI · 9AM–6PM PT · SERVING SEATTLE &amp; PUGET SOUND
              </div>
            </address>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="mono-label">Find Us</div>
            <div className="mt-4 text-sm flex gap-5 md:justify-end" style={{ color: "var(--color-text-secondary)" }}>
              <a className="ul-grow" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="ul-grow" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a className="ul-grow" href="https://g.co/" target="_blank" rel="noreferrer">Google</a>
            </div>
          </div>
        </div>

        <hr className="hr-tide my-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
          <div>© {new Date().getFullYear()} SALT &amp; TIDE CREATIVE LLC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-5">
            <Link className="ul-grow" href="/privacy-policy">Privacy</Link>
            <Link className="ul-grow" href="/terms-of-service">Terms</Link>
            <Link className="ul-grow" href="/cookie-policy">Cookies</Link>
            <Link className="ul-grow" href="/accessibility">Accessibility</Link>
            <a className="ul-grow" href="/sitemap.xml">Sitemap</a>
            <span title="Made on the Edmonds waterfront">MADE IN EDMONDS, WA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="md:col-span-2">
      <div className="mono-label">{title}</div>
      <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="ul-grow" dangerouslySetInnerHTML={{ __html: l.label }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function KelpDot() {
  return <span style={{ width: 8, height: 8, background: "var(--color-kelp)", display: "inline-block" }} />;
}
