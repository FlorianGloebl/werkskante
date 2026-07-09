import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckQuiz } from "@/components/interactive/CheckQuiz";
import { checkIncluded, checkExcluded, productLadder } from "@/content/check";

export function WerkskanteCheck() {
  return (
    <section id="check" className="bg-mist py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <div className="relative aspect-21/9 overflow-hidden rounded-sm sm:aspect-[3/1]">
          <Image
            src="/images/check-inspection.jpg"
            alt="Prüfung mit Checkliste in einer Lagerhalle"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center">
            <p className="max-w-md px-6 font-display text-xl font-semibold text-white sm:px-10 sm:text-2xl">
              Kein Formular. Ein Termin bei Ihnen vor Ort.
            </p>
          </div>
        </div>

        <SectionHeading
          eyebrow="Türöffner"
          title="Der kostenlose Werkskante-Check"
          description="Wir kommen zu Ihnen in den Betrieb, sprechen mit den Menschen vor Ort, schauen auf Arbeitsschutz, Prozesse und Wertschöpfung – und geben Ihnen eine erste grobe Einschätzung."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-ink/10 bg-white p-8">
            <h3 className="font-display text-lg font-bold text-ink">Kostenlos enthalten</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {checkIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-ink/10 bg-white/60 p-8">
            <h3 className="font-display text-lg font-bold text-ink/60">
              Nicht kostenlos enthalten
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {checkExcluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/50">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-display text-lg font-bold text-ink">Die Produkttreppe</h3>
          <div className="grid gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-4">
            {productLadder.map((step) => (
              <div key={step.id} className="flex flex-col gap-2 bg-white p-6">
                <span className="font-display text-2xl font-bold text-accent">
                  {step.step}
                </span>
                <span className="font-semibold text-ink">{step.title}</span>
                <p className="text-sm leading-relaxed text-ink/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-display text-lg font-bold text-ink">Mini-Selbstcheck</h3>
          <CheckQuiz />
        </div>
      </Container>
    </section>
  );
}
