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

// Werkskante-Check Teaser: pro Kompetenzbereich (Key = businessUnits[].id aus
// content/services.ts) ein kurzer Fragenblock, keine Wertung im Sinne einer
// Note – führt immer zum CTA, nicht zu einer vermeintlichen Diagnose. Die
// Ergebnisanzeige (CheckQuiz) variiert je nach Antwortkombination, verweist
// dabei aber gezielt auf passende Leistungen statt auf ein pauschales Urteil.
export const checkQuestionsByArea: Record<string, CheckQuestion[]> = {
  sicherheit: [
    {
      id: "gefaehrdungsbeurteilung",
      question: "Gibt es aktuelle Gefährdungsbeurteilungen für alle relevanten Arbeitsplätze?",
      hint: "Ohne aktuelle Gefährdungsbeurteilung fehlt die rechtliche Grundlage für alle weiteren Schutzmaßnahmen.",
      serviceTitle: "Arbeitsschutz-Basis",
      goodAnswer: true,
    },
    {
      id: "betriebsanweisungen",
      question: "Sind Betriebsanweisungen aktuell und für die Mitarbeitenden jederzeit zugänglich?",
      hint: "Veraltete oder unauffindbare Betriebsanweisungen schützen im Ernstfall nicht und wirken sich auch rechtlich negativ aus.",
      serviceTitle: "Arbeitsschutz-Basis",
      goodAnswer: true,
    },
    {
      id: "psa-auswahl",
      question:
        "Ist die persönliche Schutzausrüstung an Ihren Arbeitsplätzen passend zur jeweiligen Gefährdung ausgewählt?",
      hint: "Pauschal beschaffte PSA schützt oft nicht dort, wo es wirklich zählt – die Auswahl muss zur konkreten Gefährdung passen.",
      serviceTitle: "Auswahl geeigneter, persönlicher Schutzausrüstung",
      goodAnswer: true,
    },
    {
      id: "maschinenbeschaffung",
      question:
        "Werden Sicherheitsanforderungen wie die CE-Konformität schon vor der Beschaffung neuer Maschinen geprüft?",
      hint: "Wird die Sicherheit erst nach der Lieferung geprüft, sind Nachrüstungen teuer und der Betrieb bis dahin ungeschützt.",
      serviceTitle: "Beschaffung sicherer Maschinen",
      goodAnswer: true,
    },
    {
      id: "arbeitsplatzgestaltung",
      question: "Sind Ihre Arbeitsplätze in Produktion und Büro ergonomisch und sicher gestaltet?",
      hint: "Ungünstig gestaltete Arbeitsplätze erhöhen Beschwerden und Ausfallzeiten oft schleichend, über Jahre unbemerkt.",
      serviceTitle: "Arbeitsplatzgestaltung",
      goodAnswer: true,
    },
    {
      id: "unfallanalyse",
      question:
        "Werden Arbeits- und Beinahe-Unfälle systematisch analysiert, um Wiederholungen zu vermeiden?",
      hint: "Ohne systematische Unfallanalyse bleiben vermeidbare Risiken unentdeckt – bis sich der nächste Unfall wiederholt.",
      serviceTitle: "Unfallanalyse & Prävention",
      goodAnswer: true,
    },
    {
      id: "pruefungen",
      question:
        "Kennen Sie die Fristen der wiederkehrenden Prüfungen von Regalen und Betriebsmitteln – und werden diese eingehalten?",
      hint: "Verpasste Prüffristen bei Betriebsmitteln sind ein häufiger Grund für Haftungsrisiken und ungeplante Ausfälle.",
      serviceTitle: "Regalprüfungen & Prüfpflichten",
      goodAnswer: true,
    },
    {
      id: "pruefzustaendigkeiten",
      question: "Sind Zuständigkeiten für Prüfungen und die Dokumentation der Ergebnisse klar benannt?",
      hint: "Ohne klar benannte Zuständigkeiten fallen wiederkehrende Prüfungen leicht durchs Raster.",
      serviceTitle: "Regalprüfungen & Prüfpflichten",
      goodAnswer: true,
    },
  ],
  "qualitaet-umwelt": [
    {
      id: "qm-dokumentation",
      question: "Sind Ihre Verfahrens- und Prozessbeschreibungen aktuell und ISO-9001-konform dokumentiert?",
      hint: "Veraltete oder lückenhafte Verfahrensbeschreibungen sind der häufigste Grund für Abweichungen im Audit.",
      serviceTitle: "QM-System & ISO 9001",
      goodAnswer: true,
    },
    {
      id: "gefahrstoffe",
      question: "Ist Ihr Gefahrstoffverzeichnis aktuell und die Entsorgung dokumentiert geregelt?",
      hint: "Ein veraltetes Gefahrstoffverzeichnis oder eine ungeregelte Entsorgung führt häufig zu Beanstandungen im Umweltmanagement.",
      serviceTitle: "Umweltmanagement",
      goodAnswer: true,
    },
    {
      id: "schweissaufsicht",
      question: "Ist die schweißfachliche Aufsicht klar geregelt und normgerecht dokumentiert?",
      hint: "Ohne geregelte Schweißaufsicht fehlt bei Audits häufig der Nachweis der fachlichen Verantwortlichkeit.",
      serviceTitle: "Schweißtechnik & Schweißaufsicht",
      goodAnswer: true,
    },
    {
      id: "fertigungsaudits",
      question: "Werden Fertigungsprozesse regelmäßig überwacht und interne Audits durchgeführt?",
      hint: "Ohne regelmäßige Fertigungsüberwachung und interne Audits bleiben Abweichungen oft bis zum externen Audit unentdeckt.",
      serviceTitle: "Fertigungsüberwachung & Audits",
      goodAnswer: true,
    },
    {
      id: "pruefplanung",
      question: "Ist Ihre Prüfplanung inklusive Form- und Lagetoleranzen nachvollziehbar dokumentiert?",
      hint: "Ohne nachvollziehbare Prüfplanung lassen sich Abweichungen bei Form- und Lagetoleranzen im Nachhinein kaum belegen.",
      serviceTitle: "Prüfung, Prüfplanung & Form-/Lagetoleranzen",
      goodAnswer: true,
    },
    {
      id: "korrosionsschutz",
      question: "Sind Korrosionsschutz- und Beschichtungskonzepte für Ihre Bauteile schriftlich festgelegt?",
      hint: "Ohne schriftlich festgelegte Konzepte wird Korrosionsschutz oft uneinheitlich umgesetzt – mit Folgekosten durch vorzeitigen Verschleiß.",
      serviceTitle: "Korrosionsschutz & Beschichtungstechnik",
      goodAnswer: true,
    },
  ],
  "kultur-prozesse": [
    {
      id: "unterweisungen",
      question: "Sind Unterweisungen dokumentiert und von den Mitarbeitenden verstanden?",
      hint: "Unterweisungen, die nicht verstanden wurden, schützen im Ernstfall nicht – und zählen im Streitfall auch rechtlich wenig.",
      serviceTitle: "Schulungen & Sicherheitskultur",
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
      id: "fuehrung",
      question: "Übernehmen Führungskräfte sichtbar Verantwortung für Arbeitsschutz und Qualität im Alltag?",
      hint: "Ohne sichtbare Vorbildfunktion der Führung bleibt jede Sicherheits- oder Qualitätskultur nur ein Lippenbekenntnis.",
      serviceTitle: "Schulungen & Sicherheitskultur",
      goodAnswer: true,
    },
    {
      id: "blockade",
      question: "Blockieren Sicherheits- oder Qualitätsmaßnahmen Ihre Arbeitsabläufe?",
      hint: "Maßnahmen, die die Arbeit spürbar bremsen, werden im Alltag umgangen – das erhöht das Risiko, statt es zu senken.",
      serviceTitle: "Prozesse & Wertschöpfung",
      goodAnswer: false,
    },
    {
      id: "prozessbeobachtung",
      question:
        "Wurden Ihre Kernprozesse in den letzten 12 Monaten vor Ort beobachtet und auf Reibungsverluste geprüft?",
      hint: "Ohne regelmäßige Prozessbeobachtung vor Ort bleiben Reibungsverluste und Verschwendung oft über Jahre unentdeckt.",
      serviceTitle: "Prozesse & Wertschöpfung",
      goodAnswer: true,
    },
    {
      id: "mitarbeiterfeedback",
      question:
        "Werden Rückmeldungen der Mitarbeitenden zu Arbeitsabläufen systematisch aufgenommen und ausgewertet?",
      hint: "Ohne systematisches Feedback aus der Praxis bleiben die besten Verbesserungsideen ungenutzt.",
      serviceTitle: "Prozesse & Wertschöpfung",
      goodAnswer: true,
    },
  ],
};

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
      "Vor-Ort-Termin, Gespräche vor Ort und eine erste grobe Einschätzung von Arbeitsschutz, Qualität, Umwelt, Prozessen und Arbeitsrealität.",
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
      "Laufende Betreuung, wiederkehrende Prüfungen und Weiterentwicklung Ihrer Sicherheits- und Qualitätskultur.",
  },
];

export const checkIncluded = [
  "Vor-Ort-Termin",
  "Gespräche mit ausgewählten Mitarbeitenden und Verantwortlichen",
  "Erster Blick auf Arbeitsschutz, Prozesse und Arbeitsrealität",
  "Grobe Ersteinschätzung",
  "Erste Hinweise auf mögliche Handlungsfelder",
];

export const checkExcluded = [
  "Detailliertes Konzept je Themenbereich",
  "Vollständige Gefährdungsbeurteilungen",
  "Betriebsanweisungen",
  "Schulungsunterlagen",
  "Detaillierter Maßnahmenplan",
  "Umsetzung und Begleitung",
];
