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

interface homepageSection1 {
  type: string;
  headerText: string;
  bodyText: string;
  image: string;
}

interface HomepageSection2 {
  type: string;
  headerText?: string;
  bodyText?: string;
  image?: string;
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
  buttonPrimaryText?: string;
  buttonPrimaryLink?: string;
}

interface HomepageSection3 {
  type: string;
  headerText?: string;
  bodyText?: string;
  primaryButton?: {
    text: string;
  };
  features?: {
    title: string;
    description: string;
    image: string;
    linkText: string;
  }[];
}

interface HomepageSection4 {
  type: string;
  headerText?: string;
  bodyText?: string;
  teamMembers?: {
    name: string;
    role: string;
    image: string;
  }[];
}

interface HomepageSection5 {
  type: string;
  headerText?: string;
  testimonials?: {
    name: string;
    role: string;
    image: string;
    testimonial: string;
    username: string;
    social: string;
  }[];
}

interface HomepageSection6 {
  type: string;
  headerText?: string;
  bodyText?: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  image?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

//contact form types

interface ContactFormField {
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required: boolean;
}

interface ContactForm {
  fields: ContactFormField[];
  primaryButton: {
    text: string;
    link: string;
  };
}

interface HomepageSection7 {
  type: "section7";
  headerText?: string;
  BodyText?: string;
  map?: string;
  form?: ContactForm;
}
