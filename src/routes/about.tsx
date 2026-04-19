import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Founder-Led QA Consultancy | Vansoft Services" },
      {
        name: "description",
        content:
          "Founded by Dnyanesh Badgujar, Senior Principal Engineer with 20+ years at Symantec, Veritas, and Cohesity. Building next-gen QA with AI.",
      },
      { property: "og:title", content: "About Vansoft — Founder-Led QA" },
      {
        property: "og:description",
        content:
          "Two decades of enterprise QA experience, brought to scaling startups. Building the next generation of AI-powered quality.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl text-balance">
              We exist to make quality{" "}
              <span className="text-gradient-brand">a competitive edge.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              Most startups treat QA as a cost. We treat it as the system that lets you ship
              faster, win bigger contracts, and sleep at night.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand">Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Help SaaS startups and product companies ship reliable software faster by building
              QA systems that scale with their ambition.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand">Approach</h3>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Senior engineers only. Long-term systems over quick fixes. Strategy paired with
              hands-on execution. Total transparency.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand">Values</h3>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Rigor. Honesty. Curiosity. We tell you what&apos;s broken — and we help you fix it
              for good, not just for now.
            </p>
          </div>
        </div>
      </Section>

      {/* FOUNDER STORY */}
      <section className="border-y border-border bg-surface">
        <Section className="py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <Eyebrow>Founder</Eyebrow>
              <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-[var(--gradient-ink)] p-10 text-background">
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-background/10 font-display text-5xl font-bold">
                  DB
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">Dnyanesh Badgujar</h3>
                <p className="text-sm text-background/70">Founder · Senior Principal Engineer</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Symantec", "Veritas", "Cohesity"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Two decades of building reliability.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  Dnyanesh has spent 20+ years in IT, building and leading QA across some of the
                  most demanding enterprise systems in the industry — backup, data protection, and
                  hyperconverged infrastructure at Symantec, Veritas, and Cohesity.
                </p>
                <p>
                  At those companies, a single missed bug could cost customers their data. That
                  pressure shaped a discipline: QA isn&apos;t a step at the end — it&apos;s a system
                  woven through engineering, product, and culture.
                </p>
                <p>
                  Vansoft brings that discipline to startups. The companies we work with don&apos;t
                  have time to learn QA the hard way. They want to ship fast, scale safely, and
                  partner with someone who&apos;s been there.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* AI VISION */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                <Sparkles className="h-3.5 w-3.5" />
                Vision
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                The future of QA is autonomous.
              </h2>
              <p className="mt-5 text-lg text-ink-soft">
                We&apos;re building an AI QA agent that combines decades of human testing expertise
                with modern AI — automating tests, surfacing hidden bugs, and accelerating release
                cycles for the next generation of software teams.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                Join the early access list <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Autonomous", v: "Self-driving test generation" },
                { k: "Adaptive", v: "Learns your product over time" },
                { k: "Insightful", v: "Surfaces hidden risk patterns" },
                { k: "Fast", v: "Cuts release cycles dramatically" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div className="font-display text-lg font-semibold text-ink">{s.k}</div>
                  <div className="mt-1 text-xs text-ink-soft">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
