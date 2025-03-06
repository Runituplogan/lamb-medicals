import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";

  export interface heroSection {
    type:string,
    headerText:string,
    bodyText:string,
    image:string,
    cta_buttons:ButtonType[],
    information:{headerText:string,BodyText:string}[]
  }

  export interface ServicePageFaqs{
    type:string,
    headerText:string,
    bodyText:string,
    primaryButton:{
        text:string
    },
    image:string,
    faqs:IFaq[]
  }