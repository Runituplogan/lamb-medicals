import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { Section5 } from "../types/InjectableTreatmentType";
import { FAQsSection } from "../../medical-services/types/medical-services";

interface SculptraProps {
  data: Section5;
  question: FAQsSection
}

const Sculptra: React.FC<SculptraProps> = ({ data, question }) => {
  return (
    <Wrapper id="sculptra" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />
      <ServicesAfterEffects className="grid grid-cols-1 grid-rows-[22rem] xl:grid-rows-[50rem]">
        <div className="relative col-span-full h-full">
          <Image
            src={data?.image}
            alt=""
            fill
            className="absolute object-cover"
            unoptimized
          />
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        title={data?.subsection?.headerText}
        className="grid grid-cols-2 grid-rows-none gap-[1rem] [&>figcaption]:text-center"
      >
        {data?.subsection?.images?.map((image: any, index) => (
          <div
            key={index}
            className="relative h-[18rem] overflow-hidden rounded lg:h-[22rem] xxl:h-[60rem]"
           
          >
            <Image
              src={image?.image}
              alt=""
              fill
              className="absolute object-top"
              unoptimized
            />
            <img
              src={image?.image}
              alt="sculptra"
              className="block object-top xs:hidden"
            />
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

export default Sculptra;
