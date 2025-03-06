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
      (item: any) => item.type === "hero"
    );

  const botoxData: Section1 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section1"
  );

  const dermalFillers: Section3 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section3"
  );

  const sculptra: Section5 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section5"
  );

  const PRPRejuvenationData: Section7 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section7"
  );

  const KybellaData: Section9 = InjectableTreatmentPageData.content?.find(
    (item: any) => item.type === "section9"
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
      <ServicesTab tabItems={injectableTreatmentsTabItems} />
      <Botox data={botoxData} />
      <DermalFillers data={dermalFillers} />
      <Sculptra data={sculptra} />
      <PRPRejuvenation data={PRPRejuvenationData}/>
      <Kybella data={KybellaData}/>
    </Fragment>
  );
}
