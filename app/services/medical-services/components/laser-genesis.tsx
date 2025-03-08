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
  questions: FAQsSection;
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
        className="grid w-full gap-8 font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 text-opacity-80 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]"
        data-aos="fade-right"
      >
        {data?.bodyText}
      </p>
      <BeforeAfter items={data?.images} />
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
