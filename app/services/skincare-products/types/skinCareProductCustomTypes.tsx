import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";

export interface PlatedType{
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    images:string[],
    type:string,
}

export interface PlatedFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

export interface ExosomesType{
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    images:string[],
    type:string,
}

export interface ExosomesFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

export interface LatisseType{
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    image:string,
    type:string,
    subsection:{bodyText:string[],headerText:string,image:string}
}

export interface latisseFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}