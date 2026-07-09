import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/content/team";

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
              <div className="aspect-4/3 w-full rounded-sm bg-ink/5" aria-hidden="true" />
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
