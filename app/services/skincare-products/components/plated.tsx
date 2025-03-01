import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { platedFAQs } from "@/app/utils/data";

export default function Plated() {
  return (
    <Wrapper id="plated" className="grid gap-[4rem]">
      <ServicesIntro
        title="Plated™"
        description="Plated™ is a revolutionary skin care solution powered by proprietary platelet-derived exosome technology. Designed to enhance skin rejuvenation at the cellular level, Plated™ works to improve skin texture, reduce the appearance of fine lines and wrinkles, and support overall skin health. This cutting-edge formula harnesses the power of natural growth factors and exosomes to promote collagen production, hydration, and a youthful, glowing complexion. Whether used as part of a daily regimen or post-procedure recovery, Plated™ delivers unparalleled skin renewal."
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[48rem_48rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/skincare-products/skincare-products-1.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-1-mobile.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
        <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src="/images/skincare-products/skincare-products-2.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-2-mobile.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <img
          src="/images/skincare-products/skincare-products-3-mobile.png"
          alt=""
          className="xs:hidden block"
        />
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Plated™ FAQs: Your questions answered"
        description="Curious about Plated? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={platedFAQs}
      />
    </Wrapper>
  );
}
