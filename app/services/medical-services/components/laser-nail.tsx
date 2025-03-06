import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserNailFungusFAQs } from "@/app/utils/data";
import { FAQsSection, LaserTreatmentSection } from "../types/medical-services";

interface laserNailProps {
  data: LaserTreatmentSection;
  questions: FAQsSection;
}

export default function LaserNailFungus({ data, questions }: laserNailProps) {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title={data?.headerText}
        description={<p>{data?.bodyText}</p>}
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[48rem_50rem] gap-[2rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-6.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-6.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/medical-services/medical-services-before-and-after-7.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-7.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/medical-services/medical-services-before-and-after-8.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-8.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
