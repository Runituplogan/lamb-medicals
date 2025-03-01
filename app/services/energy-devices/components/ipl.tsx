import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { iplFAQs } from "@/app/utils/data";

export default function Sofwave() {
  return (
    <Wrapper id="ipl" className="grid gap-[4rem]">
      <ServicesIntro
        title="IPL"
        description="IPL (Intense Pulsed Light) treatment uses light energy to reduce skin pigmentation, minimize redness, treat sun damage, reduce fine lines, and improve skin texture by targeting and rejuvenating specific areas. The LimeLight IPL PhotoFacial is a non-invasive approach to skin revitalization using Cutera’s LimeLight. The procedure offers the advantage of improving skin tone and surface imperfections associated with aging and photodamage. "
      />
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
        The LimeLight PhotoFacial is ideal for any part of your face, neck and
        décolleté with skin redness, telangiectasia (tiny veins) or brown spots.
        Light (low contrast) brown spots, which were previously difficult to
        resolve, respond very well to treatment. 
      </p>

      <ServicesAfterEffects className="grid-cols-1">
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/ipl-before-and-after-1.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ipl-before-and-after-1.png"
            alt="ipl-before-and-after"
            className="xs:hidden block object-cover"
          />
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/ipl-before-and-after-2.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <img
            src="/images/energy-devices/ipl-before-and-after-2.png"
            alt="ipl-before-and-after-2"
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="IPL FAQs: Your questions answered"
        description="Curious about IPL (Photofacial)? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={iplFAQs}
      />
    </Wrapper>
  );
}
