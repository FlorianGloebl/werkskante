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
  {
    id: "qm-iso9001",
    title: "QM-System & ISO 9001",
    slug: "qm-system-iso-9001",
    tagline: "Dokumentiert, weil es hilft – nicht weil es sein muss.",
    shortDescription:
      "Aufbau und Pflege eines QM-Systems nach ISO 9001, das im Alltag funktioniert statt nur im Audit zu bestehen.",
    longDescription:
      "Wir bauen und pflegen Ihr QM-System nach ISO 9001 so, dass Verfahrens- und Prozessbeschreibungen tatsächlich gelebt werden – klar dokumentiert, sauber gelenkt und bereit für Zertifizierungs- und Überwachungsaudits.",
    bulletPoints: [
      "Aufbau & Pflege des QM-Systems nach ISO 9001",
      "Verfahrens- und Prozessbeschreibungen",
      "Vorbereitung auf Audits & Zertifizierung",
      "Dokumentenlenkung",
      "Kontinuierliche Verbesserung",
    ],
    icon: "certificate",
    category: "qm",
    sortOrder: 6,
    visible: true,
  },
  {
    id: "umweltmanagement",
    title: "Umweltmanagement",
    slug: "umweltmanagement",
    tagline: "Verantwortung, die sich nachweisen lässt.",
    shortDescription:
      "Gefahrstoffe, Gefahrgut, Substitution und Entsorgung organisiert und rechtssicher dokumentiert.",
    longDescription:
      "Wir bringen Ordnung in Ihr Umweltmanagement: von Gefahrstoff- und Gefahrgutorganisation über die Substitution kritischer Stoffe bis zu Entsorgungskonzepten – nachvollziehbar dokumentiert und rechtssicher.",
    bulletPoints: [
      "Gefahrstoffmanagement & -verzeichnis",
      "Gefahrgutorganisation",
      "Substitution kritischer Stoffe",
      "Entsorgungskonzepte & Nachweise",
      "Rechtssichere Dokumentation",
    ],
    icon: "leaf",
    category: "umwelt",
    sortOrder: 7,
    visible: true,
  },
  {
    id: "schweisstechnik",
    title: "Schweißtechnik & Schweißaufsicht",
    slug: "schweisstechnik-schweissaufsicht",
    tagline: "Fachlich geprüft, normgerecht belegt.",
    shortDescription:
      "Schweißfachliche Aufsicht, Verfahrens- und Schweißerprüfungen sowie normgerechte Dokumentation.",
    longDescription:
      "Als Schweißfachmann begleitet Daniel Ihre Schweißprozesse fachlich: von der Verfahrens- und Schweißerprüfung über die Werkstoff- und Verfahrenswahl bis zur normgerechten Dokumentation der Schweißaufsicht.",
    bulletPoints: [
      "Schweißfachliche Aufsicht",
      "Verfahrens- und Schweißerprüfungen",
      "Normgerechte Dokumentation",
      "Beratung bei Werkstoff- und Verfahrenswahl",
    ],
    icon: "torch",
    category: "fertigung",
    sortOrder: 8,
    visible: true,
  },
  {
    id: "fertigungsueberwachung",
    title: "Fertigungsüberwachung & Audits",
    slug: "fertigungsueberwachung-audits",
    tagline: "Vor Ort geprüft, nicht nur auf dem Papier.",
    shortDescription:
      "Fertigungsüberwachung vor Ort sowie Begleitung interner und externer Audits.",
    longDescription:
      "Als Auditor überwacht Daniel Ihre Fertigungsprozesse direkt vor Ort, begleitet interne wie externe Audits und sorgt für ein sauberes Abweichungsmanagement – von der Lieferanten- bis zur Prozessbewertung.",
    bulletPoints: [
      "Fertigungsüberwachung vor Ort",
      "Interne & externe Audits",
      "Abweichungsmanagement",
      "Lieferanten- und Prozessbewertung",
    ],
    icon: "magnifier-check",
    category: "fertigung",
    sortOrder: 9,
    visible: true,
  },
  {
    id: "korrosionsschutz-beschichtung",
    title: "Korrosionsschutz & Beschichtungstechnik",
    slug: "korrosionsschutz-beschichtungstechnik",
    tagline: "Schutz, der hält, was er verspricht.",
    shortDescription:
      "Bewertung und Begleitung von Korrosionsschutzkonzepten und Beschichtungsprozessen.",
    longDescription:
      "Wir bewerten Korrosionsschutzkonzepte und Beschichtungsverfahren, wählen die passende Technik aus und sichern die Qualität auf der Fläche – von der Schichtprüfung bis zur laufenden Qualitätssicherung.",
    bulletPoints: [
      "Bewertung von Korrosionsschutzkonzepten",
      "Beschichtungstechnik & Schichtprüfung",
      "Auswahl geeigneter Verfahren",
      "Qualitätssicherung auf der Fläche",
    ],
    icon: "layers",
    category: "fertigung",
    sortOrder: 10,
    visible: true,
  },
  {
    id: "pruefplanung-toleranzen",
    title: "Prüfung, Prüfplanung & Form-/Lagetoleranzen",
    slug: "pruefung-pruefplanung-form-lagetoleranzen",
    tagline: "Messbar statt vermutet.",
    shortDescription:
      "Prüfplanung, Messstrategie und die Bewertung von Form- und Lagetoleranzen als Experte.",
    longDescription:
      "Wir entwickeln Ihre Prüfplanung und Messstrategie und bewerten Form- und Lagetoleranzen fachkundig – inklusive passender Prüfmittelauswahl und nachvollziehbarer Bewertung der Prüfergebnisse.",
    bulletPoints: [
      "Prüfplanung & Messstrategie",
      "Form- und Lagetoleranzen",
      "Prüfmittelauswahl",
      "Bewertung von Prüfergebnissen",
    ],
    icon: "caliper",
    category: "fertigung",
    sortOrder: 11,
    visible: true,
  },
];

