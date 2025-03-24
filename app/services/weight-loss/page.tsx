"use client";
import { Fragment, useEffect } from "react";
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
import {
  BeWellProgramServices,
  BeWellProgramTeamType,
  BeWellProgramType,
  ConciergeFamilyType,
  ElectronicCommunicationType,
  TransformationType,
  VirtualconsultationsType,
  WhyChooseUsType,
} from "../memberships/types/membershipCustomType";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function WeightLoss() {
  const { WeightLossData } = useWeightLoss();

  const meta = WeightLossData?.meta ? JSON.parse(WeightLossData.meta) : {};

  useEffect(() => {
    if (meta.og_title) {
      document.title = meta.og_title;
    } else if (WeightLossData?.title) {
      document.title = WeightLossData.title;
    }

    if (meta.og_description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", meta.og_description);
    }

    if (meta.keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute("content", meta.keywords.join(", "));
    }
  }, [meta, WeightLossData]);

  if (
    !WeightLossData ||
    !WeightLossData.content ||
    WeightLossData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = WeightLossData.content?.find(
    (item: any) => item.type === "hero",
  );

  const beWellData: BeWellProgramType = WeightLossData.content?.find(
    (item: any) => item.type === "section1",
  );

  const beWellTeam: BeWellProgramTeamType = WeightLossData.content?.find(
    (item: any) => item.type === "section2",
  );

  const services: BeWellProgramServices = WeightLossData.content?.find(
    (item: any) => item.type === "section3",
  );

  const virtualConsultations: VirtualconsultationsType =
    WeightLossData.content?.find((item: any) => item.type === "section4");

  const WhyUs: WhyChooseUsType = WeightLossData.content?.find(
    (item: any) => item.type === "section5",
  );

  const nextStep: TransformationType = WeightLossData.content?.find(
    (item: any) => item.type === "section6",
  );

  const consierge: ConciergeFamilyType = WeightLossData.content?.find(
    (item: any) => item.type === "section7",
  );

  const ElectronicComm: ElectronicCommunicationType =
    WeightLossData.content?.find((item: any) => item.type === "section8");

  return (
    <Fragment>
      <ServicesHero
        image={heroData?.image as string}
        title={heroData?.headerText as string}
        description={heroData?.bodyText as string}
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram data={beWellData} />
      <BeWellProgramTeam data={beWellTeam} />
      <OurServices data={services} />
      <VisualConsultations data={virtualConsultations} />
      <WhyChooseUs data={WhyUs} />
      <Transformation data={nextStep} />
      <ConciergeFamily data={consierge} />
      <ElectronicCommunication data={ElectronicComm} />
    </Fragment>
  );
}
