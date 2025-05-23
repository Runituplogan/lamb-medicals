import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import { MicroneedlingType } from "../types/energyDevicesCustomType";
import ReactPlayer from "react-player";

interface MiconeedlingProps {
  data?: MicroneedlingType;
}
const Miconeedling: React.FC<MiconeedlingProps> = ({ data }) => {
  return (
    <Wrapper id="microneedling" className="grid gap-[6rem] py-8 pb-[6rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <figure
        className="relative h-auto overflow-hidden rounded"
       
      >
        <div className="flex md:h-screen h-auto w-full items-center justify-center">
          <ReactPlayer
            url="https://youtube.com/shorts/au8LKlJfqxo?feature=share"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </figure>

      <p
        className=" text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]"
       
      >
        {data?.subsection.bodyText}
      </p>
      <ServicesAfterEffects className="grid grid-cols-2 grid-rows-none gap-[0.4rem]">
        {data?.subsection.images.map((item, index) => (
          <div
            className="relative h-[20rem] lg:h-[32rem] xxl:h-[52rem]"
           
            key={index}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="absolute object-cover"
            />
            <h2 className="absolute left-[20%] top-[50%] font-rubik text-[24px] font-semibold text-white xs:top-[20%] xs:text-[47.54px]">
              {item.type}
            </h2>
          </div>
        ))}
      </ServicesAfterEffects>
    </Wrapper>
  );
};

export default Miconeedling;
