import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesBenefits from "../../components/services-benefits";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { dermalFillersBenefits, dermalFillersFAQs } from "@/app/utils/data";

export default function DermalFillers() {
  return (
    <Wrapper id="dermal-fillers" className="grid gap-[4rem]">
      <ServicesIntro
        title="Dermal Fillers"
        description="Dermal fillers are a non-surgical cosmetic treatment designed to restore volume, smooth wrinkles, and enhance facial contours. Made from hyaluronic acid and other biocompatible substances, fillers provide immediate results by adding volume to targeted areas such as the cheeks, lips, jawline, and under-eye hollows. Whether you want to soften fine lines or achieve a more youthful, sculpted appearance, dermal fillers offer a customizable solution tailored to your aesthetic goals."
      />
      <ServicesBenefits title="Key Benefits" benefits={dermalFillersBenefits} />
      <ServicesAfterEffects className="xs:grid-cols-1 xs:grid xs:grid-rows-[65rem_65rem]">
        <div className="relative xs:h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/injectable-treatments/dermal-fillers-1.png"
            alt=""
            fill
            className="absolute object-top hidden xs:block"
          />
          <img
            src="/images/injectable-treatments/dermal-fillers-1-mobile.png"
            alt="dermal-fillers"
            className="xs:hidden block object-top"
          />

          <h2 className="xs:hidden block font-semibold text-white absolute top-[25%] left-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="xs:hidden block font-semibold text-white absolute top-[25%] right-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
        <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src="/images/injectable-treatments/dermal-fillers.png"
            alt=""
            fill
            className="xs:absolute object-top xs:block hidden"
          />
          <img
            src="/images/injectable-treatments/dermal-fillers-mobile.png"
            alt=""
            className="xs:hidden block"
          />

          <h2 className="xs:hidden block font-semibold text-white absolute top-[25%] left-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="xs:hidden block font-semibold text-white absolute top-[25%] right-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Dermal Fillers FAQs: Your questions answered"
        description="Curious about Dermal Fillers? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={dermalFillersFAQs}
      />
    </Wrapper>
  );
}
