import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserGenesisFAQs } from "@/app/utils/data";
import { FAQsSection, LaserGenesisSection } from "../types/medical-services";
import BeforeAfter from "@/app/components/BeforeandAfter";

interface propsType {
  data: LaserGenesisSection;
  questions: FAQsSection
}

export default function LaserGenesis({ data, questions }: propsType) {
  return (
    <Wrapper id="laser-genesis" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title={data?.headerText || ""}
        description={
          <p>
            <span>{data?.bodyText}</span>
          </p>
        }
      />
      <p
        className="font-work_sans xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-grey-750 text-opacity-80"
        data-aos="fade-right"
      >
        {data?.bodyText}
      </p>
       <BeforeAfter items={data?.images}/>
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
