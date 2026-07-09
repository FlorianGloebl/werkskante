import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFilter } from "@/components/interactive/ServiceFilter";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="leistungen" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Leistungen"
          title="Fünf Bereiche, ein Prinzip: rechtlich passend und praxistauglich."
          description="Von der Arbeitsschutz-Basis über Absturzsicherung und Prüfpflichten bis zu Schulungen und Prozessarbeit."
        />
        <ServiceFilter services={services} />
      </Container>
    </section>
  );
}
