"use client";
import { Fragment, useEffect } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import EmsculptNeo from "./components/emsculpt-neo";
import SofwaveBody from "./components/sofwave-body";
import { useBodyTreatmentPage } from "@/app/contexts/bodyTreatment";
import Preloader from "@/app/components/Preloader";
import {
  EmsculptNeoFAQ,
  EmsculptNeoType,
  SofwaveBodyFAQ,
  SofwaveBodyType,
} from "./types/bodyTreatmentCustomTypes";

const bodyTreatmentsTabItems = [
  { href: "#emsculpt-neo", label: "Emsculpt Neo" },
  { href: "#sofwave-body", label: "Sofwave Body" },
];

export default function BodyTreatments() {
  const { bodyTreatmentPageData } = useBodyTreatmentPage();

  const meta = bodyTreatmentPageData?.meta
    ? JSON.parse(bodyTreatmentPageData.meta)
    : {};

  useEffect(() => {
    if (meta.og_title) {
      document.title = meta.og_title;
    } else if (bodyTreatmentPageData?.title) {
      document.title = bodyTreatmentPageData.title;
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
  }, [meta, bodyTreatmentPageData]);

  if (
    !bodyTreatmentPageData ||
    !bodyTreatmentPageData.content ||
    bodyTreatmentPageData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = bodyTreatmentPageData.content?.find(
    (item: any) => item.type === "hero",
  );
  const emsculptNeo: EmsculptNeoType | undefined =
    bodyTreatmentPageData.content?.find(
      (item: any) => item.type === "section1",
    );
  const emsculptNeoFaq: EmsculptNeoFAQ | undefined =
    bodyTreatmentPageData.content?.find(
      (item: any) => item.type === "section2",
    );
  const sofwaveBody: SofwaveBodyType | undefined =
    bodyTreatmentPageData.content?.find(
      (item: any) => item.type === "section3",
    );
  const sofwaveBodyFaqs: SofwaveBodyFAQ | undefined =
    bodyTreatmentPageData.content?.find(
      (item: any) => item.type === "section4",
    );

  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />
      <ServicesTab tabItems={bodyTreatmentsTabItems} />
      <EmsculptNeo data={emsculptNeo} faqs={emsculptNeoFaq} />
      <SofwaveBody data={sofwaveBody} faqs={sofwaveBodyFaqs} />
    </Fragment> 
  );
}
