"use client";

import { Fragment, useEffect } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import AquaGold from "./_components/AquaGold";
import ServicesFAQ from "../components/services-faq";
import { useFacialServicePage } from "@/app/contexts/facialService";
import DiamondGlow from "./_components/DiamondGlow";
import Dermaplanning from "./_components/Dermaplanning";
import Peels from "./_components/Peels";
import EllebanaLashList from "./_components/EllebanaLashLift";
import Preloader from "@/app/components/Preloader";
import {
  AquaGoldFaq,
  AquaGoldType,
  DermaplaningType,
  DiamondGlowType,
  EllebanaLashLiftType,
  PeelsType,
} from "./types/facialServicesCustomType";
import { heroSection } from "../types/servicePageCustomTypes";

const facialServicesTabItems = [
  { href: "#aqua-gold", label: "Aqua Gold" },
  { href: "#diamond-glow", label: "Diamond Glow" },
  { href: "#dermaplanning", label: "Dermaplanning" },
  { href: "#peels", label: "Peels" },
  { href: "#ellebana-lash-lift", label: "Ellebana Lash Lift" },
];

export default function FacialServices() {
  const { facialServicesPageData } = useFacialServicePage();

  // Extract metadata
  const meta = facialServicesPageData?.meta ? JSON.parse(facialServicesPageData.meta) : {};

  useEffect(() => {
    document.title = meta.og_title || facialServicesPageData?.title || "Facial Services - Lamb Medical Aesthetics";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.og_description || "Discover expert facial treatments for radiant skin.");
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", meta.keywords?.join(", ") || "");
  }, [meta, facialServicesPageData]);

  
  if (!facialServicesPageData || !facialServicesPageData.content?.length) {
    return <Preloader />;
  }

  // Extract sections
  const heroData = facialServicesPageData.content.find((item: heroSection) => item.type === "hero");
  const aquaGold = facialServicesPageData.content.find((item: AquaGoldType) => item.type === "section1");
  const aquaGoldFaq = facialServicesPageData.content.find((item: AquaGoldFaq) => item.type === "section2");
  const diamondGlow = facialServicesPageData.content.find((item: DiamondGlowType) => item.type === "section3");
  const dermaplanning = facialServicesPageData.content.find((item: DermaplaningType) => item.type === "section4");
  const peels = facialServicesPageData.content.find((item: PeelsType) => item.type === "section5");
  const ellebanaLashLift = facialServicesPageData.content.find((item: EllebanaLashLiftType) => item.type === "section6");

  return (
    <Fragment>
      <ServicesHero
        image={heroData?.image as string}
        title={heroData?.headerText as string}
        description={heroData?.bodyText as string}
      />
      <ServicesTab tabItems={facialServicesTabItems} />
      <AquaGold data={aquaGold} aquaGoldFaq={aquaGoldFaq} />
      <DiamondGlow data={diamondGlow} />
      <Dermaplanning data={dermaplanning} />
      <Peels data={peels} />
      <EllebanaLashList data={ellebanaLashLift} />
    </Fragment>
  );
}
