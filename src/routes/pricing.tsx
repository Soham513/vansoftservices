import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Flexible QA Engagements | Vansoft Services" },
      {
        name: "description",
        content:
          "Flexible hourly engagement model with custom pricing for your QA needs. Talk to us for a tailored quote.",
      },
      { property: "og:title", content: "Pricing — Flexible QA Engagements | Vansoft" },
      {
        property: "og:description",
        content: "Hourly model, custom-scoped to your team. Get a quote today.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Project",
    desc: "A focused engagement to solve a specific QA challenge.",
    bullets: [
      "Scoped manual or performance testing",
      "Clear deliverables & timeline",
      "Senior engineer ownership",
      "Detailed final report",
    ],
    cta: "Get a quote",
    highlight: false,
  },
  {
    name: "Embedded",
    desc: "Embed senior QA engineers into your team for ongoing reliability.",
    bullets: [
      "Hourly engagement, flexible commitment",
      "Sprint-aligned testing rhythm",
      "Bug triage & release sign-off",
      "Direct Slack collaboration",
    ],
    cta: "Talk to us",
    highlight: true,
  },
  {
    name: "Consulting",
    desc: "Architect the QA system your scaling company needs.",
    bullets: [
      "QA strategy & roadmap",
      "Process & tooling design",
      "Hiring & mentorship support",
      "Quarterly reviews",
    ],
    cta: "Book a call",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl text-balance">
              Flexible engagements,{" "}
              <span className="text-gradient-brand">custom-scoped.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              Every team&apos;s QA needs are different. We work on a flexible hourly engagement
              model with custom pricing tailored to your product, stage, and goals.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                t.highlight
                  ? "border-ink bg-[var(--gradient-ink)] text-background"
                  : "border-border bg-background text-ink"
              }`}
              style={t.highlight ? { boxShadow: "var(--shadow-elevated)" } : undefined}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{t.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  t.highlight ? "text-background/70" : "text-ink-soft"
                }`}
              >
                {t.desc}
              </p>
              <div className="mt-6">
                <div className="font-display text-4xl font-bold">Custom</div>
                <div
                  className={`mt-1 text-xs font-mono uppercase tracking-widest ${
                    t.highlight ? "text-background/60" : "text-ink-soft"
                  }`}
                >
                  Hourly · Scoped to you
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.highlight ? "text-brand-foreground" : "text-brand"
                      }`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                  t.highlight
                    ? "bg-background text-ink hover:opacity-90"
                    : "bg-ink text-background hover:opacity-90"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-border bg-surface">
        <Section className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Have a unique requirement?
            </h2>
            <p className="mt-3 text-ink-soft">
              We design engagements around your team — not the other way around. Let&apos;s talk.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Contact us for a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </section>
    </>
  );
}
