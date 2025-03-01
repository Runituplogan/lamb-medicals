import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function Dermaplanning() {
  return (
    <Wrapper id="dermaplanning" className="grid gap-[4rem] pt-10">
      <ServicesIntro
        title="Dermaplaning"
        description="Dermaplaning is a manual exfoliation technique the removes surface debris with a custom dermaplaning blade. Come in and experience dermaplaning as a stand alone service or add dermaplaning to a facial or chemical peel. This treatment involves using a sterile surgical blade to remove dead skin and “peach fuzz” from the complexion. This treatment is a form of physical exfoliation and also allows for skincare to penetrate deeper and for makeup to apply more smoothly. This is great as a standalone service or in conjunction with other aesthetic services. There is no downtime with dermaplaning."
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/dermaplanning.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <img
        data-aos="zoom-in"
        src="/images/facial-services/dermaplanning-mobile.png"
        alt="dermaplanning"
        className="object-cover xs:hidden block"
      />

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 py-16">
        Benefits of dermaplaning include increasing your skin’s ability to
        absorb products and creating a healthier more radiant appearance. Also,
        fine lines and wrinkles will be diminished. Dermaplaning is a great way
        to prep your skin before a chemical peel.
      </p>
      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-4">
        Dermaplaning will NOT cause hair to grow back darker or thicker nor will
        it cause breakouts. Additionally, dermaplaning is not painful. The
        treatment is performed with a specialized razor and cannot be done at
        home. Lamb Medical & Aesthetics now offers the DiamondGlow™ Treatment.
        Unlike traditional wet facial treatments, which rely on chemical
        exfoliation to treat skin at surface level, DiamondGlow’s™ patented
        recessed diamond tip wand delivers a next-level resurfacing treatment
        that deeply cleans and rejuvenates the skin. Diamond Glow Facial focuses
        on rejuvenating the face and neck. Diamond Glow Body applies the same
        great treatment to the body for overall glowing results. Finally,
        Diamond Glow KP spot treats that stubborn keratosis pilaris or “chicken
        skin” on the backs of arms or tops of thighs. Get ready to glow! 
      </p>
    </Wrapper>
  );
}
