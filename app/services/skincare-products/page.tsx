import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Plated from "./components/plated";
import Exosomes from "./components/exosomes";
import Latisse from "./components/latisse";

const weightLossTabItems = [
  { href: "#plated", label: "Plated" },
  { href: "#exosomes", label: "Exosomes" },
  { href: "#latisse", label: "Latisse" },
];

export default function SkinCareProducts() {
  return (
    <Fragment>
      <div className="xs:block hidden w-full">
        <ServicesHero
          image="skincare-products/skincare-products-cover.png"
          title="Skin Care Products"
          description="The Wellness & Weight Loss programs at Lamb Lamb Medical offers premium skincare products like Latisse for enhancing eyelash growth and Exosomes for advanced skin rejuvenation. These medical-grade solutions support healthier, more radiant skin by promoting cell regeneration, hydration, and overall skin vitality."
        />
      </div>
      <div className="w-full xs:hidden py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        <img
          src="/images/skincare-products/skincare-products-cover-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute inset-0 h-screen object-cover object-center"
        />

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold lead xs:leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Skin Care Products
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-[16px] text-center"
            data-aos="fade-left"
          >
            The Wellness & Weight Loss programs at Lamb Lamb Medical offers
            premium skincare products like Latisse for enhancing eyelash growth
            and Exosomes for advanced skin rejuvenation. These medical-grade
            solutions support healthier, more radiant skin by promoting cell
            regeneration, hydration, and overall skin vitality.
          </p>
        </div>
      </div>
      <ServicesTab tabItems={weightLossTabItems} />
      <Plated />
      <Exosomes />
      <Latisse />
    </Fragment>
  );
}
