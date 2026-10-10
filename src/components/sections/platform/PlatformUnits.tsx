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
              className="group flex flex-col gap-6 rounded-sm border border-ink/10 bg-white p-10 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-ink/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ServiceIcon name={unit.icon} className="h-7 w-7" />
              </span>

              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl font-bold text-ink">{unit.title}</span>
                <span className="text-sm leading-relaxed text-ink/60">{unit.claim}</span>
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
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
