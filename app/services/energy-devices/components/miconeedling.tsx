import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { miconeedlingFAQs } from "@/app/utils/data";

export default function Miconeedling() {
  return (
    <Wrapper id="ipl" className="grid gap-[4rem]">
      <ServicesIntro
        title="Microneedling"
        description="RF MicroNeedling is becoming the new go-to for treating acne scars, helping to resurface textural irregularities, and tightening and firming aging skin by boosting collagen production. Microneedling causes very small controlled punctures into the skin causing your own immune system to rush to the area to encourage healing.  This process can help pores appear smaller, diminish wrinkles, and remodel the skin. "
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src="/images/energy-devices/miconeedling.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
        At Lamb Medical we utilize the Endymed Pure system which is far superior
        to any microneedling pen or roller you will find. Why? Because this
        system allows the needles to be inserted in and out of the skin in a
        straight and very controlled manner. This maximizes the effectiveness
        while minimizing unnecessary skin tearing or trauma from needles
        accidentally dragging across the skin. The radio frequency charge
        connects the needle tips under the skin creating tissue remodeling just
        where you need it. 
      </p>
      <ServicesAfterEffects className="xs:grid-cols-2 ">
        <div
          className="relative col-span-1 xs:col-span-full xs:h-full"
          data-aos="fade-up"
        >
          <Image
            src="/images/energy-devices/miconeedling-3.png"
            alt=""
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-3-mobile.png"
            alt="miconeedling-3"
            className="object-cover xs:hidden block"
          />
          <h2 className="font-semibold text-white absolute top-[50%] xs:top-[20%] left-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="font-semibold text-white absolute top-[50%] xs:top-[20%] right-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
        <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/miconeedling-1.png"
            alt="miconeedling"
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-1-mobile.png"
            alt="miconeedling"
            className="object-cover"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[40%] xs:top-[20%] left-[45%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
        </div>
        <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/miconeedling-2.png"
            alt="miconeedling"
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-2-mobile.png"
            alt="miconeedling"
            className="object-cover inset-0"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[40%] xs:top-[45%] right-[45%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Microneedling FAQs: Your questions answered"
        description="Curious about Microneedling? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={miconeedlingFAQs}
      />
    </Wrapper>
  );
}
