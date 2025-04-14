import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserNailFungusFAQs } from "@/app/utils/data";
import { FAQsSection, LaserNailSection, LaserTreatmentSection } from "../types/medical-services";
import BeforeAfter from "@/app/components/BeforeandAfter";

interface laserNailProps {
  data: LaserNailSection;
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
        <Image src={data?.images[0]} className="h-[35rem] w-full object-cover" alt="nail image"height={400} width={400} />
      </div>
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText} 
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
