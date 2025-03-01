import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { laserGenesisFAQs } from "@/app/utils/data";

export default function LaserGenesis() {
  return (
    <Wrapper id="laser-genesis" className="grid gap-[4rem] py-[2rem]">
      <ServicesIntro
        title="Laser Genesis"
        description={
          <p>
            <span>
              Laser Genesis is a gentle laser treatment that can help reverse
              the aging process, smooth and improve skin tone, and help with
              acne without any recovery time. This is an incredible option to
              minimize redness or premature aging on your face, neck, or
              chest—including facial veins, sun spots, and uneven texture.
            </span>
            <span>
              Laser Genesis is a non-ablative treatment. This means that the
              laser heats your skin but does not remove the top layer (like some
              other laser treatments would). The heat generated promotes
              collagen contraction and repair. Collagen is extremely important
              as it keeps the skin looking youthful by giving volume and
              suppleness.
            </span>
          </p>
        }
      />
      <p
        className="font-work_sans xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-grey-750 text-opacity-80"
        data-aos="fade-right"
      >
        As we age, collagen levels in skin start to deplete naturally which
        leads to loss of volume, fine lines, and wrinkles. When left alone,
        these signs of aging progress faster and faster (think of a snowball)
        resulting in deeper wrinkles, flattened areas and hollows. Not only does
        laser genesis help with signs of aging, it also treats acne scars,
        uneven texture, rosacea spots and sun damage making it a complete
        rejuvenation system.
      </p>
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[50rem_52rem] gap-2 xs:gap-[2rem]">
        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-1.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top hidden xs:block"
          />
          <img
            src="/images/medical-services/medical-services-before-and-after-1.png"
            alt=""
            className="xs:hidden block"
          />
        </div>
        <div data-aos="fade-left" className="relative w-full xs:hidden block">
          <img
            src="/images/medical-services/medical-services-before-1.png"
            alt=""
            className="w-full"
          />
          <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
        </div>

        <div className="relative h-full col-span-full" data-aos="fade-left">
          <Image
            src="/images/medical-services/medical-services-before-and-after-2.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top"
          />
        </div>
        <div data-aos="fade-left" className="relative w-full xs:hidden block">
          <img
            src="/images/medical-services/medical-services-after-1.png"
            alt=""
            className="w-full"
          />
          <h2 className="font-semibold text-white absolute top-[13%] right-[40%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
        <div data-aos="fade-left" className="relative w-full xs:hidden block">
          <img
            src="/images/medical-services/medical-services-after-3-mobile.png"
            alt=""
            className="w-full"
          />
          <h2 className="font-semibold text-white absolute top-[13%] left-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
          <h2 className="font-semibold text-white absolute top-[13%] right-[20%] text-[21px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div>
        <div
          className="relative col-span-full h-full xs:block hidden"
          data-aos="fade-left"
        >
          <Image
            src="/images/medical-services/medical-services-before-and-after-3.png"
            alt=""
            fill
            role="presentation"
            className="absolute object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title="Laser Genesis FAQs: Your questions answered"
        description="Curious about miraDry? Get answers to common questions about how it works, what to expect, and how it can help you feel confident and sweat-free."
        faqs={laserGenesisFAQs}
      />
    </Wrapper>
  );
}
