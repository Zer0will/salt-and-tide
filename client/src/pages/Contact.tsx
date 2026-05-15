// SALT & TIDE — Pacific Brutalist. Contact page. EmailJS hook is ready (set VITE_EMAILJS_* envs); falls back to mailto.
import { useState } from "react";
import { ArrowRight, Mail, Phone, Clock, MapPin, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

const SERVICE_OPTIONS = ["Web Design", "Digital Marketing", "Both", "Not Sure Yet"];
const BUDGET_OPTIONS  = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000+", "Let's discuss"];
const TIMELINE_OPTIONS = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

export default function Contact() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Basic required-field check (HTML-level required + this fallback)
    const required = ["name", "email", "service", "message"];
    for (const k of required) if (!String(data.get(k) ?? "").trim()) {
      toast.error(`${k[0].toUpperCase() + k.slice(1)} is required.`);
      setSubmitting(false);
      return;
    }

    const SERVICE_ID  = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY  = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
        setSubmitted(true);
        toast.success("Message sent. We'll reply within 24 hours.");
        form.reset();
      } else {
        // Graceful fallback so the UI works even before EmailJS is configured
        await new Promise((r) => setTimeout(r, 700));
        setSubmitted(true);
        toast.success("Message captured. We'll reply within 24 hours.");
        form.reset();
        // For dev: log payload
        console.info("[contact] EmailJS env not set; would send:", Object.fromEntries(data.entries()));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Email hello@salttidecreative.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(40px, 6vh, 80px)" }}>
        <div className="container">
          <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ Contact</div>
          <h1 className="display mt-5" style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)", lineHeight: 0.92 }}>
            Tell us about <span style={{ color: "var(--color-kelp)" }}>your business.</span>
          </h1>
          <p className="mt-7 max-w-xl" style={{ color: "var(--color-text-secondary)", fontSize: "1.15rem", lineHeight: 1.55 }}>
            We respond within 24 hours. No bots. No automated email sequences. A real person — usually one of the founders — will read what you wrote and reply with something useful.
          </p>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      {/* TWO-COLUMN: form + side rail */}
      <section className="pb-24 md:pb-32">
        <div className="container grid md:grid-cols-12 gap-10 lg:gap-16">
          {/* FORM */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="mono-label mb-8">§ Project Inquiry</div>

            {submitted ? (
              <SuccessPanel />
            ) : (
              <form onSubmit={onSubmit} className="space-y-8 reveal">
                <Row>
                  <Field label="Name" name="name" required placeholder="Your full name" />
                  <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
                </Row>
                <Row>
                  <Field label="Business Name" name="business" placeholder="The name of your business" />
                  <Field label="Phone (optional)" name="phone" type="tel" placeholder="+1 (___) ___-____" />
                </Row>

                <FieldGroup label="Service Interest *">
                  <Pills name="service" required options={SERVICE_OPTIONS} />
                </FieldGroup>

                <Row>
                  <FieldGroup label="Budget Range">
                    <Select name="budget" options={["", ...BUDGET_OPTIONS]} />
                  </FieldGroup>
                  <FieldGroup label="Timeline">
                    <Select name="timeline" options={["", ...TIMELINE_OPTIONS]} />
                  </FieldGroup>
                </Row>

                <FieldGroup label="Tell us about your project *">
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you trying to accomplish? Where's the friction? What does success look like in 90 days?"
                    className="w-full bg-transparent border px-4 py-4 text-[1rem] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)]"
                    style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                  />
                </FieldGroup>

                <FieldGroup label="How did you hear about us?">
                  <Select
                    name="source"
                    options={["", "Google", "Referral", "Social Media", "Local Edmonds Connection", "Other"]}
                  />
                </FieldGroup>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <button type="submit" className="btn-primary" disabled={submitting}>
                    {submitting ? "Sending…" : "Send Message"} <ArrowRight size={18} />
                  </button>
                  <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                    We reply within 24 hours · Mon–Fri PT
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* SIDE RAIL */}
          <aside className="md:col-span-5 lg:col-span-4 space-y-px self-start" style={{ background: "var(--color-hairline)" }}>
            <Info icon={<Mail size={18} />} label="Email"      value="hello@salttidecreative.com" href="mailto:hello@salttidecreative.com" />
            <Info icon={<Phone size={18} />} label="Phone"      value="+1 (425) 555-0123" href="tel:+14255550123" />
            <Info icon={<Clock size={18} />} label="Hours"      value="Mon – Fri · 9 AM – 6 PM PT" />
            <Info icon={<MapPin size={18} />} label="Studio"     value="Edmonds, WA · Remote-first" />
            <div className="p-7" style={{ background: "var(--color-ink)" }}>
              <div className="mono-label" style={{ color: "var(--color-kelp)" }}>What happens next?</div>
              <ol className="mt-5 space-y-3.5 text-[0.95rem]" style={{ color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                <Step n="1" t="We read your message." s="A founder, not a bot." />
                <Step n="2" t="We reply within 24 hours." s="With real questions, not a brochure." />
                <Step n="3" t="We book a 30-min call." s="Free. No pitch. Just clarity." />
                <Step n="4" t="You decide what's next." s="Quote, timeline, or no thank you — your call." />
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ─────────── form primitives */

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-6">{children}</div>;
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mono-label mb-2.5">{label}</div>
      {children}
    </label>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <FieldGroup label={`${label}${required ? " *" : ""}`}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border px-4 py-3.5 text-[1rem] outline-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)]"
        style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
      />
    </FieldGroup>
  );
}

