import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { aviClearFAQs } from "@/app/utils/data";

export default function ReImaging() {
  return (
    <Wrapper className="grid gap-[4rem]">
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative xs:h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/memberships/reimaging.png"
            alt="reimaging"
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/memberships/reimaging.png"
            alt="reimaging"
            role="presentation"
            className="block xs:hidden object-top"
          />
        </div>
      </ServicesAfterEffects>
      <section className="grid gap-6 py-[2rem] text-center" data-aos="fade-up">
        <h3 className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
          Reimagining How Acne is Treated
        </h3>
        <p className="mx-auto grid xs:w-[80%] gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
          AviClear is a laser treatment that can safely and effectively treat
          all skin types and can be used on all acne severities. It’s time to
          look at acne in a whole new light. A light that leads to a bright
          future. A future with less acne. A future that doesn’t include daily
          oral antibiotics and all the challenges that come with them. A future
          where severe acne can be treated without severe side effects. The next
          wave in acne treatment has arrived. Introducing AviClear, the first
          FDA-cleared laser for the treatment of acne vulgaris.
        </p>
      </section>
      <ServicesAfterEffects className="grid-cols-2 grid-rows-[40rem] gap-[2rem]">
        <div className="relative xs:h-full" data-aos="fade-left">
          <Image
            src="/images/memberships/reimaging-1.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/memberships/reimaging-1.png"
            alt="reimaging 1"
            className="object-top block xs:hidden"
          />
        </div>
        <div className="relative xs:h-full" data-aos="fade-left">
          <Image
            src="/images/memberships/reimaging-2.png"
            alt=""
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/memberships/reimaging-2.png"
            alt="reimaging 2"
            className="object-top block xs:hidden"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Aviclear FAQs: Your questions answered"
        description="Curious about Aviclear? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={aviClearFAQs}
      />
    </Wrapper>
  );
}
