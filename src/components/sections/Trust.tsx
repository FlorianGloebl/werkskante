import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { references } from "@/content/references";

const trustPoints = [
  "Erfahrung aus Mittelstand, Produktion und Beratung",
  "Praxisnaher Blick aus Industrie und Unternehmensberatung",
  "Persönliche Begleitung statt anonymer Gutachten",
];

export function Trust() {
  const approved = references.filter((r) => r.visible && r.approved);

  return (
    <section id="referenzen" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ehrliche Arbeit statt erfundener Referenzen."
          description="Werkskante startet mit einem klaren Anspruch: ehrliche Arbeit vor Ort, pragmatische Lösungen und ein Blick für Wertschöpfung. Erste Referenzprojekte werden hier ergänzt, sobald sie freigegeben sind."
        />

        {approved.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approved.map((ref) => (
              <div key={ref.id} className="rounded-sm border border-ink/10 p-6">
                <h3 className="font-display font-bold text-ink">{ref.companyName}</h3>
                <p className="mt-2 text-sm text-ink/60">{ref.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-sm border border-dashed border-ink/20 p-6">
                <p className="text-ink/70">{point}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
