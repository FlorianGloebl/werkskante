import type { TeamMember } from "@/types/content";
import { assetPath } from "@/lib/basePath";

export const team: TeamMember[] = [
  {
    id: "florian-gloebl",
    name: "Florian Glöbl",
    role: "Gründer · Vertrieb",
    description:
      "Florian hat Werkskante gegründet. Sein Blick ist der auf die Wertschöpfung: Arbeitssicherheit soll den Betrieb voranbringen, nicht bremsen. Er verantwortet den Vertrieb und sorgt dafür, dass aus dem ersten Gespräch ein Ergebnis wird, das im Alltag trägt.",
    focusAreas: ["Gründer", "Wertschöpfung", "Vertrieb"],
    image: assetPath("/team/florian-gloebl.jpg"),
    sortOrder: 2,
    visible: true,
  },
  {
    id: "andreas-wellenhofer",
    name: "Andreas Wellenhofer",
    role: "Sicherheitsingenieur · Arbeitssicherheit",
    description:
      "Andreas ist Sicherheitsingenieur und bringt den Blick aus dem industriellen Alltag ein: Arbeitsschutz, PSA-Auswahl und Maschinensicherheit – nah an der Arbeit, nah an den Menschen, nah an der Umsetzung. Er ist Ihr fester Ansprechpartner bei Werkskante.",
    focusAreas: ["Sicherheitsingenieur", "Arbeitsschutz", "PSA-Auswahl", "Maschinensicherheit", "Praxis vor Ort"],
    image: assetPath("/team/andi.png"),
    sortOrder: 1,
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
    // Daniel steigt erst in einigen Monaten ein – Daten bleiben erhalten,
    // aber vorerst nicht auf der Website zeigen.
    visible: false,
  },
];
