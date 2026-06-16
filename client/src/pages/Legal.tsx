// SALT & TIDE — Pacific Brutalist. Legal policy pages: privacy, terms, cookies, accessibility.
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { Seo, ORG_EMAIL, ORG_NAME, ORG_PHONE, breadcrumbSchema } from "@/components/Seo";

type LegalSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

type LegalPageConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

const LAST_UPDATED = "June 16, 2026";

const PRIVACY: LegalPageConfig = {
  slug: "privacy-policy",
  eyebrow: "Privacy Policy",
  title: "Privacy Policy",
  description:
    "How Salt & Tide Creative collects, uses, protects, and shares information submitted through our website and project inquiry forms.",
  updated: LAST_UPDATED,
  sections: [
    {
      title: "What we collect",
      body:
        "We collect information you choose to send us through the website, including project inquiry details and direct contact information.",
      bullets: [
        "Name, email address, phone number, business name, and project details submitted through our contact form.",
        "Service interests, budget range, timeline, referral source, and message content you provide voluntarily.",
        "Basic technical information that browsers and hosting providers commonly log, such as device type, browser, IP address, referring page, and approximate location.",
      ],
    },
    {
      title: "How we use information",
      bullets: [
        "To respond to inquiries, schedule calls, prepare proposals, and provide services you request.",
        "To improve our website, marketing, service quality, and client onboarding process.",
        "To protect against spam, abuse, fraud, security incidents, or misuse of our website.",
        "To comply with legal, tax, accounting, or contractual obligations when applicable.",
      ],
    },
    {
      title: "Forms and service providers",
      body:
        "Our contact form may use a third-party form processor, email provider, website host, analytics tools, or similar vendors. These providers process information only as needed to operate the website and our business workflows.",
    },
    {
      title: "Text messaging (SMS) and CRM data",
      body:
        "For clients who use our Local Growth Engine lead-response service, we and our messaging providers process phone numbers, message content, call and contact records, and related lead data in a CRM to enable missed-call text-back, follow-up, qualification, booking, and reporting.",
      bullets: [
        "SMS consent is never sold or shared with third parties for their own marketing, and phone numbers collected for texting are used only for the messaging the contact agreed to.",
        "Message and data rates may apply. Message frequency varies by conversation.",
        "Reply STOP to any text to opt out and HELP for assistance; opt-outs are honored automatically. Email follow-up includes an unsubscribe link.",
        "Business texting numbers are registered with carriers (A2P 10DLC) using the client's legal business name and use case.",
      ],
    },
    {
      title: "Cookies and analytics",
      body:
        "We may use cookies or similar technologies for basic site functionality, performance measurement, analytics, and spam prevention. See our Cookie Policy for more detail.",
    },
    {
      title: "Sharing information",
      body:
        "We do not sell personal information. We may share information with trusted vendors, contractors, legal advisors, or authorities when necessary to operate the business, provide services, enforce agreements, or comply with law.",
    },
    {
      title: "Data retention",
      body:
        "We keep inquiry and client information only as long as reasonably needed for business, legal, accounting, security, and service purposes. You can request deletion, correction, or access by contacting us.",
    },
    {
      title: "Your choices",
      bullets: [
        "You may ask us to update, correct, or delete information you previously submitted.",
        "You may opt out of non-essential marketing emails if we send them in the future.",
        "You may opt out of any SMS messaging at any time by replying STOP; reply HELP for assistance.",
        "You can control cookies through your browser settings, though some site features may not work as intended.",
      ],
    },
    {
      title: "Contact",
      body: `Questions about privacy can be sent to ${ORG_EMAIL} or by calling ${ORG_PHONE}.`,
    },
  ],
};

