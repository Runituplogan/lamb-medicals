"use client";
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Botox from "./components/botox";
import DermalFillers from "./components/dermal-fillers";
import Sculptra from "./components/sculptra";
import PRPRejuvenation from "./components/prp-rejuvenation";
import Kybella from "./components/kybella";
import { useInjectableTreatmentPage } from "@/app/contexts/injectableTreatmentContext";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section7,
  Section9,
} from "./types/InjectableTreatmentType";
import Preloader from "@/app/components/Preloader";
import { FaqSection } from "@/app/about/types/aboutCustomTypes";
import { FAQsSection } from "../medical-services/types/medical-services";

const injectableTreatmentsTabItems = [
  { href: "#botox", label: "Injectables (Botox/Dysport)" },
  { href: "#dermal-fillers", label: "Dermal Fillers" },
  { href: "#sculptra", label: "Sculptra" },
  { href: "#prp-rejuvenation", label: "PRP Rejuvenation" },
  { href: "#kybella", label: "Kybella" },
];

export default function InjectableTreatments() {
  const { InjectableTreatmentPageData } = useInjectableTreatmentPage();

  if (
    !InjectableTreatmentPageData ||
    !InjectableTreatmentPageData.content ||
    InjectableTreatmentPageData.content.length === 0
  ) {
    return <Preloader />;
  }

  //console.log({ InjectableTreatmentPageData });

  const heroData: ContentItem | undefined =
    InjectableTreatmentPageData.content?.find(
      (item: any) => item.type === "hero",
    );

  const botoxData: Section1 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section1",
  );

  const dermalFillers: Section3 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section3",
  );

  const sculptra: Section5 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section5",
  );

  const PRPRejuvenationData: Section7 =
    InjectableTreatmentPageData.content?.find(
      (item: any) => item.type === "section7",
    );

  const KybellaData: Section9 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section9",
  );

  const botoxQuestion:FAQsSection =  InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section2",
  );

  const dermaFillersFaqs :FAQsSection =  InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section4",
  );

  const sculptraFillersFaqs :FAQsSection =  InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section6",
  );
 
  const PRPRejuvenationFaqs:FAQsSection =  InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section8",
  );

 const kybellaFAQs:FAQsSection =  InjectableTreatmentPageData.content?.find(
  (item: any) => item.type === "section11",
);

  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />
      <ServicesTab tabItems={injectableTreatmentsTabItems} />
      <Botox data={botoxData} question={botoxQuestion} />
      <DermalFillers data={dermalFillers}  question={dermaFillersFaqs}/>
      <Sculptra data={sculptra} question={sculptraFillersFaqs}/>
      <PRPRejuvenation data={PRPRejuvenationData} question={PRPRejuvenationFaqs} />
      <Kybella data={KybellaData} question ={kybellaFAQs}/>
    </Fragment>
  );
}
