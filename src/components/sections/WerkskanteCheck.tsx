import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckQuiz } from "@/components/interactive/CheckQuiz";
import { checkIncluded, checkExcluded, productLadder } from "@/content/check";
import { assetPath } from "@/lib/basePath";

export function WerkskanteCheck() {
  return (
    <section id="check" className="bg-mist py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <div className="relative aspect-21/9 overflow-hidden rounded-sm sm:aspect-[3/1]">
          <Image
            src={assetPath("/images/check-production-hall.jpg")}
            alt="Moderne Produktionshalle im Maschinenbau"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center">
            <p className="px-6 font-display text-base font-semibold whitespace-nowrap text-white sm:px-10 sm:text-xl lg:text-2xl">
              Kein Formular. Ein Termin bei Ihnen vor Ort.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionHeading eyebrow="Erster Schritt" title="Der kostenlose Werkskante-Check" />
          <p className="text-base leading-relaxed text-ink/70 sm:text-lg">
            Wir kommen zu Ihnen in den Betrieb, sprechen mit den Menschen vor Ort, schauen auf
            Arbeitsschutz, Arbeitsplätze und Prozesse – und geben Ihnen eine erste grobe
            Einschätzung.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-steel/30 bg-steel/10 p-8">
            <h3 className="font-display text-lg font-bold text-ink">Kostenlos enthalten</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {checkIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-ink/10 bg-white/70 p-8">
            <h3 className="font-display text-lg font-bold text-ink/70">
              Auf Anfrage, kostenpflichtig
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {checkExcluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/70">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent/70"
                    aria-hidden="true"
                  >
                    <path d="M8 12h8" />
                    <path d="M12 8l4 4-4 4" />
                  </svg>
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

        <div className="rounded-lg bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-1">
          <div className="rounded-md bg-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Interaktiv · 2 Minuten
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink">
              Machen Sie den Mini-Selbstcheck
            </h3>
            <p className="mt-2 max-w-xl text-ink/60">
              Direkt hier online: wenige Fragen zu Ihrem Bereich, sofort ein erster Hinweis, wo
              sich ein genauerer Blick lohnt.
            </p>
            <div className="mt-8">
              <CheckQuiz />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
