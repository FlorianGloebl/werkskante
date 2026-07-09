import { z } from "zod";

export const contactFormSchema = z.object({
  companyName: z.string().trim().min(2, "Bitte geben Sie Ihren Firmennamen an."),
  contactName: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().trim().optional().or(z.literal("")),
  employeeCount: z.string().trim().optional().or(z.literal("")),
  industry: z.string().trim().optional().or(z.literal("")),
  topic: z.string().trim().min(1, "Bitte wählen Sie ein Thema aus."),
  message: z.string().trim().min(10, "Bitte beschreiben Sie Ihr Anliegen etwas genauer."),
  // Honeypot-Feld gegen Spam-Bots: muss leer bleiben.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactTopics = [
  "Kostenloser Werkskante-Check",
  "Arbeitsschutz-Basis",
  "Absturzsicherung & PSA gegen Absturz",
  "Regalprüfungen & Prüfpflichten",
  "Schulungen & Sicherheitskultur",
  "Prozesse & Wertschöpfung",
  "Sonstiges",
];
