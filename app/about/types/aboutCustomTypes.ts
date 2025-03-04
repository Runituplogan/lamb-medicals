import { IFaq } from "@/app/data/faq"

export interface Faq{
    question:string,
    answer:string
}
export interface ButtonType{
    text:string,
    link:string,
    style:string,
} 

export interface TeamMemeber{
    name:string,
    role:string,
    image:string,
}

export interface BuildTrustType{
    bodyText:string,
    headerText:string,
    images:string[],
    type:string
}

export interface RefineHealthCareType{
    backgroundColor:string,
    buttons:ButtonType[],
    headerText:string,
    image:string,
    type:string,
    bodyText:string
}

export interface MeetTeamType{
    bodyText:string,
    headerText:string,
    teamMembers:TeamMemeber[],
    type:string,
}

export interface FaqSection{
    bodyText:string,
    headerText:string,
    image:string,
    primaryButton:ButtonType,
    type:string,
    faqs:IFaq[],
}