const WA_TEXT = encodeURIComponent(
  "Buongiorno, vorrei richiedere un intervento di riparazione per un grande elettrodomestico.\n\nTipo di elettrodomestico:\n\nMarca e modello:\n\nProblema riscontrato:\n\nResto in attesa di un vostro riscontro per fissare un appuntamento, grazie."
);

const MAIL_PARAMS =
  "subject=" +
  encodeURIComponent("Richiesta riparazione elettrodomestico") +
  "&body=" +
  encodeURIComponent(
    "Buongiorno,\n\nvi scrivo per richiedere un intervento di riparazione per un grande elettrodomestico.\n\nTipo di elettrodomestico:\n\nMarca e modello:\n\nProblema riscontrato:\n\nResto in attesa di un vostro gentile riscontro per organizzare un appuntamento.\n\nCordiali saluti."
  );

export const SITE = {
  name: "Manutenzione Integrata Trentino",
  short: "MIT",
  url: "https://www.mantenzioneintegrata.it",
  phoneDisplay: "351 498 4550",
  phoneTel: "+393514984550",
  whatsappNumber: "393514984550",
  whatsappDefault: `https://wa.me/393514984550?text=${WA_TEXT}`,
  whatsappPreventivo: `https://wa.me/393514984550?text=${WA_TEXT}`,
  email: "info@mittrentino.it",
  mailtoDefault: `mailto:info@mittrentino.it?${MAIL_PARAMS}`,
  area: "Trentino-Alto Adige",
  hours: "Mer–Dom: 8:30–18:00 | Lun–Mar: solo WhatsApp",
  piva: "P.IVA 02830530222",
} as const;
