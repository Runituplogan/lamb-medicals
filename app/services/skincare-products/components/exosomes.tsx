import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { exosomsFAQs, platedFAQs } from "@/app/utils/data";
import { ExosomesFAQ, ExosomesType } from "../types/skinCareProductCustomTypes";


interface ExosomesProps{
  data?:ExosomesType,
  faqs?:ExosomesFAQ
}
const Exosomes:React.FC<ExosomesProps>=({data,faqs})=> {
  return (
    <Wrapper id="plated" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[60rem] gap-[4rem]">
        {
          data?.images.map((item,index)=>
            <div className="relative h-full" data-aos="fade-left" key={index}>
              <Image
                key={index}
                src={`${item}`}
                alt=""
                fill
                className="absolute object-top xs:block hidden"
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


export default Exosomes