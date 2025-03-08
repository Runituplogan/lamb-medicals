import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { sculptraFAQs } from "@/app/utils/data";
import { Section5 } from "../types/InjectableTreatmentType";
import { AnyARecord } from "dns";

interface SculptraProps {
  data: Section5;
}

const Sculptra: React.FC<SculptraProps> = ({ data }) => {
  return (
    <Wrapper id="sculptra" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />
      <ServicesAfterEffects className="grid grid-cols-1 grid-rows-[22rem] xl:grid-rows-[50rem]">
        <div className="relative col-span-full h-full" data-aos="fade-right">
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
        className="grid grid-cols-2 grid-rows-none gap-[1rem] [&>figcaption]:text-left"
      >
        {data?.subsection?.images?.map((image: any, index) => (
          <div
            key={index}
            className="relative h-[18rem] overflow-hidden rounded lg:h-[22rem] xxl:h-[60rem]"
            data-aos="fade-right"
          >
            <Image
              src={image?.image}
              alt=""
              fill
              className="absolute hidden object-top xs:block"
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
        title="Sculptra FAQs: Your questions answered"
        description="Curious about Sculptra? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={sculptraFAQs}
      />
    </Wrapper>
  );
};

export default Sculptra;
