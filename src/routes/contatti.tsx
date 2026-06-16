import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";
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
import { AddressAutocomplete } from "@/components/site/AddressAutocomplete";
import { SITE } from "@/lib/site";
import {
  sendContactEmail,
  type ContactFormData,
} from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti | MIT — Richiedi un intervento in Trentino-Alto Adige" },
      {
        name: "description",
        content:
          "Contatta MIT per riparazione elettrodomestici a domicilio in Trentino-Alto Adige. Telefono, WhatsApp o modulo online: interveniamo in 24–48 ore. Sopralluogo fisso 70€.",
      },
      { property: "og:title", content: "Contatti — MIT Trentino" },
      {
        property: "og:description",
        content:
          "Telefono, WhatsApp o modulo online. Sopralluogo fisso 70€ in tutta la provincia di Trento e Alto Adige.",
      },
      { property: "og:url", content: `${SITE.url}/contatti` },
      { property: "og:image", content: `${SITE.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contatti` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contatta MIT — Riparazione Elettrodomestici Trentino",
          description:
            "Richiedi un intervento a domicilio. Sopralluogo fisso 70€ ovunque in Trentino-Alto Adige.",
          url: `${SITE.url}/contatti`,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contatti",
                item: `${SITE.url}/contatti`,
              },
            ],
          },
          mainEntity: {
            "@type": "HowTo",
            name: "Come richiedere un intervento MIT",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Compila il modulo",
                text: "Inserisci nome, telefono, comune, tipo di elettrodomestico e descrizione del problema.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Ricevi la conferma",
                text: "Ti richiamiamo entro poche ore per concordare data e orario del sopralluogo.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Sopralluogo a domicilio",
                text: "Il tecnico arriva a casa tua, esegue la diagnosi e fornisce il preventivo (70€ fisso).",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Riparazione con garanzia",
                text: "Intervento con ricambi originali e garanzia su manodopera.",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ContattiPage,
});

const APPLIANCES = [
  "Lavatrice",
  "Lavastoviglie",
  "Frigorifero",
  "Forno",
  "Piano cottura",
  "Asciugatrice",
  "Climatizzatore",
  "Altro",
] as const;

type FormValues = ContactFormData & { privacy: boolean };

function ContattiForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    try {
      await sendContactEmail({
        data: {
          name: values.name,
          phone: values.phone,
          email: values.email ?? "",
          address: values.address,
          city: values.city ?? "",
          appliance: values.appliance,
          problem: values.problem,
          honeypot: values.honeypot ?? "",
        },
      });
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Errore imprevisto. Riprova.";
      setServerError(msg);
    }
  }

  if (isSubmitSuccessful && !serverError) {
    return (
      <div className="mt-6 rounded-xl bg-green-soft border border-primary/30 text-secondary p-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <h3 className="font-display font-bold text-lg">Richiesta inviata!</h3>
        </div>
        <p className="text-sm text-foreground/80">
          Grazie. Ti ricontattiamo entro poche ore per concordare il sopralluogo.
          Puoi anche chiamarci direttamente al{" "}
          <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-primary">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7"
    >
      {/* Honeypot — nascosto, cattura i bot */}
      <input
        {...register("honeypot")}
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />

      <div className="sm:col-span-2">
        <Label htmlFor="cnt-name">Nome e Cognome *</Label>
        <Input
          id="cnt-name"
          {...register("name", {
            required: "Campo obbligatorio",
            minLength: { value: 2, message: "Min. 2 caratteri" },
          })}
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={`mt-1.5 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="cnt-address">Indirizzo di intervento *</Label>
        <AddressAutocomplete
          id="cnt-address"
          value=""
          onChange={(v) => setValue("address", v, { shouldValidate: true })}
          error={!!errors.address}
        />
        <input
          type="hidden"
          {...register("address", {
            required: "Inserisci l'indirizzo di intervento",
            minLength: { value: 5, message: "Indirizzo troppo breve" },
          })}
        />
        {errors.address && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {errors.address.message}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">
          Inizia a digitare via e città — i suggerimenti appariranno automaticamente.
        </p>
      </div>

      <div>
        <Label htmlFor="cnt-phone">Telefono *</Label>
        <Input
          id="cnt-phone"
          type="tel"
          {...register("phone", {
            required: "Campo obbligatorio",
            minLength: { value: 6, message: "Numero non valido" },
          })}
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          className={`mt-1.5 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
          placeholder="+39 351 498 4550"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="cnt-email">
          Email{" "}
          <span className="text-muted-foreground font-normal">(opzionale)</span>
        </Label>
        <Input
          id="cnt-email"
          type="email"
          {...register("email")}
          autoComplete="email"
          className="mt-1.5"
        />
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="cnt-appliance">Tipo di elettrodomestico *</Label>
        <Select onValueChange={(v) => setValue("appliance", v, { shouldValidate: true })}>
          <SelectTrigger
            id="cnt-appliance"
            aria-invalid={!!errors.appliance}
            className={`mt-1.5 w-full ${errors.appliance ? "border-destructive" : ""}`}
          >
            <SelectValue placeholder="Seleziona un elettrodomestico" />
          </SelectTrigger>
          <SelectContent>
            {APPLIANCES.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="hidden"
          {...register("appliance", { required: "Seleziona un elettrodomestico" })}
        />
        {errors.appliance && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {errors.appliance.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="cnt-problem">Descrivi il problema *</Label>
        <Textarea
          id="cnt-problem"
          {...register("problem", {
            required: "Campo obbligatorio",
            minLength: {
              value: 10,
              message: "Descrizione troppo breve (min. 10 caratteri)",
            },
          })}
          rows={4}
          aria-invalid={!!errors.problem}
          className={`mt-1.5 ${errors.problem ? "border-destructive focus-visible:ring-destructive" : ""}`}
          placeholder="Es. la lavatrice non centrifuga, il frigorifero non raffredda..."
        />
        {errors.problem && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {errors.problem.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2 flex items-start gap-2">
        <Checkbox
          id="cnt-privacy"
          required
          className="mt-1"
          onCheckedChange={(checked) =>
            setValue("privacy", Boolean(checked), { shouldValidate: true })
          }
        />
        <Label
          htmlFor="cnt-privacy"
          className="text-sm font-normal text-foreground/80"
        >
          Ho letto e accetto la{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          *
        </Label>
      </div>

      {serverError && (
        <div
          role="alert"
          className="sm:col-span-2 flex items-start gap-2 rounded-lg bg-destructive/10 border border-destructive/30 p-3 text-sm text-destructive"
        >
          <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
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
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Invia Richiesta
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function ContattiPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="eyebrow text-xs text-primary">Contatti</span>
          <h1 className="mt-2 font-display font-bold text-4xl sm:text-5xl text-secondary">
            Contattaci
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Siamo pronti ad aiutarti. Interveniamo in 24–48 ore in tutto il
            Trentino-Alto Adige. Sopralluogo fisso{" "}
            <strong className="text-secondary">70€</strong> ovunque.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-8 lg:items-center">
        {/* FORM */}
        <AnimateIn className="lg:col-span-3" direction="right">
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card">
            <h2 className="font-display font-bold text-2xl text-secondary">
              Richiedi un Intervento
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ti rispondiamo in giornata. I campi con * sono obbligatori.
            </p>
            <ContattiForm />
          </div>
        </AnimateIn>

        {/* INFO */}
        <AnimateIn className="lg:col-span-2" delay={80}>
          <div className="space-y-5">
            {/* Contact card */}
            <div className="rounded-2xl bg-white border border-border p-6 shadow-soft">
              <span className="eyebrow text-xs text-primary">Contatti diretti</span>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-2 block font-display font-bold text-3xl text-secondary hover:text-primary transition-colors"
                aria-label={`Chiama MIT al numero ${SITE.phoneDisplay}`}
              >
                <Phone className="inline h-6 w-6 mr-2 text-primary" />
                {SITE.phoneDisplay}
              </a>
              <ul className="mt-10 space-y-3 text-sm">
                <li className="flex gap-2 text-foreground/80">
                  <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{SITE.hours}</span>
                </li>
                <li className="flex gap-2 text-foreground/80">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    Tutta la provincia di Trento e aree dell'Alto Adige
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-10 w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold"
              >
                <a
                  href={SITE.whatsappPreventivo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> Scrivi su WhatsApp
                </a>
              </Button>
            </div>

            {/* Price callout */}
            <div className="rounded-2xl bg-amber-soft border-2 border-accent/40 p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-3 py-1 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Prezzo fisso
              </span>
              <h3 className="mt-3 font-display font-bold text-xl text-secondary">
                Sopralluogo e diagnosi: 70€
              </h3>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Stesso prezzo in tutta la provincia, nessun costo aggiuntivo per
                la distanza. Se procedi con la riparazione, i 70€ vengono scalati
                dal preventivo finale.
              </p>
            </div>

            {/* Process */}
            <div className="rounded-2xl bg-green-soft border border-primary/20 p-6">
              <h3 className="font-display font-bold text-secondary mb-3">
                Cosa succede dopo la richiesta?
              </h3>
              <ol className="space-y-2 text-sm text-foreground/80">
                {[
                  "Ti chiamiamo entro poche ore",
                  "Concordiamo data e orario del sopralluogo",
                  "Il tecnico arriva a casa tua",
                  "Diagnosi e preventivo sul posto (70€)",
                  "Intervento con ricambi originali garantiti",
                ].map((step, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Privacy notice */}
            <p className="text-xs text-muted-foreground px-1">
              I dati inseriti nel modulo vengono utilizzati esclusivamente per
              rispondere alla tua richiesta e non vengono conservati in nessun
              database. Consulta la nostra{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
