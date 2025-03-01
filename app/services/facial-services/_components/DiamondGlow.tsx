import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function DiamondGlow() {
  return (
    <Wrapper id="diamond-glow" className="grid gap-[4rem]">
      <ServicesIntro
        title="DiamondGlow™ Facial Treatment"
        description="DiamondGlow® is a non-invasive dermabrasion treatment that combines three essential skin care steps into one powerful procedure: exfoliation, extraction, and infusion. This treatment utilizes a patented, diamond-tipped handpiece and a vacuum system to deliver immediate, noticeable results. This treatment is not only great for the face but can be targeted for the body for all over glowing skin. "
      />
      <div className="grid md:grid-cols-2 gap-7" data-aos="zoom-in">
        <Image
          src="/images/facial-services/diamondglow-1.png"
          alt="diamonGold"
          className="object-cover"
          height={645}
          width={657}
        />
        <Image
          src="/images/facial-services/diamondglow-2.png"
          alt="diamonGold"
          className="object-cover"
          height={645}
          width={657}
        />
      </div>
    </Wrapper>
  );
}
