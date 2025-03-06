import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { DermaplaningType } from "../types/facialServicesCustomType";

interface DermaplaningProps{
  data?:DermaplaningType
}
const Dermaplanning:React.FC<DermaplaningProps>=({data})=> {
  return (
    <Wrapper id="dermaplanning" className="grid gap-[4rem] pt-10">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnStyle={`${data?.cta_button.text}`}
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded xs:block hidden"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/facial-services/dermaplanning.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        /> */}
        <Image
          src={`${data?.images}`}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      {/* <img
        data-aos="zoom-in"
        src="/images/facial-services/dermaplanning-mobile.png"
        alt="dermaplanning"
        className="object-cover xs:hidden block"
      /> */}

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 py-16">
        {data?.additional_infos[0].bodyText}
      </p>
      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-4">
      {data?.additional_infos[1].bodyText}
      </p>
    </Wrapper>
  );
}
export default Dermaplanning