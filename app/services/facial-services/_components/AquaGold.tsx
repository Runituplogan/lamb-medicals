import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { AquaGoldFaq, AquaGoldType } from "../types/facialServicesCustomType";
import ServicesFAQ from "../../components/services-faq";

interface FacialServiceProps {
  data?: AquaGoldType;
  aquaGoldFaq?: AquaGoldFaq;
}

const AquaGold: React.FC<FacialServiceProps> = ({ data, aquaGoldFaq }) => {
  return (
    <Wrapper id="aqua-gold" className="grid gap-[4rem] space-y-[40px] pb-16">
      {/* <ServicesIntro
        title="AquaGold"
        description="AQUAGOLD® fine touch™ is the first-of-its kind patented microchannel microinjector that painlessly, effectively, and delicately delivers specials elected therapeutics into the dermis to address a wide range of skin concerns."
      /> */}
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnText={`${data?.cta_button.text}`}
      />
      <figure
        className="relative h-[62.3rem] max-h-[500px] overflow-hidden rounded sm:max-h-[1200px]"
       
      >
        {/* <Image
          src="/images/facial-services/aquagold.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        /> */}

        <Image
          src={`${data?.sections[0].image}`}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      {/* <img
         src={`${data?.sections[0].image}`}
        alt="aquagold-mobile"
        className="object-cover xs:hidden block"
      /> */}
      {/* <img
        src="/images/facial-services/aquagold-mobile.png"
        alt="aquagold-mobile"
        className="object-cover xs:hidden block"
      /> */}

      <p className="my-4 font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-[black] text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.sections[0].bodyText}
        {/* The microchannel screw-like design safely and consistently delivers
        therapeutics at a consistent depth with minimal damage to the dermis,
        targeting all layers of the skin while stimulating collagen and elastin
        production. Because of this, results are visible almost instantly with
        no downtime providing a comfortable experience especially for those who
        may be averse to needles. Targeted treatments that induce a wound
        healing response and simultaneously stimulate collagen and elastin
        production. */}
      </p>

      <div className="relative col-span-full h-auto">
        <Image
          src={`${data?.sections[1].images[0]}`}
          alt="service image"
          className="h-full w-full object-cover object-top"
          height={50}
          width={50}
          unoptimized
        />
      </div>
      {/* <Image
          src={`${data?.sections[1].image}`}
          alt="section2 image"
          role="presentation"
          fill
          className="object-cover"
        /> */}

      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-black text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.sections[1].bodyText}
      </p>
      <ServicesFAQ
        className="px-2 md:px-0"
        title={`${aquaGoldFaq?.headerText}`}
        description="Curious about AquaGold? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={aquaGoldFaq?.questions}
      />
    </Wrapper>
  );
};

export default AquaGold;
