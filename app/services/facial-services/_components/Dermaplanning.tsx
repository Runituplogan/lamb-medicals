import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { DermaplaningType } from "../types/facialServicesCustomType";

interface DermaplaningProps {
  data?: DermaplaningType;
}
const Dermaplanning: React.FC<DermaplaningProps> = ({ data }) => {
  return (
    <Wrapper id="dermaplanning" className="grid gap-[4rem] pt-10">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnStyle={`${data?.cta_button.text}`}
      />
      <figure
         className="relative h-[62.3rem] max-h-[400px] sm:max-h-[1200px] overflow-hidden rounded"
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
          unoptimized
          className="object-cover"
        />
      </figure>
      {/* <img
        data-aos="zoom-in"
        src="/images/facial-services/dermaplanning-mobile.png"
        alt="dermaplanning"
        className="object-cover xs:hidden block"
      /> */}

      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.additional_infos[0].bodyText}
      </p>
      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.additional_infos[1].bodyText}
      </p>
    </Wrapper>
  );
};
export default Dermaplanning;
