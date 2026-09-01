import { ArrowRight, ExternalLink, QrCode, Smartphone, Utensils } from "lucide-react";
import { Seo, SITE_ORIGIN, breadcrumbSchema } from "@/components/Seo";

const KOCHI_APP_URL = "https://kochi-dine-in-app.vercel.app/table/7";

export default function KochiDemo() {
  return (
    <>
      <Seo
        title="Kochi Po-cha Ordering Demo | Salt & Tide Creative"
        description="A Salt & Tide Creative owned preview of Kochi Po-cha's QR table-ordering experience: mobile menu, guest names, shared cart, and closeout flow."
        path="/kochi"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kochi Po-cha Ordering Demo", path: "/kochi" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Kochi Po-cha QR Table Ordering Demo",
            url: `${SITE_ORIGIN}/kochi`,
            description:
              "A restaurant-owned QR table-ordering preview built by Salt & Tide Creative for Kochi Po-cha, demonstrating mobile menu browsing, guest identity, shared table carts, and check closeout.",
            creator: { "@id": `${SITE_ORIGIN}/#organization`, name: "Salt & Tide Creative" },
          },
        ]}
      />

      <section className="relative overflow-hidden pt-36 md:pt-44 pb-14 border-b" style={{ borderColor: "var(--color-hairline)" }}>
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute -top-32 right-[-10%] h-[460px] w-[460px] rounded-full blur-3xl" style={{ background: "rgba(63,174,124,.16)" }} />
          <div className="absolute bottom-0 left-[-10%] h-[380px] w-[380px] rounded-full blur-3xl" style={{ background: "rgba(237,232,222,.08)" }} />
        </div>

        <div className="container relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mono-label mb-5">Client preview · restaurant QR ordering</div>
            <h1 className="display text-[clamp(3.1rem,9vw,8.25rem)] max-w-5xl">
              Kochi Po-cha <span className="kelp">ordering demo.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A Salt & Tide-owned share link for the Kochi Po-cha dine-in QR prototype. Open it from here, send this URL to the owner, and keep the presentation under your own brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#demo-frame">
                View embedded demo <ArrowRight size={18} />
              </a>
              <a className="pill" href={KOCHI_APP_URL} target="_blank" rel="noreferrer">
                Open full-screen app <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 border p-5 md:p-6" style={{ borderColor: "var(--color-hairline)", background: "rgba(21,23,28,.72)" }}>
            <div className="mono-label mb-4">What this preview proves</div>
            <div className="grid gap-4">
              {[
                [<QrCode size={20} />, "Table QR route", "Each table can open its own ordering session."],
                [<Smartphone size={20} />, "Phone-first menu", "Built around hungry diners scanning at the table."],
                [<Utensils size={20} />, "Shared check flow", "Guests can name themselves, order as themselves, and split context by person."],
              ].map(([icon, title, body]) => (
                <div key={String(title)} className="flex gap-4 border-t pt-4" style={{ borderColor: "var(--color-hairline)" }}>
                  <div className="mt-1 kelp">{icon}</div>
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="demo-frame" className="py-12 md:py-16">
        <div className="container">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mono-label mb-2">Live prototype</div>
              <h2 className="display-thin text-3xl md:text-5xl">Scan-to-order experience</h2>
            </div>
            <a className="ul-grow text-sm" style={{ color: "var(--color-kelp)" }} href={KOCHI_APP_URL} target="_blank" rel="noreferrer">
              Open without frame ↗
            </a>
          </div>

          <div className="kochi-demo-stage border" style={{ borderColor: "var(--color-hairline)", background: "#07080b" }}>
            <iframe
              title="Kochi Po-cha QR table ordering demo"
              src={KOCHI_APP_URL}
              loading="lazy"
              className="kochi-demo-frame"
              allow="clipboard-write"
            />
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Note: this is a preview/demo flow for presenting the ordering experience. Live POS, payments, kitchen printer, and final restaurant operational integrations should stay approval-gated before production use.
          </p>
        </div>
      </section>
    </>
  );
}
