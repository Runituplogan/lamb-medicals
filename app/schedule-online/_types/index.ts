export interface Meta {
    og_title?: string;
    og_description?: string;
    keywords?: string[];
  }
  
  export interface FormField {
    label: string;
    type: "text" | "email" | "textarea" | "select" | "button";
  }
  
  export interface Section {
    type: string;
    image?: string;
    headerText?: string;
    bodyText?: string;
    formFields?: FormField[];
  }
  
  export interface ScheduleOnlineData {
    meta?: Meta;
    title?: string; 
    content?: Section[];
  }
  
  export interface FormData {
    [key: string]: string;
  }
  
  
  export interface Errors {
    name?: string;
    email?: string;
    service?: string;
  }
  