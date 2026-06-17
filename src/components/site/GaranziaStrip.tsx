import { ShieldCheck } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function GaranziaStrip() {
  return (
    <AnimateIn direction="up">
      <div className="rounded-2xl bg-green-soft border border-primary/20 p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary shrink-0 shadow-soft">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-secondary">
            Ogni riparazione è coperta da garanzia
          </h3>
          <p className="mt-1 text-sm text-foreground/75 leading-relaxed max-w-3xl">
            Garantiamo manodopera e ricambi installati su ogni intervento effettuato. Se lo stesso guasto si ripresenta entro il periodo di garanzia per cause riconducibili al nostro intervento, il secondo intervento è <strong className="text-secondary">completamente gratuito</strong>.
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}
