import type { TeamMember } from "@/types/content";
import { assetPath } from "@/lib/basePath";

export const team: TeamMember[] = [
  {
    id: "florian-gloebl",
    name: "Florian Glöbl",
    role: "Wertschöpfung, Prozesse, Mittelstand, Vertrieb & Umsetzung",
    description:
      "Florian verbindet Beratungserfahrung mit einem klaren Blick für Wertschöpfung, Prozesse und mittelständische Realität.",
    focusAreas: ["Prozessberatung", "Mittelstand", "Vertrieb", "Umsetzung"],
    image: assetPath("/team/florian-gloebl.jpg"),
    sortOrder: 1,
    visible: true,
  },
  {
    id: "andreas-wellenhofer",
    name: "Andreas Wellenhofer",
    role: "Sicherheitsfachkraft, Industrieerfahrung, Absturzsicherung & Schulungen",
    description:
      "Andreas ist Sicherheitsfachkraft und bringt den Blick aus dem industriellen Alltag ein – nah an der Arbeit, nah an den Menschen, nah an der Umsetzung.",
    focusAreas: [
      "Sicherheitsfachkraft",
      "Arbeitsschutz",
      "Absturzsicherung",
      "Schulungen",
      "Praxis vor Ort",
    ],
    image: assetPath("/team/andi.jpg"),
    sortOrder: 2,
    visible: true,
  },
  {
    id: "daniel-peschl",
    name: "Daniel Peschl",
    role: "QS/QM, Umweltmanagement, Schweißtechnik & Fertigungsüberwachung",
    description:
      "Daniel bringt Qualität, Umwelt und Fertigung zusammen – als Schweißfachmann und Auditor mit einem geschulten Blick fürs Detail, von der Prozessbeschreibung bis zur Form- und Lagetoleranz.",
    focusAreas: [
      "ISO 9001",
      "Umweltmanagement",
      "Schweißtechnik",
      "Auditor",
      "Prüfplanung",
    ],
    image: assetPath("/team/daniel-peschl.png"),
    sortOrder: 3,
    visible: true,
  },
];
