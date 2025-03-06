import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { agejectBenefits, agejectFAQs } from "@/app/utils/data";
import { AgeJectFaqs, AgejectType } from "../types/energyDevicesCustomType";
import BeforeAfter from "@/app/components/BeforeandAfter";

interface AgeJectProps {
  data?: any;
  agejectFaqs?: AgeJectFaqs;
}
const AgeJect: React.FC<AgeJectProps> = ({ data, agejectFaqs }) => {
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
        benefits={data?.sections[0].content ?? []}
      />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <BeforeAfter items={data?.sections[0].images?.slice(0, 2)} />
        <BeforeAfter items={data?.sections[0].images?.slice(2, 4)} />
      </div>


        <BeforeAfter items={data?.sections[0].images?.slice(4, 6)} />
   

      <ServicesFAQ
        title={`${agejectFaqs?.headerText}`}
        description={`${agejectFaqs?.textBody}`}
        faqs={agejectFaqs?.questions}
      />
    </Wrapper>
  );
};

export default AgeJect;
