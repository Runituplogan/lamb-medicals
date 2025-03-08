"use client";
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import PRPBreastRejuvenation from "./components/prp-breast-rejuvenation";
import OShot from "./components/o-shot";
import MonalisaTouch from "./components/monalisa-touch";
import MiraDry from "./components/mira-dry";
import { useSexualWellnessPage } from "@/app/contexts/sexualWellness";
import Preloader from "@/app/components/Preloader";
import {
  MiraDryFAQ,
  MiraDryType,
  MonalisaTouchFAQ,
  MonalisaTouchType,
  OShotFAQ,
  OShotType,
  PRPFAQ,
  PRPType,
} from "./types/sexualWellnessCustomTypes";

const sexualWellnessTabItems = [
  { href: "#prp-breast-rejuvenation", label: "PRP Breast Rejuvenation" },
  { href: "#vampire-wing-lift", label: "Vampire Wing Lift" },
  { href: "#o-shot", label: "O-Shot" },
  { href: "#monalisa-touch", label: "MonaLisa Touch" },
  { href: "#mira-dry", label: "Mira Dry" },
];

export default function SexualWellness() {
  const { sexualWellnessPageData } = useSexualWellnessPage();
  if (
    !sexualWellnessPageData ||
    !sexualWellnessPageData.content ||
    sexualWellnessPageData.content.length === 0
  ) {
    return <Preloader />;
  }
  const heroData: ContentItem | undefined =
    sexualWellnessPageData.content?.find((item: any) => item.type === "hero");
  const prp: PRPType | undefined = sexualWellnessPageData.content?.find(
    (item: any) => item.type === "section1",
  );
  const prpFaq: PRPFAQ | undefined = sexualWellnessPageData.content?.find(
    (item: any) => item.type === "section2",
  );
  const oShot: OShotType | undefined = sexualWellnessPageData.content?.find(
    (item: any) => item.type === "section3",
  );
  const oShotFaq: OShotFAQ | undefined = sexualWellnessPageData.content?.find(
    (item: any) => item.type === "section4",
  );
  const monalisaTouch: MonalisaTouchType | undefined =
    sexualWellnessPageData.content?.find(
      (item: any) => item.type === "section5",
    );
  const monalisaTouchFaq: MonalisaTouchFAQ | undefined =
    sexualWellnessPageData.content?.find(
      (item: any) => item.type === "section6",
    );
  const miraDry: MiraDryType | undefined = sexualWellnessPageData.content?.find(
    (item: any) => item.type === "section7",
  );
  const miraDryFaq: MiraDryFAQ | undefined =
    sexualWellnessPageData.content?.find(
      (item: any) => item.type === "section8",
    );
  return (
    <Fragment>
      <ServicesHero
        image={`${heroData?.image}`}
        title={`${heroData?.headerText}`}
        description={`${heroData?.bodyText}`}
      />

      <ServicesTab tabItems={sexualWellnessTabItems} />
      <PRPBreastRejuvenation data={prp} faqs={prpFaq} />

      {/* <div className="w-full" id="vampire-wing-lift">
        <ServicesFAQ
          className="py-10"
          title="Vampire Wing Lift FAQs: Your questions answered"
          description="Curious about Vampire Wing Lift? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
          faqs={vampireWingLiftFAQs}
        />
      </div> */}
      <OShot data={oShot} faqs={oShotFaq} />
      <MonalisaTouch data={monalisaTouch} faqs={monalisaTouchFaq} />
      <MiraDry data={miraDry} faqs={miraDryFaq} />
    </Fragment>
  );
}
