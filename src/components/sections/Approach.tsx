import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachPrinciples } from "@/content/approach";
import { AngemessenheitsKompass } from "@/components/interactive/AngemessenheitsKompass";
import { ProzessKante } from "@/components/interactive/ProzessKante";

export function Approach() {
  return (
    <section id="ansatz" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/images/hero-industrial-edge.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.14]"
        style={{ objectPosition: "20% 30%" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-ink/80"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="Unser Ansatz"
          title="Wir machen Arbeitsschutz nicht größer als nötig. Aber wir nehmen ihn ernst."
          light
        />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {approachPrinciples.map((principle) => (
            <div key={principle.id} className="flex flex-col gap-3 bg-ink/90 p-5 backdrop-blur-sm">
              <span className="font-display text-2xl font-bold text-steel">
                {String(principle.number).padStart(2, "0")}
              </span>
              <span className="text-sm leading-snug font-semibold text-white/85">
                {principle.title}
              </span>
            </div>
          ))}
        </div>

        <ProzessKante />

        <AngemessenheitsKompass />
      </Container>
    </section>
  );
}
