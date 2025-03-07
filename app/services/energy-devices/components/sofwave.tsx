import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import {
  sofwaveBenefits,
  sofwaveFAQs,
  sofwaveSatisfactions,
} from "@/app/utils/data";
import { SofwaveFaqs, SofwaveType } from "../types/energyDevicesCustomType";
import { SofwaveBodyFAQ } from "../../body-treatments/types/bodyTreatmentCustomTypes";

interface SoftwaveProps {
  data?: SofwaveType;
  sofwaveFaqs?: SofwaveFaqs;
}
const Sofwave: React.FC<SoftwaveProps> = ({ data, sofwaveFaqs }) => {
  return (
    <Wrapper id="sofwave" className="grid gap-[3.2rem] lg:gap-[4rem]">
      <ServicesIntro
        title={data?.headerText as string}
        description={data?.bodyText}
      />
      <ServicesBenefits
        title={`${data?.[0].headerText}`}
        benefits={data?.[0].bodyText ?? []}
      />
      <figure
        className="grid h-[18rem] grid-cols-2 sm:h-[24rem] xl:h-[48rem] xxl:h-[62.3rem]"
        data-aos="zoom-in"
      >
        {data?.[0].images.map((item, index) => (
          <div
            className="relative size-full overflow-hidden rounded"
            key={index}
          >
            <Image
              src={item.image}
              alt=""
              role="presentation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        ))}
      </figure>
      <ServicesBenefits
        title={`${data?.[1].headerText}`}
        benefits={data?.[1].bodyText ?? []}
      />
      <ServicesAfterEffects className="grid grid-cols-2 grid-rows-[20rem_20rem] gap-[0.8rem] xl:grid-rows-[40rem_40rem] xxl:grid-rows-[54rem_53rem]">
        {data?.[1].images.map((item, i) => (
          <div className="relative size-full" data-aos="fade-left" key={i}>
            <Image
              src={`${item.image}`}
              alt="sofwave-before-and-after-1"
              fill
              className="absolute object-cover"
            />
          </div>
        ))}
      </ServicesAfterEffects>

      <ServicesFAQ
        title={sofwaveFaqs?.headerText as string}
        description={String(sofwaveFaqs?.textBody)}
        faqs={sofwaveFaqs?.questions}
      />
    </Wrapper>
  );
};

export default Sofwave;
