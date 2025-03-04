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
import { AquaGoldFaq, AquaGoldType, DermaplaningType, DiamondGlowType, EllebanaLashLiftType, PeelsType } from "./types/facialServicesCustomType";

const facialServicesTabItems = [
  { href: "#aqua-gold", label: "Aqua Gold" },
  { href: "#diamond-glow", label: "Diamond Glow" },
  { href: "#dermaplanning", label: "Dermaplanning" },
  { href: "#peels", label: "Peels" },
  { href: "#ellebana-lash-lift", label: "Ellebana Lash Lift" },
];

export default function FacialServices() {
  const {facialServicesPageData} = useFacialServicePage()
    if (!facialServicesPageData || !facialServicesPageData.content || facialServicesPageData.content.length === 0) {
      return <Preloader />;
    }
  
  const heroData: ContentItem | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "hero"
  );
  const aquaGold: AquaGoldType | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section1"
  );
  const aquaGoldFaq: AquaGoldFaq | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section2"
  );
  const diamondGlow: DiamondGlowType | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section3"
  );
  const dermaplanning: DermaplaningType | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section4"
  );
  const peels: PeelsType | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section5"
  );
  const ellebanaLashLift: EllebanaLashLiftType | undefined = facialServicesPageData.content.find(
    (item: any) => item.type === "section6"
  );
  return (
    <Fragment>
      <div className="hidden w-full xs:block">
        <ServicesHero
         // image="facial-services/facial-service-image.png"
         image={`${heroData?.image}`}
          title={`${heroData?.headerText}`}
          description={`${heroData?.bodyText}`}
        />
      </div>

      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        {/* <div className="relative size-full" data-aos="fade-right"> */}
        {/* <img
          data-aos="fade-right"
          src="/images/facial-services/facial-service-image-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        /> */}
        <img
          data-aos="fade-right"
          src={`${heroData?.image}`}
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        />
        {/* </div> */}

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
      <ServicesTab tabItems={facialServicesTabItems} />
      <AquaGold  data={aquaGold}/>
      <ServicesFAQ
        className="px-2 md:px-0"
        title={`${aquaGoldFaq?.headerText}`}
        description="Curious about AquaGold? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={aquaGoldFaq?.questions}
      />
      <DiamondGlow data={diamondGlow} />
      <Dermaplanning data={dermaplanning}/>
      <Peels data={peels}/>
      <EllebanaLashList data={ellebanaLashLift}/>
    </Fragment>
  );
}
