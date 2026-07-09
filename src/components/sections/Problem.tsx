import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { problemPoints } from "@/content/approach";

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/images/problem-paperwork.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #05070A 20%, rgba(6,20,38,0.93) 55%, rgba(6,20,38,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <h2 className="max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          Arbeitsschutz scheitert selten am Gesetz. Meistens scheitert er an der
          Umsetzung.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {problemPoints.map((point, i) => (
            <div key={point} className="border-t border-white/15 pt-4">
              <span className="text-xs font-semibold text-white/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-base leading-snug font-medium text-white/85">
                {point}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
