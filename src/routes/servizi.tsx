import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  CheckCircle2,
  Hammer,
  Phone,
  Recycle,
  ShieldCheck,
  Snowflake,
  Wind,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/site/AnimateIn";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi di Riparazione Elettrodomestici in Trentino | MIT" },
      {
        name: "description",
        content:
          "Riparazione, installazione, smaltimento RAEE, climatizzazione e manutenzione programmata di grandi elettrodomestici in tutto il Trentino-Alto Adige. Sopralluogo fisso 70€.",
      },
      {
        name: "keywords",
        content:
          "riparazione lavatrice Trento, riparazione frigorifero Bolzano, assistenza lavastoviglie Rovereto, tecnico asciugatrice Trentino, pulizia asciugatrice, climatizzazione Trentino, smaltimento RAEE",
      },
      { property: "og:title", content: "I Nostri Servizi — MIT Trentino" },
      {
        property: "og:description",
        content:
          "Assistenza completa per lavatrici, frigoriferi, forni, lavastoviglie e climatizzatori. Sopralluogo fisso 70€ ovunque in Trentino-Alto Adige.",
      },
      { property: "og:url", content: `${SITE.url}/servizi` },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/servizi` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE.url}/servizi` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Servizi MIT",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: { "@type": "LocalBusiness", name: "Manutenzione Integrata Trentino" },
              areaServed: { "@type": "AdministrativeArea", name: "Trentino-Alto Adige" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServiziPage,
});

const SERVICES = [
  {
    icon: Wrench,
    title: "Riparazione Elettrodomestici",
    subtitle: "Il cuore del nostro servizio",
    desc: "Diagnosi e riparazione professionale di lavatrici, lavastoviglie, frigoriferi, forni, piani cottura e asciugatrici. Intervento a domicilio in 24–48 ore in tutta la regione. Ricambi originali garantiti. Il sopralluogo ha un costo fisso di 70€ ovunque in Trentino-Alto Adige.",
    keywords: ["Lavatrice non centrifuga", "Frigorifero non raffredda", "Lavastoviglie non scarica", "Forno non scalda", "Piano cottura rotto"],
    bullets: ["Guasti elettrici e meccanici", "Perdite d'acqua", "Motori e pompe", "Schede elettroniche", "Resistenze e termostati", "Guarnizioni e cuscinetti"],
  },
  {
    icon: Hammer,
    title: "Installazione Elettrodomestici",
    subtitle: "Messa in opera professionale",
    desc: "Installazione professionale di grandi elettrodomestici a domicilio, con collaudo e istruzioni d'uso. Ci occupiamo di allaccio idraulico ed elettrico in sicurezza. Valido per lavatrici, lavastoviglie, frigoriferi, forni e asciugatrici — anche da incasso.",
    keywords: ["Lavatrice da installare", "Lavastoviglie da montare", "Forno da incasso"],
    bullets: ["Primo avvio e collaudo", "Allaccio idraulico certificato", "Messa in opera da incasso", "Verifica installazione sicura"],
  },
  {
    icon: Recycle,
    title: "Trasporto e Smaltimento RAEE",
    subtitle: "Un servizio etico per l'ambiente",
    desc: "Ritiriamo il tuo vecchio elettrodomestico e lo consegniamo ai centri di raccolta RAEE autorizzati, nel rispetto della normativa europea. Quando un apparecchio non è più riparabile, lo smaltimento responsabile è la scelta giusta — non la discarica abusiva.",
    keywords: ["Smaltimento lavatrice vecchia", "RAEE Trentino", "Ritiro elettrodomestici"],
    bullets: ["Ritiro a domicilio", "Smaltimento certificato", "Conformità normativa RAEE", "Tracciabilità documentata"],
  },
  {
    icon: Snowflake,
    title: "Climatizzazione e Frigorista",
    subtitle: "Tecnici certificati F-Gas",
    desc: "Installazione, manutenzione stagionale e riparazione di climatizzatori e sistemi di raffreddamento per uso domestico in tutta la provincia di Trento e nelle aree principali dell'Alto Adige. I nostri tecnici sono certificati F-Gas.",
    keywords: ["Climatizzatore Trento", "Condizionatore Bolzano", "Split system Trentino"],
    bullets: ["Climatizzatori split e multi-split", "Manutenzione stagionale", "Ricarica gas refrigerante", "Installazione nuovi impianti"],
  },
  {
    icon: ShieldCheck,
    title: "Assistenza Post-Intervento",
    subtitle: "Garanzia su ogni lavoro svolto",
    desc: "Dopo ogni riparazione, offriamo un periodo di assistenza garantita. Se il problema si ripresenta per cause riconducibili all'intervento effettuato, torniamo senza costi aggiuntivi. La tua tranquillità viene prima di tutto.",
    keywords: ["Garanzia riparazione", "Assistenza post-intervento"],
    bullets: ["Garanzia su manodopera", "Garanzia sui ricambi", "Assistenza telefonica", "Follow-up incluso"],
  },
  {
    icon: CalendarCheck,
    title: "Manutenzione Programmata",
    subtitle: "Previeni i guasti, risparmia denaro",
    desc: "Previeni i guasti con interventi di manutenzione periodica. Un check-up annuale sulla lavatrice o la lavastoviglie può evitarti riparazioni costose. Prolunghi la vita dei tuoi elettrodomestici e mantieni l'efficienza energetica al massimo.",
    keywords: ["Manutenzione lavatrice Trento", "Check-up elettrodomestici"],
    bullets: ["Check-up annuale completo", "Pulizia componenti interni", "Verifica guarnizioni e filtri", "Diagnosi preventiva"],
  },
  {
    icon: Wind,
    title: "Pulizia Asciugatrici",
    subtitle: "Sicurezza ed efficienza garantite",
    desc: "Pulizia professionale di asciugatrici: condensatore, filtri, condotti e resistenze. La peluria accumulata nel tempo riduce l'efficienza e può causare surriscaldamento. Una pulizia professionale annuale migliora le prestazioni e previene rischi.",
    keywords: ["Pulizia asciugatrice Trento", "Manutenzione asciugatrice Bolzano", "Asciugatrice lenta"],
    bullets: ["Smontaggio e ispezione", "Pulizia profonda condensatore", "Pulizia condotti e resistenze", "Test di funzionamento finale"],
  },
];

function ServiziPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow text-xs text-primary">Servizi</span>
          <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-secondary">
            I Nostri Servizi
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Assistenza completa per i tuoi grandi elettrodomestici in Trentino-Alto Adige.
            Sopralluogo fisso <strong>70€</strong> ovunque — nessun sovrappprezzo per la distanza.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
        {SERVICES.map(({ icon: Icon, title, subtitle, desc, keywords, bullets }, i) => (
          <AnimateIn key={title} delay={i * 40} direction="up">
            <article className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-soft hover:shadow-card transition-shadow h-full flex flex-col">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-green-soft text-primary flex items-center justify-center shrink-0">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{subtitle}</p>
                  <h2 className="mt-0.5 font-display font-bold text-xl sm:text-2xl text-secondary">{title}</h2>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {keywords.map((k) => (
                  <span key={k} className="text-xs bg-amber-soft text-secondary rounded-full px-2.5 py-0.5 font-medium border border-accent/20">
                    {k}
                  </span>
                ))}
              </div>
              <p className="mt-10 text-foreground/80 leading-relaxed text-sm">{desc}</p>
              <ul className="mt-auto pt-10 grid grid-cols-2 gap-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateIn>
        ))}
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <AnimateIn direction="scale">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 flex flex-col md:flex-row gap-6 items-center justify-between shadow-card">
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Hai bisogno di assistenza?
              </h2>
              <p className="mt-2 text-primary-foreground/85 max-w-xl">
                Stesso prezzo ovunque in Trentino-Alto Adige — sopralluogo e diagnosi a 70€ fissi.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold">
                <Link to="/contatti">
                  Richiedi un Intervento <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
