"use client";
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import LaserGenesis from "./components/laser-genesis";
import LaserWartRemoval from "./components/laser-wart-removal";
import LaserVeinTherapy from "./components/laser-vein-therapy";
import LaserNailFungus from "./components/laser-nail";
import { useMedicalServices } from "@/app/contexts/MedicalServices";
import Preloader from "@/app/components/Preloader";
import { FAQsSection, LaserGenesisSection, LaserTreatmentSection, Section } from "./types/medical-services";

const weightLossTabItems = [
  { href: "#concierge-medicine", label: "Concierge Medicine" },
  {
    href: "#laser-genesis",
    label: "Laser Genesis (warts, veins & nail fungas)",
  },
];

export default function MedicalServices() {
  const { MedicalServicesData } = useMedicalServices();
  if (
    !MedicalServicesData ||
    !MedicalServicesData.content ||
    MedicalServicesData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = MedicalServicesData.content.find(
    (item: any) => item.type === "hero"
  );

    const consierge: any = MedicalServicesData.content.find(
      (item: any) => item.type === "section7"
    );
  
    const  laserGenesis:LaserGenesisSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section2"
    );
  
    const QandALaserGen:FAQsSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section1"
    );
   
    const laserWarts:LaserTreatmentSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section4"
    );

    const QandALaserWart:FAQsSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section5"
    );

    const LaserVein:LaserTreatmentSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section6"
    );

    const QandALaserVein:FAQsSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section7"
    );

    const LaserNail:LaserTreatmentSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section6"
    );

    const QandALaserNail:FAQsSection = MedicalServicesData.content.find(
      (item: any) => item.type === "section7"
    );

  return (
    <Fragment>
      <div className="w-full xs:block hidden">
        <ServicesHero
          image={`${heroData?.image}`}
          title={`${heroData?.headerText}`}
          description={`${heroData?.bodyText}`}
        />
      </div>
      {/* <div className="block w-full xs:hidden py-10 mt-20"> */}
      <div className="w-full xs:hidden py-10 mt-20 relative h-screen flex flex-col justify-start items-center">
        {/* <div className="relative size-full" data-aos="fade-right"> */}
        <img
          src="/images/body-treatments/body-treatments-cover-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute inset-0 h-[90vh] object-cover object-center"
        />
        {/* </div> */}

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            {`${heroData?.headerText}`}
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            {`${heroData?.bodyText}`}
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <ConciergeFamily data={consierge}/>
      <LaserGenesis data={laserGenesis} questions={QandALaserGen}/>
      <LaserWartRemoval data={laserWarts} questions={QandALaserWart}/>
      <LaserVeinTherapy data={LaserVein} questions={QandALaserVein} />
      <LaserNailFungus data={LaserNail} questions={QandALaserNail} />
    </Fragment>
  );
}
