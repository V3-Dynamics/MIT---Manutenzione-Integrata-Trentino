import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/site/AnimateIn";
import { LeafDivider } from "@/components/site/LeafDivider";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title:
          "FAQ — Domande Frequenti | Riparazione Elettrodomestici Trentino | MIT",
      },
      {
        name: "description",
        content:
          "Risposte alle domande più frequenti sulla riparazione di lavatrici, frigoriferi, lavastoviglie in Trentino-Alto Adige. Costi, tempi, garanzie, aree servite.",
      },
      { property: "og:title", content: "FAQ Riparazione Elettrodomestici Trentino — MIT" },
      { property: "og:url", content: `${SITE.url}/faq` },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE.url}/faq` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: "Domande Frequenti — Riparazione Elettrodomestici Trentino",
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".faq-answer"],
          },
          mainEntity: FAQ_CATEGORIES.flatMap((c) =>
            c.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            }))
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQ_CATEGORIES = [
  {
    category: "Costi e prezzi",
    items: [
      {
        q: "Quanto costa riparare una lavatrice a Trento?",
        a: "Il costo di riparazione di una lavatrice a Trento dipende dal tipo di guasto. Il sopralluogo e la prima diagnosi hanno un costo fisso di 70€ valido in tutta la provincia di Trento e Alto Adige. Il preventivo finale per la riparazione viene fornito prima di procedere con qualsiasi intervento. Se non si procede, si paga solo il sopralluogo. Se si procede, il costo del sopralluogo viene scalato dal totale.",
      },
      {
        q: "Qual è il costo del sopralluogo in tutta la provincia di Trento?",
        a: "Il sopralluogo e la prima diagnosi hanno un costo fisso di 70€ in tutta la provincia di Trento e Alto Adige, senza costi aggiuntivi per la distanza o la zona. Questo vale per Trento, Rovereto, Bolzano, Merano, Pergine Valsugana, Riva del Garda, Bressanone e tutti i comuni della regione.",
      },
      {
        q: "Conviene riparare o comprare un elettrodomestico nuovo?",
        a: "In molti casi riparare è la scelta più conveniente e sostenibile. La riparazione di un grande elettrodomestico costa in media il 60–70% in meno rispetto all'acquisto di uno nuovo. In generale, se il costo di riparazione è inferiore al 50% del valore equivalente nuovo, conviene riparare — soprattutto per apparecchi di qualità. I nostri tecnici forniscono sempre una valutazione onesta prima di procedere.",
      },
      {
        q: "Devo pagare anche se non riescono a riparare il mio elettrodomestico?",
        a: "Il costo fisso di 70€ copre il sopralluogo e la diagnosi, indipendentemente dall'esito. Se il tecnico valuta che la riparazione non è possibile o non è conveniente, ti informerà prima di procedere. Non vengono mai addebitati costi nascosti o imprevisti.",
      },
    ],
  },
  {
    category: "Intervento e tempi",
    items: [
      {
        q: "Entro quanto tempo interviene un tecnico a domicilio?",
        a: "Interveniamo generalmente entro 24–48 ore dalla chiamata in tutto il Trentino-Alto Adige, spesso il giorno stesso per urgenze. Puoi prenotare anche tramite WhatsApp o il modulo online. Il tecnico arriva direttamente a casa tua senza che tu debba spostare l'elettrodomestico.",
      },
      {
        q: "Quanto tempo serve per la riparazione?",
        a: "Nella maggior parte dei casi l'intervento si conclude in un'unica visita di 1–2 ore. Se è necessario un ricambio specifico non disponibile immediatamente, lo ordiniamo e completiamo la riparazione entro 2–5 giorni lavorativi.",
      },
      {
        q: "L'intervento avviene a domicilio?",
        a: "Sì, interveniamo direttamente a casa tua in tutto il Trentino-Alto Adige. Non è necessario spostare o consegnare l'elettrodomestico da nessuna parte. Il tecnico porta con sé la strumentazione diagnostica e i ricambi più comuni.",
      },
    ],
  },
  {
    category: "Elettrodomestici e marche",
    items: [
      {
        q: "Riparate tutte le marche di elettrodomestici?",
        a: "Sì, eseguiamo riparazioni su tutte le principali marche: Bosch, Siemens, Whirlpool, Indesit, Samsung, LG, Electrolux, Miele, AEG, Candy, Hotpoint, Ariston, Beko, Smeg e molte altre. Utilizziamo solo ricambi originali o compatibili certificati per garantire la durata della riparazione.",
      },
      {
        q: "Riparate elettrodomestici da incasso?",
        a: "Sì, eseguiamo assistenza e riparazione anche su elettrodomestici da incasso: forni, piani cottura, lavastoviglie e frigoriferi integrati. L'intervento avviene direttamente in cucina, senza necessità di smontare i mobili nella maggior parte dei casi.",
      },
      {
        q: "Cosa devo fare se il mio elettrodomestico è ancora in garanzia?",
        a: "Se l'elettrodomestico è in garanzia del produttore, devi contattare il centro assistenza autorizzato del marchio specifico o il negozio dove hai acquistato. Noi interveniamo su elettrodomestici fuori garanzia e su qualsiasi marca in modo indipendente. Su richiesta, possiamo aiutarti a valutare se è più conveniente l'assistenza autorizzata o il nostro intervento.",
      },
      {
        q: "Riparate frigoriferi, congelatori e apparecchi da incasso?",
        a: "Sì, MIT ripara frigoriferi combinati, congelatori verticali e a pozzetto, frigoriferi da incasso e wine cooler di tutte le marche. Interveniamo anche per problemi di gas refrigerante (tecnico frigorista certificato), compressori, termostati e schede elettroniche.",
      },
    ],
  },
  {
    category: "Garanzia e qualità",
    items: [
      {
        q: "La riparazione è coperta da garanzia?",
        a: "Sì, ogni intervento è coperto da garanzia su manodopera e ricambi installati. In caso di recidiva dello stesso guasto entro il periodo di garanzia, il secondo intervento è gratuito. Usiamo esclusivamente ricambi originali o compatibili certificati.",
      },
      {
        q: "Offrite assistenza post-intervento?",
        a: "Sì. Dopo ogni riparazione siamo disponibili per assistenza telefonica e follow-up. Se riscontri problemi legati all'intervento effettuato, ci contatti e valutiamo insieme la situazione senza costi aggiuntivi entro il periodo di garanzia.",
      },
    ],
  },
  {
    category: "Sostenibilità e RAEE",
    items: [
      {
        q: "Come funziona il servizio di smaltimento RAEE in Trentino?",
        a: "MIT offre un servizio certificato di ritiro e smaltimento RAEE (Rifiuti di Apparecchiature Elettriche ed Elettroniche). Quando un elettrodomestico non è più riparabile, lo ritiriamo e lo consegniamo ai centri di smaltimento autorizzati, nel rispetto della normativa europea e locale. È un servizio etico che evita lo smaltimento irregolare.",
      },
      {
        q: "Fate la pulizia e manutenzione delle asciugatrici?",
        a: "Sì, MIT esegue la pulizia professionale e la manutenzione programmata delle asciugatrici, inclusa la pulizia del condensatore, del filtro, dei condotti e delle resistenze. Una manutenzione regolare aumenta l'efficienza energetica, riduce i consumi e prolunga la vita dell'apparecchio prevenendo rischi di surriscaldamento.",
      },
      {
        q: "Offrite servizi di climatizzazione e frigorista in Trentino?",
        a: "MIT offre servizi professionali di climatizzazione e refrigerazione per uso domestico in tutto il Trentino-Alto Adige: installazione, manutenzione stagionale e riparazione di climatizzatori split e multi-split, con tecnici certificati F-Gas.",
      },
    ],
  },
  {
    category: "Aree e copertura",
    items: [
      {
        q: "Coprite anche Bolzano e l'Alto Adige?",
        a: "Sì, operiamo in tutta la provincia di Trento (Trento, Rovereto, Pergine Valsugana, Riva del Garda, Cles, Borgo Valsugana, Arco e molti altri comuni) e nelle principali aree della provincia di Bolzano (Bolzano città, Merano, Laives, Bressanone, Egna). Il costo del sopralluogo è fisso a 70€ indipendentemente dalla distanza.",
      },
      {
        q: "Riparate elettrodomestici anche nelle valli del Trentino?",
        a: "Sì, MIT copre tutto il territorio trentino incluse le valli: Val di Non, Val di Sole, Val Rendena, Val di Cembra, Valsugana, Valle del Sarca, Giudicarie e Primiero. Stesso prezzo, stesso servizio ovunque — 70€ per sopralluogo e diagnosi.",
      },
    ],
  },
  {
    category: "Come contattarci e prenotare",
    items: [
      {
        q: "Come si prenota un intervento con MIT in Trentino?",
        a: "Puoi prenotare in tre modi: telefonando al 339 507 8587 (Lun–Ven 8–18, Sab 8–13), inviando un messaggio WhatsApp allo stesso numero, oppure compilando il modulo di contatto su questo sito. Risponderemo entro poche ore per concordare data e orario del sopralluogo.",
      },
      {
        q: "MIT è disponibile anche il sabato?",
        a: "Sì, MIT è disponibile anche il sabato mattina. Gli orari di operatività sono: lunedì–venerdì dalle 8:00 alle 18:00, sabato dalle 8:00 alle 13:00. Per urgenze fuori orario, scrivere via WhatsApp e saremo ricontattati appena disponibili.",
      },
      {
        q: "Quali metodi di pagamento accettate?",
        a: "MIT accetta i principali metodi di pagamento: contanti, bonifico bancario e pagamento con carta o bancomat direttamente a domicilio. Il pagamento avviene a intervento completato, non in anticipo.",
      },
      {
        q: "Devo essere presente a casa durante la riparazione?",
        a: "Sì, è necessaria la presenza di un adulto durante il sopralluogo e la riparazione. Il tecnico ha bisogno di accedere all'elettrodomestico e di poter comunicare direttamente con il cliente per spiegare il problema riscontrato e concordare il preventivo.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <div>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow text-xs text-primary">FAQ</span>
          <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-secondary">
            Domande Frequenti
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Tutto quello che devi sapere sulla riparazione di elettrodomestici in
            Trentino-Alto Adige. Non trovi la risposta?{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-primary font-semibold hover:underline">
              Chiamaci
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {FAQ_CATEGORIES.map((cat, ci) => (
          <AnimateIn key={cat.category} delay={ci * 60}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px flex-1 bg-border" />
                <h2 className="font-display font-bold text-lg text-secondary whitespace-nowrap">
                  {cat.category}
                </h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${ci}-${i}`}
                    className="rounded-xl bg-white border border-border px-5 shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-base text-secondary hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="faq-answer text-foreground/80 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <LeafDivider />
          <h2 className="mt-6 font-display font-bold text-2xl sm:text-3xl text-secondary">
            Non hai trovato risposta?
          </h2>
          <p className="mt-3 text-foreground/70">
            Contattaci direttamente: risponderemo in poche ore.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="h-4 w-4" /> Chiama Ora
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold">
              <a href={SITE.whatsappDefault} target="_blank" rel="noopener">
                <MessageCircle className="h-4 w-4" /> Scrivi su WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
