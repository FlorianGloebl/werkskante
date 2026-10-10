export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  focusAreas: string[];
  image: string;
  linkedinUrl?: string;
  email?: string;
  sortOrder: number;
  visible: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
  icon: string;
  category: string;
  sortOrder: number;
  visible: boolean;
}

export interface BusinessUnit {
  id: string;
  title: string;
  slug: string;
  navLabel: string;
  icon: string;
  claim: string;
  description: string;
  services: string[];
  teamMemberIds: string[];
  sortOrder: number;
  visible: boolean;
}

export interface Reference {
  id: string;
  companyName: string;
  industry: string;
  employeeRange: string;
  projectType: string;
  description: string;
  result: string;
  logo?: string;
  image?: string;
  approved: boolean;
  visible: boolean;
}

export interface ContactInquiry {
  id: string;
  createdAt: string;
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  employeeCount?: string;
  industry?: string;
  topic: string;
  message: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "closed";
}

export interface SiteSettings {
  brandName: string;
  domain: string;
  metaTitle: string;
  metaDescription: string;
  mainClaim: string;
  tagline: string;
  contactEmail: string;
  phone: string;
  address: string;
  legalName: string;
  impressumUrl: string;
  privacyUrl: string;
}

// Inhalte der "Gründer-Begleitung"-Unit (/start) — bewusst eigene Typen,
// keine Wiederverwendung von BusinessUnit/Service (die meinen Kompetenzbereiche
// innerhalb der bestehenden Beratung, nicht diese zweite, eigenständige Unit).
export interface StartOfferPoint {
  id: string;
  title: string;
  description: string;
}

export interface StartProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface StartPageContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  positioningParagraph: string;
  aboutEyebrow: string;
  aboutQuote: string;
  aboutParagraph: string;
  aboutRoles: string[];
  mentorsNote: string;
  offerPoints: StartOfferPoint[];
  processSteps: StartProcessStep[];
  audienceTitle: string;
  audienceParagraph: string;
  contactTitle: string;
  contactDescription: string;
}

// Plattform-Ebene (Hub-Seite "/"): die Business Units als gleichwertige,
// datengetriebene Kacheln. Eigener Typ, unabhängig von BusinessUnit/Service
// und von StartPageContent — diese hier verlinkt nur auf die eigenständigen
// Unit-Routen, statt deren Inhalte zu duplizieren.
export interface PlatformUnit {
  id: string;
  title: string;
  navLabel: string;
  href: string;
  icon: string;
  claim: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  sortOrder: number;
  visible: boolean;
}
