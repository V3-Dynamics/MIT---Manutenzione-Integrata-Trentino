import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "mit_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informativa cookie"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 z-[60] bg-secondary text-secondary-foreground shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.3)]"
    >
      {/* su mobile: sopra la call bar (bottom-14 md:bottom-0) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="flex-1 text-sm leading-relaxed text-secondary-foreground/90">
          Questo sito utilizza esclusivamente{" "}
          <strong className="font-semibold text-secondary-foreground">
            cookie tecnici necessari
          </strong>{" "}
          al funzionamento. Non vengono raccolti dati di profilazione né utilizzati
          servizi di tracciamento di terze parti.{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-primary-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Accetto
          </button>
          <button
            onClick={accept}
            aria-label="Chiudi"
            className="p-1.5 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
