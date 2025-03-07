"use client";
import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import IPL from "./components/ipl";
import AgeJect from "./components/ageject";
import Sofwave from "./components/sofwave";
import Miconeedling from "./components/miconeedling";
import { useEnergyDevicesPage } from "@/app/contexts/energyDevices";
import Preloader from "@/app/components/Preloader";
import {
  AgeJectFaqs,
  AgejectType,
  IPLFAQs,
  IPLType,
  MicroneedlingFaq,
  MicroneedlingType,
  SofwaveFaqs,
  SofwaveType,
} from "./types/energyDevicesCustomType";
import ServicesFAQ from "../components/services-faq";

const energyDevicesTabItems = [
  { href: "#ageject", label: "AgeJect" },
  { href: "#sofwave", label: "Sofwave" },
  { href: "#ipl", label: "IPL" },
  { href: "#microneedling", label: "Miconeedling" },
];

export default function EnergyDevices() {
  const { energyDevicesPageData } = useEnergyDevicesPage();
  if (
    !energyDevicesPageData ||
    !energyDevicesPageData.content ||
    energyDevicesPageData.content.length === 0
  ) {
    return <Preloader />;
  }
  const heroData: ContentItem | undefined = energyDevicesPageData.content?.find(
    (item: any) => item.type === "hero",
  );
  const ageject: AgejectType | undefined = energyDevicesPageData.content?.find(
    (item: any) => item.type === "section1",
  );
  const agejectFaqs: AgeJectFaqs | undefined =
    energyDevicesPageData.content?.find(
      (item: any) => item.type === "section2",
    );
  const sofwave: SofwaveType | undefined = energyDevicesPageData.content?.find(
    (item: any) => item.type === "section3",
  );
  const sofwaveFaqs: SofwaveFaqs | undefined =
    energyDevicesPageData.content?.find(
      (item: any) => item.type === "section4",
    );
  const ipl: IPLType | undefined = energyDevicesPageData.content?.find(
    (item: any) => item.type === "section5",
  );
  const iplFaq: IPLFAQs | undefined = energyDevicesPageData.content?.find(
    (item: any) => item.type === "section6",
  );
  const microneedling: MicroneedlingType | undefined =
    energyDevicesPageData.content?.find(
      (item: any) => item.type === "section7",
    );
  const microneedlingFaq: MicroneedlingFaq | undefined =
    energyDevicesPageData.content?.find(
      (item: any) => item.type === "section8",
    );
  return (
    <Fragment>
      <ServicesHero
        image={heroData?.image as string}
        title={heroData?.headerText as string}
        description={heroData?.bodyText as string}
      />

      <ServicesTab tabItems={energyDevicesTabItems} />
      <AgeJect data={ageject} agejectFaqs={agejectFaqs} />
      <Sofwave data={sofwave} sofwaveFaqs={sofwaveFaqs} />
      <IPL data={ipl} iplFaq={iplFaq} />
      <Miconeedling data={microneedling} />
      <ServicesFAQ
        title={`${microneedlingFaq?.headerText}`}
        description={`${microneedlingFaq?.textBody}`}
        faqs={microneedlingFaq?.questions}
      />
    </Fragment>
  );
}
