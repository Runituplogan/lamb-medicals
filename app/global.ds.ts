interface HeroData {
  backgroundImage?: string;
  bodyText?: string;
  buttonPrimaryLink?: string;
  buttonPrimaryText?: string;
  buttonSecondaryLink?: string;
  buttonSecondaryText?: string;
  headerText?: string;
  type: string;
}

interface MetaData {
  description: string;
  keywords: string;
  og_title: string;
  og_description: string;
}

interface Feature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
  linkText?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  username: string;
  social: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormField {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface Form {
  fields: FormField[];
  primaryButton: {
    text: string;
    link: string;
  };
}

interface ContentItem {
  type: string;
  headerText?: string;
  bodyText?: string;
  buttonPrimaryText?: string;
  buttonSecondaryText?: string;
  buttonPrimaryLink?: string;
  buttonSecondaryLink?: string;
  backgroundImage?: string;
  image?: string;
  features?: Feature[];
  primaryButton?: {
    text: string;
    link: string;
  };
  teamMembers?: TeamMember[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  map?: string;
  form?: Form;
}