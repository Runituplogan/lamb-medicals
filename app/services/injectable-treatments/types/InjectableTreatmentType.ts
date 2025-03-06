import { IFaq } from "@/app/data/faq";

export interface CTAButton {
  text: string;
  link: string;
  style: string;
}

export interface Image {
  image: string;
  type: "Before" | "After";
}

export interface SectionWithImages {
  headerText: string;
  images: Image[];
}

export interface Section1 {
  type: "section1";
  headerText: string;
  bodyText: string;
  cta_button: CTAButton;
  sections: SectionWithImages[];
}

export interface Section2 {
  type: "section2";
  headerText: string;
  textBody: string;
  questions: IFaq[];
}

export interface Section3 {
  type: "section3";
  headerText: string;
  bodyText: string;
  cta_button: CTAButton;
  section: {
    headerText: string;
    bodyText: string[];
    images: string[];
  };
}

export interface Section4 {
  type: "section4";
  headerText: string;
  textBody: string;
  questions: IFaq[];
}

export interface Section5 {
  type: "section5";
  headerText: string;
  bodyText: string;
  cta_button: CTAButton;
  image: string;
  subsection: {
    headerText: string;
    images: Image[];
  };
}

export interface Section6 {
  type: "section6";
  headerText: string;
  textBody: string;
  questions: IFaq[];
}

export interface Section7 {
  type: "section7";
  headerText: string;
  bodyText: string;
  cta_button: CTAButton;
  images: Image[];
}

export interface Section8 {
  type: "section8";
  headerText: string;
  textBody: string;
  questions: IFaq[];
}

export interface Section9 {
  type: "section9";
  headerText: string;
  bodyText: string;
  image: string;
}

export interface Section10 {
  type: "section10";
  headerText: string;
  textBody: string;
  questions: IFaq[];
}

