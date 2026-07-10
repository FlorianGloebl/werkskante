export interface PpeItem {
  id: string;
  label: string;
  icon: string;
  note: string;
  serviceId: string;
}

// Interaktives Gimmick in der Leistungen-Sektion: PSA-Ausrüstung, die auf
// das jeweils passende Werkskante-Leistungsfeld verweist.
export const ppeItems: PpeItem[] = [
  {
    id: "helm",
    label: "Schutzhelm",
    icon: "helmet",
    note: "Schützt den Kopf – aber nur, wenn Tragepflicht und Unterweisung auch gelebt werden.",
    serviceId: "arbeitsschutz-basis",
  },
  {
    id: "brille",
    label: "Schutzbrille",
    icon: "goggles",
    note: "Kleine Ausrüstung, große Wirkung bei Spänen, Funken und Chemikalien.",
    serviceId: "arbeitsschutz-basis",
  },
  {
    id: "gehoerschutz",
    label: "Gehörschutz",
    icon: "earmuffs",
    note: "Pflicht ab bestimmten Lärmpegeln – wir sagen Ihnen, ab wann genau.",
    serviceId: "arbeitsschutz-basis",
  },
  {
    id: "handschuhe",
    label: "Schutzhandschuhe",
    icon: "gloves",
    note: "Nur so gut wie die Gefährdungsbeurteilung, die dahintersteht.",
    serviceId: "arbeitsschutz-basis",
  },
  {
    id: "schuhe",
    label: "Sicherheitsschuhe",
    icon: "boots",
    note: "Basis-Schutz, der in praktisch jede Gefährdungsbeurteilung gehört.",
    serviceId: "arbeitsschutz-basis",
  },
  {
    id: "gurt",
    label: "PSA gegen Absturz",
    icon: "harness",
    note: "Anschlagpunkt, Gurt, Verbindungsmittel – unser Schwerpunktthema.",
    serviceId: "absturzsicherung",
  },
];
