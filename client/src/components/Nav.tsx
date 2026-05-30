// SALT & TIDE — Pacific Brutalist. Top nav: corner-tag agency mark + 4 links + pill CTA. Inverts on scroll.
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-7 z-50 transition-[backdrop-filter,background-color,height] duration-300"
        style={{
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          background: scrolled ? "rgba(15,17,21,0.72)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--color-hairline)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: scrolled ? 64 : 84, transition: "height 300ms var(--ease-out-pacific)" }}>
          {/* Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logomark />
            <div className="leading-tight">
              <div className="display text-[1.05rem] tracking-tight">Salt &amp; Tide</div>
              <div className="mono-label" style={{ fontSize: "0.62rem", letterSpacing: "0.22em" }}>EDMONDS · WA</div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => {
              const active = location === l.href || (l.href === "/work" && location.startsWith("/work"));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-wide ul-grow"
                  style={{ color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}
                >
                  <span className="mono-label" style={{ color: "inherit", fontSize: "0.78rem" }}>
                    {String(LINKS.indexOf(l) + 1).padStart(2, "0")} · {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-flex pill">
              Start a Project →
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              style={{ color: "var(--color-text-primary)" }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          background: "var(--color-ink)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 320ms var(--ease-out-pacific)",
        }}
      >
        <div className="container flex flex-col gap-8" style={{ paddingTop: 110 }}>
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="display text-[2.4rem] tracking-tight"
              style={{
                color: "var(--color-text-primary)",
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transition: `opacity 380ms ${100 + i * 60}ms var(--ease-out-pacific), transform 380ms ${100 + i * 60}ms var(--ease-out-pacific)`,
              }}
            >
              <span className="mono-label mr-3" style={{ fontSize: "0.7rem" }}>{String(i+1).padStart(2,"0")}</span>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="pill self-start mt-4" style={{ padding: "0.8rem 1.4rem", fontSize: "1rem" }}>
            Start a Project →
          </Link>
          <div className="mono-label mt-12" style={{ fontSize: "0.7rem" }}>47.8107° N · 122.3774° W</div>
        </div>
      </div>
    </>
  );
}

function Logomark() {
  // Brutalist mark: square with diagonal "S" stroke and the kelp horizon line
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="33" height="33" stroke="currentColor" strokeOpacity="0.25" />
      <path d="M7 22 Q 17 8 27 22" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <line x1="4" y1="26" x2="30" y2="26" stroke="#3FAE7C" strokeWidth="1.6" />
    </svg>
  );
}
