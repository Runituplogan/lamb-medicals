import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { DiamondGlowType } from "../types/facialServicesCustomType";


interface DiamondGlowProps{
  data?:DiamondGlowType
}
const DiamondGlow:React.FC<DiamondGlowProps>=({data}) =>{
  return (
    <Wrapper id="diamond-glow" className="grid gap-[4rem] space-y-[40px]">
      {/* <ServicesIntro
        title="DiamondGlow™ Facial Treatment"
        description="DiamondGlow® is a non-invasive dermabrasion treatment that combines three essential skin care steps into one powerful procedure: exfoliation, extraction, and infusion. This treatment utilizes a patented, diamond-tipped handpiece and a vacuum system to deliver immediate, noticeable results. This treatment is not only great for the face but can be targeted for the body for all over glowing skin. "
      /> */}
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnText={`${data?.cta_button.text}`}
      />
      <div className="grid md:grid-cols-2 gap-7" data-aos="zoom-in">
        {/* <Image
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
        /> */}
       {
        data?.images.map((item,index)=> <Image
        src={`${item}`}
        alt="diamonGold"
        className="object-cover"
        height={645}
        width={657}
        key={index}
        
      />)
       }
      </div>
    </Wrapper>
  );
}

export default DiamondGlow