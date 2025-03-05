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
import { SofwaveBodyFAQ, SofwaveBodyType } from "../types/bodyTreatmentCustomTypes";


interface SofwaveBodyProps{
  data?:SofwaveBodyType,
  faqs?:SofwaveBodyFAQ
}
const SofwaveBody:React.FC<SofwaveBodyProps>=({data,faqs}) =>{
  return (
    <Wrapper id="sofwave-body" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={
         `${data?.bodyText}`
        }
      />
      <ServicesBenefits
        title={`${data?.subsections[0].headerText}`}
        benefits={data?.subsections[0].bodyText??[]}
      />
      <ServicesAfterEffects className="xs:grid-cols-2 grid-rows-[55rem]">
        {
          data?.subsections[0].images.map((item,index)=>
          <div
            className="relative h-full xs:col-span-1 col-span-full"
            data-aos="fade-left"
            key={index}
          >
            <Image
              src={`/${item.image}`}
              alt=""
              fill
              className="absolute object-top hidden xs:block"
            />
            {/* <img
              src="/images/body-treatments/body-treatments-2.png"
              alt="body-treatments-2"
              className="xs:hidden block object-top"
            /> */}
          </div>
          )
        }
      </ServicesAfterEffects>
      <ServicesBenefits
        title={`${data?.subsections[1].headerText}`}
        benefits={data?.subsections[1].bodyText??[]}
      />
      <ServicesAfterEffects className="grid-cols-1 xs:grid-rows-[50rem_50rem]">
        {/* <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/body-treatments/body-treatments-4.png"
            alt=""
            fill
            className="absolute object-top"
          />
          <img
            src="/images/body-treatments/body-treatments-4.png"
            alt=""
            className="xs:hidden"
          />
        </div>
        <div
          className="relative h-full col-span-full w-full hidden xs:block"
          data-aos="fade-right"
        >
          <Image
            src="/images/body-treatments/body-treatments-5.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div> */}
        {
          data?.subsections[1].images.map((item,index)=>     
        <div className="w-full col-span-full relative xs:hidden block" key={index}>
          <img
            src={`${item.image}`}
            alt=""
            className="object-cover"
          />
          <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
           ${item.type}
          </h2>
        </div>
          )
        }
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs??[]}
      />
    </Wrapper>
  );
}

export default SofwaveBody