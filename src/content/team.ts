import type { TeamMember } from "@/types/content";

export const team: TeamMember[] = [
  {
    id: "florian-gloebl",
    name: "Florian Glöbl",
    role: "Wertschöpfung, Prozesse, Mittelstand, Vertrieb & Umsetzung",
    description:
      "Florian verbindet Beratungserfahrung mit einem klaren Blick für Wertschöpfung, Prozesse und mittelständische Realität.",
    focusAreas: ["Prozessberatung", "Mittelstand", "Vertrieb", "Umsetzung"],
    image: "/team/florian-gloebl.jpg",
    sortOrder: 1,
    visible: true,
  },
  {
    id: "andreas-wellenhofer",
    name: "Andreas Wellenhofer",
    role: "Arbeitsschutz, Industrieerfahrung, Absturzsicherung & Schulungen",
    description:
      "Andreas bringt den Blick aus dem industriellen Alltag ein – nah an der Arbeit, nah an den Menschen, nah an der Umsetzung.",
    focusAreas: ["Arbeitsschutz", "Absturzsicherung", "Schulungen", "Praxis vor Ort"],
    image: "/team/andi.jpg",
    sortOrder: 2,
    visible: true,
  },
];
