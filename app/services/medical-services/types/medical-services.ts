export interface MedicalServiceResponse {
    success: boolean;
    message: string;
    data: MedicalServiceData;
  }
  
  export interface MedicalServiceData {
    id: number;
    title: string;
    slug: string;
    active: boolean;
    meta: MetaData;
    content: Section[];
  }
  
  export interface MetaData {
    description: string;
    keywords: string;
    og_title: string;
    og_description: string;
  }
  
  export type Section =
    | HeroSection
    | ConciergeFamilyMedicineSection
    | LaserGenesisSection
    | FAQsSection
    | LaserTreatmentSection
    | ImageGallerySection;
  
  export interface HeroSection {
    type: "hero";
    headerText: string;
    bodyText: string;
    image: string;
  }
  
  export interface ConciergeFamilyMedicineSection {
    type: "section1";
    headerText: string;
    bodyText: string;
    features: string[];
    backgroundColor: string;
  }
  
  export interface LaserGenesisSection {
    type: "section2";
    headerText: string;
    bodyText: string;
    cta_button: CTAButton;
    content: string;
    images: ImageData[];
  }
  
  export interface FAQsSection {
    type: string; // This can be section3, section5, section7, section9 (for FAQs)
    headerText: string;
    bodyText: string;
    faqs: FAQ[];
    questions?: FAQ[]
    textBody?: string,
    description?: string
  }
  
  export interface LaserTreatmentSection {
    type: string; // This can be section4, section6, section8 (for laser treatments)
    headerText: string;
    bodyText: string;
    cta_button: CTAButton;
    images: ImageData[];
  }
  
  export interface ImageGallerySection {
    type: string;
    headerText: string;
    bodyText: string;
    images: ImageData[];
  }
  
  export interface CTAButton {
    text: string;
    link: string;
  }
  
  export interface ImageData {
    image: string;
    type: string;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  