import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { miraDryFAQs, sculptraFAQs } from "@/app/utils/data";

export default function MiraDry() {
  return (
    <Wrapper id="mira-dry" className="grid gap-[4rem]">
      <ServicesIntro
        title="Mira Dry"
        description={
          <span>
            miraDry is the only{" "}
            <span className="font-work_sans font-bold text-primary">
              FDA-approved{" "}
            </span>
            treatment for permanent reduction of underarm sweat, odor, and hair.
            Ideal for those with hyperhidrosis or anyone wanting to avoid harsh
            deodorants, miraDry delivers immediate results—you’ll leave your
            appointment sweat- and odor-free. With a{" "}
            <span className="font-work_sans font-bold text-primary">90% </span>
            ‘Worth It’ rating on realself.com, most patients are thrilled after
            just one treatment.
          </span>
        }
      />

      <ServicesAfterEffects className="grid-cols-1 xs:grid-rows-[52rem]">
        <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src="/images/sexual-wellness/mira-dry.png"
            alt="mira dry"
            fill
            className="absolute object-cover hidden xs:block"
          />
          <img
            src="/images/sexual-wellness/mira-dry-mobile.png"
            alt="mira dry"
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="MiraDry FAQs: Your questions answered"
        description="Curious about miraDry? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={miraDryFAQs}
      />
    </Wrapper>
  );
}
