import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { botoxFAQs } from "@/app/utils/data";

export default function Botox() {
  return (
    <Wrapper id="botox" className="grid gap-[2rem] xs:gap-[4rem]">
      <ServicesIntro
        title="Botox & Dysport"
        description={
          <>
            <span>
              Wrinkles are formed over time from repetitive movements of the
              underlying facial muscles which cause the overlying skin to
              crease. With injectables you are able to achieve a natural look,
              not a ‘frozen’ one. Everyone is unique and many of our patients
              prefer a natural softening of their appearance. We do not have a
              recipe that we use on everyone, instead we will to talk through
              the areas that are the most bothersome to you to understand your
              desired results and create an individualized treatment plan.
            </span>
            <span>
              Botox and Dysport are among the world’s most popular and
              time-tested injectables for reversing or preventing age-related
              fine lines, wrinkles, creases, furrows and folds. They offer a
              quick and effective way to soften the appearance of wrinkles and
              lines including crow’s feet, frown lines, and forehead lines.
            </span>
            <span>
              The emergence of facial creases and lines is often one of the
              initial indications of aging, which can make you look exhausted
              and aged beyond your years. Lamb Medical & Aesthetics provides a
              range of injectables that can smooth out these wrinkles, resulting
              in a more youthful appearance without the need for surgery. Lamb
              Medical & Aesthetics is delighted to provide DAXXIFY in
              Pittsburgh, a product that can eliminate years from your
              appearance and give you a more lively and refreshed look.
            </span>
          </>
        }
      />
      <ServicesAfterEffects
        title="Forehead Lines"
        className="grid-cols-2 grid-rows-1"
      >
        <div
          className="relative h-[50.3rem] overflow-hidden rounded"
          data-aos="fade-left"
        >
          <Image
            src="/images/injectable-treatments/injectable-treatments-before-and-after-1.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top"
          />
        </div>
        <div
          className="relative h-[50.3rem] overflow-hidden rounded"
          data-aos="fade-right"
        >
          <Image
            src="/images/injectable-treatments/injectable-treatments-before-and-after-2.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        title="Frown Lines"
        hideTitleOnMobile
        className="grid-cols-1 grid-rows-1"
      >
        <div
          className="relative xs:h-[50.3rem] overflow-hidden rounded col-span-2"
          data-aos="fade-left"
        >
          <img
            src="/images/injectable-treatments/injectable-treatments-before-and-after-mobile-3.png"
            alt="Injectable treatments before and after mobile"
            className="object-cover object-top xs:hidden block"
          />
          <Image
            src="/images/injectable-treatments/injectable-treatments-before-and-after-3.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top xs:block hidden"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[20%] left-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="xs:hidden block font-semibold text-white absolute top-[20%] right-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        hideTitleOnMobile={true}
        title="Crow’s Feet"
        className="grid-cols-1 grid-rows-1"
      >
        <div
          className="relative xs:h-[50.3rem] overflow-hidden rounded col-span-2"
          data-aos="fade-right"
        >
          <img
            src="/images/injectable-treatments/injectable-treatments-before-and-after-mobile-4.png"
            alt="injectable treatments before and after"
            className="object-cover xs:hidden block"
          />
          <Image
            src="/images/injectable-treatments/injectable-treatments-before-and-after-4.png"
            alt=""
            role="presentation"
            fill
            className="object-cover object-top xs:block hidden"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[50%] xs:top-[20%] left-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="xs:hidden block font-semibold text-white absolute top-[50%] xs:top-[20%] right-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Botox & Dysport FAQs: Your questions answered"
        description="Curious about Injectables (Botox/Dysport)? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={botoxFAQs}
      />
    </Wrapper>
  );
}
