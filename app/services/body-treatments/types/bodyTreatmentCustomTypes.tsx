import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";

export interface EmsculptNeoType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    image:string,
    type:string,
    keyBenefits:string[]
}


export interface EmsculptNeoFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

export interface SofwaveBodyType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    type:string,
    subsections:{headerText:string,bodyText:string[],images:{image:string,type:string}[]}[]
}

export interface SofwaveBodyFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}