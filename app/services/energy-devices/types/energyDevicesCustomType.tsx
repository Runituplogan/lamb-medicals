import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";
interface sectionsType {
    bodyText:string,
    headerText:string,
    content:string[],
    images:{image:string,type:string}[]
}

export interface AgejectType{
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    image:string,
    sections:sectionsType[],
    type:string,
}

export interface AgeJectFaqs{
    textBody:string,
    headerText:string,
    questions:IFaq[],
    type:string,
}

export interface SofwaveType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    type:string,
    "0":{headerText:string,bodyText:string[],images:{image:string,type:string}[]},
    "1":{headerText:string,bodyText:string[],images:{image:string,type:string}[]},
}

export interface SofwaveFaqs{
    textBody:string,
    headerText:string,
    questions:IFaq[],
    type:string,
}

export interface IPLType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    subsection:{bodyText:string,headerText:string,images:{image:string,type:string}[]},
    type:string,
}


export interface IPLFAQs{
    textBody:string,
    headerText:string,
    questions:IFaq[],
    type:string,
}

export interface MicroneedlingType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    subsection:{bodyText:string,headerText:string,images:{image:string,type:string}[]},
    type:string,
    videos:string,
}

export interface MicroneedlingFaq{
    textBody:string,
    headerText:string,
    questions:IFaq[],
    type:string,
}
