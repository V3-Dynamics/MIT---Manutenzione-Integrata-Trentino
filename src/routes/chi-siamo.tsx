import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Leaf, Mountain, Phone, Recycle, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/site/AnimateIn";
import { LeafDivider } from "@/components/site/LeafDivider";
import { ElectricVanBanner } from "@/components/site/ElectricVanBanner";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo | MIT — Manutenzione Integrata Trentino" },
      {
        name: "description",
        content:
          "MIT nasce in Trentino con una missione semplice: riparare invece di buttare. Tecnici locali qualificati, prezzi trasparenti e una vera filosofia green in tutto il Trentino-Alto Adige.",
      },
      { property: "og:title", content: "Chi Siamo — MIT Trentino" },
      {
        property: "og:description",
        content:
          "Artigianalità, cura e rispetto per l'ambiente. Tecnici certificati radicati nel territorio trentino.",
      },
      { property: "og:url", content: `${SITE.url}/chi-siamo` },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/chi-siamo` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Chi Siamo", item: `${SITE.url}/chi-siamo` },
          ],
        }),
      },
    ],
  }),
  component: ChiSiamoPage,
});

const values = [
  {
    icon: Leaf,
    title: "Green First",
    desc: "Crediamo che ogni riparazione sia un atto concreto di rispetto per l'ambiente e per le generazioni future. Ogni elettrodomestico riparato è un RAEE in meno.",
  },
  {
    icon: Handshake,
    title: "Trasparenza Totale",
    desc: "Preventivo fisso, nessuna sorpresa. Il prezzo del sopralluogo è 70€ ovunque in Trentino-Alto Adige — da Trento a Bolzano, senza sovrapprezzi per la distanza.",
  },
  {
    icon: Mountain,
    title: "Radicati nel Territorio",
    desc: "Siamo trentini. Conosciamo le valli, i comuni e le famiglie che abitano questa regione. Il servizio locale è nel nostro DNA.",
  },
];

function ChiSiamoPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow text-xs text-primary">La nostra azienda</span>
          <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-secondary">
            Chi Siamo
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Artigianalità, cura e rispetto per l'ambiente.
            Tecnici locali per le famiglie del Trentino-Alto Adige.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <AnimateIn direction="right">
          <h2 className="font-display font-bold text-3xl text-secondary">La nostra storia</h2>
          <div className="mt-5 space-y-4 text-foreground/80 text-lg leading-relaxed">
            <p>
              <strong>Manutenzione Integrata Trentino</strong> nasce dall'idea di
              offrire un servizio di riparazione elettrodomestici onesto, competente
              e profondamente radicato nelle valli del Trentino-Alto Adige. Crediamo
              che ogni apparecchio meriti una seconda vita, e che la cura artigianale
              sia un valore da preservare.
            </p>
            <p>
              Veniamo da una tradizione tecnica che mette al primo posto il cliente:
              preventivi chiari, prezzo fisso del sopralluogo a{" "}
              <strong>70€</strong> e la promessa che{" "}
              <strong>paghi solo se ripariamo</strong>. Niente sorprese, niente
              sovrapprezzi per la distanza.
            </p>
            <p>
              La nostra <strong>filosofia green</strong> guida ogni decisione:
              scegliamo ricambi originali, riduciamo i rifiuti elettronici e
              gestiamo lo smaltimento RAEE in modo etico e certificato. Riparare,
              per noi, è il primo passo verso un futuro più sostenibile — e lo è
              anche per te.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Values */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow text-xs text-primary">Valori</span>
              <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-secondary">
                I Nostri Valori
              </h2>
            </div>
          </AnimateIn>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimateIn key={title} delay={i * 80} direction="up">
                <div className="rounded-2xl bg-white border border-border p-7 shadow-soft hover:shadow-card transition-shadow h-full">
                  <div className="h-12 w-12 rounded-xl bg-green-soft text-primary flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-xl text-secondary">{title}</h3>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Electric Van */}
      <ElectricVanBanner />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <AnimateIn direction="scale">
          <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 sm:p-12">
            <LeafDivider className="text-primary/40 mb-8" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-10">
              La Filosofia Green in Numeri
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Wrench,   n: "500+",    l: "Elettrodomestici riparati" },
                { icon: Recycle,  n: "300+",    l: "RAEE smaltiti correttamente" },
                { icon: Star,     n: "4,9/5",   l: "Valutazione media clienti" },
              ].map(({ icon: Icon, n, l }) => (
                <div key={l} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-3xl">{n}</div>
                    <div className="text-secondary-foreground/75 text-sm mt-0.5">{l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-secondary">
            Scegli chi ripara con cura
          </h2>
          <p className="mt-3 text-foreground/70 max-w-lg mx-auto">
            Contattaci oggi. Interveniamo in 24–48 ore in tutta la regione.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="h-4 w-4" /> Chiama Ora
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
              <Link to="/servizi">
                I nostri servizi <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
