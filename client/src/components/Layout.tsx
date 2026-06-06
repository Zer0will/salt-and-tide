// SALT & TIDE — Pacific Brutalist. Page layout: cursor + nav + content + footer + scroll-to-top on route change.
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState("—:—:— PT");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [location]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      setProgress((doc.scrollTop / max) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      try {
        setClock(new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Los_Angeles",
        }).format(new Date()) + " PT");
      } catch {
        setClock(new Date().toTimeString().slice(0, 8) + " PT");
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-ink)" }}>
      <Cursor />
      <div className="scroll-progress" style={{ width: `${progress.toFixed(2)}%` }} aria-hidden />
      <TopMarquee />
      <Nav />
      <main data-reveal-root style={{ paddingTop: 0 }}>{children}</main>
      <CornerStamps clock={clock} />
      <Footer />
    </div>
  );
}

function TopMarquee() {
  return (
    <div className="fixed inset-x-0 top-0 z-[55] flex h-7 items-center overflow-hidden border-b" style={{ background: "var(--color-ink)", borderColor: "var(--color-hairline)" }} aria-hidden="true">
      <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="inline-flex">
            <span className="px-7" style={{ color: "var(--color-kelp)" }}>● AVAILABLE FOR PROJECTS — JUNE 2026</span>
            <span className="px-7">Edmonds, WA · 47.8107°N · 122.3774°W</span>
            <span className="px-7">hello@salttidecreative.com</span>
            <span className="px-7">Booking Q3 / Q4 2026</span>
            <span className="px-7">Pacific Standard Time</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CornerStamps({ clock }: { clock: string }) {
  return (
    <>
      <div className="corner-stamp left-stamp">
        47.8107°N<br />
        122.3774°W<br />
        <span className="inline-flex items-center gap-2" style={{ color: "var(--color-kelp)" }}><span className="live-dot" /> EDMONDS, WA</span>
      </div>
      <div className="corner-stamp right-stamp text-right">
        {clock}<br />
        <span>Salt &amp; Tide · 2026</span><br />
        <span>§ Plate 01 · I / VIII</span>
      </div>
    </>
  );
}
