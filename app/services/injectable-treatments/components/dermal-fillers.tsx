import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { dermalFillersBenefits, dermalFillersFAQs } from "@/app/utils/data";
import { Section3 } from "../types/InjectableTreatmentType";

interface DermaFillersProps {
  data: Section3;
}

const DermalFillers: React.FC<DermaFillersProps> = ({ data }) => {
  return (
    <Wrapper id="dermal-fillers" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />
      <ServicesBenefits
        title={data?.section?.headerText}
        benefits={data?.section?.bodyText || []}
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-1">
        {data?.section?.images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            className="relative h-[50.3rem] overflow-hidden rounded"
            data-aos={imgIndex % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <Image
              src={img}
              alt={"service benefits image"}
              role="presentation"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
        ))}
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Dermal Fillers FAQs: Your questions answered"
        description="Curious about Dermal Fillers? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={dermalFillersFAQs}
      />
    </Wrapper>
  );
};
export default DermalFillers;
