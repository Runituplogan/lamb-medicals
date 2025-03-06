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


interface SoftwaveProps{
  data?:SofwaveType,
  sofwaveFaqs?:SofwaveFaqs
}
const  Sofwave:React.FC<SoftwaveProps>=({data,sofwaveFaqs})=> {
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
        {data?.[0].images.map((item,index)=>
        <Image
         key={index}
         src={`${item.image}`}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
        )}
      </figure>
      <ServicesBenefits
        title={`${data?.[1].headerText}`}
        benefits={data?.[1].bodyText??[]}
      />
      <ServicesAfterEffects className="xs:grid-cols-2 grid-rows-[55rem]">
        {
          data?.[1].images.map((item,i)=>
          <div className="relative h-full" data-aos="fade-left" key={i}>
            <Image
              
              src={`${item.image}`}
              alt="sofwave-before-and-after-1"
              fill
              className="absolute object-cover xs:block hidden"
            />
          </div>
          )
        }
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${sofwaveFaqs?.headerText}`}
        description={`${sofwaveFaqs?.textBody}`}
        faqs={sofwaveFaqs?.questions}
      />
    </Wrapper>
  );
}

export default Sofwave