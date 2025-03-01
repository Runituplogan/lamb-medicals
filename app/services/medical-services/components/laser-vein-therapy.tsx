import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserVeinTherapyFAQs } from "@/app/utils/data";

export default function LaserVeinTherapy() {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title="Laser Vein Therapy"
        description={
          <p>
            The Cutera Laser combines the ideal laser wavelength with the most
            flexible parameters to deliver a superior vascular laser system. It
            treats a broad range of vessels quickly, safely, and effectively.
            Patients of all skin types can experience outstanding results.
          </p>
        }
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[52rem_52rem] gap-[2rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-4.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-4.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div className="relative col-span-full h-full" data-aos="fade-right">
          <Image
            src="/images/medical-services/medical-services-before-and-after-5.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-5.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Laser Vein Therapy FAQs: Your questions answered"
        description="Curious about Laser Vein Therapy? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={laserVeinTherapyFAQs}
      />
    </Wrapper>
  );
}
