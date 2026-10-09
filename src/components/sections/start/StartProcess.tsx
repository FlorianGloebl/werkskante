import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { startContent } from "@/content/start";

export function StartProcess() {
  return (
    <section id="ablauf" className="bg-ink py-24 text-white sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Ablauf" title="So läuft die Zusammenarbeit." light wide />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
          {startContent.processSteps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3 bg-ink p-6">
              <span className="font-display text-2xl font-bold text-steel">
                {String(step.number).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-white">{step.title}</span>
              <span className="text-sm leading-relaxed text-white/60">{step.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
