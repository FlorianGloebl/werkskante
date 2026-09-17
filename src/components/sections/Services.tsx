import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ServiceFilter } from "@/components/interactive/ServiceFilter";
import { PpeCheck } from "@/components/interactive/PpeCheck";
import { services, businessUnits } from "@/content/services";
import { team } from "@/content/team";
import { initials } from "@/lib/initials";

const NUMBER_WORDS: Record<number, string> = { 1: "Ein", 2: "Zwei", 3: "Drei", 4: "Vier" };

function joinWithUnd(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} und ${items[items.length - 1]}`;
}

export function Services() {
  const areas = businessUnits
    .filter((unit) => unit.visible)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const areaCountLabel = NUMBER_WORDS[areas.length] ?? String(areas.length);

  return (
    <section id="leistungen" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-20">
        <SectionHeading
          eyebrow="Leistungen"
          title={`${areaCountLabel} Kompetenzbereich${areas.length === 1 ? "" : "e"}. Ein Blick auf den ganzen Betrieb.`}
          description={`${joinWithUnd(areas.map((a) => a.title))} hängen im Alltag zusammen – deshalb denken wir sie auch zusammen, statt sie getrennt zu behandeln.`}
          wide
          compactTitle
        />

        {areas.map((area, index) => {
          const areaServices = services.filter((s) => area.services.includes(s.id));
          const contacts = team.filter(
            (m) => m.visible && area.teamMemberIds.includes(m.id)
          );

          return (
            <section
              key={area.id}
              id={area.slug}
              className={`flex flex-col gap-8 ${index > 0 ? "border-t border-ink/10 pt-8" : ""}`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-ink text-white">
                    <ServiceIcon name={area.icon} className="h-7 w-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-sm font-bold tracking-[0.15em] text-accent uppercase">
                      {String(index + 1).padStart(2, "0")} · {area.navLabel}
                    </span>
                    <h3 className="font-display text-2xl leading-snug font-bold text-ink sm:text-3xl">
                      {area.claim}
                    </h3>
                    <p className="text-base text-ink/70 sm:text-lg">{area.description}</p>
                  </div>
                </div>

                {contacts.length > 0 && (
                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:pt-1">
                    {contacts.map((m) => (
                      <a
                        key={m.id}
                        href={`#${m.id}`}
                        className="flex items-center gap-2 rounded-full bg-mist py-1.5 pr-3 pl-1.5 text-xs font-semibold text-ink/70 transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                          {initials(m.name)}
                        </span>
                        {m.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <ServiceFilter services={areaServices} />
              {area.id === "sicherheit" && <PpeCheck />}
            </section>
          );
        })}
      </Container>
    </section>
  );
}
