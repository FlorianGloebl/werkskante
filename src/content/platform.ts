import type { PlatformUnit } from "@/types/content";

// Dach-Claim der Hub-Seite ("/") — bewusst unabhängig von siteSettings, damit
// die Beratungsseite (/arbeitssicherheit, nutzt siteSettings.mainClaim/tagline
// direkt in Hero.tsx) unverändert bleibt.
export const platformIntro = {
  eyebrow: "Werkskante",
  title: "Wir für den Mittelstand.",
  subheadline: "Und die Plattform für talentierte Jungunternehmer:innen und Gründer:innen.",
  subtitle:
    "Beratung zu Arbeitssicherheit für produzierende Unternehmen – und persönliche Begleitung für alle, die den Schritt in die Selbstständigkeit gehen wollen.",
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
    ctaLabel: "Gründung besprechen",
    sortOrder: 2,
    visible: true,
  },
];
