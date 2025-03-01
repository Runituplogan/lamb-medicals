import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { exosomsFAQs, platedFAQs } from "@/app/utils/data";

export default function Exosomes() {
  return (
    <Wrapper id="plated" className="grid gap-[4rem]">
      <ServicesIntro
        title="Exosomes"
        description="Exosomes are cutting-edge skin care technology designed to enhance cellular communication and rejuvenate the skin from within. These tiny extracellular vesicles carry powerful growth factors, peptides, and RNA to stimulate collagen production, reduce inflammation, and promote deep skin repair. By harnessing the body’s natural regenerative processes, exosomes improve skin texture, boost hydration, and diminish the appearance of fine lines, wrinkles, and discoloration. Whether used alone or as a post-procedure booster, exosomes offer an advanced approach to achieving healthier, more youthful-looking skin."
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[60rem] gap-[4rem]">
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/skincare-products/skincare-products-3.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-3.png"
            alt=""
            className="xs:hidden"
          />
        </div>
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/skincare-products/skincare-products-4.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/skincare-products/skincare-products-4.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Exosomes FAQs: Your questions answered"
        description="Curious about Exosomes? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={exosomsFAQs}
      />
    </Wrapper>
  );
}