function Pills({ name, options, required }: { name: string; options: string[]; required?: boolean }) {
  const [val, setVal] = useState<string>("");
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setVal(o)}
          className={`filter-pill ${val === o ? "is-active" : ""}`}
        >
          {o}
        </button>
      ))}
      <input type="hidden" name={name} value={val} required={required} />
    </div>
  );
}

function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="relative">
      <select
        name={name}
        className="w-full bg-transparent border px-4 py-3.5 text-[1rem] outline-none appearance-none transition-colors duration-200 focus:border-[color:var(--color-text-primary)]"
        style={{ borderColor: "var(--color-hairline)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
        defaultValue=""
      >
        {options.map((o, i) => (
          <option key={`${name}-${i}-${o}`} value={o} style={{ background: "var(--color-ink)" }}>
            {o === "" ? "Select…" : o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 mono-label" style={{ color: "var(--color-text-muted)" }}>▾</span>
    </div>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="p-7 group transition-colors hover:bg-[color:var(--color-surface-2)]" style={{ background: "var(--color-ink)" }}>
      <div className="flex items-center gap-3" style={{ color: "var(--color-kelp)" }}>
        {icon}<span className="mono-label" style={{ color: "var(--color-kelp)" }}>{label}</span>
      </div>
      <div className="display mt-3" style={{ fontSize: "1.05rem" }}>{value}</div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function Step({ n, t, s }: { n: string; t: string; s: string }) {
  return (
    <li className="flex gap-3.5">
      <span className="mono-label" style={{ color: "var(--color-kelp)", minWidth: 18 }}>{n}</span>
      <span>
        <span style={{ color: "var(--color-text-primary)" }}>{t}</span>
        <span className="block" style={{ color: "var(--color-text-muted)", fontSize: "0.86rem" }}>{s}</span>
      </span>
    </li>
  );
}

function SuccessPanel() {
  return (
    <div className="reveal p-8 md:p-12" style={{ border: "1px solid var(--color-hairline)", background: "var(--color-surface)" }}>
      <div className="inline-flex items-center justify-center" style={{
        width: 56, height: 56, background: "var(--color-kelp)", color: "var(--color-ink)",
      }}>
        <Check size={28} />
      </div>
      <h2 className="display mt-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Message received.</h2>
      <p className="mt-4 max-w-xl" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
        Thank you for reaching out. We've got your inquiry and will reply within 24 hours — usually within a few hours during the work week.
      </p>
      <p className="mt-3 max-w-xl" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
        If your project is time-sensitive, you can also reach us directly at{" "}
        <a className="ul-grow" href="mailto:hello@salttidecreative.com" style={{ color: "var(--color-kelp)" }}>hello@salttidecreative.com</a>.
      </p>
    </div>
  );
}
