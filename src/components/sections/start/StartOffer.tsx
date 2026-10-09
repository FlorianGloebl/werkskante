import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { startContent } from "@/content/start";

export function StartOffer() {
  return (
    <section id="angebot" className="bg-mist py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Was ich mitbringe"
          title="Begleitung, die über gute Ratschläge hinausgeht."
          description={startContent.positioningParagraph}
          wide
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {startContent.offerPoints.map((point) => (
            <div key={point.id} className="flex flex-col gap-3 bg-mist p-6">
              <span className="font-display text-lg font-bold text-ink">{point.title}</span>
              <span className="text-sm leading-relaxed text-ink/70">{point.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
