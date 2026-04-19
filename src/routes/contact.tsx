import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Calendar } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schedule a QA Consultation | Vansoft Services" },
      {
        name: "description",
        content:
          "Tell us about your product and QA challenges. Schedule a call with senior QA engineers and get a custom quote.",
      },
      { property: "og:title", content: "Contact Vansoft — Schedule a Call" },
      {
        property: "og:description",
        content: "Discuss your QA needs with senior engineers. Custom-scoped engagements.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl text-balance">
              Let&apos;s discuss your{" "}
              <span className="text-gradient-brand">QA needs.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              Tell us about your product and where quality is hurting. We&apos;ll respond within one
              business day with a recommended path forward.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                Schedule a call
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                30-minute intro call to understand your product, team, and current QA pain points.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                Email us directly
              </h3>
              <p className="mt-2 text-sm text-ink-soft">hello@vansoft.services</p>
            </div>
            <div className="rounded-2xl border border-border bg-[var(--gradient-ink)] p-6 text-background">
              <h3 className="font-display text-lg font-semibold">What happens next?</h3>
              <ol className="mt-4 space-y-3 text-sm text-background/80">
                <li className="flex gap-3">
                  <span className="font-mono text-background/50">01</span>
                  We review your message within one business day.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-background/50">02</span>
                  Founder-led intro call to scope the work.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-background/50">03</span>
                  Custom proposal with timeline and pricing.
                </li>
              </ol>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">Message sent.</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-soft">
                  Thanks — we&apos;ll get back to you within one business day. In the meantime, feel
                  free to email us at hello@vansoft.services.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" required />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-ink-soft">
                    What do you need help with?
                  </label>
                  <select
                    name="topic"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-ink ring-focus"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option>Manual Testing</option>
                    <option>Performance Testing</option>
                    <option>Security Testing</option>
                    <option>QA Consulting</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-ink-soft">
                    Tell us about your product
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Stage, stack, current QA setup, biggest pain points…"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-ink ring-focus"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-background hover:opacity-90 sm:w-auto"
                >
                  Schedule a call <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-ink-soft">
                  By submitting, you agree to be contacted about your inquiry. We don&apos;t share
                  your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-xs uppercase tracking-widest text-ink-soft">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 ring-focus"
      />
    </div>
  );
}