const TERMS: LegalPageConfig = {
  slug: "terms-of-service",
  eyebrow: "Terms of Service",
  title: "Terms of Service",
  description:
    "The terms that apply when visitors use the Salt & Tide Creative website or contact us about web design and marketing services.",
  updated: LAST_UPDATED,
  sections: [
    {
      title: "Use of this website",
      body:
        "By using this website, you agree to use it lawfully and not interfere with its operation, security, availability, or other visitors' access.",
    },
    {
      title: "Website content",
      body:
        "Website copy, visuals, layouts, examples, articles, and other materials are provided for general information only. They are not professional legal, financial, or tax advice.",
    },
    {
      title: "No guaranteed outcomes",
      body:
        "We care about measurable business results, but we cannot guarantee specific revenue, rankings, traffic, leads, sales, or marketing performance. Outcomes depend on many factors outside our control.",
    },
    {
      title: "Project inquiries and proposals",
      body:
        "Submitting a form or booking a call does not create a client relationship by itself. A project begins only when both parties sign or otherwise accept a written agreement, statement of work, proposal, or invoice terms.",
    },
    {
      title: "Lead-response and SMS services",
      body:
        "Our Local Growth Engine lead-response service sends text messages and emails on a client's behalf. Clients are responsible for obtaining proper consent from their contacts and for the accuracy of the numbers and content they provide.",
      bullets: [
        "Recipients can opt out of texts at any time by replying STOP, or get help by replying HELP; opt-out requests are honored automatically and email follow-up includes an unsubscribe link.",
        "Message and data rates may apply, and message frequency varies by conversation.",
        "Use of the service must comply with applicable law and carrier rules, including TCPA and A2P 10DLC registration requirements; we do not support cold texting, purchased lists, or messaging without consent.",
        "Carrier approval timelines, deliverability, and message filtering are controlled by the carriers and are outside our control.",
      ],
    },
    {
      title: "Intellectual property",
      bullets: [
        "Salt & Tide Creative owns the website, brand elements, copy, design system, and original materials on this site unless otherwise stated.",
        "Client deliverables, licenses, usage rights, source files, third-party assets, and payment milestones are governed by the applicable project agreement.",
        "You may not copy, resell, scrape, or reuse our website materials without written permission, except as allowed by law.",
      ],
    },
    {
      title: "Third-party links and tools",
      body:
        "This website may link to third-party sites or use third-party tools. We are not responsible for the content, availability, security, or policies of those third parties.",
    },
    {
      title: "Limitation of liability",
      body:
        "To the fullest extent permitted by law, Salt & Tide Creative is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages related to use of this website.",
    },
    {
      title: "Changes to these terms",
      body:
        "We may update these terms from time to time. The latest version will be posted on this page with an updated effective date.",
    },
    {
      title: "Contact",
      body: `Questions about these terms can be sent to ${ORG_EMAIL}.`,
    },
  ],
};

const COOKIES: LegalPageConfig = {
  slug: "cookie-policy",
  eyebrow: "Cookie Policy",
  title: "Cookie Policy",
  description:
    "How Salt & Tide Creative may use cookies, analytics, and similar technologies on our website.",
  updated: LAST_UPDATED,
  sections: [
    {
      title: "What cookies are",
      body:
        "Cookies are small files or identifiers stored by your browser. Similar technologies include pixels, local storage, tags, and analytics scripts.",
    },
    {
      title: "How we may use them",
      bullets: [
        "Essential cookies or local storage needed for basic website functionality.",
        "Analytics or performance tools that help us understand which pages are useful and where visitors come from.",
        "Security, spam prevention, form handling, and hosting-related technologies.",
        "Marketing or retargeting tools if we enable paid campaigns in the future.",
      ],
    },
    {
      title: "Third-party tools",
      body:
        "Third-party providers may set their own cookies when their tools are embedded or connected to our website. Their use is governed by their own privacy and cookie policies.",
    },
    {
      title: "Managing cookies",
      body:
        "Most browsers let you block, delete, or limit cookies. If you disable cookies, parts of the website or forms may not work properly.",
    },
    {
      title: "Updates",
      body:
        "We will update this page if our cookie usage changes in a meaningful way.",
    },
  ],
};

