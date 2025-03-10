import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { prpRejuvenationFAQs, prrRejuvenationFAQs } from "@/app/utils/data";
import { Section2, Section7 } from "../types/InjectableTreatmentType";
import { FAQsSection } from "../../medical-services/types/medical-services";

interface PRPRejuvenationProp {
  data: Section7;
  question: FAQsSection
}

const PRPRejuvenation: React.FC<PRPRejuvenationProp> = ({ data, question }) => {
  return (
    <Wrapper id="prp-rejuvenation" className="grid gap-[4rem]">
      <ServicesIntro
        title={data?.headerText}
        description={data?.bodyText}
        btnText={data?.cta_button?.text}
        btnStyle={data?.cta_button?.style}
        btnLink="/schedule-online"
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem_48rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/injectable-treatments/prp-rejuvenation-1.png"
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/prp-rejuvenation-1.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
        <div className="col-span-full relative h-full" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/prp-rejuvenation-2.png"
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/prp-rejuvenation-2.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title={question?.headerText}
        description={`${question?.textBody}`}
        faqs={question?.questions}
      />
    </Wrapper>
  );
};

export default PRPRejuvenation;
