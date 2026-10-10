import Image from "next/image";
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
              className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-ink/10"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-5 text-xs font-semibold tracking-[0.2em] text-white uppercase">
                  {String(unit.sortOrder).padStart(2, "0")} — {unit.title}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <ServiceIcon name={unit.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xl font-bold text-ink">{unit.title}</span>
                </div>

                <span className="text-sm font-medium text-accent">{unit.claim}</span>

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

                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                  {unit.ctaLabel}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
