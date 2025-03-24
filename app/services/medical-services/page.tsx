"use client";
import { Fragment, useEffect } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import LaserGenesis from "./components/laser-genesis";
import LaserWartRemoval from "./components/laser-wart-removal";
import LaserVeinTherapy from "./components/laser-vein-therapy";
import LaserNailFungus from "./components/laser-nail";
import { useMedicalServices } from "@/app/contexts/MedicalServices";
import Preloader from "@/app/components/Preloader";
import {
  FAQsSection,
  LaserGenesisSection,
  LaserTreatmentSection,
  Section,
} from "./types/medical-services";

const weightLossTabItems = [
  { href: "#concierge-medicine", label: "Concierge Medicine" },
  {
    href: "#laser-genesis",
    label: "Laser Genesis (warts, veins & nail fungas)",
  },
];

export default function MedicalServices() {
  const { MedicalServicesData } = useMedicalServices();

  const meta = MedicalServicesData?.meta
    ? JSON.parse(MedicalServicesData.meta)
    : {};

  useEffect(() => {
    if (meta.og_title) {
      document.title = meta.og_title;
    } else if (MedicalServicesData?.title) {
      document.title = MedicalServicesData.title;
    }

    if (meta.og_description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", meta.og_description);
    }

    if (meta.keywords) {
      document
        .querySelector('meta[name="keywords"]')
        ?.setAttribute("content", meta.keywords.join(", "));
    }
  }, [meta, MedicalServicesData]);

  if (
    !MedicalServicesData ||
    !MedicalServicesData.content ||
    MedicalServicesData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = MedicalServicesData.content?.find(
    (item: any) => item.type === "hero",
  );

  const consierge: any = MedicalServicesData.content?.find(
    (item: any) => item.type === "section1",
  );

  const laserGenesis: LaserGenesisSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section2",
  );

  const QandALaserGen: FAQsSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section3",
  );

  const laserWarts: LaserTreatmentSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section4",
  );

  const QandALaserWart: FAQsSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section5",
  );

  const LaserVein: LaserTreatmentSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section6",
  );

  const QandALaserVein: FAQsSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section7",
  );

  const LaserNail: LaserTreatmentSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section8",
  );

  const QandALaserNail: FAQsSection = MedicalServicesData.content?.find(
    (item: any) => item.type === "section9",
  );

  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <ConciergeFamily data={consierge} />
      <LaserGenesis data={laserGenesis} questions={QandALaserGen} />
      <LaserWartRemoval data={laserWarts} questions={QandALaserWart} />
      <LaserVeinTherapy data={LaserVein} questions={QandALaserVein} />
      <LaserNailFungus data={LaserNail} questions={QandALaserNail} />
    </Fragment>
  );
}
