import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { platedFAQs } from "@/app/utils/data";
import { PlatedFAQ, PlatedType } from "../types/skinCareProductCustomTypes";

interface PlatedProps{
  data?:PlatedType
  faqs?:PlatedFAQ
}
const Plated:React.FC<PlatedProps>=({data,faqs}) =>{
  return (
    <Wrapper id="plated" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[48rem_48rem]">
        {data?.images.map((item,index)=>
        <div className="relative h-full col-span-full" data-aos="fade-left" key={index}>
          <Image
            src={`/${item}`}
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          {/* <img
            src="/images/skincare-products/skincare-products-1-mobile.png"
            alt=""
            className="xs:hidden block object-cover"
          /> */}
        </div>
        )}
        {/* <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src="/images/skincare-products/skincare-products-2.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-2-mobile.png"
            alt=""
            className="xs:hidden block"
          />
        </div> */}
        {/* <img
          src="/images/skincare-products/skincare-products-3-mobile.png"
          alt=""
          className="xs:hidden block"
        /> */}
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
}


export default Plated