import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { botoxFAQs, oShotBenefits, oShotFAQs } from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import { OShotFAQ, OShotType } from "../types/sexualWellnessCustomTypes";

interface OShotProps{
  data?:OShotType,
  faqs?:OShotFAQ
}
const OShot:React.FC<OShotProps>=({data,faqs}) =>{
  return (
    <Wrapper id="o-shot" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={
          <span>
          {data?.bodyText}
          </span>
        }
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-1">
        <div
          className="relative xs:h-[50.3rem] overflow-hidden rounded col-span-2"
          data-aos="fade-left"
        >
          {/* <Image
            src="/images/sexual-wellness/o-short.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top xs:block hidden"
          /> */}
          <Image
            src={`${data?.image}`}
            alt=""
            role="presentation"
            fill
            className="object-cover object-top"
          />
          {/* <img
            src="/images/sexual-wellness/o-short-mobile.png"
            alt=""
            className="object-cover xs:hidden block"
          /> */}
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits title={`${data?.subHeaderText}`} benefits={data?.conditions??[]} />
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
}
export default OShot