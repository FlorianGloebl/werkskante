export interface CheckQuestion {
  id: string;
  question: string;
}

// Werkskante-Check Teaser: 5 Fragen, keine Wertung im Sinne einer Note –
// führt immer zum CTA, nicht zu einer vermeintlichen Diagnose.
export const checkQuestions: CheckQuestion[] = [
  {
    id: "gefaehrdungsbeurteilung",
    question: "Gibt es aktuelle Gefährdungsbeurteilungen?",
  },
  {
    id: "unterweisungen",
    question: "Sind Unterweisungen dokumentiert und verstanden?",
  },
  {
    id: "absturzrisiko",
    question: "Gibt es Tätigkeiten mit Absturzrisiko?",
  },
  {
    id: "pruefpflichten",
    question: "Sind Prüfpflichten klar geregelt?",
  },
  {
    id: "blockade",
    question: "Blockieren Sicherheitsmaßnahmen teilweise die Arbeit?",
  },
];

export interface ProductLadderStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const productLadder: ProductLadderStep[] = [
  {
    id: "check",
    step: 1,
    title: "Kostenloser Werkskante-Check",
    description:
      "Vor-Ort-Termin, Gespräche vor Ort und eine erste grobe Einschätzung von Arbeitsschutz, Prozessen und Arbeitsrealität.",
  },
  {
    id: "analyse",
    step: 2,
    title: "Analyse & Konzept",
    description:
      "Detaillierte Gefährdungsbeurteilungen, Betriebsanweisungen, Schulungsunterlagen und ein konkreter Maßnahmenplan.",
  },
  {
    id: "umsetzung",
    step: 3,
    title: "Umsetzung",
    description:
      "Wir setzen die erarbeiteten Maßnahmen gemeinsam mit Ihrem Team um – praxisnah und ohne den Betrieb zu blockieren.",
  },
  {
    id: "begleitung",
    step: 4,
    title: "Regelmäßige Begleitung",
    description:
      "Laufende Betreuung, wiederkehrende Prüfungen und Weiterentwicklung Ihrer Sicherheitskultur.",
  },
];

export const checkIncluded = [
  "Vor-Ort-Termin",
  "Gespräche mit ausgewählten Mitarbeitenden und Verantwortlichen",
  "Erster Blick auf Prozesse, Arbeitsschutz und Arbeitsrealität",
  "Grobe Ersteinschätzung",
  "Erste Hinweise auf mögliche Handlungsfelder",
];

export const checkExcluded = [
  "Detailliertes Arbeitsschutzkonzept",
  "Vollständige Gefährdungsbeurteilungen",
  "Betriebsanweisungen",
  "Schulungsunterlagen",
  "Detaillierter Maßnahmenplan",
  "Umsetzung und Begleitung",
];
