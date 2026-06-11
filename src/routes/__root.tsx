import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingWhatsApp, MobileCallBar } from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-secondary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ricarica la pagina o torna alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Manutenzione Integrata Trentino — Riparazione Elettrodomestici" },
      {
        name: "description",
        content:
          "Riparazione professionale di elettrodomestici a domicilio in Trentino-Alto Adige. Sopralluogo fisso 70€. Paghi solo se ripariamo.",
      },
      { name: "author", content: "Manutenzione Integrata Trentino" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "MIT — Riparazione Elettrodomestici in Trentino-Alto Adige" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE.url}/og-image.jpg` },
      { name: "theme-color", content: "#6BA626" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Manutenzione Integrata Trentino",
          description:
            "Riparazione e manutenzione di grandi elettrodomestici a domicilio in Trentino-Alto Adige. Sopralluogo fisso 70€.",
          telephone: SITE.phoneTel,
          email: SITE.email,
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            addressRegion: "TN",
            addressCountry: "IT",
          },
          areaServed: [
            { "@type": "City", name: "Trento" },
            { "@type": "City", name: "Bolzano" },
            { "@type": "City", name: "Rovereto" },
            { "@type": "City", name: "Merano" },
            { "@type": "AdministrativeArea", name: "Trentino-Alto Adige" },
          ],
          serviceType: "Appliance Repair",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "08:00",
              closes: "13:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "52",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servizi MIT",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione lavatrice a domicilio Trentino" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione frigorifero Trento" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assistenza lavastoviglie Bolzano" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione asciugatrice Rovereto" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pulizia asciugatrice Trentino" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smaltimento RAEE Trentino" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climatizzazione domestica Trentino" } },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
      >
        Salta al contenuto principale
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
        <MobileCallBar />
      </div>
    </QueryClientProvider>
  );
}
