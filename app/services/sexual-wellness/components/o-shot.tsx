import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { botoxFAQs, oShotBenefits, oShotFAQs } from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";

export default function OShot() {
  return (
    <Wrapper id="o-shot" className="grid gap-[4rem]">
      <ServicesIntro
        title="O-Shot"
        description={
          <span>
            The O-Shot® procedure utilizes blood-derived growth factors,
            notably platelet-rich plasma (PRP), in a targeted manner to activate
            multi-potent stem cells. This activation promotes the development of
            healthier and more functional tissue in key areas associated with
            sexual response and urinary continence within the vagina. These
            areas include the G-Spot, O-Spot, Skene’s Glands, urethra, and
            vaginal wall.
          </span>
        }
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-1">
        <div
          className="relative xs:h-[50.3rem] overflow-hidden rounded col-span-2"
          data-aos="fade-left"
        >
          <Image
            src="/images/sexual-wellness/o-short.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top xs:block hidden"
          />
          <img
            src="/images/sexual-wellness/o-short-mobile.png"
            alt=""
            className="object-cover xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits title="Do you suffer with…" benefits={oShotBenefits} />
      <ServicesFAQ
        title="O-Shot FAQs: Your questions answered"
        description="Curious about DAXXIFY? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={oShotFAQs}
      />
    </Wrapper>
  );
}
