import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import BeWellProgram from "./components/well-program";
import BeWellProgramTeam from "./components/well-program-team";
import OurServices from "./components/our-services";
import WhyChooseUs from "./components/why-choose-us";
import Transformation from "./components/transformation ";
import ConciergeFamily from "../components/concierge-family";
import VisualConsultations from "../weight-loss/components/visual-consultations";
import ElectronicCommunication from "../weight-loss/components/electronic-communication";
import ReImaging from "../weight-loss/components/reimagining";
import AethesticsMembership from "./components/aethestics-membership";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function Memberships() {
  return (
    <Fragment>
      <div className="xs:block hidden w-full">
        <ServicesHero
          image="memberships/memberships.png"
          title="Memberships"
          description="The Be Well program offers a holistic approach to health, providing services such as wellness evaluations, mental health support, stress management, and lifestyle coaching. Members also receive weight loss support with GLP-1 medications, exclusive discounts on supplements and skincare, and access to upcoming services like body composition analysis and VIP pricing for aesthetic treatments."
        />
      </div>

      <div className="w-full xs:hidden py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        <img
          data-aos="fade-right"
          src="/images/memberships/membership-mobile.png"
          alt="memberships"
          className="absolute inset-0 h-screen object-cover object-center"
        />

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Membership
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
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
      <BeWellProgram />
      <BeWellProgramTeam />
      <OurServices />
      <VisualConsultations />
      <WhyChooseUs />
      <Transformation />
      <ConciergeFamily />
      <ElectronicCommunication />
      <ReImaging />
      <AethesticsMembership />
    </Fragment>
  );
}
