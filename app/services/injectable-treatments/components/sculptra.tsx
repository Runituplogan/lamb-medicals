import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { sculptraFAQs } from "@/app/utils/data";
import { Section5 } from "../types/InjectableTreatmentType";

interface SculptraProps {
  data: Section5;
}

const Sculptra: React.FC<SculptraProps> = ({ data }) => {
  return (
    <Wrapper id="sculptra" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[50rem]">
        <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src={data?.image}
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
            unoptimized
          />
          <img
            src={data?.image}
            alt="sculptra"
            className="xs:hidden block object-cover "
          />
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        title={data?.subsection?.headerText}
        className="grid-cols-1 grid-rows-none [&>figcaption]:text-left"
      >
        <div
          className="relative xs:h-[60rem] col-span-full"
          data-aos="fade-right"
        >
          <Image
            src="/images/injectable-treatments/sculptra-1.png"
            alt="sculptra-1"
            fill
            className="absolute object-top"
          />
          <img
            src="/images/injectable-treatments/sculptra-1.png"
            alt="sculptra 1"
            className=" object-top xs:hidden block"
          />
        </div>
        <div
          className="relative xs:h-[60rem] col-span-full"
          data-aos="fade-right"
        >
          <Image
            src="/images/injectable-treatments/sculptra-2.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/sculptra-2.png"
            alt="sculptra"
            className="object-top xs:hidden block"
          />
        </div>
        <div
          className="relative xs:h-[60rem] col-span-full"
          data-aos="fade-right"
        >
          <Image
            src="/images/injectable-treatments/sculptra-3.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/sculptra-3.png"
            alt="sculptra"
            className="object-top xs:hidden block"
          />
        </div>
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
