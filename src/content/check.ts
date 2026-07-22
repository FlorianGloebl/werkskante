export interface CheckQuestion {
  id: string;
  question: string;
  /** Warum diese Frage relevant ist, wenn sie mit "Nein" beantwortet wird. */
  hint: string;
  /** Passende Leistung, auf die im Ergebnis verwiesen wird. */
  serviceTitle: string;
  /** Welche Antwort (Ja/Nein) auf eine unauffällige Lage hindeutet. */
  goodAnswer: boolean;
}

// Werkskante-Check Teaser: 5 Fragen, keine Wertung im Sinne einer Note –
// führt immer zum CTA, nicht zu einer vermeintlichen Diagnose. Die
// Ergebnisanzeige (CheckQuiz) variiert je nach Antwortkombination, verweist
// dabei aber gezielt auf passende Leistungen statt auf ein pauschales Urteil.
export const checkQuestions: CheckQuestion[] = [
  {
    id: "gefaehrdungsbeurteilung",
    question: "Gibt es aktuelle Gefährdungsbeurteilungen?",
    hint: "Ohne aktuelle Gefährdungsbeurteilung fehlt die rechtliche Grundlage für alle weiteren Schutzmaßnahmen.",
    serviceTitle: "Arbeitsschutz-Basis",
    goodAnswer: true,
  },
  {
    id: "unterweisungen",
    question:
      "Sind Unterweisungen dokumentiert und von den Mitarbeitenden verstanden?",
    hint: "Unterweisungen, die nicht verstanden wurden, schützen im Ernstfall nicht – und zählen im Streitfall auch rechtlich wenig.",
    serviceTitle: "Schulungen & Sicherheitskultur",
    goodAnswer: true,
  },
  {
    id: "pruefungen",
    question:
      "Kennen Sie die Fristen der wiederkehrenden Prüfungen von Betriebsmitteln – und werden diese durchgeführt?",
    hint: "Verpasste Prüffristen bei Betriebsmitteln sind ein häufiger Grund für Haftungsrisiken und ungeplante Ausfälle.",
    serviceTitle: "Regalprüfungen & Prüfpflichten",
    goodAnswer: true,
  },
  {
    id: "arbeitsunfaelle",
    question:
      "Wissen Sie über die Anzahl der Arbeitsunfälle Bescheid und werden Beinahe-Unfälle aufgenommen?",
    hint: "Wer Beinahe-Unfälle nicht erfasst, verpasst die günstigsten Hinweise auf echte Risiken – lange bevor etwas passiert.",
    serviceTitle: "Schulungen & Sicherheitskultur",
    goodAnswer: true,
  },
  {
    id: "blockade",
    question: "Blockieren Sicherheitsmaßnahmen Ihre Arbeitsabläufe?",
    hint: "Sicherheitsmaßnahmen, die die Arbeit spürbar bremsen, werden im Alltag umgangen – das erhöht das Risiko, statt es zu senken.",
    serviceTitle: "Prozesse & Wertschöpfung",
    goodAnswer: false,
  },
];

export type CheckRiskLevel = "gruen" | "gelb" | "rot";

export interface CheckResultLevel {
  level: CheckRiskLevel;
  label: string;
  headline: string;
  body: string;
}

// Reihenfolge = Ampel-Reihenfolge für die Balkenanzeige (grün → gelb → rot).
export const checkResultLevels: CheckResultLevel[] = [
  {
    level: "gruen",
    label: "Solide Basis",
    headline: "Ihre Antworten deuten auf eine solide Basis hin.",
    body: "Nutzen Sie den kostenlosen Vor-Ort-Termin, um das zu bestätigen: Die häufigsten Lücken zeigen sich erst im Betrieb, nicht im Selbsttest.",
  },
  {
    level: "gelb",
    label: "Einzelne Lücken",
    headline: "Es zeichnen sich einzelne Lücken ab.",
    body: "Das ist im Alltag normal. Entscheidend ist, sie zu kennen und gezielt zu schließen, bevor daraus ein größeres Problem wird.",
  },
  {
    level: "rot",
    label: "Deutlicher Handlungsbedarf",
    headline: "Mehrere Antworten zeigen deutlichen Handlungsbedarf.",
    body: "Das ist keine ungewöhnliche Ausgangslage – aber eine, die wir uns zeitnah gemeinsam vor Ort ansehen sollten.",
  },
];

export function getCheckRiskLevel(gapCount: number): CheckRiskLevel {
  if (gapCount === 0) return "gruen";
  if (gapCount <= 2) return "gelb";
  return "rot";
}

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
