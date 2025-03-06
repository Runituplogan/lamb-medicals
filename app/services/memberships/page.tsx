"use client"
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import BeWellProgram from "./components/well-program";
import BeWellProgramTeam from "./components/well-program-team";
import OurServices from "./components/our-services";
import WhyChooseUs from "./components/why-choose-us";
import Transformation from "./components/transformation ";
import ConciergeFamily from "../components/concierge-family";
import VisualConsultations from "../weight-loss/components/visual-consultations";
import ElectronicCommunication from "../weight-loss/components/electronic-communication";
import ReImaging from "../weight-loss/components/reimagining";
import AethesticsMembership from "./components/aethestics-membership";
import { useMembershipPage } from "@/app/contexts/membership";
import Preloader from "@/app/components/Preloader";
import { AethesticsMembershipType, BeWellProgramServices, BeWellProgramTeamType, BeWellProgramType, ConciergeFamilyType, ElectronicCommunicationType, ReImagingFAQ, ReImagingType, TransformationType, VirtualconsultationsType, WhyChooseUsType } from "./types/membershipCustomType";
const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function Memberships() {
  const {membershipPageData} = useMembershipPage();
  if (!membershipPageData || !membershipPageData.content || membershipPageData.content.length === 0) {
      return <Preloader />;
    }
  const heroData: ContentItem | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "hero"
  ); 
  const beWellProgram: BeWellProgramType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section1"
  ); 
  const beWellProgramTeam: BeWellProgramTeamType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section2"
  ); 
  const beWellProgramSevices: BeWellProgramServices | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section3"
  ); 
  const virtualConsultations: VirtualconsultationsType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section4"
  ); 
  const whyChooseUs: WhyChooseUsType = membershipPageData.content?.find(
    (item: any) => item.type === "section5"
  ); 
  const transformation: TransformationType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section6"
  ); 
  const conciergeFamily: ConciergeFamilyType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section7"
  ); 
  const electronicCommunication: ElectronicCommunicationType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section8"
  ); 
  const reImagingType: ReImagingType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section9"
  ); 
  const reImagingFaq: ReImagingFAQ | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section10"
  ); 
  const aethesticsMembership: AethesticsMembershipType | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "section11"
  ); 
  console.log({membershipPageData})
  return (
    <Fragment>
      <div className="xs:block hidden w-full">
        <ServicesHero
          image={`${heroData?.image}`}
          title={`${heroData?.headerText}`}
          description={`${heroData?.bodyText}`}
        />
      </div>

      <div className="w-full xs:hidden py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        {/* <img
          data-aos="fade-right"
          src="/images/memberships/membership-mobile.png"
          alt="memberships"
          className="absolute inset-0 h-screen object-cover object-center"
        /> */}

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            {heroData?.headerText}
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            {heroData?.bodyText}
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram  data={beWellProgram}/>
      <BeWellProgramTeam  data={beWellProgramTeam}/>
      <OurServices data={beWellProgramSevices}/>
      <VisualConsultations data={virtualConsultations} />
      <WhyChooseUs data={whyChooseUs}/>
      <Transformation data={transformation} />
      <ConciergeFamily data={conciergeFamily}/>
      <ElectronicCommunication data={electronicCommunication}/>
      <ReImaging data={reImagingType} faqs={reImagingFaq}/>
      <AethesticsMembership data={aethesticsMembership}/>
    </Fragment>
  );
}
 