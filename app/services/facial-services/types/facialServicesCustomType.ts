import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";
export interface Section{
    bodyText:string,
    image:string,
}

export interface AquaGoldType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    type:string,
    sections:Section[],
}

export interface AquaGoldFaq{
    headerText:string,
    questions:IFaq[],
    type:string,
}

export interface DiamondGlowType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    images:string[],
    type:string,
}
export interface DermaplaningType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    images:string,
    type:string,
    additional_infos:{bodyText:string}[]
}
export interface PeelsType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    images:string,
    type:string,
    subsections:{bodyText:string,title:string,image:string}[]
}
export interface EllebanaLashLiftType{
    bodyText:string,
    cta_button:ButtonType,
    headerText:string,
    image:string,
    type:string,
    subsections:{bodyText:string,title:string}[]
    before_and_after:{images:{image:string,type:string}[],title:string}[]
}