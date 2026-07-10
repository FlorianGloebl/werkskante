import type { BusinessUnit, Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "arbeitsschutz-basis",
    title: "Arbeitsschutz-Basis",
    slug: "arbeitsschutz-basis",
    tagline: "Dokumentiert, nicht verstaubt.",
    shortDescription:
      "Gefährdungsbeurteilungen, Betriebsanweisungen und Unterweisungen, die im Alltag tragen.",
    longDescription:
      "Wir bauen die rechtliche Basis Ihres Arbeitsschutzes so auf, dass sie zum Betrieb passt: verständlich, dokumentiert und im Alltag anwendbar – statt Aktenordner, die niemand liest.",
    bulletPoints: [
      "Gefährdungsbeurteilungen",
      "Betriebsanweisungen",
      "Unterweisungen",
      "Dokumentation",
      "Maßnahmenverfolgung",
    ],
    icon: "shield",
    category: "basis",
    sortOrder: 1,
    visible: true,
  },
  {
    id: "absturzsicherung",
    title: "Absturzsicherung & PSA gegen Absturz",
    slug: "absturzsicherung",
    tagline: "Sicherung, die sitzt.",
    shortDescription:
      "Bewertung, Unterweisung und Organisation für Tätigkeiten mit Absturzrisiko.",
    longDescription:
      "Von der Bewertung absturzgefährdeter Tätigkeiten über die Unterweisung zur PSA gegen Absturz bis zur laufenden Dokumentation – praxisnah und rechtssicher.",
    bulletPoints: [
      "Bewertung von Tätigkeiten mit Absturzrisiko",
      "Unterweisung zur Verwendung von PSA gegen Absturz",
      "Praxisnahe Empfehlungen",
      "Organisation und Dokumentation",
    ],
    icon: "harness",
    category: "absturz",
    sortOrder: 2,
    visible: true,
  },
  {
    id: "pruefpflichten",
    title: "Regalprüfungen & Prüfpflichten",
    slug: "regalpruefungen-pruefpflichten",
    tagline: "Fristen im Griff, nicht im Kopf.",
    shortDescription:
      "Wiederkehrende Prüfungen organisiert, Fristen und Verantwortlichkeiten im Griff.",
    longDescription:
      "Wir organisieren Regalprüfungen und wiederkehrende Prüfpflichten, behalten Fristen und Zuständigkeiten im Blick und vermitteln geeignete Partner, etwa für Elektrokleingeräteprüfungen.",
    bulletPoints: [
      "Regalprüfungen",
      "Organisation wiederkehrender Prüfungen",
      "Übersicht über Fristen und Verantwortlichkeiten",
      "Vermittlung geeigneter Partner (z. B. Elektrokleingeräteprüfung)",
      "Unterstützung bei Dokumentation und Nachweisen",
    ],
    icon: "clipboard",
    category: "pruefung",
    sortOrder: 3,
    visible: true,
  },
  {
    id: "schulungen",
    title: "Schulungen & Sicherheitskultur",
    slug: "schulungen-sicherheitskultur",
    tagline: "Verstanden statt abgehakt.",
    shortDescription:
      "Schulungen, die verstanden werden – und eine Sicherheitskultur, die im Alltag lebt.",
    longDescription:
      "Allgemeine und spezielle Arbeitsschutzunterweisungen, Führung und Verantwortung im Arbeitsschutz – so vermittelt, dass sie hängen bleiben statt nur abgehakt zu werden.",
    bulletPoints: [
      "Allgemeine Arbeitsschutzunterweisungen",
      "Spezielle Schulungen",
      "Führung und Verantwortung im Arbeitsschutz",
      "Sicherheitskultur im Unternehmen",
      "Schulungen, die verstanden werden",
    ],
    icon: "users",
    category: "schulung",
    sortOrder: 4,
    visible: true,
  },
  {
    id: "prozesse-wertschoepfung",
    title: "Prozesse & Wertschöpfung",
    slug: "prozesse-wertschoepfung",
    tagline: "Reibung sehen, bevor sie kostet.",
    shortDescription:
      "Prozessbeobachtung vor Ort – Lösungen, die Sicherheit und Wertschöpfung verbinden.",
    longDescription:
      "Wir beobachten Prozesse vor Ort, sprechen mit den Menschen, die die Arbeit machen, und identifizieren Reibung, Risiken und Verschwendung – für Lösungen, die Sicherheit und Wertschöpfung zusammenbringen.",
    bulletPoints: [
      "Prozessbeobachtung vor Ort",
      "Interviews mit Mitarbeitenden",
      "Identifikation von Reibung, Risiken und Verschwendung",
      "Lösungen, die Sicherheit und Wertschöpfung verbinden",
    ],
    icon: "workflow",
    category: "prozesse",
    sortOrder: 5,
    visible: true,
  },
];

export const businessUnits: BusinessUnit[] = [
  {
    id: "sicherheit",
    title: "Sicherheit",
    slug: "sicherheit",
    claim: "Rechtlich passend, praktisch tragfähig.",
    description:
      "Arbeitsschutz-Basis, Absturzsicherung und Prüfpflichten – die rechtliche und organisatorische Grundlage für sicheres Arbeiten.",
    services: ["arbeitsschutz-basis", "absturzsicherung", "pruefpflichten"],
    sortOrder: 1,
    visible: true,
  },
  {
    id: "kultur-prozesse",
    title: "Kultur & Prozesse",
    slug: "kultur-prozesse",
    claim: "Verstanden statt nur abgehakt.",
    description:
      "Schulungen, Sicherheitskultur und Prozessarbeit vor Ort – damit Sicherheit im Alltag trägt und Wertschöpfung nicht blockiert.",
    services: ["schulungen", "prozesse-wertschoepfung"],
    sortOrder: 2,
    visible: true,
  },
];
