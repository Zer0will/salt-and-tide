// SALT & TIDE — Pacific Brutalist. Low-friction Lead Leak Audit intake.
// Conversion goal: replace the long contact form as the primary CTA for Local Growth Engine.
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Mail, Phone, Search, TimerReset } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/useReveal";
import { Seo, SITE_ORIGIN, ORG_NAME, ORG_EMAIL, ORG_PHONE, breadcrumbSchema } from "@/components/Seo";

const AUDIT_POINTS = [
  "What happens when your main number goes unanswered",
  "Whether your website gives leads a fast next step",
  "Where forms, calls, and booking requests can stall out",
  "The first automation we would install if it were our business",
];

export default function LeadLeakAudit() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const required = ["website_or_listing", "business_phone", "email"];

    for (const k of required) {
      if (!String(data.get(k) ?? "").trim()) {
        toast.error("Website/listing, business phone, and email are required.");
        setSubmitting(false);
        return;
      }
    }

    const endpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;

    try {
      if (!endpoint) {
        toast.error(`Audit form not configured yet. Email ${ORG_EMAIL} directly.`);
        setSubmitting(false);
        return;
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as any)?.error ?? "Submission failed");
      }

      setSubmitted(true);
      toast.success("Audit request received. We'll send your snapshot within 24 hours.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(`Something went wrong. Email ${ORG_EMAIL} directly.`);
    } finally {
      setSubmitting(false);
    }
  }

  const contactPointLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Free Lead Leak Snapshot | ${ORG_NAME}`,
    url: `${SITE_ORIGIN}/lead-leak-audit`,
    description:
      "A low-friction intake for a free lead-response audit covering missed calls, website forms, booking friction, and follow-up gaps.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: ORG_NAME,
      email: ORG_EMAIL,
      telephone: ORG_PHONE,
    },
  };

  return (
    <>
      <Seo
        title="Free Lead Leak Snapshot | Salt & Tide Creative"
        description="Send your website or Google listing, phone number, and email. Salt & Tide will check where local leads may be slipping through and send a free snapshot."
        path="/lead-leak-audit"
        keywords={[
          "free lead leak audit",
          "missed call audit contractors",
          "lead response audit",
          "service business lead audit",
          "speed to lead audit",
        ]}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Lead Leak Snapshot", path: "/lead-leak-audit" },
          ]),
          contactPointLd,
        ]}
      />

      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(52px, 8vh, 96px)" }}>
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Free Lead Leak Snapshot</div>
            <h1 className="display mt-5" style={{ fontSize: "clamp(2.7rem, 7vw, 6.4rem)", lineHeight: 0.92, maxWidth: "14ch" }}>
              Find out where your leads <span style={{ color: "var(--color-kelp)" }}>go quiet.</span>
            </h1>
            <p className="mt-7 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.12rem", lineHeight: 1.62 }}>
              Skip the long project form. Send us your website or Google listing, your business phone, and the best email.
              We'll check your response path and send back 3–5 places calls, forms, or booking requests may be slipping through.
            </p>
            <div className="mt-8 grid gap-px sm:grid-cols-2" style={{ background: "var(--color-hairline)", maxWidth: 720 }}>
              <Promise icon={<TimerReset size={18} />} title="30 seconds to request" body="No essay. No budget gate. No guessing which service you need." />
              <Promise icon={<Search size={18} />} title="Useful even if you don't hire us" body="You get a plain-English snapshot of the highest-friction gaps." />
            </div>
          </div>

          <div className="lg:col-span-6">
            {submitted ? <SuccessPanel /> : <AuditForm onSubmit={onSubmit} submitting={submitting} />}
          </div>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mono-label">§ What we check</div>
            <h2 className="display mt-5 reveal" style={{ fontSize: "clamp(2rem, 4.5vw, 3.7rem)", lineHeight: 1.02 }}>
              We diagnose the front door before we sell the engine.
            </h2>
            <p className="mt-5 max-w-md" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              The goal is not to make you fill out an agency intake. The goal is to see whether your current lead path is fast enough to win the work.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-px" style={{ background: "var(--color-hairline)" }}>
            {AUDIT_POINTS.map((point, i) => (
              <div key={point} className="reveal p-7 md:p-8 flex gap-4" style={{ background: "var(--color-ink)" }}>
                <span className="mono-label" style={{ color: "var(--color-kelp)", minWidth: 32 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display" style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)" }}>{point}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                    We keep it practical: what a real customer sees, how quickly they get a response, and what one small system could improve first.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AuditForm({ onSubmit, submitting }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; submitting: boolean }) {
  return (
    <form onSubmit={onSubmit} className="reveal p-7 md:p-9 space-y-6" style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
      <div>
        <div className="mono-label" style={{ color: "var(--color-kelp)" }}>Request the snapshot</div>
        <h2 className="display mt-3" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", lineHeight: 1 }}>
          Three fields. Then we do the digging.
        </h2>
      </div>

      <Field
        label="Website or Google listing"
        name="website_or_listing"
        required
        placeholder="https://yourbusiness.com or Google Business Profile link"
      />
      <Field
        label="Business phone"
        name="business_phone"
        type="tel"
        required
        placeholder="+1 (___) ___-____"
      />
      <Field
        label="Where should we send the snapshot?"
        name="email"
        type="email"
        required
        placeholder="you@business.com"
      />

      <label className="block">
        <div className="mono-label mb-2.5">Optional context</div>
        <textarea
          name="lead_leak_context"
          rows={3}
          placeholder="Example: missed calls, slow form replies, after-hours leads, booking friction…"
          className="w-full bg-transparent border px-4 py-4 text-[1rem] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)]"
          style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
        />
      </label>

      <label className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
        <input name="sms_consent" type="checkbox" value="yes" className="mt-1" />
        <span>
          If I include a phone number, I agree Salt &amp; Tide may call or text me about this audit. Message/data rates may apply. Reply STOP to opt out.
        </span>
      </label>

      <input type="hidden" name="service" value="Lead Leak Snapshot" />
      <input type="hidden" name="form_source" value="salttidecreative.com/lead-leak-audit" />
      <input
        type="hidden"
        name="sms_consent_language"
        value="If I include a phone number, I agree Salt & Tide may call or text me about this audit. Message/data rates may apply. Reply STOP to opt out."
      />

      <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? "Checking…" : "Check My Lead Leaks"} <ArrowRight size={18} />
        </button>
        <span className="mono-label" style={{ color: "var(--color-text-muted)", fontSize: "0.68rem" }}>
          24-HOUR SNAPSHOT · NO SALES GUARANTEE
        </span>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <div className="mono-label mb-2.5">{label}{required ? " *" : ""}</div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border px-4 py-3.5 text-[1rem] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)]"
        style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
      />
    </label>
  );
}

function Promise({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="p-6" style={{ background: "var(--color-ink)" }}>
      <div className="flex items-center gap-3" style={{ color: "var(--color-kelp)" }}>{icon}<span className="mono-label">{title}</span></div>
      <p className="mt-3 text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}

function SuccessPanel() {
  return (
    <div className="reveal p-8 md:p-12" style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
      <div className="inline-flex items-center justify-center" style={{ width: 56, height: 56, background: "var(--color-kelp)", color: "var(--color-ink)" }}>
        <Check size={28} />
      </div>
      <h2 className="display mt-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Snapshot request received.</h2>
      <p className="mt-4 max-w-xl" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
        We'll review your website or listing, call path, and booking friction, then send back the clearest lead leaks within 24 hours.
      </p>
      <div className="mt-6 grid gap-px sm:grid-cols-2" style={{ background: "var(--color-hairline)" }}>
        <a href={`mailto:${ORG_EMAIL}`} className="p-5 block" style={{ background: "var(--color-ink)" }}>
          <Mail size={17} style={{ color: "var(--color-kelp)" }} />
          <span className="display block mt-2" style={{ fontSize: "1rem" }}>{ORG_EMAIL}</span>
        </a>
        <a href="tel:+125****8555" className="p-5 block" style={{ background: "var(--color-ink)" }}>
          <Phone size={17} style={{ color: "var(--color-kelp)" }} />
          <span className="display block mt-2" style={{ fontSize: "1rem" }}>{ORG_PHONE}</span>
        </a>
      </div>
      <p className="mt-5 text-sm" style={{ color: "var(--color-text-muted)" }}>
        Need a broader project inquiry instead? <Link href="/contact" className="ul-grow" style={{ color: "var(--color-kelp)" }}>Use the full contact form.</Link>
      </p>
    </div>
  );
}
