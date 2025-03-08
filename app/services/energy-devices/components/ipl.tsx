import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { iplFAQs } from "@/app/utils/data";
import { IPLFAQs, IPLType } from "../types/energyDevicesCustomType";

interface IPLProps {
  data?: IPLType;
  iplFaq?: IPLFAQs;
}
const IPL: React.FC<IPLProps> = ({ data, iplFaq }) => {
  return (
    <Wrapper id="ipl" className="grid gap-[4rem]">
      <ServicesIntro
        title={data?.headerText as string}
        description={data?.bodyText as string}
      />
      <p
        className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]"
        data-aos="fade-right"
      >
        {data?.subsection.bodyText}
      </p>

      <ServicesAfterEffects className="grid grid-cols-2 grid-rows-none gap-x-[0.2rem] gap-y-[1.6rem]">
        {data?.subsection.images.map((item, i) => (
          <div
            className="relative h-[17rem] md:h-[24rem] xl:h-[32rem] xxl:h-[52rem]"
            data-aos="fade-left"
            key={i}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="absolute object-cover"
            />
          </div>
        ))}
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${iplFaq?.headerText}`}
        description={`${iplFaq?.textBody}`}
        faqs={iplFaq?.questions}
      />
    </Wrapper>
  );
};

export default IPL;
