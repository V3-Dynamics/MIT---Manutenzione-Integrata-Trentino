import { CreditCard, FileText, ClipboardList } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const ITEMS = [
  {
    icon: FileText,
    title: "Clienti con assicurazione",
    desc: "Se l'elettrodomestico è coperto da polizza assicurativa, emettiamo dichiarazione scritta e preventivo ufficiale del guasto per supportare pratiche di rimborso o risarcimento.",
  },
  {
    icon: ClipboardList,
    title: "Come funziona il preventivo",
    desc: "Quando possibile, il preventivo viene comunicato direttamente durante la chiamata a domicilio. In caso contrario, il tecnico rientra in laboratorio, ricerca i ricambi — anche alternative più economiche — e ti contatta appena pronto.",
  },
  {
    icon: CreditCard,
    title: "Pagamenti accettati",
    desc: "Contanti, bonifico istantaneo, carta di credito / bancomat e PayPal. A intervento completato viene rilasciato scontrino fiscale cartaceo o digitale. Fattura disponibile su richiesta.",
  },
];

export function InfoAggiuntiveStrip() {
  return (
    <AnimateIn direction="up">
      <div className="rounded-2xl border border-border bg-white shadow-soft overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 sm:p-8 flex flex-col gap-3">
              <div className="h-10 w-10 rounded-xl bg-green-soft flex items-center justify-center text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-secondary">{title}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
