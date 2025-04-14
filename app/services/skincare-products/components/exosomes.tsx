import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { exosomsFAQs, platedFAQs } from "@/app/utils/data";
import { ExosomesFAQ, ExosomesType } from "../types/skinCareProductCustomTypes";

interface ExosomesProps {
  data?: ExosomesType;
  faqs?: ExosomesFAQ;
}
const Exosomes: React.FC<ExosomesProps> = ({ data, faqs }) => {
  return (
    <Wrapper id="exosomes" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
     
      <div className="relative col-span-full h-auto" data-aos="fade-left">
        <Image
          src={data?.images[0] || ""}
          alt="service image"
          className="h-full w-full object-cover object-top"
          height={50}
          width={50}
          unoptimized
        />
      </div>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
};

export default Exosomes;
