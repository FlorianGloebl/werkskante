import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Edge } from "@/components/ui/Edge";
import { team } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  const members = team.filter((m) => m.visible).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="team" className="bg-mist py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Team"
          title="Zwei Blickwinkel, ein Anspruch."
          description="Werkskante arbeitet persönlich und vor Ort – mit einem Team, das Betrieb, Prozesse und Arbeitsschutz aus erster Hand kennt."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col gap-5 rounded-sm border border-ink/10 bg-white p-8"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm bg-ink">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between p-6">
                    <span className="font-display text-5xl font-bold text-white/90">
                      {initials(member.name)}
                    </span>
                  </div>
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent"
                  aria-hidden="true"
                />
                <Edge className="absolute bottom-0 left-0 h-4 w-full text-steel/80" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
              </div>
              <p className="leading-relaxed text-ink/70">{member.description}</p>
              <div className="flex flex-wrap gap-2">
                {member.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
