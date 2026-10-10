import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { platformUnits } from "@/content/platform";

const visibleUnits = platformUnits
  .filter((unit) => unit.visible)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export function PlatformUnits() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Unser Portfolio" title="Wählen Sie Ihren Bereich." wide />

        <div
          className={`grid gap-6 ${visibleUnits.length >= 2 ? "sm:grid-cols-2" : "max-w-sm"}`}
        >
          {visibleUnits.map((unit) => (
            <Link
              key={unit.id}
              href={unit.href}
              className="group flex flex-col gap-5 rounded-sm border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-ink/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <ServiceIcon name={unit.icon} className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Bereich {String(unit.sortOrder).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl font-bold text-ink">{unit.title}</span>
                <span className="text-sm font-medium text-accent">{unit.claim}</span>
              </div>

              <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
                {unit.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 py-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ink/70">{highlight}</span>
                  </div>
                ))}
              </div>

              <span className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition-all group-hover:bg-ink group-hover:ring-2 group-hover:ring-accent">
                {unit.ctaLabel}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
