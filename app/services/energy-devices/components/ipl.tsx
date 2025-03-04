import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { iplFAQs } from "@/app/utils/data";
import { IPLType } from "../types/energyDevicesCustomType";

interface IPLProps{
  data?:IPLType
}
const IPL:React.FC<IPLProps>=({data})=> {
  return (
    <Wrapper id="ipl" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
        {data?.subsection.bodyText}
      </p>

      <ServicesAfterEffects className="grid-cols-1">
        {/* <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/ipl-before-and-after-1.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ipl-before-and-after-1.png"
            alt="ipl-before-and-after"
            className="xs:hidden block object-cover"
          />
        </div> */}
        {
          data?.subsection.images.map((item,i)=>
        <div className="relative h-full" data-aos="fade-left" key={i}>
          <Image
            src={`/${item}`}
            alt=""
            fill
            className="absolute object-cover"
          />
          {/* <img
            src="/images/energy-devices/ipl-before-and-after-1.png"
            alt="ipl-before-and-after"
            className="xs:hidden block object-cover"
          /> */}
        </div>
          )
        }
        {/* <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/ipl-before-and-after-2.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ipl-before-and-after-2.png"
            alt="ipl-before-and-after-2"
            className="xs:hidden block object-cover"
          />
        </div> */}
      </ServicesAfterEffects>
    </Wrapper>
  );
}


export default IPL