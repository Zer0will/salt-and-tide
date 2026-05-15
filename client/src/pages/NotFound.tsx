// SALT & TIDE — Pacific Brutalist. 404.
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Salt & Tide" description="This page has drifted off the chart. Head back to Salt & Tide Creative — web design and digital marketing for Seattle and Edmonds, WA." path="/404" noindex />
    <section className="min-h-[100vh] flex items-center" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Adrift / 404</div>
        <h1 className="display mt-5" style={{ fontSize: "clamp(3rem, 12vw, 10rem)", lineHeight: 0.92 }}>
          Off the chart.
        </h1>
        <p className="mt-7 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", lineHeight: 1.55 }}>
          The page you're looking for doesn't exist — or it's drifted somewhere we can't reach. Let's get you back to dry land.
        </p>
        <Link href="/" className="btn-primary mt-9">
          <ArrowLeft size={18} /> Back to home
        </Link>
      </div>
    </section>
    </>
  );
}
