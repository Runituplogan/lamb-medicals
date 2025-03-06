"use client";
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import BeWellProgram from "../memberships/components/well-program";
import BeWellProgramTeam from "../memberships/components/well-program-team";
import OurServices from "../memberships/components/our-services";
import WhyChooseUs from "../memberships/components/why-choose-us";
import Transformation from "../memberships/components/transformation ";
import VisualConsultations from "./components/visual-consultations";
import ElectronicCommunication from "./components/electronic-communication";
import { useWeightLoss } from "@/app/contexts/WeightLoss";
import Preloader from "@/app/components/Preloader";
import {
  BaseSection,
  SectionWithCTA,
  SectionWithFeatures,
  SectionWithImage,
  SectionWithList,
  ServicesSection,
  TeamSection,
} from "./types/weightLoss";
import { BeWellProgramServices, BeWellProgramTeamType, BeWellProgramType, ConciergeFamilyType, ElectronicCommunicationType, TransformationType, VirtualconsultationsType, WhyChooseUsType } from "../memberships/types/membershipCustomType";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function WeightLoss() {
  const { WeightLossData } = useWeightLoss();
  if (
    !WeightLossData ||
    !WeightLossData.content ||
    WeightLossData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = WeightLossData.content.find(
    (item: any) => item.type === "hero"
  );

  const beWellData: BeWellProgramType = WeightLossData.content.find(
    (item: any) => item.type === "section1"
  );

  const beWellTeam: BeWellProgramTeamType = WeightLossData.content.find(
    (item: any) => item.type === "section2"
  );

  const services: BeWellProgramServices = WeightLossData.content.find(
    (item: any) => item.type === "section3"
  );

  const virtualConsultations: VirtualconsultationsType = WeightLossData.content.find(
    (item: any) => item.type === "section4"
  );

  const WhyUs:  WhyChooseUsType = WeightLossData.content.find(
    (item: any) => item.type === "section5"
  );

  const nextStep: TransformationType = WeightLossData.content.find(
    (item: any) => item.type === "section6"
  );

  const consierge: ConciergeFamilyType = WeightLossData.content.find(
    (item: any) => item.type === "section7"
  );

  const ElectronicComm: ElectronicCommunicationType = WeightLossData.content.find(
    (item: any) => item.type === "section8"
  );

  return (
    <Fragment>
      <div className="xs:block hidden">
        <ServicesHero
          image={`${heroData?.image}`}
          title={`${heroData?.headerText}`}
          description={`${heroData?.bodyText}`}
        />
      </div>
      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        <img
          src={`${heroData?.image}`}
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        />

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            {`${heroData?.headerText}`}
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            {`${heroData?.bodyText}`}
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram data={beWellData} />
      <BeWellProgramTeam data={beWellTeam} />
      <OurServices data={services} />
      <VisualConsultations data={virtualConsultations} />
      <WhyChooseUs data={WhyUs} />
      <Transformation data={nextStep} />
      <ConciergeFamily data={consierge} />
      <ElectronicCommunication data={ElectronicComm}/>
    </Fragment>
  );
}
