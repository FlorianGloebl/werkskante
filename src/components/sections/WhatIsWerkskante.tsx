import { Container } from "@/components/ui/Container";
import { Edge } from "@/components/ui/Edge";

const statements = [
  "Im Betrieb gelten andere Realitäten als im Konferenzraum.",
  "Gute Lösungen entstehen nicht aus der Ferne.",
  "Wir gehen dahin, wo Arbeit passiert.",
  "Wir schauen hin, fragen nach und entwickeln Lösungen, die funktionieren.",
];

export function WhatIsWerkskante() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Was bedeutet Werkskante?
          </span>
          <p className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
            „Die Werkskante ist der Punkt, an dem Theorie auf Realität trifft. Dort, wo
            Arbeit wirklich passiert. Wo Vorschriften, Prozesse, Menschen, Zeitdruck und
            Wertschöpfung zusammenkommen.“
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-8">
          {statements.map((statement) => (
            <div key={statement} className="flex items-start gap-4">
              <span className="mt-1.5 h-px w-8 shrink-0 bg-ink/30" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-ink/80">{statement}</p>
            </div>
          ))}
          <Edge className="mt-4 h-6 w-32 text-ink/15" />
        </div>
      </Container>
    </section>
  );
}
