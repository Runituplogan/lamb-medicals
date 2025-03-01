import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function AquaGold() {
  return (
    <Wrapper id="aqua-gold" className="grid gap-[4rem] pb-16">
      <ServicesIntro
        title="AquaGold"
        description="AQUAGOLD® fine touch™ is the first-of-its kind patented microchannel microinjector that painlessly, effectively, and delicately delivers specials elected therapeutics into the dermis to address a wide range of skin concerns."
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded hidden xs:block"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/aquagold.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      <img
        src="/images/facial-services/aquagold-mobile.png"
        alt="aquagold-mobile"
        className="object-cover xs:hidden block"
      />

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-28 pt-10">
        The microchannel screw-like design safely and consistently delivers
        therapeutics at a consistent depth with minimal damage to the dermis,
        targeting all layers of the skin while stimulating collagen and elastin
        production. Because of this, results are visible almost instantly with
        no downtime providing a comfortable experience especially for those who
        may be averse to needles. Targeted treatments that induce a wound
        healing response and simultaneously stimulate collagen and elastin
        production.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Image
          alt="aquagold-2"
          className="object-cover"
          role="presentation"
          height={645}
          width={657}
          src="/images/facial-services/aquagold-2.png"
        />
        <Image
          alt="aquagold-3"
          className="object-cover"
          role="presentation"
          src="/images/facial-services/aquagold-3.png"
          height={645}
          width={657}
        />
      </div>

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-28 pt-10">
        Specially selected therapeutics for a treatment customized just for you.
        Address a wide range of skin concerns from acne scars and fine lines to
        hyperhydrosis and alopecia. Delicate microchannels thinner than a human
        hair provide a virtually painless procedure with zero downtime.
        Screw-like micro channels deliver therapeutics into the skin to
        significantly reduce residual drug waste, maximizing the saturation of
        the active ingredients and amplifying results. Treat problem areas
        anywhere on the body or focus on delicate, hard to treat areas such as
        the periorbital (around the eye) and perioral (around the mouth)
        regions. High quality gold tends to be hypoallergenic and utilize free
        radical scavenging to help prevent additional inflammation.
      </p>
    </Wrapper>
  );
}
