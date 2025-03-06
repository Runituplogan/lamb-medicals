import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { aviClearFAQs } from "@/app/utils/data";
import { ReImagingFAQ, ReImagingType } from "../../memberships/types/membershipCustomType";

interface ReImagingProps{
  data?:ReImagingType,
  faqs?:ReImagingFAQ,
}
const ReImaging:React.FC<ReImagingProps>=({data,faqs})=> {
  return (
    <Wrapper className="grid gap-[4rem]">
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative xs:h-full col-span-full" data-aos="fade-left">
          <Image
            src={`${data?.image}`}
            alt="reimaging"
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
            unoptimized
          />
          <img
             src={`${data?.image}`}
            alt="reimaging"
            role="presentation"
            className="block xs:hidden object-top"
          />
        </div>
      </ServicesAfterEffects>
      <section className="grid gap-6 py-[2rem] text-center" data-aos="fade-up">
        <h3 className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
          {data?.headerText}
        </h3>
        <p className="mx-auto grid xs:w-[80%] gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
          {data?.bodyText}
        </p>
      </section>
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[40rem] gap-[2rem]">
        {
          data?.before_and_after.map((item,index)=>
            <div className="relative xs:h-full w-1/" data-aos="fade-left" key={index}>
                <Image
                  src={`${item}`}
                  alt=""
                  fill
                  className="absolute object-top object-cover xs:block hidden"
                  unoptimized
                />
                <img
                  src={`${item}`}
                  alt="reimaging 1"
                  className="object-top object-cover block xs:hidden"

                />
            </div>
          )
        }
      
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
}
export default ReImaging