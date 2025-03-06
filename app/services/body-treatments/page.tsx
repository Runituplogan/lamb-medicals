"use client"
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import EmsculptNeo from "./components/emsculpt-neo";
import SofwaveBody from "./components/sofwave-body";
import { useBodyTreatmentPage } from "@/app/contexts/bodyTreatment";
import Preloader from "@/app/components/Preloader";
import { EmsculptNeoFAQ, EmsculptNeoType, SofwaveBodyFAQ, SofwaveBodyType } from "./types/bodyTreatmentCustomTypes";

const bodyTreatmentsTabItems = [
  { href: "#emsculpt-neo", label: "Emsculpt Neo" },
  { href: "#sofwave-body", label: "Sofwave Body" },
];

export default function BodyTreatments() {
  const {bodyTreatmentPageData} = useBodyTreatmentPage()
  if (!bodyTreatmentPageData || !bodyTreatmentPageData.content || bodyTreatmentPageData.content.length === 0) {
    return <Preloader />;
  }
  console.log(bodyTreatmentPageData)
  const heroData: ContentItem | undefined = bodyTreatmentPageData.content.find(
    (item: any) => item.type === "hero"
  );
  const emsculptNeo: EmsculptNeoType | undefined = bodyTreatmentPageData.content.find(
    (item: any) => item.type === "section1"
  );
  const emsculptNeoFaq: EmsculptNeoFAQ | undefined = bodyTreatmentPageData.content.find(
    (item: any) => item.type === "section2"
  );
  const sofwaveBody: SofwaveBodyType | undefined = bodyTreatmentPageData.content.find(
    (item: any) => item.type === "section3"
  );
  const sofwaveBodyFaqs: SofwaveBodyFAQ | undefined = bodyTreatmentPageData.content.find(
    (item: any) => item.type === "section4"
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
      <div className="w-full xs:hidden py-10 mt-20 relative h-[90vh] xs:h-screen flex flex-col justify-start items-start">
        {/* <div className="relative size-full" data-aos="fade-right"> */}
        {/* <img
          src="/images/body-treatments/body-treatments-cover-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute inset-0 h-[85vh] object-cover object-center"
        /> */}
        <img
          src={`${heroData?.image}`}
          alt="facial-service-image-mobile"
          className="absolute inset-0 h-[85vh] object-cover object-center"
        />
        {/* </div> */}

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 pt-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            {heroData?.headerText}
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-[14px] text-center"
            data-aos="fade-left"
          >
          {heroData?.bodyText}
          </p>
        </div>
      </div>
      <ServicesTab tabItems={bodyTreatmentsTabItems} />
      <EmsculptNeo data={emsculptNeo} faqs={emsculptNeoFaq}/>
      <SofwaveBody data={sofwaveBody} faqs={sofwaveBodyFaqs}/>
    </Fragment>
  );
}
