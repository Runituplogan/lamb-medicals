import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import LaserGenesis from "./components/laser-genesis";
import LaserWartRemoval from "./components/laser-wart-removal";
import LaserVeinTherapy from "./components/laser-vein-therapy";
import LaserNailFungus from "./components/laser-nail";

const weightLossTabItems = [
  { href: "#concierge-medicine", label: "Concierge Medicine" },
  {
    href: "#laser-genesis",
    label: "Laser Genesis (warts, veins & nail fungas)",
  },
];

export default function MedicalServices() {
  return (
    <Fragment>
      <div className="w-full xs:block hidden">
        <ServicesHero
          image="medical-services/medical-services-cover.png"
          title="Medical Services"
          description="Lamb Medical’s Medical Section provides personalized, high-quality care through concierge medicine, offering direct access to experienced healthcare professionals for comprehensive wellness management. Patients also benefit from advanced treatments like Laser Genesis, designed to promote skin rejuvenation and overall health."
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
            Medical Services
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            Lamb Medical’s Medical Section provides personalized, high-quality
            care through concierge medicine, offering direct access to
            experienced healthcare professionals for comprehensive wellness
            management. Patients also benefit from advanced treatments like
            Laser Genesis, designed to promote skin rejuvenation and overall
            health.
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <ConciergeFamily />
      <LaserGenesis />
      <LaserWartRemoval />
      <LaserVeinTherapy />
      <LaserNailFungus />
    </Fragment>
  );
}
