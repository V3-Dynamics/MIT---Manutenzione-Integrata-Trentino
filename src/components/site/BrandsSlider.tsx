import { MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/site/AnimateIn";
import { SITE } from "@/lib/site";

import logoAEG from "@/assets/loghi_marche/AEG_Logo_2016-s1280.png";
import logoBeko from "@/assets/loghi_marche/Beko_Logo_2014-s1280.png";
import logoBosch from "@/assets/loghi_marche/Bosch_Logo_2002-s1280.png";
import logoElectrolux from "@/assets/loghi_marche/Electrolux_Logo_2015-s1280.png";
import logoHotpoint from "@/assets/loghi_marche/Hotpoint_Logo_2004-s1280.png";
import logoIndesit from "@/assets/loghi_marche/Indesit_Logo_1998-s1280.png";
import logoLG from "@/assets/loghi_marche/LG_Logo_2014-s1280.png";
import logoSiemens from "@/assets/loghi_marche/Siemens_Logo_1991-s1280.png";
import logoWhirlpool from "@/assets/loghi_marche/WhirlpoolBRAND-notR-2017Logo_1C_B.png";
import logoCandy from "@/assets/loghi_marche/candy-logo.png";
import logoHaier from "@/assets/loghi_marche/haier-logo.png";
import logoSamsung from "@/assets/loghi_marche/samsung-logo.png";

const BRANDS = [
  { src: logoBosch,      alt: "Bosch" },
  { src: logoSiemens,    alt: "Siemens" },
  { src: logoElectrolux, alt: "Electrolux" },
  { src: logoAEG,        alt: "AEG" },
  { src: logoSamsung,    alt: "Samsung" },
  { src: logoLG,         alt: "LG" },
  { src: logoWhirlpool,  alt: "Whirlpool" },
  { src: logoIndesit,    alt: "Indesit" },
  { src: logoHotpoint,   alt: "Hotpoint" },
  { src: logoBeko,       alt: "Beko" },
  { src: logoCandy,      alt: "Candy" },
  { src: logoHaier,      alt: "Haier" },
];

export function BrandsSlider() {
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-xs text-primary">Marche supportate</span>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-secondary">
              Ripariamo tutte le principali marche
            </h2>
            <p className="mt-3 text-sm text-foreground/65">
              Lavoriamo su tutti i grandi brand di elettrodomestici presenti sul mercato italiano.
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-l from-white to-transparent"
        />

        <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
          {[...BRANDS, ...BRANDS].map(({ src, alt }, i) => (
            <div
              key={`${alt}-${i}`}
              className="mx-6 flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-white px-6 py-4 shadow-soft"
            >
              <img
                src={src}
                alt={`Riparazione elettrodomestici ${alt}`}
                className="h-9 w-auto max-w-[110px] object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <AnimateIn delay={80}>
          <p className="mt-4 text-center text-sm text-foreground/65">
            Non vedi la marca del tuo elettrodomestico?{" "}
            <a
              href={SITE.whatsappDefault}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 font-semibold text-[#25D366] hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Contattaci direttamente
            </a>{" "}
            — interveniamo su quasi tutti i brand disponibili in Italia.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
