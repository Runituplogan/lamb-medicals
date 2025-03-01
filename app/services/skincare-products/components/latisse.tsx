import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { exosomsFAQs, latisseBenefits, latisseFAQs } from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";

export default function Latisse() {
  return (
    <Wrapper id="latisse" className="grid gap-[4rem]">
      <ServicesIntro
        title="Latisse"
        description={
          <p className="grid gap-[0.5rem]">
            <span>
              The first FDA approved treatment to increase lash growth.
            </span>
            <span>
              Latisse is a liquid that is applied to the upper lasher via a
              brush applicator nightly. Growth is often noticible at 4 weeks
              with full growth at 16 weeks. 
            </span>
            <span>
              Latisse will add both length and thickness to your lashes. If
              Latisse is discontinued, your lashes will return to their normal
              state over time. 
            </span>
          </p>
        }
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/skincare-products/skincare-products-5.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-5.png"
            alt=""
            className="xs:hidden"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits
        title="SMART Yet SIMPLE Skin Treatment"
        benefits={latisseBenefits}
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/skincare-products/skincare-products-6.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-6.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Latisse FAQs: Your questions answered"
        description="Curious about Latisse? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={latisseFAQs}
      />
    </Wrapper>
  );
}
