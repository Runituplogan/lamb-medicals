"use client";
import { Fragment, useEffect } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Plated from "./components/plated";
import Exosomes from "./components/exosomes";
import Latisse from "./components/latisse";
import { useSkinCareProductPage } from "@/app/contexts/skinCareProduct";
import Preloader from "@/app/components/Preloader";
import {
  ExosomesFAQ,
  ExosomesType,
  latisseFAQ,
  LatisseType,
  PlatedFAQ,
  PlatedType,
} from "./types/skinCareProductCustomTypes";

const weightLossTabItems = [
  { href: "#plated", label: "Plated" },
  { href: "#exosomes", label: "Exosomes" },
  { href: "#latisse", label: "Latisse" },
];

export default function SkinCareProducts() {
  const { skinCareProductPageData } = useSkinCareProductPage();

  const meta = skinCareProductPageData?.meta ? JSON.parse(skinCareProductPageData.meta) : {};

  useEffect(() => {
    if (meta.og_title) {
      document.title = meta.og_title;
    } else if (skinCareProductPageData?.title) {
      document.title = skinCareProductPageData.title;
    }

    if (meta.og_description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", meta.og_description);
    }

    if (meta.keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute("content", meta.keywords.join(", "));
    }
  }, [meta, skinCareProductPageData]);

  if (
    !skinCareProductPageData ||
    !skinCareProductPageData.content ||
    skinCareProductPageData.content.length === 0
  ) {
    return <Preloader />;
  }

  console.log(skinCareProductPageData);
  const heroData: ContentItem | undefined =
    skinCareProductPageData.content?.find((item: any) => item.type === "hero");
  const plated: PlatedType | undefined = skinCareProductPageData.content?.find(
    (item: any) => item.type === "section1",
  );
  const platedFaqs: PlatedFAQ | undefined =
    skinCareProductPageData.content?.find(
      (item: any) => item.type === "section2",
    );
  const exosomes: ExosomesType | undefined =
    skinCareProductPageData.content?.find(
      (item: any) => item.type === "section3",
    );
  const exosomesFaq: ExosomesFAQ | undefined =
    skinCareProductPageData.content?.find(
      (item: any) => item.type === "section4",
    );
  const latisse: LatisseType | undefined =
    skinCareProductPageData.content?.find(
      (item: any) => item.type === "section5",
    );

  const latisseFaq: latisseFAQ | undefined =
    skinCareProductPageData.content?.find(
      (item: any) => item.type === "section6",
    );

  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <Plated data={plated} faqs={platedFaqs} />
      <Exosomes data={exosomes} faqs={exosomesFaq} />
      <Latisse data={latisse} faqs={latisseFaq} />
    </Fragment>
  );
}
