import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { exosomsFAQs, latisseBenefits, latisseFAQs } from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import { latisseFAQ, LatisseType } from "../types/skinCareProductCustomTypes";

interface LatisseProps {
  data?: LatisseType;
  faqs?: latisseFAQ;
}
const Latisse: React.FC<LatisseProps> = ({ data, faqs }) => {
  return (
    <Wrapper id="latisse" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={<p className="leading-relaxed">{data?.bodyText}</p>}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src={`${data?.image}`}
            alt=""
            fill
            className="absolute hidden object-top xs:block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits
        title={`${data?.subsection.headerText}`}
        benefits={data?.subsection.bodyText ?? []}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src={`${data?.subsection?.image}`}
            alt=""
            fill
            className="absolute hidden object-top xs:block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
};

export default Latisse;
