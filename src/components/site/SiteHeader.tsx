import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/faq", label: "FAQ" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/96 backdrop-blur transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_-8px_rgba(58,102,21,0.18)] border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-secondary rounded-md transition-colors"
              activeProps={{ className: "text-primary font-semibold bg-green-soft/60" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm hidden sm:flex"
          >
            <a href={`tel:${SITE.phoneTel}`} aria-label={`Chiama ora ${SITE.phoneDisplay}`}>
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Chiama Ora</span>
            </a>
          </Button>
          <button
            className="lg:hidden p-2 rounded-md text-secondary hover:bg-muted transition-colors"
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-foreground/80 border-b border-border/50 last:border-0"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-accent-foreground font-semibold"
            >
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
