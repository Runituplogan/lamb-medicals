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

export default function EmsculptNeo() {
  return (
    <Wrapper id="emsculpt-neo" className="grid gap-[4rem]">
      <ServicesIntro
        title="Emsculpt Neo"
        description="Emsculpt Neo is the only non-invasive body contouring treatment that simultaneously builds muscle and reduces fat. Using a combination of high-intensity focused electromagnetic (HIFEM) technology and radiofrequency (RF) energy, this revolutionary treatment stimulates powerful muscle contractions while heating fat cells for optimal toning and fat loss. In just 30-minute sessions, you can achieve the equivalent of 20,000 crunches, squats, or curls—without breaking a sweat!"
      />
      <ServicesBenefits title="Key Benefits" benefits={emsculptNeoBenefits} />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[48rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/body-treatments/body-treatments-1.png"
            alt="body-treatments-1"
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/body-treatments/body-treatments-1-mobile.png"
            alt="body-treatments-1"
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        className="py-10"
        title="Emsculpt Neo FAQs: Your questions answered"
        description="Curious about Emsculpt Neo? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={emsculptNeoFAQs}
      />
    </Wrapper>
  );
}
