"use client";

import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import AquaGold from "./_components/AquaGold";
import ServicesFAQ from "../components/services-faq";
import { aquaGoldFAQs } from "@/app/utils/data";
import DiamondGlow from "./_components/DiamondGlow";
import Dermaplanning from "./_components/Dermaplanning";
import Peels from "./_components/Peels";
import Image from "next/image";
import { useFacialServicePage } from "@/app/contexts/facialService";
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

const facialServicesTabItems = [
  { href: "#aqua-gold", label: "Aqua Gold" },
  { href: "#diamond-glow", label: "Diamond Glow" },
  { href: "#dermaplanning", label: "Dermaplanning" },
  { href: "#peels", label: "Peels" },
  { href: "#ellebana-lash-lift", label: "Ellebana Lash Lift" },
];

export default function FacialServices() {
  const { facialServicesPageData } = useFacialServicePage();
  if (
    !facialServicesPageData ||
    !facialServicesPageData.content ||
    facialServicesPageData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined =
    facialServicesPageData.content?.find((item: any) => item.type === "hero");
  const aquaGold: AquaGoldType | undefined =
    facialServicesPageData.content?.find(
      (item: any) => item.type === "section1",
    );
  const aquaGoldFaq: AquaGoldFaq | undefined =
    facialServicesPageData.content?.find(
      (item: any) => item.type === "section2",
    );
  const diamondGlow: DiamondGlowType | undefined =
    facialServicesPageData.content?.find(
      (item: any) => item.type === "section3",
    );
  const dermaplanning: DermaplaningType | undefined =
    facialServicesPageData.content?.find(
      (item: any) => item.type === "section4",
    );
  const peels: PeelsType | undefined = facialServicesPageData.content?.find(
    (item: any) => item.type === "section5",
  );
  const ellebanaLashLift: EllebanaLashLiftType | undefined =
    facialServicesPageData.content?.find(
      (item: any) => item.type === "section6",
    );
  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`} 
        description={`${heroData?.bodyText}`}
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
