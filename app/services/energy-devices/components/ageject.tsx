import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { agejectBenefits, agejectFAQs } from "@/app/utils/data";

export default function AgeJect() {
  return (
    <Wrapper id="ageject" className="grid gap-[4rem] pt-14">
      <ServicesIntro
        title="Ageject"
        description="AgeJet is a dramatically different, safe, and FDA-cleared skin resurfacing procedure for the face, neck, décolletage, hands, body and external vaginal area. Just one AgeJet treatment will significantly improve skin quality. It is unique in its ability to safely treat the upper and lower eyelids resulting it what many people describe as a “non-surgical blepharoplasty”. Unlike laser procedures which require corneal shields, the plasma energy delivered to the eyelid tissue does not penetrate through to the eye, making this procedure incredibly safe all the way up to the eyelash margin. The results are consistent and dramatic leaving you with a natural more refreshed appearance."
      />
      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        <Image
          src="/images/energy-devices/ageJet-before-after.png"
          alt="ageJet-before-after"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <img
        data-aos="zoom-in"
        src="/images/energy-devices/ageJet-before-after-mobile.png"
        alt="ageJet-before-after"
        className="xs:hidden block object-cover"
      />
      <ServicesBenefits
        title="HIGH Patient Satisfaction"
        description="It resurfaces the FULL surface of the skin, treating many common
          concerns such as:"
        benefits={agejectBenefits}
      />
      <ServicesAfterEffects>
        <div className="relative xs:h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/ageJect-before-and-after-1.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ageJect-before-and-after-1.png"
            alt="ageJect before and after"
            className="xs:hidden block object-cover"
          />
        </div>

        <div className="relative h-full" data-aos="fade-right">
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
        </div>
        <div className="relative col-span-full h-full" data-aos="fade-up">
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
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="AgeJet FAQs: Your questions answered"
        description="Curious about AgeJet? Get answers to common questions about how it
        works, what to expect, and how it can help you feel confident"
        faqs={agejectFAQs}
      />
    </Wrapper>
  );
}
