import type { StartPageContent } from "@/types/content";

// Inhalt für die Unit "Gründung" (/start), abgeleitet aus den
// Gründer-relevanten Angeboten auf floriangloebl.de ("Gründen", "Von der
// Idee zum Prototyp", "Mentoring") und seiner dortigen Positionierung.
// Tonalität bewusst persönlich (Du) und ohne den Begriff "Business Angel" –
// Netzwerk, Erfahrung und ehrliches Feedback statt stiller Kapitalgeber.
export const startContent: StartPageContent = {
  metaTitle: "Gründung",
  metaDescription:
    "Werkskante begleitet Gründer:innen beim Schritt in die Selbstständigkeit – mit Erfahrung, Netzwerk und ehrlichem Feedback.",

  heroEyebrow: "Werkskante · Gründung",
  heroTitle: "Eine Idee auf eigene Beine stellen.",
  heroSubtitle:
    "Wer gründen will, dem helfe ich beim Start – mit einem klaren Angebot, ersten Kundengesprächen und einem Netzwerk, das Türen öffnet.",
  heroCtaLabel: "Gründung besprechen",

  positioningParagraph:
    "Ich bin kein stiller Gesellschafter im Hintergrund. Ich bin ein leidenschaftlicher Netzwerker, der mit anpackt – mit Erfahrung, ehrlichem Feedback und Kontakten, die sonst verschlossen blieben.",

  aboutEyebrow: "Wer dich begleitet",
  aboutQuote:
    "Ich weiß, wie sich der Schritt in die Selbstständigkeit anfühlt – weil ich ihn selbst gegangen bin.",
  aboutParagraph:
    "Fast 16 Jahre war ich in einem mittelständischen Maschinenbau-Unternehmen – zuletzt in der Geschäftsleitung. Heute stehe ich selbst mehrfach auf eigenen Beinen: mit meiner Beratung, als Mitgründer eines Unternehmens für Schweizer KMU und mit Werkskante. Diese Erfahrung – und mein Netzwerk – gebe ich jetzt an dich weiter.",
  aboutRoles: [
    "Glöbl & Partner — Beratung für den Mittelstand",
    "Coolab AG — Mitgründer",
    "Werkskante — Inhaber",
  ],
  mentorsNote:
    "Vier Menschen haben mich auf meinem eigenen Weg geprägt und gefördert. Was ich von ihnen gelernt habe, gebe ich jetzt weiter.",

  offerPoints: [
    {
      id: "angebot-schaerfen",
      title: "Klares Angebot statt Bauchgefühl",
      description:
        "Wir schärfen dein Angebot, verstehen deine Kundschaft besser und organisieren die ersten Schritte.",
    },
    {
      id: "prototyp",
      title: "Schnell zum ersten greifbaren Ergebnis",
      description:
        "Klein anfangen, ausprobieren, anhand der Rückmeldungen verbessern – ob Prozess, Website oder kleines digitales Tool.",
    },
    {
      id: "mentoring",
      title: "Ehrliches Feedback, über Monate",
      description:
        "Mehrmonatige Begleitung, in der ich meine Erfahrung teile und fachlich ehrliches Feedback gebe.",
    },
    {
      id: "netzwerk",
      title: "Ein Netzwerk, das Türen öffnet",
      description:
        "Ich bin ein leidenschaftlicher Netzwerker – Kontakte, die am Anfang sonst verschlossen bleiben.",
    },
  ],

  processSteps: [
    {
      number: 1,
      title: "Gründung besprechen",
      description: "Ein offenes Gespräch über deine Idee und den nächsten sinnvollen Schritt.",
    },
    {
      number: 2,
      title: "Prototyp bauen",
      description: "Klein anfangen, ausprobieren, anhand der Rückmeldungen verbessern.",
    },
    {
      number: 3,
      title: "Laufend begleiten",
      description: "Mentoring über Monate, mit Erfahrung und ehrlichem Feedback.",
    },
  ],

  audienceTitle: "Für wen das gedacht ist",
  audienceParagraph:
    "Für alle mit einer Gründungsidee – unabhängig von Branche oder Erfahrung. Steuerliche und rechtliche Fragen gehören in die Hände der entsprechenden Fachleute, dafür bin ich nicht der richtige Ansprechpartner.",

  contactTitle: "Lass uns über deine Idee sprechen.",
  contactDescription: "Kurze Nachricht genügt – ich melde mich persönlich zurück.",
};
