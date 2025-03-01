import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { prpRejuvenationFAQs, prrRejuvenationFAQs } from "@/app/utils/data";

export default function PRPRejuvenation() {
  return (
    <Wrapper id="prp-rejuvenation" className="grid gap-[4rem]">
      <ServicesIntro
        title="PRP Rejuvenation"
        description="At Lamb Medical, we offer the innovative Vampire Facelift, a non-surgical treatment that uses your body’s natural healing powers to rejuvenate your skin, restore lost volume, and enhance your overall facial appearance. This cutting-edge procedure combines the benefits of dermal fillers with Platelet-Rich Plasma (PRP) to create a youthful, radiant complexion."
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem_48rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/injectable-treatments/prp-rejuvenation-1.png"
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/prp-rejuvenation-1.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
        <div className="col-span-full relative h-full" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/prp-rejuvenation-2.png"
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/prp-rejuvenation-2.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        align="left"
        title="PRR Facial Rejuvenation FAQs: Your questions answered"
        description="Curious about Vampire Facelift? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={prrRejuvenationFAQs}
      />
      <ServicesFAQ
        title="PRP FAQs: Your questions answered"
        description="Curious about PRP? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={prpRejuvenationFAQs}
      />
    </Wrapper>
  );
}
