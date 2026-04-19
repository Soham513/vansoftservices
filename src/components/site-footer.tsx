import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-brand)] text-brand-foreground font-display font-bold">
                V
              </div>
              <span className="font-display text-base font-semibold text-ink">
                Vansoft<span className="text-brand">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Premium QA services and consulting for SaaS startups and product companies. Built by
              engineers who&apos;ve scaled testing at Symantec, Veritas, and Cohesity.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-ink-soft hover:text-ink">About</Link></li>
              <li><Link to="/services" className="text-ink-soft hover:text-ink">Services</Link></li>
              <li><Link to="/pricing" className="text-ink-soft hover:text-ink">Pricing</Link></li>
              <li><Link to="/contact" className="text-ink-soft hover:text-ink">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-ink-soft">hello@vansoft.services</li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-brand hover:underline"
                >
                  Schedule a call →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vansoft Services. All rights reserved.</p>
          <p className="font-mono">Ship bug-free software, faster.</p>
        </div>
      </div>
    </footer>
  );
}
