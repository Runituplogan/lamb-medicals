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
            src={`${item}`}
            alt="service image"
            fill
            className="absolute object-top"
            unoptimized
          />
        </div>
        )}
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