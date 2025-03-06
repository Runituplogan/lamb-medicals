import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { monalisaTouchFAQs } from "@/app/utils/data";
import { MonalisaTouchFAQ, MonalisaTouchType } from "../types/sexualWellnessCustomTypes";

interface MonalisaTouchProps{
  data?:MonalisaTouchType,
  faqs?:MonalisaTouchFAQ
}
const MonalisaTouch:React.FC<MonalisaTouchProps>=({data,faqs})=> {
  return (
    <Wrapper id="monalisa-touch" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesAfterEffects className="grid-cols-1 xs:grid-rows-[58rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          {/* <Image
            src="/images/sexual-wellness/monalisa-touch.png"
            alt="monalisa-touch"
            fill
            className="absolute object-top xs:block hidden"
          /> */}
          <Image
            src={`/${data?.image}`}
            alt="monalisa-touch"
            fill
            className="absolute object-top xs:block hidden"
          />
          {/* <img
            src="/images/sexual-wellness/monalisa-touch-mbile.png"
            alt="monalisa-touch"
            className="object-top block xs:hidden"
          /> */}
        </div>
      </ServicesAfterEffects>
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
       {data?.subBodyText}
      </p>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
}

export default MonalisaTouch