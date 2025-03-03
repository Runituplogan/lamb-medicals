import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function Peels() {
  return (
    <Wrapper id="peels" className="grid gap-[4rem]">
      <h2>Hello world</h2>
      <ServicesIntro
        title="Peels - Chemical Peels"
        description="Chemical peels are a fast and effective way to exfoliate dry or damaged skin allowing new, smoother, healthier skin to surface. Your skin will gain a healthier and younger appearance. Peels help to minimize fine wrinkles, improve discoloration and age spots, and improve the overall texture of your skin. We understand that sometimes decision making is complicated, and we will help you choose the best option for your skin needs."
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/chemical-peel.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <img
        data-aos="zoom-in"
        src="/images/facial-services/chemical-peel-mobile.png"
        alt="chemical-peel"
        className="object-cover xs:hidden block"
      />

      <ul className="w-full list-disc pl-14 md:px-10">
        <li className="text-[32px] text-[#12121299]">
          <h2
            data-aos="fade-top"
            className="font-semibold text-[32px] md:text-[47.06px] font-rubik"
          >
            VI Peels
          </h2>
        </li>
      </ul>

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-4">
        The VI Peel is a skin-resurfacing chemical peel that stimulates collagen
        and increases cellular turnover to reveal smoother and more radiant
        skin. In just 15 years, over 10 million peels have been performed
        worldwide and VI Peel has been recognized by both consumer groups and
        industry leaders as the #1 Peel. VI Peel has a peel for each skin
        concern. With 5 custom blends targeted for each patients’ needs, VI Peel
        helps treat all skin concerns such as aging skin, active acne, acne
        scarring, melasma, sun damage, keratosis pilaris and much more. Get a VI
        Peel today!
      </p>

      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/vi-peels.png"
          alt=""
          role="presentation"
          fill
          className="object-cover hidden md:block"
        />

        <img
          data-aos="zoom-in"
          src="/images/facial-services/vi-peels-mobile.png"
          alt="vi-peels-mobile"
          className="xs:hidden block h-fi"
        />
      </figure>

      <ul className="w-full list-disc pl-14 md:px-10">
        <li className="text-[32px] text-[#12121299]">
          <h2
            data-aos="fade-top"
            className="font-semibold text-[32px] md:text-[47.06px] font-rubik"
          >
            BioRePeel
          </h2>
        </li>
      </ul>

      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/bio-reel-peel.png"
          alt=""
          role="presentation"
          fill
          className="object-cover hidden md:block"
        />
        <img
          src="/images/facial-services/bio-reel-peel-mobile.png"
          alt="vi-peels-mobile"
          role="presentation"
          className="md:hidden block"
        />
      </figure>
    </Wrapper>
  );
}
