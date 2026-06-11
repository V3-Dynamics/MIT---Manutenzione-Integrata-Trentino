import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsappDefault}
      target="_blank"
      rel="noopener"
      aria-label="Scrivi su WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function MobileCallBar() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2 py-3 shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.25)]"
      aria-label={`Chiama ora ${SITE.phoneDisplay}`}
    >
      <Phone className="h-4 w-4" />
      Chiama Ora · {SITE.phoneDisplay}
    </a>
  );
}
