import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { kybellaFAQs } from "@/app/utils/data";

export default function Kybella() {
  return (
    <Wrapper id="kybella" className="grid gap-[4rem]">
      <ServicesIntro
        title="Kybella (Double chin)"
        description="Kybella is the first and only FDA approved injectable treatment of double chin. Kybella works by breaking down and destroyong the fat cells under the chin. Once they are destroyed, they will not return."
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[80rem]">
        <div
          className="relative h-full overflow-hidden rounded-md"
         
        >
          <Image
            src="/images/injectable-treatments/Kybella.png"
            alt=""
            fill
            className="absolute object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Kybella FAQs: Your questions answered"
        description="Curious about Kybella? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={kybellaFAQs}
      />
    </Wrapper>
  );
}
