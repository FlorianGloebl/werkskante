export const problemPoints = [
  "Zu viel Papier",
  "Zu wenig Praxis",
  "Unklare Verantwortlichkeiten",
  "Gewachsene Prozesse",
  "Prüfpflichten ohne Übersicht",
  "Unterweisungen ohne Wirkung",
  "Maßnahmen, die den Betrieb blockieren",
  "Sicherheitskultur, die nur auf dem Papier existiert",
];

export interface ApproachPrinciple {
  id: string;
  number: number;
  title: string;
}

export const approachPrinciples: ApproachPrinciple[] = [
  { id: "vor-ort", number: 1, title: "Vor Ort verstehen" },
  { id: "menschen", number: 2, title: "Menschen einbeziehen" },
  { id: "prozesse", number: 3, title: "Prozesse betrachten" },
  { id: "rechtlich", number: 4, title: "Rechtlich passend lösen" },
  { id: "wertschoepfung", number: 5, title: "Wertschöpfung erhalten" },
  { id: "schlank", number: 6, title: "Schlank umsetzen" },
];

export interface CompassQuadrant {
  id: string;
  title: string;
  description: string;
}

// Angemessenheits-Kompass: Kompass für passende Lösungen, kein
// Schlupfloch-Finder. Übersetzt die interne Spielraum-Haltung nach außen.
export const compassQuadrants: CompassQuadrant[] = [
  {
    id: "rechtlich-erforderlich",
    title: "Rechtlich erforderlich",
    description: "Das, was Vorschriften unmittelbar verlangen.",
  },
  {
    id: "betrieblich-sinnvoll",
    title: "Betrieblich sinnvoll",
    description: "Das, was im echten Betrieb tatsächlich hilft.",
  },
  {
    id: "unnoetige-buerokratie",
    title: "Unnötige Bürokratie",
    description: "Das, was Aufwand erzeugt, ohne Sicherheit zu erhöhen.",
  },
  {
    id: "wertschoepfend-umsetzbar",
    title: "Wertschöpfend umsetzbar",
    description: "Das, was sich in den Arbeitsalltag sauber integrieren lässt.",
  },
];
