import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 border-t border-border bg-white pb-14 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-secondary font-display font-semibold text-lg max-w-sm leading-snug">
            Riparare è la scelta più verde.
          </p>
          <p className="text-sm text-foreground/65 max-w-sm leading-relaxed">
            Assistenza e riparazione grandi elettrodomestici a domicilio in tutto
            il Trentino-Alto Adige.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-soft text-secondary px-3 py-1 text-xs font-semibold border border-primary/20">
            <Leaf className="h-3.5 w-3.5 text-primary" />
            Economia circolare · RAEE certificato
          </span>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="eyebrow text-xs text-secondary mb-3">Navigazione</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/servizi" className="text-foreground/70 hover:text-primary transition-colors">Servizi</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/chi-siamo" className="text-foreground/70 hover:text-primary transition-colors">Chi Siamo</Link></li>
            <li><Link to="/contatti" className="text-foreground/70 hover:text-primary transition-colors">Contatti</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow text-xs text-secondary mb-3">Contatti</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary shrink-0" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.whatsappDefault} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-foreground/70 hover:text-[#25D366] transition-colors">
                <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={SITE.mailtoDefault} className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary shrink-0" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Trentino-Alto Adige</span>
            </li>
            <li className="text-muted-foreground text-xs leading-relaxed">
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Cities quick links for SEO */}
      <div className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-muted-foreground text-center">
            Riparazione elettrodomestici a domicilio in tutta la regione Trentino-Alto Adige.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {year} {SITE.name}. {SITE.piva}</span>
          <span>Sito a basso impatto · realizzato con cura in Trentino</span>
        </div>
      </div>
    </footer>
  );
}
