import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";

export interface PRPType{
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    type:string,
}

export interface PRPFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

export interface OShotType {
    bodyText:string,
    conditions:string[],
    cta_button:ButtonType,
    headerText:string,
    image:string,
    subHeaderText:string,
    type:string
}

export interface OShotFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

export interface MonalisaTouchType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    image:string,
    subBodyText:string,
    type:string,
}

export interface MonalisaTouchFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],   
}

export interface MiraDryType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    image:string,
    type:string,
}

export interface MiraDryFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}