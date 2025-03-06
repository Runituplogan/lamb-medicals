export interface ApiResponse {
  success?: boolean;
  message?: string;
  data?: PageData;
}

export interface PageData {
  id?: number;
  title: string;
  slug?: string;
  active?: boolean;
  meta?: MetaData;
  content?: ContentSection[];
}

export interface MetaData {
  description?: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
}

export type ContentSection =
  | HeroSection
  | SectionWithCTA
  | TeamSection
  | ServicesSection
  | SectionWithImage
  | SectionWithFeatures
  | SectionWithList;

export interface BaseSection {
  type?: string;
  headerText?: string;
  bodyText?: string;
}

export interface HeroSection extends BaseSection {
  type?: "hero";
  image?: string;
  backgroundColor?: string;
}

export interface SectionWithCTA extends BaseSection {
  type?: "section1" | "section6" | "section8";
  cta_button?: CTAButton;
}

export interface TeamSection extends BaseSection {
  type?: "section2";
  team_members?: TeamMember[];
}

export interface ServicesSection extends BaseSection {
  type?: "section3";
  services?: Service[];
}

export interface SectionWithImage extends BaseSection {
  type?: "section4" | "section6" | "section8";
  image?: string;
}

export interface SectionWithFeatures extends BaseSection {
  type?: "section5";
  features?: Record<string, string>;
}

export interface SectionWithList extends BaseSection {
  type?: "section7";
  features?: string[];
}

export interface CTAButton {
  text?: string;
  link?: string;
  style?: string;
}

export interface TeamMember {
  name?: string;
  image?: string;
}

export interface Service {
  icon?: string;
  title?: string;
}