export const businessUnits: BusinessUnit[] = [
  {
    id: "sicherheit",
    title: "Sicherheit",
    slug: "sicherheit",
    navLabel: "Arbeitssicherheit",
    icon: "shield",
    claim: "Rechtlich passend, praktisch tragfähig.",
    description:
      "Arbeitsschutz-Basis, Absturzsicherung und Prüfpflichten – die rechtliche und organisatorische Grundlage für sicheres Arbeiten.",
    services: ["arbeitsschutz-basis", "absturzsicherung", "pruefpflichten"],
    teamMemberIds: ["andreas-wellenhofer"],
    sortOrder: 1,
    visible: true,
  },
  {
    id: "qualitaet-umwelt",
    title: "Qualität & Umwelt",
    slug: "qualitaet-umwelt",
    navLabel: "Qualität & Umwelt",
    icon: "certificate",
    claim: "Nachvollziehbar dokumentiert, fachlich fundiert.",
    description:
      "QM-System, Umweltmanagement und Fertigungsthemen – von ISO 9001 über Gefahrstoffe bis Schweißtechnik und Prüfplanung.",
    services: [
      "qm-iso9001",
      "umweltmanagement",
      "schweisstechnik",
      "fertigungsueberwachung",
      "korrosionsschutz-beschichtung",
      "pruefplanung-toleranzen",
    ],
    teamMemberIds: ["daniel-peschl"],
    sortOrder: 2,
    visible: true,
  },
  {
    id: "kultur-prozesse",
    title: "Kultur & Prozesse",
    slug: "kultur-prozesse",
    navLabel: "Kultur & Prozesse",
    icon: "workflow",
    claim: "Wo Sicherheit und Wertschöpfung zusammenspielen.",
    description:
      "Schulungen, Sicherheitskultur und Prozessarbeit vor Ort – damit Sicherheit im Alltag trägt und Wertschöpfung nicht blockiert.",
    services: ["schulungen", "prozesse-wertschoepfung"],
    teamMemberIds: ["florian-gloebl", "andreas-wellenhofer"],
    sortOrder: 3,
    visible: true,
  },
];
