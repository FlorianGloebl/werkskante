import type { PlatformUnit } from "@/types/content";

// Dach-Claim der Hub-Seite ("/") — bewusst unabhängig von siteSettings, damit
// die Beratungsseite (/arbeitssicherheit, nutzt siteSettings.mainClaim/tagline
// direkt in Hero.tsx) unverändert bleibt. Zwei grammatikalisch parallele
// Zeilen statt Headline+Subheadline-Hierarchie, damit Gründung nicht wie ein
// Zusatz zur Mittelstandsberatung wirkt, sondern gleichwertig steht.
export const platformIntro = {
  eyebrow: "Werkskante",
  lineOne: "Wir beraten den Mittelstand.",
  lineTwo: "Und begleiten Gründer:innen.",
  closingTitle: "Nicht sicher, wo Sie hingehören?",
  closingDescription: "Kurze Nachricht genügt – wir ordnen gemeinsam ein, wo Sie am besten aufgehoben sind.",
};

// Kurze, eindeutige Labels statt vager Oberbegriffe — wer reinklickt, soll
// sofort wissen, in welchem der beiden Bereiche er landet.
export const platformUnits: PlatformUnit[] = [
  {
    id: "arbeitssicherheit",
    title: "Arbeitssicherheit",
    navLabel: "Arbeitssicherheit",
    href: "/arbeitssicherheit",
    icon: "shield",
    claim: "Arbeitsschutz und Arbeitssicherheit für den produzierenden Mittelstand.",
    description: "Rechtlich passend, praktisch tragfähig, vor Ort erarbeitet.",
    highlights: [
      "Gefährdungsbeurteilungen & Betriebsanweisungen",
      "PSA- und Maschinensicherheit",
      "Analyse und Umsetzung vor Ort",
    ],
    ctaLabel: "Beratung anfragen",
    sortOrder: 1,
    visible: true,
  },
  {
    id: "start",
    title: "Gründung",
    navLabel: "Gründung",
    href: "/start",
    icon: "torch",
    claim: "Für talentierte Jungunternehmer:innen und Gründer:innen.",
    description: "Persönliche Begleitung mit Erfahrung, Netzwerk und ehrlichem Feedback.",
    highlights: [
      "Klares Angebot statt Bauchgefühl",
      "Mentoring mit ehrlichem Feedback",
      "Ein Netzwerk, das Türen öffnet",
    ],
    ctaLabel: "Gründung besprechen",
    sortOrder: 2,
    visible: true,
  },
];
