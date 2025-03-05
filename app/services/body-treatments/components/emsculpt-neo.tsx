import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import {
  emsculptNeoBenefits,
  emsculptNeoFAQs,
  oShotBenefits,
  prpBreastRejuvenationFAQs,
} from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import { EmsculptNeoFAQ, EmsculptNeoType } from "../types/bodyTreatmentCustomTypes";

interface EmsculptNeoProps{
  data?:EmsculptNeoType,
  faqs?:EmsculptNeoFAQ
}
const EmsculptNeo:React.FC<EmsculptNeoProps>=({data,faqs})=> {
  return (
    <Wrapper id="emsculpt-neo" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <ServicesBenefits title="Key Benefits" benefits={data?.keyBenefits??[]} />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[48rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          {/* <Image
            src="/images/body-treatments/body-treatments-1.png"
            alt="body-treatments-1"
            fill
            className="absolute object-top xs:block hidden"
          /> */}
          <Image
            src={`/${data?.image}`}
            alt="body-treatments-1"
            fill
            className="absolute object-top xs:block hidden"
          />
          {/* <img
            src="/images/body-treatments/body-treatments-1-mobile.png"
            alt="body-treatments-1"
            className="xs:hidden block object-cover"
          /> */}
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        className="py-10"
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
}


export default EmsculptNeo