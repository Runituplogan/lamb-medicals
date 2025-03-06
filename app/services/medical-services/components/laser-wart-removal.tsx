import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserWartRemovalFAQs } from "@/app/utils/data";
import { FAQsSection, LaserTreatmentSection } from "../types/medical-services";
import BeforeAfter from "@/app/components/BeforeandAfter";

interface leserTwartsProps {
  data: LaserTreatmentSection,
  questions: FAQsSection
}

export default function LaserWartRemoval({data, questions}:leserTwartsProps) {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title={data?.headerText}
        description={
          <p>
           {data?.bodyText}
          </p>
        }
        btnText={data?.cta_button?.text}
      />
          <BeforeAfter items={data?.images}/>
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
