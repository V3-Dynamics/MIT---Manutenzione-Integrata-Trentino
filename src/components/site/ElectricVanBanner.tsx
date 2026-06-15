import { Globe2, Leaf, Wind, Zap } from "lucide-react";
import { AnimateIn } from "@/components/site/AnimateIn";

const STATS = [
  { icon: Zap,   title: "0 emissioni",   desc: "locali durante ogni intervento" },
  { icon: Leaf,  title: "Green first",   desc: "dal nostro garage al tuo domicilio" },
  { icon: Wind,  title: "Più silenzioso", desc: "zero rumore nei quartieri residenziali" },
  { icon: Globe2, title: "CO₂ risparmiata", desc: "un impegno concreto per il Trentino" },
];

export function ElectricVanBanner() {
  return (
    <section className="bg-green-soft/50 border-y border-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <AnimateIn direction="right">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-xs font-semibold text-primary">
              <Zap className="h-3.5 w-3.5" /> Mobilità 100% Elettrica
            </span>
            <h2 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-secondary">
              Interveniamo a bordo di un furgone full electric
            </h2>
            <div className="mt-4 space-y-3 text-foreground/75 leading-relaxed">
              <p>
                La nostra filosofia green non si ferma al laboratorio. I tecnici MIT
                raggiungono ogni domicilio a bordo di un{" "}
                <strong className="text-secondary">furgone 100% elettrico</strong>:
                zero emissioni locali, zero carburante fossile, zero rumore.
              </p>
              <p>
                Riparare invece di buttare riduce già i rifiuti elettronici. Muoversi
                in modo sostenibile è il passo successivo. Ogni intervento diventa così
                un atto completo di rispetto per l'ambiente e per le valli del Trentino.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ icon: Icon, title, desc }, i) => (
            <AnimateIn key={title} delay={i * 80} direction="up">
              <div className="rounded-2xl bg-white border border-primary/20 p-5 shadow-soft text-center h-full flex flex-col items-center">
                <div className="h-11 w-11 rounded-xl bg-green-soft text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display font-bold text-secondary text-sm sm:text-base leading-tight">
                  {title}
                </div>
                <div className="mt-1 text-xs text-foreground/60 leading-snug">{desc}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