const ACCESSIBILITY: LegalPageConfig = {
  slug: "accessibility",
  eyebrow: "Accessibility Statement",
  title: "Accessibility Statement",
  description:
    "Salt & Tide Creative's accessibility commitment and how visitors can report barriers on the website.",
  updated: LAST_UPDATED,
  sections: [
    {
      title: "Our commitment",
      body:
        "Salt & Tide Creative aims to make our website usable for as many people as possible, including visitors using assistive technologies.",
    },
    {
      title: "What we work toward",
      bullets: [
        "Readable page structure, headings, labels, and keyboard-friendly navigation.",
        "Sufficient color contrast, responsive layouts, and clear focus states where practical.",
        "Descriptive link text, form labels, and alternatives for meaningful non-text content.",
      ],
    },
    {
      title: "Ongoing improvement",
      body:
        "Accessibility is an ongoing process. As the site changes, we review and improve content, components, and interaction patterns where we find issues.",
    },
    {
      title: "Report a barrier",
      body: `If you have trouble using any part of this website, email ${ORG_EMAIL} or call ${ORG_PHONE}. Please include the page URL, the issue, your browser/device, and any assistive technology used if comfortable sharing.`,
    },
  ],
};

const POLICIES: Record<string, LegalPageConfig> = {
  privacy: PRIVACY,
  terms: TERMS,
  cookies: COOKIES,
  accessibility: ACCESSIBILITY,
};

type LegalPageProps = {
  type: keyof typeof POLICIES;
};

export default function LegalPage({ type }: LegalPageProps) {
  useReveal();
  const page = POLICIES[type];
  const path = `/${page.slug}`;

  return (
    <>
      <Seo
        title={`${page.title} | ${ORG_NAME}`}
        description={page.description}
        path={path}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.title, path },
        ])}
      />
      <section style={{ paddingTop: "clamp(140px, 16vh, 200px)", paddingBottom: "clamp(48px, 7vh, 88px)" }}>
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <div className="mono-label" style={{ color: "var(--color-kelp)" }}>§ {page.eyebrow}</div>
            <h1 className="display mt-5" style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", lineHeight: 0.92 }}>
              {page.title}
            </h1>
          </div>
          <aside className="md:col-span-4 self-end space-y-5">
            <p className="display-thin" style={{ fontSize: "1.18rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
              {page.description}
            </p>
            <div className="mono-label" style={{ color: "var(--color-text-muted)" }}>Last updated · {page.updated}</div>
          </aside>
        </div>
        <hr className="hr-tide mt-16" />
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid md:grid-cols-12 gap-10 lg:gap-16">
          <aside className="md:col-span-3">
            <div className="sticky top-32 space-y-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <div className="mono-label mb-4">Legal Pages</div>
              <PolicyLink href="/privacy-policy" label="Privacy Policy" active={type === "privacy"} />
              <PolicyLink href="/terms-of-service" label="Terms of Service" active={type === "terms"} />
              <PolicyLink href="/cookie-policy" label="Cookie Policy" active={type === "cookies"} />
              <PolicyLink href="/accessibility" label="Accessibility" active={type === "accessibility"} />
            </div>
          </aside>

          <div className="md:col-span-9 space-y-px" style={{ background: "var(--color-hairline)" }}>
            <div className="p-6 md:p-9" style={{ background: "var(--color-surface)" }}>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                This page is intended as a practical policy for website visitors and prospective clients. It may be revised as
                our tools, vendors, services, or legal obligations change.
              </p>
            </div>
            {page.sections.map((section, index) => (
              <article key={section.title} className="reveal p-6 md:p-9" style={{ background: "var(--color-ink)" }}>
                <div className="mono-label" style={{ color: "var(--color-kelp)" }}>{String(index + 1).padStart(2, "0")}</div>
                <h2 className="display mt-3" style={{ fontSize: "clamp(1.45rem, 2.5vw, 2.1rem)" }}>{section.title}</h2>
                {section.body ? (
                  <p className="mt-4" style={{ color: "var(--color-text-secondary)", lineHeight: 1.75 }}>{section.body}</p>
                ) : null}
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-3" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" style={{ color: "var(--color-kelp)" }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PolicyLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="block border px-4 py-3 transition-colors"
      style={{
        borderColor: active ? "var(--color-kelp)" : "var(--color-hairline)",
        color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        background: active ? "rgba(63, 174, 124, 0.08)" : "transparent",
      }}
    >
      {label}
    </Link>
  );
}
