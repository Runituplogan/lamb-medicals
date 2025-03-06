import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserNailFungusFAQs } from "@/app/utils/data";
import { FAQsSection, LaserTreatmentSection } from "../types/medical-services";
import BeforeAfter from "@/app/components/BeforeandAfter";

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
        <div className="relative col-span-full h-full" data-aos="fade-left">
            <BeforeAfter items={data?.images}/>
        </div>
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
