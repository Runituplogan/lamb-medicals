import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import {
  sofwaveBodyBenefits,
  sofwaveBodyFAQs,
  sofwaveBodySatisfaction,
} from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import {
  SofwaveBodyFAQ,
  SofwaveBodyType,
} from "../types/bodyTreatmentCustomTypes";

interface SofwaveBodyProps {
  data?: SofwaveBodyType;
  faqs?: SofwaveBodyFAQ;
}
const SofwaveBody: React.FC<SofwaveBodyProps> = ({ data, faqs }) => {
  return (
    <Wrapper id="sofwave-body" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesBenefits
        title={`${data?.subsections[0].headerText}`}
        benefits={data?.subsections[0].bodyText ?? []}
      />
      <ServicesAfterEffects className="grid-rows-[45rem] xs:grid-cols-2">
        {data?.subsections[0].images.map((item, index) => (
          <div className="" key={index}> 
            <div
              className="relative col-span-full block h-full w-full"
              data-aos="fade-right"
            >
              <Image
                src={`${item.image}`}
                width={1000}
                height={1000}
                alt=""

                //className="absolute object-top"
              />
            </div>
          </div>
        ))}
      </ServicesAfterEffects>

      <ServicesBenefits
        title={`${data?.subsections[1].headerText}`}
        benefits={data?.subsections[1].bodyText ?? []}
      />
      <ServicesAfterEffects className="xs:grid-cols-2">
        {data?.subsections[1].images.map((item, index) => (
          <div className="" key={index}>
            <div
              className="relative col-span-full block h-full w-full"
              data-aos="fade-right"
            >
              <Image
                src={`${item.image}`}
                width={1000}
                height={1000}
                alt=""

                //className="absolute object-top"
              />
            </div>
            {/* <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
           {item.type}
          </h2> */}
          </div>
        ))}
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs ?? []}
      />
    </Wrapper>
  );
};

export default SofwaveBody;
