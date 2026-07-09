import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white py-32">
      <Container className="prose prose-neutral max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink">Datenschutzerklärung</h1>
        <p className="mt-6 text-ink/70">
          Platzhalter – vor Launch durch eine vollständige, rechtlich geprüfte
          Datenschutzerklärung ersetzen, insbesondere zur Verarbeitung von Daten aus dem
          Kontaktformular.
        </p>
        <p className="mt-6 text-ink/70">
          Verantwortlicher: {siteSettings.legalName}, {siteSettings.address}, E-Mail:{" "}
          {siteSettings.contactEmail}
        </p>
      </Container>
    </div>
  );
}
