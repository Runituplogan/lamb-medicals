import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { agejectBenefits, agejectFAQs } from "@/app/utils/data";
import { AgeJectFaqs, AgejectType } from "../types/energyDevicesCustomType";

interface AgeJectProps {
  data?:AgejectType,
  agejectFaqs?:AgeJectFaqs
}
const AgeJect:React.FC<AgeJectProps>=({data,agejectFaqs})=> {
  // console.log(data?.sections[0].content)
  return (
    <Wrapper id="ageject" className="grid gap-[4rem] pt-14">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/energy-devices/ageJet-before-after.png"
          alt="ageJet-before-after"
          role="presentation"
          fill
          className="object-cover"
        /> */}
        <Image
          src={`${data?.image}`}
          alt="ageJet-before-after"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      {/* <img
        data-aos="zoom-in"
        src="/images/energy-devices/ageJet-before-after-mobile.png"
        alt="ageJet-before-after"
        className="xs:hidden block object-cover"
      /> */}
      <ServicesBenefits
        title={`${data?.sections[0].headerText}`}
        description={`${data?.sections[0].bodyText}`}
        benefits={data?.sections[0].content??[]}
      />
      <ServicesAfterEffects>
        {
          data?.sections[0].images.map((item,index)=> 
        <div className="relative xs:h-full" data-aos="fade-left" key={index}>
          <Image
            src={`${item.image}`}
            alt=""
            fill
            className="absolute object-cover"
          />
          {/* <img
            src="/images/energy-devices/ageJect-before-and-after-1.png"
            alt="ageJect before and after"
            className="xs:hidden block object-cover"
          /> */}
        </div>
          )
        }

        {/* <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/ageJect-before-and-after-2.png"
            alt=""
            fill
            className="absolute object-cover hidden xs:block"
          />
          <img
            src="/images/energy-devices/ageJect-before-and-after-2.png"
            alt="ageJect-before-and-after-2"
            className="object-cover xs:hidden block"
          />
        </div> */}
        {/* <div className="relative col-span-full h-full" data-aos="fade-up">
          <Image
            src="/images/energy-devices/ageJect-before-and-after-3.png"
            alt="ageJect-before-and-after"
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ageJect-before-and-after-3.png"
            alt="ageJect-before-and-after-3"
            className="xs:hidden block object-cover"
          />
        </div> */}
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${agejectFaqs?.headerText}`}
        description={`${agejectFaqs?.textBody}`}
        faqs={agejectFaqs?.questions}
      />
    </Wrapper>
  );
}


export default AgeJect