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
  return (
    <Wrapper id="ageject" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText} description={data?.bodyText} />

      <figure
        className="relative h-[18rem] overflow-hidden rounded-md xs:h-[24rem] sm:h-[42rem] xl:h-[61rem]"
       
      >
        <Image
          src={data?.image}
          alt="ageJet-before-after"
          role="presentation"
          fill
          unoptimized
          className="object-cover object-center"
        />
      </figure>
      <ServicesBenefits
        title={`${data?.sections[0].headerText}`}
        description={`${data?.sections[0].bodyText}`}
        benefits={data?.sections[0].content ?? []}
      />
      <section className="grid gap-[1.6rem]">
        <div className="grid gap-[1.6rem] xl:grid-cols-2 xl:gap-[2.4rem]">
          <BeforeAfter
            className="h-[32rem] md:h-[40rem]"
            items={data?.sections[0].images?.slice(0, 2)}
          />
          <BeforeAfter
            className="h-[32rem]"
            items={data?.sections[0].images?.slice(2, 4)}
          />
        </div>
        <BeforeAfter
          className="h-[16rem] md:h-[24rem] lg:h-[40rem] xl:h-[59rem]"
          items={data?.sections[0].images?.slice(4, 6)}
        />
      </section>

      <ServicesFAQ
        title={agejectFaqs?.headerText as string}
        description={agejectFaqs?.textBody as string}
        faqs={agejectFaqs?.questions}
      />
    </Wrapper>
  );
};

export default AgeJect;
