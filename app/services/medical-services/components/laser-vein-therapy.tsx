import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserVeinTherapyFAQs } from "@/app/utils/data";
import { FAQsSection, LaserTreatmentSection } from "../types/medical-services";

interface laserVainProps {
  data: LaserTreatmentSection;
  questions: FAQsSection;
}

export default function LaserVeinTherapy({ data, questions }: laserVainProps) {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[2.5rem] py-[2rem]">
      <ServicesIntro
        title={data?.headerText}
        description={<p>{data?.bodyText}</p>}
        btnText={data?.cta_button?.text}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[52rem_52rem] gap-[2rem]">
        <div className="relative col-span-full h-full">
          <Image
            src="/images/medical-services/medical-services-before-and-after-4.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-4.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative col-span-full h-full">
          <Image
            src="/images/medical-services/medical-services-before-and-after-5.png"
            alt="" 
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-5.png"
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
