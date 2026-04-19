import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-brand">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-bold tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-background hover:opacity-90"
          >
            Back home <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vansoft Services — Ship Bug-Free Software Faster" },
      {
        name: "description",
        content:
          "Premium QA services and consulting for SaaS startups. Manual, performance, and security testing plus QA strategy from engineers with 20+ years of enterprise experience.",
      },
      { name: "author", content: "Vansoft Services" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vansoft Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Vansoft Services — Ship Bug-Free Software Faster" },
      { name: "twitter:title", content: "Vansoft Services — Ship Bug-Free Software Faster" },
      { name: "description", content: "Vansoft QA Solutions offers premium QA services and consulting for SaaS startups and scaling product companies." },
      { property: "og:description", content: "Vansoft QA Solutions offers premium QA services and consulting for SaaS startups and scaling product companies." },
      { name: "twitter:description", content: "Vansoft QA Solutions offers premium QA services and consulting for SaaS startups and scaling product companies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19d5d539-f958-42ea-9578-1cc5360ed16c/id-preview-09a3807a--10c1677a-f418-4be3-a4ee-45b7cbba7366.lovable.app-1776603473670.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19d5d539-f958-42ea-9578-1cc5360ed16c/id-preview-09a3807a--10c1677a-f418-4be3-a4ee-45b7cbba7366.lovable.app-1776603473670.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
