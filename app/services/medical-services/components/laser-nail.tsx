import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserNailFungusFAQs } from "@/app/utils/data";

export default function LaserNailFungus() {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title="Laser Nail Fungus Treatment"
        description={
          <p>
            Toenail fungus, known as onychomycosis, is an extremely common
            condition. It is estimated that 1 in 5 people have toenail fungus
            but often, due to embarrassment, people don’t like to talk about it.
            At Lamb Medical & Aesthetics we understand how frustrating
            onychomycosis can be and how tricky can be to treat. 
          </p>
        }
      />
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[48rem_50rem] gap-[2rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-6.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-6.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/medical-services/medical-services-before-and-after-7.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-7.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/medical-services/medical-services-before-and-after-8.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-8.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Laser Nail Fungus Treatment FAQs: Your questions answered"
        description="Curious about Laser Nail Fungus Treatment? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={laserNailFungusFAQs}
      />
    </Wrapper>
  );
}
