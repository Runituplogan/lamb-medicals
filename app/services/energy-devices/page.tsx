import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";
import Sofwave from "./components/sofwave";
import Miconeedling from "./components/miconeedling";

const energyDevicesTabItems = [
  { href: "#softwave", label: "Sofwave" },
  { href: "#ipl", label: "IPL" },
  { href: "#miconeedling", label: "Miconeedling" },
  { href: "#ageject", label: "AgeJect" },
];

export default function EnergyDevices() {
  return (
    <Fragment>
      <div className="xs:block hidden w-full">
        <ServicesHero
          image="energy-devices/energy-devices-image.png"
          title="Energy devices"
          description="Laser resurfacing rejuvenates the skin by using advanced laser
        technology to reduce wrinkles, scars, and uneven texture while
        stimulating collagen production. This treatment offers a non-invasive
        solution for achieving smoother, firmer skin with minimal downtime."
        />
      </div>
      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        <img
          src="/images/energy-devices/energy-devices-image-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        />
        {/* </div> */}

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Energy devices
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            Laser resurfacing rejuvenates the skin by using advanced laser
            technology to reduce wrinkles, scars, and uneven texture while
            stimulating collagen production. This treatment offers a
            non-invasive solution for achieving smoother, firmer skin with
            minimal downtime.
          </p>
        </div>
      </div>
      <ServicesTab tabItems={energyDevicesTabItems} />
      <AgeJect />
      <Sofwave />
      <IPL />
      <Miconeedling />
    </Fragment>
  );
}
