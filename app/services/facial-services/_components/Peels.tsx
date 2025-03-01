import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function Peels() {
  return (
    <Wrapper id="peels" className="grid gap-[4rem]">
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

      <ServicesIntro
        title="Ellebana Lash Lift"
        description="With our re-gen formula boasting amino acids, peptides, and plant based ingredients; Elleebana Lash Lift strengthens, nourishes, and protects lashes. Elleebana Lash Lift provides a sensational, natural enhancement to your eyelashes.   "
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded md:block hidden"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/ellana.png"
          alt="ellana"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <img
        data-aos="zoom-in"
        src="/images/facial-services/ellana-mobile.png"
        alt="ellana lash lift"
        className="object-cover md:hidden block"
      />

      <div className="w-full space-y-[2rem]">
        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
            Natural Look
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
            Natural enhancement, minimal maintenance and impressive results are
            standard with our innovative solution.
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
            Indulgent Treatment
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
            Our indulgent lash treatment leaves you feeling relaxed and pampered
            – and leaves you with sensational and luxurious Elleebana lashes.
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
            Many Products Available
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
            Elleebana’s Lash Lift product family includes many other products to
            keep your lashes looking their best!
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="font-rubik text-[32px] xs:text-[40px] font-semibold leading-[6rem] text-grey-200 w-full md:text-center">
          Lash Lift Before and After
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
              Before
            </h2>

            <img
              src="/images/facial-services/eye-before-1.png"
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div>
          <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
              After
            </h2>
            <img
              src="/images/facial-services/eye-after-1.png"
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div>

          <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
              Before
            </h2>
            <img
              src="/images/facial-services/eye-before-2.png"
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div>

          <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
              After
            </h2>
            <img
              data-aos="zoom-in"
              src="/images/facial-services/eye-after-2.png"
              alt="eye-before"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
