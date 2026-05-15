// SALT & TIDE — Pacific Brutalist. Page layout: cursor + nav + content + footer + scroll-to-top on route change.
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [location]);
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-ink)" }}>
      <Cursor />
      <Nav />
      <main data-reveal-root style={{ paddingTop: 0 }}>{children}</main>
      <Footer />
    </div>
  );
}
