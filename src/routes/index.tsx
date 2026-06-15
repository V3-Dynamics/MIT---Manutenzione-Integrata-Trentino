import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Globe2,
  Hammer,
  Leaf,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Recycle,
  Send,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  TrendingDown,
  Wind,
  Wrench,
  XCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimateIn } from "@/components/site/AnimateIn";
import { LeafDivider } from "@/components/site/LeafDivider";
import { BrandsSlider } from "@/components/site/BrandsSlider";
import { ElectricVanBanner } from "@/components/site/ElectricVanBanner";
import { SITE } from "@/lib/site";
import {
  sendContactEmail,
  type ContactFormData,
} from "@/lib/api/contact.functions";
import heroImg from "@/assets/hero-technician.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Riparazione Elettrodomestici a Domicilio in Trentino | MIT — Manutenzione Integrata Trentino",
      },
      {
        name: "description",
        content:
          "Riparazione professionale di lavatrici, lavastoviglie, frigoriferi, forni e asciugatrici a domicilio in Trentino-Alto Adige. Sopralluogo fisso 70€ ovunque in provincia.",
      },
      {
        name: "keywords",
        content:
          "riparazione lavatrice Trento, riparazione frigorifero Trentino, assistenza lavastoviglie Bolzano, tecnico elettrodomestici domicilio, riparazione asciugatrice Trento, riparazione forno elettrico Rovereto, elettrodomestici da incasso Trentino",
      },
      {
        property: "og:title",
        content: "Riparazione Elettrodomestici a Domicilio in Trentino | MIT",
      },
      {
        property: "og:description",
        content:
          "Sopralluogo fisso 70€ in tutto il Trentino. Lavatrici, frigoriferi, lavastoviglie, forni e asciugatrici a domicilio in 24–48 ore.",
      },
      { property: "og:url", content: `${SITE.url}/` },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Manutenzione Integrata Trentino",
          description:
            "Riparazione e assistenza grandi elettrodomestici a domicilio in Trentino Alto Adige. Intervento entro 24 ore su lavatrice, frigorifero, lavastoviglie, asciugatrice, forno.",
          telephone: SITE.phoneTel,
          priceRange: "€€",
          openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-13:00",
          areaServed: [
            { "@type": "City", name: "Trento" },
            { "@type": "City", name: "Bolzano" },
            { "@type": "City", name: "Rovereto" },
            { "@type": "City", name: "Merano" },
            { "@type": "AdministrativeArea", name: "Trentino-Alto Adige" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servizi di riparazione",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione lavatrice a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione frigorifero" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assistenza lavastoviglie" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione asciugatrice" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione forno elettrico e piano cottura" } },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "52",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Riparazione Elettrodomestici a Domicilio in Trentino | MIT",
          url: `${SITE.url}/`,
          description: "Riparazione professionale di lavatrici, lavastoviglie, frigoriferi, forni e asciugatrici a domicilio in Trentino-Alto Adige. Sopralluogo fisso 70€ ovunque in provincia.",
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "h2", ".faq-answer"],
          },
          about: {
            "@type": "LocalBusiness",
            name: "Manutenzione Integrata Trentino",
            description: "Riparazione elettrodomestici a domicilio con sopralluogo fisso 70€ in Trentino-Alto Adige. Paghi solo se ripariamo.",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const HOME_FAQS = [
  {
    q: "Quanto costa riparare una lavatrice a Trento?",
    a: "Il costo di riparazione di una lavatrice a Trento dipende dal tipo di guasto, ma con MIT il sopralluogo e la diagnosi hanno un costo fisso di 70€, valido in tutta la provincia di Trento e Alto Adige. Il preventivo finale viene fornito prima di procedere con qualsiasi intervento.",
  },
  {
    q: "Conviene riparare o comprare un nuovo elettrodomestico?",
    a: "In molti casi riparare è la scelta più conveniente e sostenibile. La riparazione di un grande elettrodomestico costa in media il 60–70% in meno rispetto all'acquisto di uno nuovo. MIT valuta gratuitamente la situazione e ti consiglia solo se la riparazione è economicamente vantaggiosa.",
  },
  {
    q: "Entro quanto tempo interviene un tecnico a domicilio?",
    a: "MIT garantisce interventi entro 24–48 ore dalla chiamata in tutta la zona Trentino-Alto Adige. L'intervento avviene direttamente a domicilio, senza necessità di trasportare l'elettrodomestico.",
  },
  {
    q: "Il sopralluogo è fisso ovunque in Trentino?",
    a: "Sì. Il sopralluogo e la prima diagnosi hanno un costo fisso di 70€ in tutta la provincia di Trento e Alto Adige, senza costi aggiuntivi per la distanza. Se procedi con la riparazione, questo importo viene scalato dal preventivo finale.",
  },
  {
    q: "La riparazione è coperta da garanzia?",
    a: "Sì, ogni intervento è coperto da garanzia su manodopera e ricambi installati. In caso di recidiva dello stesso guasto entro il periodo di garanzia, il secondo intervento è gratuito.",
  },
  {
    q: "Come si contatta MIT per una riparazione in Trentino?",
    a: "Puoi contattare Manutenzione Integrata Trentino (MIT) telefonando al 345 123 3567, inviando un messaggio WhatsApp allo stesso numero, oppure compilando il modulo online su questo sito. L'orario di disponibilità è lunedì–venerdì 8:00–18:00 e sabato 8:00–13:00.",
  },
];

const SERVICES_GRID = [
  { icon: Wrench,        title: "Riparazione",           desc: "Lavatrici, lavastoviglie, frigoriferi, forni, asciugatrici" },
  { icon: Hammer,        title: "Installazione",          desc: "Messa in opera, collaudo e allaccio di nuovi elettrodomestici" },
  { icon: Recycle,       title: "Smaltimento RAEE",       desc: "Ritiro e smaltimento certificato degli apparecchi dismessi" },
  { icon: Snowflake,     title: "Climatizzazione",        desc: "Installazione e manutenzione climatizzatori e sistemi split" },
  { icon: ShieldCheck,   title: "Post-Intervento",        desc: "Assistenza garantita dopo ogni riparazione effettuata" },
  { icon: CalendarCheck, title: "Manutenzione",           desc: "Check-up periodici per prolungare la vita degli elettrodomestici" },
  { icon: Wind,          title: "Pulizia Asciugatrici",   desc: "Pulizia profonda condensatore, filtri e condotti" },
];

const TRUST_ITEMS = [
  { icon: Wrench,       title: "Tecnici Certificati",   desc: "Professionisti qualificati, formati su ogni marca e modello." },
  { icon: Leaf,         title: "Filosofia Green",        desc: "Riparare è meglio che buttare. Meno rifiuti, più risparmio." },
  { icon: ShieldCheck,  title: "Garanzia Inclusa",       desc: "Manodopera e ricambi garantiti su ogni intervento eseguito." },
];

const REASONS = [
  "Sopralluogo e diagnosi a prezzo fisso: <strong>70€ ovunque in Trentino</strong>",
  "Tecnici certificati e qualificati",
  "Ricambi originali garantiti",
  "Diagnosi onesta: se non conviene riparare, te lo diciamo",
  "Intervento rapido: 24–48 ore",
  "Assistenza post-intervento inclusa",
  "Smaltimento RAEE etico e certificato",
  "Copertura di tutte le valli del Trentino",
];

const CITIES = [
  "Trento", "Rovereto", "Bolzano", "Merano", "Pergine Valsugana",
  "Riva del Garda", "Arco", "Cles", "Borgo Valsugana", "Lavis",
  "Tione", "Bressanone", "Mori", "Levico Terme", "Mezzolombardo",
];

type QCFormValues = Pick<ContactFormData, "name" | "phone" | "appliance" | "problem" | "honeypot">;

const QC_APPLIANCES = ["Lavatrice", "Lavastoviglie", "Frigorifero", "Forno", "Piano cottura", "Asciugatrice", "Climatizzatore", "Altro"] as const;

function QuickContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<QCFormValues & { privacy: boolean }>({
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(values: QCFormValues & { privacy: boolean }) {
    setServerError(null);
    try {
      await sendContactEmail({
        data: {
          name: values.name,
          phone: values.phone,
          email: "",
          city: "",
          appliance: values.appliance,
          problem: values.problem,
          honeypot: values.honeypot ?? "",
        },
      });
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Errore imprevisto. Riprova.");
    }
  }

  if (isSubmitSuccessful && !serverError) {
    return (
      <div className="rounded-xl bg-green-soft border border-primary/30 text-secondary p-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <h3 className="font-display font-bold text-lg">Richiesta inviata!</h3>
        </div>
        <p className="text-sm text-foreground/80">
          Grazie. Ti ricontattiamo entro poche ore per concordare il sopralluogo.
          Puoi anche chiamarci subito al{" "}
          <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-primary">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-7">
      <input
        {...register("honeypot")}
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />
      <div className="sm:col-span-2">
        <Label htmlFor="qc-name">Nome e Cognome *</Label>
        <Input
          id="qc-name"
          {...register("name", { required: "Campo obbligatorio", minLength: { value: 2, message: "Min. 2 caratteri" } })}
          className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
          autoComplete="name"
          placeholder="Mario Rossi"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive" role="alert">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="qc-phone">Telefono *</Label>
        <Input
          id="qc-phone"
          type="tel"
          {...register("phone", { required: "Campo obbligatorio", minLength: { value: 6, message: "Numero non valido" } })}
          className={`mt-1 ${errors.phone ? "border-destructive" : ""}`}
          autoComplete="tel"
          placeholder="+39 345 000 0000"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-xs text-destructive" role="alert">{errors.phone.message}</p>}
      </div>
      <div>
        <Label htmlFor="qc-appliance">Elettrodomestico *</Label>
        <Select onValueChange={(v) => setValue("appliance", v, { shouldValidate: true })}>
          <SelectTrigger
            id="qc-appliance"
            aria-invalid={!!errors.appliance}
            className={`mt-1 w-full ${errors.appliance ? "border-destructive" : ""}`}
          >
            <SelectValue placeholder="Seleziona..." />
          </SelectTrigger>
          <SelectContent>
            {QC_APPLIANCES.map((o) => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" {...register("appliance", { required: "Seleziona un elettrodomestico" })} />
        {errors.appliance && <p className="mt-1 text-xs text-destructive" role="alert">{errors.appliance.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="qc-problem">Descrivi brevemente il problema *</Label>
        <Textarea
          id="qc-problem"
          {...register("problem", { required: "Campo obbligatorio", minLength: { value: 10, message: "Min. 10 caratteri" } })}
          rows={3}
          className={`mt-1 ${errors.problem ? "border-destructive" : ""}`}
          placeholder="Es. la lavatrice non centrifuga..."
          aria-invalid={!!errors.problem}
        />
        {errors.problem && <p className="mt-1 text-xs text-destructive" role="alert">{errors.problem.message}</p>}
      </div>
      <div className="sm:col-span-2 flex items-start gap-2">
        <Checkbox
          id="qc-privacy"
          required
          className="mt-1"
          onCheckedChange={(c) => setValue("privacy", Boolean(c), { shouldValidate: true })}
        />
        <Label htmlFor="qc-privacy" className="text-sm font-normal text-foreground/75">
          Accetto la <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> *
        </Label>
      </div>
      {serverError && (
        <div role="alert" className="sm:col-span-2 flex items-start gap-2 rounded-lg bg-destructive/10 border border-destructive/30 p-3 text-xs text-destructive">
          <XCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}
      <div className="sm:col-span-2 mt-10">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {isSubmitting ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Invio in corso...</>
          ) : (
            <><Send className="h-4 w-4" /> Invia Richiesta</>
          )}
        </Button>
      </div>
    </form>
  );
}

function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-background to-green-soft/40">
        <div aria-hidden className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-green-soft opacity-60 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-amber-soft opacity-80 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-22 grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="animate-mit-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-secondary shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Trentino-Alto Adige · Intervento a domicilio
            </span>
            <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Riparazione{" "}
              <span className="text-primary">elettrodomestici</span>
              <br />a domicilio in{" "}
              <span className="text-secondary">Trentino</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/75 max-w-xl leading-relaxed">
              Lavatrici, lavastoviglie, frigoriferi, forni e asciugatrici.
              Sopralluogo e diagnosi a prezzo fisso:{" "}
              <strong className="text-secondary">70€</strong> ovunque in
              Trentino-Alto Adige, senza sovrapprezzi per la distanza.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md animate-mit-pulse-ring">
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="h-4 w-4" /> Chiama Ora
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold">
                <a href={SITE.whatsappDefault} target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
              <li className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <strong>4,9/5</strong> · 52 recensioni
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Preventivo gratuito
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-primary" /> Politica green
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative animate-mit-scale-up" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-card">
              <img
                src={heroImg}
                alt="Tecnico MIT che ripara una lavatrice a domicilio a Trento — assistenza certificata in Trentino Alto Adige"
                width={1280}
                height={1280}
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-white rounded-xl shadow-card border border-border px-4 py-3 flex items-center gap-3 animate-mit-float">
              <div className="h-10 w-10 rounded-full bg-green-soft flex items-center justify-center text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-bold text-secondary leading-tight">24–48 ore</div>
                <div className="text-xs text-muted-foreground">Tempo medio di intervento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT ────────────────────────────────────── */}
      <section className="bg-white border-y border-border" id="contatta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: CTA info */}
          <AnimateIn direction="right">
            <div>
              <span className="eyebrow text-xs text-primary">Contattaci</span>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-secondary">
                Richiedi un intervento rapido
              </h2>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                Compila il modulo oppure chiamaci direttamente. Risposta
                garantita in giornata. <strong>Interveniamo in 24–48 ore</strong>{" "}
                in tutto il Trentino-Alto Adige.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <a
                  href={SITE.whatsappPreventivo}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Scrivi su WhatsApp</span>
                </a>
              </div>

              <div className="mt-6 rounded-xl bg-amber-soft border border-accent/30 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-secondary">
                      Sopralluogo fisso: 70€ ovunque
                    </p>
                    <p className="mt-1 text-sm text-foreground/75">
                      Da Trento a Bolzano, dalle valli ai centri minori — stesso
                      prezzo, nessun sovrapppezzo per la distanza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Form */}
          <AnimateIn delay={80}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display font-bold text-xl text-secondary mb-4">
                Modulo di richiesta rapida
              </h3>
              <QuickContactForm />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <AnimateIn key={title} delay={i * 80} direction="up">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center text-primary shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-secondary">{title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-xs text-primary">Cosa facciamo</span>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-secondary">
              I Nostri Servizi
            </h2>
            <p className="mt-3 text-foreground/70">
              Assistenza completa per i tuoi grandi elettrodomestici in tutta la regione.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICES_GRID.map(({ icon: Icon, title, desc }, i) => (
            <AnimateIn key={title} delay={i * 60} direction="up">
              <article className="group rounded-2xl bg-card border border-border p-5 hover:shadow-card hover:border-primary/30 transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-xl bg-green-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-base text-secondary">{title}</h3>
                <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </article>
            </AnimateIn>
          ))}
          {/* CTA card */}
          <AnimateIn delay={SERVICES_GRID.length * 60} direction="up">
            <Link
              to="/servizi"
              className="group rounded-2xl bg-primary text-primary-foreground p-5 flex flex-col justify-between hover:bg-primary/90 transition-colors h-full"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-base">
                  Tutti i servizi
                </h3>
                <p className="mt-1.5 text-sm text-primary-foreground/80">
                  Scopri la lista completa degli interventi
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                Scopri <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── BRANDS SLIDER ────────────────────────────────────── */}
      <BrandsSlider />

      {/* ── SUSTAINABILITY ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="right">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold">
                <Leaf className="h-3.5 w-3.5" /> Sostenibilità
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight">
                Ripara,{" "}
                <span className="text-accent">non buttare.</span>
              </h2>
              <div className="mt-5 space-y-4 text-secondary-foreground/85 text-lg leading-relaxed">
                <p>
                  MIT nasce da una convinzione: ogni elettrodomestico riparato è
                  un passo concreto verso un futuro più sostenibile. Scegliere la
                  riparazione significa ridurre i rifiuti elettronici (RAEE),
                  conservare risorse preziose e partecipare attivamente
                  all'economia circolare.
                </p>
                <p>
                  Crediamo che la manutenzione sia la forma più intelligente — e
                  più verde — di consumo responsabile. Per questo siamo qui, in
                  Trentino, ogni giorno.
                </p>
              </div>
              <div className="mt-7">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link to="/chi-siamo">
                    La nostra filosofia <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              { icon: Recycle,     title: "RAEE ridotti",     desc: "Gestiamo il corretto smaltimento degli elettrodomestici irreparabili" },
              { icon: TrendingDown, title: "–60% di costo",   desc: "Riparare costa in media il 60% in meno di un nuovo acquisto" },
              { icon: Globe2,      title: "CO₂ risparmiata",  desc: "Ogni riparazione evita kg di emissioni di CO₂ equivalente" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimateIn key={title} delay={i * 100} direction="up">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-5 flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-secondary-foreground/75">{desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELECTRIC VAN ─────────────────────────────────────── */}
      <ElectricVanBanner />

      {/* ── WHY MIT ──────────────────────────────────────────── */}
      <section className="bg-[#F5F2EC] border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <AnimateIn direction="right">
            <div>
              <span className="eyebrow text-xs text-primary">Perché noi</span>
              <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-secondary leading-tight">
                Perché scegliere MIT?
              </h2>
              <p className="mt-3 text-foreground/70 max-w-md leading-relaxed">
                Tecnici locali, prezzi fissi, nessuna sorpresa. Un servizio pensato
                per le famiglie del Trentino-Alto Adige.
              </p>

              {/* Price badge */}
              <div className="mt-6 mb-8 inline-flex items-center gap-2 rounded-full bg-secondary text-green-soft px-4 py-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Sopralluogo e diagnosi a 70€ fissi — ovunque in Trentino
              </div>

              {/* Groups */}
              <div className="flex flex-col gap-6">
                {/* Group 1 */}
                <div>
                  <p className="eyebrow text-[11px] text-primary/70 mb-3">Qualità e trasparenza</p>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <CheckCircle2 className="h-[17px] w-[17px] shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span>Tecnici <strong className="font-semibold">certificati e qualificati</strong></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <CheckCircle2 className="h-[17px] w-[17px] shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span>Ricambi originali garantiti</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <CheckCircle2 className="h-[17px] w-[17px] shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span>Diagnosi onesta: se non conviene riparare, <strong className="font-semibold">te lo diciamo</strong></span>
                    </li>
                  </ul>
                </div>


                <div className="h-px bg-border" />

                {/* Group 3 */}
                <div>
                  <p className="eyebrow text-[11px] text-primary/70 mb-3">Dopo l'intervento</p>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <CheckCircle2 className="h-[17px] w-[17px] shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span>Assistenza post-intervento inclusa</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <Leaf className="h-[17px] w-[17px] shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span>Smaltimento RAEE etico e certificato</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT CARD */}
          <AnimateIn delay={100}>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card lg:sticky lg:top-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-soft text-secondary px-3 py-1.5 text-xs font-semibold">
                  <span className="h-[7px] w-[7px] rounded-full bg-primary inline-block" />
                  Disponibili oggi
                </span>
                <span className="text-xs text-muted-foreground">Risposta in giornata</span>
              </div>

              {/* Phone */}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block font-display font-bold text-[1.9rem] leading-none text-secondary hover:text-primary transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-2 mb-5 text-sm text-foreground/70 leading-relaxed">
                Chiama o scrivi su WhatsApp per fissare il sopralluogo. Nessun anticipo richiesto.
              </p>

              {/* CTAs */}
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold mb-2.5">
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="h-4 w-4" /> Chiama ora
                </a>
              </Button>
              {/* CTAs */}
              <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold mb-2.5">
                <a href={SITE.whatsappDefault} target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" /> Scrivi su WhatsApp
                </a>
              </Button>

              <div className="h-px bg-border my-5" />

              {/* Trust */}
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-xs text-secondary">
                  <ShieldCheck className="h-[15px] w-[15px] text-secondary shrink-0" />
                  Nessun anticipo · Preventivo gratuito
                </li>
                <li className="flex items-center gap-2 text-xs text-secondary">
                  <Star className="h-[15px] w-[15px] text-secondary shrink-0" />
                  Tecnici certificati con garanzia sul lavoro
                </li>
                <li className="flex items-center gap-2 text-xs text-secondary">
                  <MapPin className="h-[15px] w-[15px] text-secondary shrink-0" />
                  70€ fissi per il sopralluogo, ovunque in Trentino
                </li>
              </ul>
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ── CITIES ───────────────────────────────────────────── */}
      <section className="bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <AnimateIn>
            <div className="text-center mb-8">
              <span className="eyebrow text-xs text-primary">Copertura</span>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-secondary">
                Interveniamo in tutta la regione
              </h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={60}>
            <div className="flex flex-wrap justify-center gap-2">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 text-sm font-medium text-secondary shadow-sm"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {city}
                </span>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={120}>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Non trovi la tua zona?{" "}
              <a
                href={SITE.whatsappDefault}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-[#25D366] font-semibold hover:underline"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Scrivici su WhatsApp
              </a>{" "}
              e verifichiamo insieme la copertura.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <LeafDivider />
          <AnimateIn>
            <div className="text-center mt-6">
              <span className="eyebrow text-xs text-primary">FAQ</span>
              <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-secondary">
                Domande Frequenti
              </h2>
              <p className="mt-3 text-foreground/70">
                Le risposte alle domande più cercate in Trentino-Alto Adige
              </p>
            </div>
          </AnimateIn>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {HOME_FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl bg-white border border-border px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base text-secondary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="faq-answer text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline text-sm">
              Tutte le domande frequenti <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <AnimateIn direction="scale">
            <h2 className="font-display font-bold text-3xl sm:text-4xl">
              Il tuo elettrodomestico è guasto?
            </h2>
            <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto text-lg">
              Chiamaci adesso. In Trentino-Alto Adige, ovunque tu sia, interveniamo
              allo stesso prezzo: <strong>70€</strong> per sopralluogo e diagnosi.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md">
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold">
                <a href={SITE.whatsappDefault} target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" /> Scrivi su WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70">
              Lun–Ven 8:00–18:00 · Sab 8:00–13:00
            </p>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
