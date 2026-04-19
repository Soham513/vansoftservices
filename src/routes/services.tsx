import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, ShieldCheck, TestTube2, Workflow, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — QA Testing & Consulting | Vansoft Services" },
      {
        name: "description",
        content:
          "Manual, performance, security testing and QA consulting for SaaS startups. Build scalable QA systems that ship reliable software faster.",
      },
      { property: "og:title", content: "QA Services & Consulting | Vansoft" },
      {
        property: "og:description",
        content:
          "Manual, performance, security testing and QA strategy from senior engineers with enterprise scale experience.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: TestTube2,
    title: "Manual Testing",
    tagline: "Human judgment, engineering rigor.",
    desc: "Real engineers exploring your product the way users will — and catching the edge cases automation misses.",
    points: [
      "Functional testing across web, mobile, and API",
      "Regression suites that grow with your product",
      "Exploratory testing led by senior QA engineers",
      "Detailed reproducible bug reports",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    tagline: "Find the breaking point before users do.",
    desc: "Load, stress, and scalability testing using industry-standard tooling — backed by interpretation that turns numbers into action.",
    points: [
      "Load and stress test design",
      "Scalability and capacity planning",
      "Bottleneck root-cause analysis",
      "Production-readiness sign-off",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security Testing",
    tagline: "Risk visibility, not checkbox compliance.",
    desc: "Practical vulnerability assessments and risk identification focused on what could actually hurt your business.",
    points: [
      "OWASP-aligned vulnerability assessments",
      "Authentication and authorization audits",
      "API surface and data exposure review",
      "Prioritized remediation guidance",
    ],
  },
  {
    icon: Workflow,
    title: "QA Consulting",
    tagline: "Build the QA org you wish you had.",
    desc: "Long-term engagements to architect QA infrastructure, processes, hiring, and culture that scale with engineering.",
    points: [
      "QA strategy and roadmap design",
      "Test automation architecture",
      "Process, tooling, and CI/CD integration",
      "Team building and mentorship",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl text-balance">
              Quality at every layer of your stack.
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              Pick a focused engagement or build a full QA practice with us. Either way, you get
              senior engineers — not handoffs.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:gap-10">
          {services.map(({ icon: Icon, title, tagline, desc, points }, i) => (
            <article
              key={title}
              className="grid gap-8 rounded-3xl border border-border bg-background p-8 md:grid-cols-[auto_1fr] md:p-12"
            >
              <div className="flex md:flex-col md:items-start">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4 self-center font-mono text-xs uppercase tracking-widest text-ink-soft md:ml-0 md:mt-4">
                  0{i + 1}
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{title}</h2>
                <p className="mt-2 text-base font-medium text-brand">{tagline}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{desc}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-border bg-surface">
        <Section className="py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-2 text-ink-soft">
                Tell us your product and pain points. We&apos;ll recommend the right engagement.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Discuss your QA needs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </section>
    </>
  );
}
