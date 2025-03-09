"use client";
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
import {
  AethesticsMembershipType,
  BeWellProgramServices,
  BeWellProgramTeamType,
  BeWellProgramType,
  ConciergeFamilyType,
  ElectronicCommunicationType,
  ReImagingFAQ,
  ReImagingType,
  TransformationType,
  VirtualconsultationsType,
  WhyChooseUsType,
} from "./types/membershipCustomType";
const weightLossTabItems = [
  { href: "#well-program", label: "Be Well-Both Virtal & Clinic Offered" },
  // { href: "#aviclear", label: "Aviclear (Plated)" },
  { href: "#aesthetic-membership", label: "Aesthetic Membership" },
];

export default function Memberships() {
  const { membershipPageData } = useMembershipPage();
  if (
    !membershipPageData ||
    !membershipPageData.content ||
    membershipPageData.content.length === 0
  ) {
    return <Preloader />;
  }
  const heroData: ContentItem | undefined = membershipPageData.content?.find(
    (item: any) => item.type === "hero",
  );
  const beWellProgram: BeWellProgramType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section1");
  const beWellProgramTeam: BeWellProgramTeamType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section2");
  const beWellProgramSevices: BeWellProgramServices | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section3");
  const virtualConsultations: VirtualconsultationsType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section4");
  const whyChooseUs: WhyChooseUsType = membershipPageData.content?.find(
    (item: any) => item.type === "section5",
  );
  const transformation: TransformationType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section6");
  const conciergeFamily: ConciergeFamilyType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section7");
  const electronicCommunication: ElectronicCommunicationType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section8");
  const reImagingType: ReImagingType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section9");
  const reImagingFaq: ReImagingFAQ | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section10");
  const aethesticsMembership: AethesticsMembershipType | undefined =
    membershipPageData.content?.find((item: any) => item.type === "section11");
  console.log({ membershipPageData });
  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />

      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram data={beWellProgram} />
      <BeWellProgramTeam data={beWellProgramTeam} />
      <OurServices data={beWellProgramSevices} />
      <VisualConsultations data={virtualConsultations} />
      <WhyChooseUs data={whyChooseUs} />
      <Transformation data={transformation} />
      <ConciergeFamily data={conciergeFamily} />
      <ElectronicCommunication data={electronicCommunication} />
      {/* <ReImaging data={reImagingType} faqs={reImagingFaq} /> */}
      <AethesticsMembership data={aethesticsMembership} />
    </Fragment>
  );
}
