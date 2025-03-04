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
import { SofwaveType } from "../types/energyDevicesCustomType";


interface SoftwaveProps{
  data?:SofwaveType
}
const  Sofwave:React.FC<SoftwaveProps>=({data})=> {
  return (
    <Wrapper id="sofwave" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesBenefits
        title={`${data?.[0].headerText}`}
        benefits={data?.[0].bodyText??[]}
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/energy-devices/softwave.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        /> */}
        {data?.[0].images.map((item,index)=>
        <Image
         key={index}
         src={`/${item}`}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
        )}
      </figure>
{/* 
      <img
        data-aos="zoom-in"
        src="/images/energy-devices/softwave-mobile.png"
        alt="softwave-mobile"
        className="object-cover xs:hidden block"
      /> */}

      <ServicesBenefits
        title={`${data?.[1].headerText}`}
        benefits={data?.[1].bodyText??[]}
      />
      {/* <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-md font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
        Sofwave™is an FDA cleared, non-invasive treatment of fine lines and
        wrinkles using a next generation SUPERB™ Synchronous Ultrasound
        Parallel Beam Technology. In December 2022 Sofwave™ was approved by FDA
        for the short-term improvement of cellulite, making it another viable
        option for cellulite.  The fractional heating effect created by
        Sofwave’s unique ultrasound delivery, stimulates the production of new
        collagen and elastin which leads to the reduction in fine lines and
        wrinkles.
      </p> */}
      <ServicesAfterEffects className="xs:grid-cols-2">
        {
          data?.[1].images.map((item,i)=>
          <div className="relative h-full" data-aos="fade-left" key={i}>
            <Image
              
              src={`/${item}`}
              alt="sofwave-before-and-after-1"
              fill
              className="absolute object-cover xs:block hidden"
            />
            {/* <img
              src="/images/energy-devices/sofwave-before-and-after-1-2.png"
              alt=""
              className="object-cover block xs:hidden"
            /> */}
          </div>
          )
        }
        {/* <img
          data-aos="zoom-in"
          src="/images/energy-devices/softwave-mobile.png"
          alt="softwave-mobile"
          className="object-cover xs:hidden block"
        /> */}
        {/* <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/sofwave-before-and-after-2.png"
            alt="sofwave-before-and-after-2"
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/energy-devices/sofwave-before-and-after-2.png"
            alt="sofwave-before-and-after"
            className="object-cover block xs:hidden"
          />
        </div> */}
        {/* <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/sofwave-before-and-after-3.png"
            alt="sofwave-before-and-after-3"
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/energy-devices/sofwave-before-and-after-3.png"
            alt="sofwave-before-and-after-3"
            className="object-cover block xs:hidden"
          />
        </div> */}
        {/* <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/sofwave-before-and-after-4.png"
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/energy-devices/sofwave-before-and-after-4.png"
            alt="sofwave-before-and-after-4"
            className="object-cover block xs:hidden"
          />
        </div> */}
      </ServicesAfterEffects>
    </Wrapper>
  );
}

export default Sofwave