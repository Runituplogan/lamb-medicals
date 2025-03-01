import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import {
  sofwaveBodyBenefits,
  sofwaveBodyFAQs,
  sofwaveBodySatisfaction,
} from "@/app/utils/data";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";

export default function SofwaveBody() {
  return (
    <Wrapper id="sofwave-body" className="grid gap-[4rem]">
      <ServicesIntro
        title="Sofwave Body"
        description={
          <>
            <span>
              From the founders of the aesthetic industry, Sofwave™ Medical
              brings a novel approach to skin tightening using SUPERB™
              Synchronous Ultrasound Parallel Beam Technology.
            </span>
            <span>
              Sofwave™’s breakthrough technology delivers a new standard of
              care to aesthetic treatments, providing safe aesthetic treatments
              for patients."
            </span>
          </>
        }
      />
      <ServicesBenefits
        title="SMART Yet SIMPLE Skin Treatment"
        benefits={sofwaveBodyBenefits}
      />
      <ServicesAfterEffects className="xs:grid-cols-2 grid-rows-[55rem]">
        <div
          className="relative h-full xs:col-span-1 col-span-full"
          data-aos="fade-left"
        >
          <Image
            src="/images/body-treatments/body-treatments-2.png"
            alt=""
            fill
            className="absolute object-top hidden xs:block"
          />
          <img
            src="/images/body-treatments/body-treatments-2.png"
            alt="body-treatments-2"
            className="xs:hidden block object-top"
          />
        </div>
        <div
          className="relative h-full col-span-full xs:col-span-1"
          data-aos="fade-right"
        >
          <Image
            src="/images/body-treatments/body-treatments-3.png"
            alt=""
            fill
            className="absolute object-top"
          />
          <img
            src="/images/body-treatments/body-treatments-3.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesBenefits
        title="HIGH Patient Satisfaction"
        benefits={sofwaveBodySatisfaction}
      />
      <ServicesAfterEffects className="grid-cols-1 xs:grid-rows-[50rem_50rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/body-treatments/body-treatments-4.png"
            alt=""
            fill
            className="absolute object-top"
          />
          <img
            src="/images/body-treatments/body-treatments-4.png"
            alt=""
            className="xs:hidden"
          />
        </div>
        <div
          className="relative h-full col-span-full w-full hidden xs:block"
          data-aos="fade-right"
        >
          <Image
            src="/images/body-treatments/body-treatments-5.png"
            alt=""
            fill
            className="absolute object-top"
          />
        </div>
        <div className="w-full col-span-full relative xs:hidden block">
          <img
            src="/images/body-treatments/body-treatments-5-before.png"
            alt=""
            className="object-cover"
          />
          <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
        </div>
        <div className="w-full col-span-full relative xs:hidden block">
          <img
            src="/images/body-treatments/body-treatments-5-after.png"
            alt="body-treatments-5-after"
            className="object-cover"
          />

          <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Sofwave FAQs: Your questions answered"
        description="Curious about Sofwave? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={sofwaveBodyFAQs}
      />
    </Wrapper>
  );
}
