import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import { IFaq } from "@/app/data/faq";

export interface BeWellProgramType{
    type:string,
    bodyText:string,
    headerText:string,
    cta_button:ButtonType
}

export interface BeWellProgramTeamType{
    type:string,
    bodyText:string,
    headerText:string,
    team_members:{name:string,image:string}[]
}

export interface BeWellProgramServices{
    type:string,
    bodyText:string,
    headerText:string,
    services:{icon:string,title:string}[]
}

export interface VirtualconsultationsType{
    type:string,
    bodyText:string,
    headerText:string,
    image:string
}

interface Feature {
    title: string;
    bodyText: string;
  }
  
  export interface WhyChooseUsType {
    type: string;
    bodyText: string;
    headerText: string;
    features: Feature[];
  }
  
export interface TransformationType{
    type:string,
    bodyText:string,
    headerText:string,
    cta_button:ButtonType,
    image:string,
}

export interface ConciergeFamilyType{
    type:string,
    bodyText:string,
    headerText:string,
    features:string[],
}

export interface ElectronicCommunicationType{
    type:string,
    bodyText:string,
    headerText:string,
    image:string,
    cta_button:ButtonType
}
export interface ReImagingType{
    type:string,
    bodyText:string,
    headerText:string,
    image:string,
    before_and_after:string[]
}

export interface ReImagingFAQ{
    bodyText:string,
    headerText:string,
    type:string,
    faqs:IFaq[],
}

interface LevelsType{
    title:string,
    description:string,
    packages:string[],
    services:string[],
}
export interface AethesticsMembershipType{
    type:string,
    headerText:string,
    levels:LevelsType[]
}