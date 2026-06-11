## Sito MIT — Piano di costruzione

Costruirò un sito vetrina professionale in italiano per **Manutenzione Integrata Trentino** seguendo fedelmente la specifica del file .md.

### Struttura (4 pagine + routing TanStack)
- `/` — Home
- `/servizi` — Servizi
- `/chi-siamo` — Chi Siamo
- `/contatti` — Contatti

Ogni pagina avrà il proprio `head()` con title/description/og specifici. JSON-LD `LocalBusiness` nella root, `FAQPage` sulla Home.

### Brand & design
- **Palette**: amber `#F5A623` (primary), verde scuro `#3A7D1E` (secondary), verde chiaro `#7AB648`, bg `#FAFAF7`. Token semantici in `src/styles.css` (oklch), aggiornando primary/secondary/accent.
- **Tipografia**: Syne (headings) + DM Sans (body) via Google Fonts (link in `__root.tsx`).
- **Logo**: caricato come asset Lovable da `user-uploads://WhatsApp_Image_2026-06-11_at_10.59.50.jpeg`, usato nella navbar e nel footer.
- Card morbide, ombre verde-tinted, accenti foglia SVG.

### Componenti condivisi
- `SiteHeader` — navbar sticky con logo, link, CTA "Chiama Ora", menu hamburger mobile
- `SiteFooter` — logo, link, contatti, badge green
- `FloatingWhatsApp` — pulsante flottante bottom-right su tutte le pagine
- `MobileCallBar` — sticky bottom solo mobile
- Tutti inseriti in `__root.tsx` attorno all'`<Outlet />`

### Home (`/`)
1. Hero due colonne con badge località, H1 (con "Trentino-Alto Adige" in verde), sub, CTA Chiama/WhatsApp, trust signals, immagine tecnico (generata), card flottante "24–48 ore"
2. Trust bar 3 colonne (Sopralluogo 70€, Green, Paghi solo se ripariamo)
3. Servizi preview — grid 4 card
4. Filosofia Green — testo + decorazione foglia + 3 stat card
5. Perché scegliere MIT — checklist + card prenotazione
6. FAQ accordion (8 voci) + JSON-LD FAQPage
7. Footer (nel layout)

### Servizi (`/servizi`)
Hero compatto + 7 card servizio alternate left/right + CTA banner amber finale.

### Chi Siamo (`/chi-siamo`)
Hero + storia + 3 valori + 3 placeholder team + stats verdi.

### Contatti (`/contatti`)
Hero + form (con stato locale, alert al submit, TODO per backend) + colonna contatti (telefono, WhatsApp, orari, area servizio, callout 70€).

### Tecnico
- TanStack Router file-based routes in `src/routes/`
- shadcn `Accordion` per FAQ, `Button`, `Card`, `Input`, `Textarea`, `Select`, `Checkbox` per il form
- Icone `lucide-react`
- Immagini: 1 hero tecnico (generata via imagegen), logo come asset
- Placeholder numeri telefonici/P.IVA come da spec (`345 123 3567`, `+39XXXXXXXXXX` per i link `tel:`/`wa.me`)
- Form senza backend: success state locale + commento TODO per integrazione email

### Note
- Nessun backend/Lovable Cloud necessario per ora (form mock con TODO)
- SEO ottimizzato come da spec: meta per pagina, JSON-LD LocalBusiness + FAQPage, contenuto answer-friendly
- Tutto responsive mobile-first

Procedo con l'implementazione? Se hai un numero di telefono reale o un URL WhatsApp da usare, dimmelo, altrimenti uso `345 123 3567` come da specifica.