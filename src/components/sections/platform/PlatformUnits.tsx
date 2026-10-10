import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Button } from "@/components/ui/Button";
import { platformUnits } from "@/content/platform";

const visibleUnits = platformUnits
  .filter((unit) => unit.visible)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export function PlatformUnits() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container className="flex flex-col gap-16 sm:gap-24">
        <SectionHeading eyebrow="Unser Portfolio" title="Wählen Sie Ihren Bereich." wide />

        <div className="flex flex-col gap-16 sm:gap-24">
          {visibleUnits.map((unit, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={unit.id} className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
                <div
                  className={`relative min-h-[280px] overflow-hidden rounded-sm lg:col-span-5 ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center gap-6 lg:col-span-7 ${
                    isEven ? "lg:order-1 lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <ServiceIcon name={unit.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                      {String(unit.sortOrder).padStart(2, "0")} — {unit.title}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-display text-3xl font-bold text-ink">{unit.title}</span>
                    <span className="text-base font-medium text-accent">{unit.claim}</span>
                  </div>

                  <p className="leading-relaxed text-ink/70">{unit.description}</p>

                  <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
                    {unit.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 py-2.5">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-ink/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2">
                    <Button href={unit.href} variant="primary">
                      {unit.ctaLabel}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
