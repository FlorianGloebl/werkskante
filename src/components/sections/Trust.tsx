import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { references } from "@/content/references";
import { noFakeStatements } from "@/content/trust";

export function Trust() {
  const approved = references.filter((r) => r.visible && r.approved);

  return (
    <section id="referenzen" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ehrliche Referenzen. Oder gar keine."
          description="Werkskante ist jung. Statt erfundener Kundenlogos gibt es einen klaren Anspruch: ehrliche Arbeit vor Ort und pragmatische Lösungen. Referenzprojekte kommen hierhin, sobald sie wirklich freigegeben sind."
        />

        {approved.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approved.map((ref) => (
              <div key={ref.id} className="rounded-sm border border-ink/10 p-6">
                <h3 className="font-display font-bold text-ink">{ref.companyName}</h3>
                <p className="mt-2 text-sm text-ink/60">{ref.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {noFakeStatements.map((statement) => (
            <p
              key={statement}
              className="py-5 text-lg font-medium text-ink sm:text-xl"
            >
              {statement}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
