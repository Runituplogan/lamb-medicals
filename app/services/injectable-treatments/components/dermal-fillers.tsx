import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { Section3 } from "../types/InjectableTreatmentType";
import { FAQsSection } from "../../medical-services/types/medical-services";

interface DermaFillersProps {
  data: Section3;
  question: FAQsSection
}

const DermalFillers: React.FC<DermaFillersProps> = ({ data, question }) => {
  return (
    <Wrapper id="dermal-fillers" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />
      <ServicesBenefits
        title={data?.section?.headerText}
        benefits={data?.section?.bodyText || []}
      />
      <ServicesAfterEffects className="grid grid-cols-2 grid-rows-1 gap-[1rem]">
        {data?.section?.images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            className="relative h-[18rem] overflow-hidden rounded lg:h-[22rem] xxl:h-[50.3rem]"
            data-aos={imgIndex % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <Image
              src={img.image} 
              alt={"service benefits image"}
              role="presentation"
              fill
              className="object-cover object-top"
              unoptimized
            />
            <h2 className="absolute left-[20%] top-[50%] font-rubik text-[24px] font-semibold text-white xs:top-[20%] xs:text-[47.54px]">
              {img.type}
            </h2>
          </div>
        ))}
      </ServicesAfterEffects>
      <ServicesFAQ
        title={question?.headerText}
        description={`${question?.textBody}`}
        faqs={question?.questions}
      />
    </Wrapper>
  );
};
export default DermalFillers;
