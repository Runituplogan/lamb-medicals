import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserWartRemovalFAQs } from "@/app/utils/data";
import { FAQsSection, LaserTreatmentSection } from "../types/medical-services";

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

      {/* <ServicesAfterEffects className="grid-cols-1 grid-rows-[78rem] gap-[2rem]"> */}
        {/* {data?.images?.map((image) =>(
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src={image }
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src={image }
            alt=""
            className="xs:hidden block"
          />
        </div>
        ))} */}
      {/* </ServicesAfterEffects> */}
      <ServicesFAQ
        title={questions?.headerText}
        description={questions?.bodyText}
        faqs={questions?.faqs}
      />
    </Wrapper>
  );
}
