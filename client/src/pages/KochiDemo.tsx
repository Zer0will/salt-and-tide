import { ExternalLink, QrCode, Smartphone, Utensils } from "lucide-react";
import { Seo, SITE_ORIGIN, breadcrumbSchema } from "@/components/Seo";

const KOCHI_APP_URL = "https://kochi-dine-in-app.vercel.app/table/7";

export default function KochiDemo() {
  return (
    <>
      <Seo
        title="Kochi Po-cha Ordering Demo | Salt & Tide Creative"
        description="A preview of a mobile QR table-ordering experience for Kochi Po-cha, prepared by Salt & Tide Creative."
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
              "A mobile QR table-ordering preview prepared by Salt & Tide Creative for Kochi Po-cha, demonstrating menu browsing, guest identity, shared table carts, and check closeout.",
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
            <div className="mono-label mb-5">Kochi Po-cha preview · restaurant QR ordering</div>
            <h1 className="display text-[clamp(3.1rem,9vw,8.25rem)] max-w-5xl">
              Kochi Po-cha <span className="kelp">ordering demo.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A mobile-first preview of how Kochi Po-cha guests could scan a table QR code, browse the menu, add items by name, and review a shared table check.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={KOCHI_APP_URL} target="_blank" rel="noreferrer">
                Open full-screen app <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 border p-5 md:p-6" style={{ borderColor: "var(--color-hairline)", background: "rgba(21,23,28,.72)" }}>
            <div className="mono-label mb-4">What this preview proves</div>
            <div className="grid gap-4">
              {[
                [<QrCode size={20} />, "Table QR flow", "Guests open the ordering experience directly from a table link."],
                [<Smartphone size={20} />, "Phone-first menu", "The menu is designed for quick browsing, item details, and add-ons on a phone."],
                [<Utensils size={20} />, "Shared check preview", "Guests can add their name, order under their own check identity, and review the table cart."],
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
          <div className="mb-5">
            <div>
              <div className="mono-label mb-2">Live prototype</div>
              <h2 className="display-thin text-3xl md:text-5xl">Scan-to-order experience</h2>
            </div>
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
            Note: this is a preview environment for reviewing the guest ordering experience. POS, payment, kitchen printer, and final restaurant operations would be connected only after approval and implementation planning.
          </p>
        </div>
      </section>
    </>
  );
}
