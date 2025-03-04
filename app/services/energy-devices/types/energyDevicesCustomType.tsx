import { ButtonType } from "@/app/about/types/aboutCustomTypes";
interface sectionsType {
    bodyText:string,
    headerText:string,
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