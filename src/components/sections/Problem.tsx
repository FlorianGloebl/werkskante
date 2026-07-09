import { Container } from "@/components/ui/Container";
import { problemPoints } from "@/content/approach";

export function Problem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <h2 className="max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
          Arbeitsschutz scheitert selten am Gesetz. Meistens scheitert er an der
          Umsetzung.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {problemPoints.map((point, i) => (
            <div key={point} className="border-t border-ink/10 pt-4">
              <span className="text-xs font-semibold text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-base leading-snug font-medium text-ink/80">
                {point}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
