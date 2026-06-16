import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Inserisci nome e cognome").max(100),
  phone: z.string().min(6, "Numero di telefono non valido").max(30),
  email: z.string().email("Email non valida").optional().or(z.literal("")),
  address: z.string().min(5, "Inserisci l'indirizzo di intervento").max(250),
  city: z.string().max(100).optional().or(z.literal("")),
  appliance: z.string().min(1, "Seleziona un elettrodomestico"),
  problem: z.string().min(10, "Descrivi il problema (min. 10 caratteri)").max(2000),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Rate limiting: max 3 invii per numero di telefono ogni 10 minuti
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(phone: string): boolean {
  const key = phone.replace(/\D/g, "").slice(-9);
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    // Honeypot: i bot riempiono questo campo, gli umani no
    if (data.honeypot) {
      return { ok: true };
    }

    if (!checkRateLimit(data.phone)) {
      throw new Error("Troppe richieste. Riprova tra qualche minuto.");
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // In sviluppo senza chiave: logga e simula successo
      if (process.env.NODE_ENV === "development") {
        console.log("[DEV] Email non inviata (RESEND_API_KEY mancante):", data);
        return { ok: true };
      }
      throw new Error("Servizio email non configurato. Chiamaci direttamente.");
    }

    const html = `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; }
  h2 { color: #3A5C12; border-bottom: 2px solid #6BA626; padding-bottom: 8px; }
  table { width: 100%; border-collapse: collapse; margin-top: 16px; }
  th { text-align: left; padding: 8px 12px; background: #f4f8ee; color: #3A5C12; width: 160px; font-weight: 600; }
  td { padding: 8px 12px; border-bottom: 1px solid #e8eee0; }
  .footer { margin-top: 24px; font-size: 12px; color: #888; }
</style></head>
<body>
<h2>Nuova richiesta intervento — MIT</h2>
<table>
  <tr><th>Nome e Cognome</th><td>${escapeHtml(data.name)}</td></tr>
  <tr><th>Telefono</th><td><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td></tr>
  <tr><th>Email</th><td>${data.email ? `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>` : "—"}</td></tr>
  <tr><th>Indirizzo intervento</th><td>${escapeHtml(data.address)}</td></tr>
  <tr><th>Elettrodomestico</th><td>${escapeHtml(data.appliance)}</td></tr>
  <tr><th>Problema</th><td>${escapeHtml(data.problem).replace(/\n/g, "<br>")}</td></tr>
</table>
<p class="footer">Inviato dal form di contatto su www.mantenzioneintegrata.it</p>
</body>
</html>`;

    const replyTo = data.email ? [data.email] : undefined;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MIT Sito Web <noreply@mantenzioneintegrata.it>",
        to: ["info@mantenzioneintegrata.it"],
        reply_to: replyTo,
        subject: `Nuova richiesta: ${data.appliance} — ${data.name} (${data.address})`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text().catch(() => "");
      console.error("Resend error:", res.status, err);
      throw new Error("Errore nell'invio. Riprova o chiamaci direttamente al 351 498 4550.");
    }

    return { ok: true };
  });
