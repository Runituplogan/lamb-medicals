"use client"
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Plated from "./components/plated";
import Exosomes from "./components/exosomes";
import Latisse from "./components/latisse";
import { useSkinCareProductPage } from "@/app/contexts/skinCareProduct";
import Preloader from "@/app/components/Preloader";
import { ExosomesFAQ, ExosomesType, latisseFAQ, LatisseType, PlatedFAQ, PlatedType } from "./types/skinCareProductCustomTypes";
const weightLossTabItems = [
  { href: "#plated", label: "Plated" },
  { href: "#exosomes", label: "Exosomes" },
  { href: "#latisse", label: "Latisse" },
];

export default function SkinCareProducts() {
  const {skinCareProductPageData}= useSkinCareProductPage()
    if (
      !skinCareProductPageData ||
      !skinCareProductPageData.content ||
      skinCareProductPageData.content.length === 0
    ) {
      return <Preloader />;
    }
    console.log(skinCareProductPageData)
    const heroData: ContentItem | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "hero"
    );
    const plated: PlatedType | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section1"
    );
    const platedFaqs: PlatedFAQ | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section2"
    );
    const exosomes: ExosomesType | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section3"
    );
    const exosomesFaq: ExosomesFAQ | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section4"
    );
    const latisse: LatisseType | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section5"
    );
  
    const latisseFaq: latisseFAQ | undefined = skinCareProductPageData.content?.find(
      (item: any) => item.type === "section6"
    );
  
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
        <img
          src={`${heroData?.image}`}
          alt="facial-service-image-mobile"
          className="absolute inset-0 h-screen object-cover object-center"
        />

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold lead xs:leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            {heroData?.headerText}
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-[16px] text-center"
            data-aos="fade-left"
          >
         {heroData?.bodyText}
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <Plated data={plated} faqs={platedFaqs}/>
      <Exosomes data={exosomes} faqs={exosomesFaq}/>
      <Latisse data={latisse} faqs={latisseFaq}/>
    </Fragment>
  );
}
