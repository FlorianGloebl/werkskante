import Image from "next/image";
import { Container } from "@/components/ui/Container";

const statements = [
  "Im Betrieb gelten andere Realitäten als im Konferenzraum.",
  "Gute Lösungen entstehen nicht aus der Ferne.",
  "Wir gehen dahin, wo Arbeit passiert.",
  "Wir schauen hin, fragen nach und entwickeln Lösungen, die funktionieren.",
];

export function WhatIsWerkskante() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
        <div className="relative min-h-[320px] overflow-hidden rounded-sm lg:col-span-5">
          <Image
            src="/images/technician-inspection.jpg"
            alt="Techniker bei der genauen Prüfung einer Maschine"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-10 lg:col-span-7 lg:pl-8">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Was bedeutet Werkskante?
            </span>
            <p className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
              „Die Werkskante ist der Punkt, an dem Theorie auf Realität trifft. Dort, wo
              Arbeit wirklich passiert.“
            </p>
          </div>

          <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
            {statements.map((statement) => (
              <p key={statement} className="py-4 text-lg leading-snug font-medium text-ink/85">
                {statement}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
