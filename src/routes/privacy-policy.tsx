import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Manutenzione Integrata Trentino" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali ai sensi del GDPR — Manutenzione Integrata Trentino.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    title: "1. Titolare del trattamento",
    content: (
      <div className="space-y-1">
        <p>Il Titolare del trattamento è:</p>
        <ul className="mt-3 space-y-1 pl-4">
          <li>
            <strong>Shanti Agosta</strong>
          </li>
          <li>P. IVA 02830530222</li>
          <li>
            Email:{" "}
            <a
              href="mailto:privacy@mittrentino.it"
              className="text-primary hover:underline"
            >
              privacy@mittrentino.it
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2. Dati personali trattati",
    content: (
      <div className="space-y-3">
        <p>
          Attraverso il modulo di contatto possono essere raccolti i seguenti
          dati personali:
        </p>
        <ul className="space-y-1.5 pl-2">
          {[
            "Nome e cognome",
            "Indirizzo e-mail",
            "Numero di telefono",
            "Eventuali ulteriori informazioni inserite spontaneamente dall'utente nel messaggio",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "3. Finalità del trattamento",
    content: (
      <div className="space-y-3">
        <p>I dati personali sono trattati esclusivamente per:</p>
        <ul className="space-y-1.5 pl-2">
          {[
            "rispondere alle richieste di informazioni inviate tramite il sito;",
            "ricontattare l'utente per fornire chiarimenti, preventivi o informazioni relative ai servizi richiesti;",
            "adempiere ad eventuali obblighi di legge.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Qualora venga richiesto uno specifico consenso, i dati potranno essere
          utilizzati anche per l'invio di comunicazioni informative o
          promozionali relative all'attività del Titolare.
        </p>
      </div>
    ),
  },
  {
    title: "4. Base giuridica del trattamento",
    content: (
      <div className="space-y-3">
        <p>La base giuridica del trattamento è costituita:</p>
        <ul className="space-y-1.5 pl-2">
          {[
            "dall'esecuzione di misure precontrattuali adottate su richiesta dell'interessato ai sensi dell'art. 6, par. 1, lett. b) del GDPR;",
            "dall'adempimento di obblighi di legge ai sensi dell'art. 6, par. 1, lett. c) del GDPR;",
            "dal consenso dell'interessato, ove richiesto, ai sensi dell'art. 6, par. 1, lett. a) del GDPR.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "5. Modalità di trattamento",
    content: (
      <p>
        I dati personali sono trattati mediante strumenti informatici e
        telematici, adottando misure tecniche e organizzative adeguate a
        garantire la sicurezza, la riservatezza e l'integrità delle
        informazioni.
      </p>
    ),
  },
  {
    title: "6. Conservazione dei dati",
    content: (
      <div className="space-y-3">
        <p>
          I dati raccolti tramite il modulo di contatto saranno conservati per
          il tempo strettamente necessario a gestire la richiesta ricevuta e,
          comunque, per un periodo non superiore a{" "}
          <strong>24 mesi</strong>, salvo obblighi di legge o necessità di
          tutela dei diritti del Titolare.
        </p>
        <p>
          I dati trattati per finalità di marketing saranno conservati fino alla
          revoca del consenso e comunque per un periodo massimo di 24 mesi.
        </p>
      </div>
    ),
  },
  {
    title: "7. Comunicazione dei dati",
    content: (
      <div className="space-y-3">
        <p>I dati personali non saranno diffusi.</p>
        <p>
          Potranno essere comunicati a soggetti terzi che forniscono servizi
          tecnici, di hosting, manutenzione del sito o supporto informatico,
          nominati Responsabili del trattamento ai sensi dell'art. 28 del GDPR.
        </p>
      </div>
    ),
  },
  {
    title: "8. Trasferimento dei dati verso Paesi terzi",
    content: (
      <p>
        Qualora il sito utilizzi servizi forniti da soggetti stabiliti al di
        fuori dello Spazio Economico Europeo, il trasferimento dei dati
        avverrà nel rispetto delle disposizioni previste dagli articoli 44 e
        seguenti del GDPR.
      </p>
    ),
  },
  {
    title: "9. Diritti dell'interessato",
    content: (
      <div className="space-y-3">
        <p>
          L'interessato può esercitare in qualsiasi momento i diritti previsti
          dagli articoli 15 e seguenti del GDPR, tra cui:
        </p>
        <ul className="space-y-1.5 pl-2">
          {[
            "ottenere conferma dell'esistenza dei propri dati personali;",
            "richiederne l'accesso;",
            "richiederne la rettifica;",
            "richiederne la cancellazione;",
            "richiederne la limitazione del trattamento;",
            "opporsi al trattamento;",
            "richiedere la portabilità dei dati;",
            "revocare il consenso eventualmente prestato.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Le richieste possono essere inviate all'indirizzo e-mail:{" "}
          <a
            href="mailto:privacy@mittrentino.it"
            className="text-primary hover:underline font-medium"
          >
            privacy@mittrentino.it
          </a>
          .
        </p>
        <p>
          L'interessato ha inoltre diritto di proporre reclamo all'Autorità
          Garante per la Protezione dei Dati Personali.
        </p>
      </div>
    ),
  },
  {
    title: "10. Natura del conferimento dei dati",
    content: (
      <p>
        Il conferimento dei dati richiesti nel modulo di contatto è
        facoltativo, ma il mancato conferimento potrebbe rendere impossibile
        rispondere alla richiesta inviata dall'utente.
      </p>
    ),
  },
];

function PrivacyPolicyPage() {
  return (
    <div>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow text-xs text-primary">Legale</span>
          <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-secondary">
            Privacy Policy
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Informativa sul trattamento dei dati personali ai sensi dell'art. 13
            del Regolamento UE 2016/679 (GDPR)
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Ultimo aggiornamento: 18/06/2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-foreground/70 mb-10 leading-relaxed">
          Il presente documento descrive le modalità di trattamento dei dati
          personali degli utenti che compilano il modulo di contatto presente
          sul sito{" "}
          <a
            href={SITE.url}
            className="text-primary hover:underline"
          >
            www.mittrentino.it
          </a>
          .
        </p>

        <div className="space-y-6">
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              className="rounded-xl bg-white border border-border px-6 py-5 shadow-soft"
            >
              <h2 className="font-display font-bold text-lg text-secondary mb-3">
                {section.title}
              </h2>
              <div className="text-foreground/75 leading-relaxed text-sm">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
