import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white py-32">
      <Container className="prose prose-neutral max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink">Impressum</h1>
        <p className="mt-6 text-ink/70">
          Angaben gemäß § 5 TMG – Platzhalter, vor Launch mit den finalen
          Unternehmensdaten zu ersetzen.
        </p>
        <p className="mt-6 text-ink/70">
          {siteSettings.legalName}
          <br />
          {siteSettings.address}
        </p>
        <p className="mt-6 text-ink/70">
          E-Mail: {siteSettings.contactEmail}
          <br />
          Telefon: {siteSettings.phone}
        </p>
      </Container>
    </div>
  );
}
