"use client"
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";
import Sofwave from "./components/sofwave";
import Miconeedling from "./components/miconeedling";
import { useEnergyDevicesPage } from "@/app/contexts/energyDevices"; 
import Preloader from "@/app/components/Preloader";
import { AgejectType } from "./types/energyDevicesCustomType";
const energyDevicesTabItems = [
  { href: "#ageject", label: "AgeJect" },
  { href: "#sofwave", label: "Sofwave" },
  { href: "#ipl", label: "IPL" },
  { href: "#microneedling", label: "Miconeedling" },
];

export default function EnergyDevices() {
  const {energyDevicesPageData} = useEnergyDevicesPage()
    if (!energyDevicesPageData || !energyDevicesPageData.content || energyDevicesPageData.content.length === 0) {
      return <Preloader />;
    }
    const heroData: ContentItem | undefined = energyDevicesPageData.content.find(
      (item: any) => item.type === "hero"
    );
    const ageject: AgejectType | undefined = energyDevicesPageData.content.find(
      (item: any) => item.type === "section1"
    );
  return (
    <Fragment>
      <div className="xs:block hidden w-full">
        {/* <ServicesHero
          image="energy-devices/energy-devices-image.png"
          title="Energy devices"
          description="Laser resurfacing rejuvenates the skin by using advanced laser
        technology to reduce wrinkles, scars, and uneven texture while
        stimulating collagen production. This treatment offers a non-invasive
        solution for achieving smoother, firmer skin with minimal downtime."
        /> */}
        <ServicesHero
          image={`${heroData?.image}`}
          title={`${heroData?.headerText}`}
          description={`${heroData?.bodyText}`}
        />
      </div>
      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        {/* <img
          src="/images/energy-devices/energy-devices-image-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        /> */}
        <img
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
      <ServicesTab tabItems={energyDevicesTabItems} />
      <AgeJect data={ageject} />
      <Sofwave />
      <IPL />
      <Miconeedling />
    </Fragment>
  );
}
