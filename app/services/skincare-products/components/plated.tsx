import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { platedFAQs } from "@/app/utils/data";
import { PlatedFAQ, PlatedType } from "../types/skinCareProductCustomTypes";

interface PlatedProps {
  data?: PlatedType;
  faqs?: PlatedFAQ;
}
const Plated: React.FC<PlatedProps> = ({ data, faqs }) => {
  return (
    <Wrapper id="plated" className="grid gap-[5rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <div className="relative col-span-full h-auto">
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

export default Plated;
