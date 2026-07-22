export interface ProblemPoint {
  id: string;
  text: string;
  icon: string;
}

export const problemPoints: ProblemPoint[] = [
  { id: "papier", text: "Zu viel Papier", icon: "papers" },
  { id: "praxis", text: "Zu wenig Praxis", icon: "gap" },
  { id: "verantwortlichkeiten", text: "Unklare Verantwortlichkeiten", icon: "users" },
  { id: "prozesse", text: "Gewachsene Prozesse", icon: "workflow" },
  { id: "pruefpflichten", text: "Prüfpflichten ohne Übersicht", icon: "clipboard" },
  { id: "unterweisungen", text: "Unterweisungen ohne Wirkung", icon: "megaphone-mute" },
  { id: "blockade", text: "Maßnahmen, die den Betrieb blockieren", icon: "blocked-gear" },
  {
    id: "papierkultur",
    text: "Sicherheitskultur, die nur auf dem Papier existiert",
    icon: "paper-shield",
  },
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
  verdict: string;
}

// Angemessenheits-Kompass: Kompass für passende Lösungen, kein
// Schlupfloch-Finder. Übersetzt die interne Spielraum-Haltung nach außen.
// `verdict` ist die kurze, zugespitzte Haltung, die beim Klick auf ein Feld
// erscheint – bewusst mit Kante, nicht als Beratersprache.
export const compassQuadrants: CompassQuadrant[] = [
  {
    id: "rechtlich-erforderlich",
    title: "Rechtlich erforderlich",
    description: "Das, was Vorschriften unmittelbar verlangen.",
    verdict: "Das setzen wir um. Nicht diskutieren, machen.",
  },
  {
    id: "betrieblich-sinnvoll",
    title: "Betrieblich sinnvoll",
    description: "Das, was im echten Betrieb tatsächlich hilft.",
    verdict: "Das bauen wir aus. Weil es wirkt, nicht weil es Pflicht ist.",
  },
  {
    id: "unnoetige-buerokratie",
    title: "Unnötige Bürokratie",
    description: "Das, was Aufwand erzeugt, ohne Sicherheit zu erhöhen.",
    verdict: "Das lassen wir weg. Ohne schlechtes Gewissen.",
  },
  {
    id: "wertschoepfend-umsetzbar",
    title: "Wertschöpfend umsetzbar",
    description: "Das, was sich in den Arbeitsalltag sauber integrieren lässt.",
    verdict: "Das verbinden wir. Sicherheit und Wertschöpfung sind kein Widerspruch.",
  },
];
