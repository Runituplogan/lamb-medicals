import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import ConciergeFamily from "../components/concierge-family";
import BeWellProgram from "../memberships/components/well-program";
import BeWellProgramTeam from "../memberships/components/well-program-team";
import OurServices from "../memberships/components/our-services";
import WhyChooseUs from "../memberships/components/why-choose-us";
import Transformation from "../memberships/components/transformation ";
import VisualConsultations from "./components/visual-consultations";
import ElectronicCommunication from "./components/electronic-communication";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function WeightLoss() {
  return (
    <Fragment>
      <div className="xs:block hidden">
        <ServicesHero
          image="weight-loss/weight-loss-cover.png"
          title="Wellness & Weight Loss"
          description="The Wellness & Weight Loss programs at Lamb Medical focus on personalized plans to help patients achieve sustainable health and fitness goals. Through expert guidance, advanced treatments, and lifestyle support, these programs promote overall well-being, increased energy, and long-term health."
        />
      </div>
      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        <img
          src="/images/sexual-wellness/weight-loss-cover-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        />

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Wellness & Weight Loss
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            The Wellness & Weight Loss programs at Lamb Medical focus on
            personalized plans to help patients achieve sustainable health and
            fitness goals. Through expert guidance, advanced treatments, and
            lifestyle support, these programs promote overall well-being,
            increased energy, and long-term health.
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
    </Fragment>
  );
}
