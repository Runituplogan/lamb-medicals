import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { Section1 } from "../types/InjectableTreatmentType";
import { FAQsSection } from "../../medical-services/types/medical-services";

interface botoxProps {
  data: Section1;
  question: FAQsSection
}
const Botox: React.FC<botoxProps> = ({ data, question }) => {
 console.log({tstt: data})

  return (
    <Wrapper id="botox" className="grid gap-[2rem] xs:gap-[4rem]">
      <ServicesIntro
        title={data?.headerText}
        description={
          <>
            <span>{data?.bodyText}</span>
          </>
        }
      />
      {data?.sections?.map((section, index) => (
        <ServicesAfterEffects
          key={index}
          title={section.headerText}
          className="grid grid-cols-2 grid-rows-1 gap-[1rem]"
        >
          {section.images.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="relative h-[18rem] overflow-hidden rounded lg:h-[22rem] xxl:h-[50.3rem]"
              data-aos={imgIndex % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <Image
                src={img.image}
                alt={`${section.headerText} - ${img.type}`}
                role="presentation"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          ))}
        </ServicesAfterEffects>
      ))}
      <ServicesFAQ
        title={question?.headerText}
        description={`${question?.textBody}`}
        faqs={question?.questions}
      />
    </Wrapper>
  );
};

export default Botox;
