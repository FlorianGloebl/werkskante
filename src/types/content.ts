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
  claim: string;
  description: string;
  services: string[];
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
