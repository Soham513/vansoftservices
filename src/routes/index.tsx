import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  TestTube2,
  Workflow,
  Sparkles,
  Quote,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vansoft Services — Ship Bug-Free Software Faster" },
      {
        name: "description",
        content:
          "Premium QA services and consulting for SaaS startups. Build scalable QA systems with engineers from Symantec, Veritas, and Cohesity.",
      },
      { property: "og:title", content: "Vansoft Services — Ship Bug-Free Software Faster" },
      {
        property: "og:description",
        content:
          "Manual, performance, and security testing plus QA strategy. Trusted by scaling SaaS teams.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: TestTube2,
    title: "Manual Testing",
    desc: "Functional, regression, and exploratory testing led by engineers who think like users and break like attackers.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    desc: "Load, stress, and scalability testing to validate your system before production traffic does.",
  },
  {
    icon: ShieldCheck,
    title: "Security Testing",
    desc: "Vulnerability assessments and risk identification to harden your stack against real-world threats.",
  },
  {
    icon: Workflow,
    title: "QA Consulting",
    desc: "Build the QA infrastructure, processes, and culture that scales with your engineering team.",
  },
];

const reasons = [
  "20+ years building QA at enterprise scale",
  "Founder-led engagements — no junior handoffs",
  "Long-term QA systems, not one-off tests",
  "Proven at Symantec, Veritas, and Cohesity",
  "Flexible engagement — embed or advise",
  "Designed for startups scaling fast",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 grid-bg pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>QA Services & Consulting</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-7xl text-balance">
              Ship bug-free software{" "}
              <span className="text-gradient-brand">faster.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl text-balance">
              We help SaaS startups and product companies build scalable QA systems and deliver
              reliable releases with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                style={{ boxShadow: "var(--shadow-elevated)" }}
              >
                Schedule a call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-ink hover:bg-secondary"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
              <span>Symantec</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Veritas</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Cohesity</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>20+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Quality engineering, end to end.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Four practices, one mission: catch bugs before users do — and build systems so they
            never recur.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-border bg-surface">
        <Section className="py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Why Vansoft</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Built by people who&apos;ve done it before.
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                You&apos;re not hiring an agency. You&apos;re partnering with senior engineers who
                have shipped reliability at the scale your startup is racing toward.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      {/* FOUNDER */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-border bg-[var(--gradient-ink)]">
          <div className="grid gap-10 p-10 md:grid-cols-[1.5fr_1fr] md:p-16 text-ink">
            <div className="text-ink">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                Founder
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Dnyanesh Badgujar
              </h2>
              <p className="mt-2 text-base text-ink-soft">
                Senior Principal Engineer · 20+ years in IT
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                Two decades architecting reliability into enterprise-grade systems. Vansoft brings
                that same rigor to startups — without the enterprise overhead.
              </p>

              {/* Career timeline */}
              <div className="mt-8 space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  Career
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      company: "Cohesity",
                      role: "Senior Principal Engineer",
                      focus: "Hyperconverged secondary storage · QA leadership",
                    },
                    {
                      company: "Veritas",
                      role: "Principal QA Engineer",
                      focus: "Enterprise data protection at global scale",
                    },
                    {
                      company: "Symantec",
                      role: "Senior QA Engineer",
                      focus: "Backup & recovery systems for Fortune 500",
                    },
                  ].map((job) => (
                    <li
                      key={job.company}
                        className="flex items-start gap-4 rounded-xl border border-border bg-background p-4"
                    >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary font-display text-sm font-bold text-ink">
                        {job.company[0]}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-2">
                            <span className="font-display text-base font-semibold text-ink">
                            {job.company}
                          </span>
                            <span className="text-xs text-ink-soft">· {job.role}</span>
                        </div>
                          <p className="mt-1 text-xs leading-relaxed text-ink-soft">{job.focus}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["QA Strategy", "System Reliability", "Performance", "Scale"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center text-ink">
              {[
                { k: "20+", v: "Years experience" },
                { k: "3", v: "Enterprise leaders" },
                { k: "100%", v: "Founder-led" },
                { k: "∞", v: "Bugs caught" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div className="font-display text-3xl font-bold text-ink">{s.k}</div>
                  <div className="mt-1 text-xs text-ink-soft">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AI VISION */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
              <Sparkles className="h-3.5 w-3.5" />
              Coming Soon
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              AI-powered QA agent.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              We&apos;re building an autonomous QA agent that automates testing, surfaces hidden
              bugs, and accelerates release cycles — combining decades of human expertise with
              modern AI.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-ink hover:bg-secondary"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL PLACEHOLDER */}
      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <figure
              key={i}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <Quote className="h-6 w-6 text-brand/60" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">
                “Vansoft transformed how we think about quality. Releases that used to scare us are
                now routine.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary" />
                <div>
                  <div className="text-sm font-medium text-ink">SaaS Founder</div>
                  <div className="text-xs text-ink-soft">Series A · Coming soon</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t border-border">
        <Section className="py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl text-balance">
              Ready to ship with confidence?
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Tell us about your product. We&apos;ll show you exactly where quality is leaking — and
              how to fix it for good.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                Schedule a call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-ink hover:bg-secondary"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
