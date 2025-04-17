import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { DermaplaningType } from "../types/facialServicesCustomType";

interface DermaplaningProps {
  data?: DermaplaningType;
}
const Dermaplanning: React.FC<DermaplaningProps> = ({ data }) => {
  return (
    <Wrapper id="dermaplanning" className="grid pt-10 space-y-[20px]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnStyle={`${data?.cta_button.text}`}
      />
      <figure
         className="relative h-[62.3rem] max-h-[450px] sm:max-h-[1200px] overflow-hidden rounded"
       
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
          unoptimized
          className="object-cover my-[20px]"
        />
      </figure>
      {/* <img
       
        src="/images/facial-services/dermaplanning-mobile.png"
        alt="dermaplanning"
        className="object-cover xs:hidden block"
      /> */}

      <p className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]">
        {data?.additional_infos[0].bodyText}
      </p>
      <p className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]">
        {data?.additional_infos[1].bodyText}
      </p>
    </Wrapper>
  );
};
export default Dermaplanning;
