import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserWartRemovalFAQs } from "@/app/utils/data";

export default function LaserWartRemoval() {
  return (
    <Wrapper id="laser-wart-removal" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title="Laser Wart Removal"
        description={
          <p>
            Warts are caused by a virus that effects the upper layers of the
            skin. They often occur on the hands and feet but can occur in other
            places as well. Warts can affect people of all ages and are
            especially common in children and teenagers. 
          </p>
        }
      />

      <ServicesAfterEffects className="grid-cols-1 grid-rows-[78rem] gap-[2rem]">
        <div className="relative col-span-full h-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-3.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-3.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Laser Wart Removal FAQs: Your questions answered"
        description="Curious about Laser Wart Removal? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={laserWartRemovalFAQs}
      />
    </Wrapper>
  );
}
