import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { monalisaTouchFAQs } from "@/app/utils/data";

export default function MonalisaTouch() {
  return (
    <Wrapper id="monalisa-touch" className="grid gap-[4rem]">
      <ServicesIntro
        title="MonaLisa Touch"
        description="We proudly serve women with the revolutionary MonaLisa Touch™ laser treatment. Designed to enhance feminine beauty and address concerns such as menopausal symptoms, vaginal dryness, and discomfort during intimacy, our skilled team is dedicated to providing transformative experiences tailored to each individual’s needs.As women age, the natural decline in collagen and estrogen levels can lead to unwelcome symptoms associated with menopause. Among the most common are vaginal dryness and discomfort during intimacy. Additionally, women may notice an increased susceptibility to urinary tract infections (UTIs), bladder infections, and incontinence."
      />
      <ServicesAfterEffects className="grid-cols-1 xs:grid-rows-[58rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/sexual-wellness/monalisa-touch.png"
            alt="monalisa-touch"
            fill
            className="absolute object-top xs:block hidden"
          />
          <img
            src="/images/sexual-wellness/monalisa-touch-mbile.png"
            alt="monalisa-touch"
            className="object-top block xs:hidden"
          />
        </div>
      </ServicesAfterEffects>
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
        Our clinic offers the MonaLisa Touch™ laser treatment as a solution to
        address these symptoms of menopause, dyspareunia (pain during intimacy),
        and vulvovaginal atrophy (dryness). This fractionated CO2 laser
        treatment resembles your routine annual exam: it’s a quick, in-office
        procedure that requires no anesthesia, is hormone-free, and involves
        minimal discomfort. Rather than merely alleviating symptoms, the
        MonaLisa Touch™ targets the underlying causes, stimulating collagen
        growth and enhancing blood flow. This results in improved elasticity,
        hydration, and functionality, ultimately providing relief and restoring
        comfort.
      </p>
      <ServicesFAQ
        title="MonaLisa Touch FAQs: Your questions answered"
        description="Curious about MonaLisa Touch? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={monalisaTouchFAQs}
      />
    </Wrapper>
  );
}
