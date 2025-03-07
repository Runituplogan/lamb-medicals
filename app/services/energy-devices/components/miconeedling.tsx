import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { miconeedlingFAQs } from "@/app/utils/data";
import { MicroneedlingType } from "../types/energyDevicesCustomType";
import ReactPlayer from "react-player";


interface MiconeedlingProps{
  data?:MicroneedlingType
}
const Miconeedling:React.FC<MiconeedlingProps>=({data})=> {
  return (
    <Wrapper id="microneedling" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
      <figure
        className="relative h-auto overflow-hidden rounded"
        data-aos="zoom-in"
      >
             <div className="w-full h-screen flex justify-center items-center">
              <ReactPlayer 
                url="https://youtube.com/shorts/au8LKlJfqxo?feature=share"
                controls
                width="100%"
                height="100%"
              />
            </div>
      </figure>
 
      <p
        className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[4rem] tracking-[0.02em] text-opacity-80"
        data-aos="fade-right"
      >
     {data?.subsection.bodyText}
      </p>
      <ServicesAfterEffects className="xs:grid-cols-2 ">
        {
          data?.subsection.images.map((item,index)=>
        <div
          className="relative col-span-1 xs:col-span-full xs:h-full"
          data-aos="fade-up"
          key={index}
        >
          <Image
            src={`${item.image}`}
            alt=""
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-3-mobile.png"
            alt="miconeedling-3"
            className="object-cover xs:hidden block"
          />
          <h2 className="font-semibold text-white absolute top-[50%] xs:top-[20%] left-[20%] text-[24px] xs:text-[47.54px] font-rubik">
           {item.type}
          </h2>
          {/* <h2 className="font-semibold text-white absolute top-[50%] xs:top-[20%] right-[20%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2> */}
        </div>
          )
        }
        {/* <div className="relative h-full" data-aos="fade-left">
          <Image
            src="/images/energy-devices/miconeedling-1.png"
            alt="miconeedling"
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-1-mobile.png"
            alt="miconeedling"
            className="object-cover"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[40%] xs:top-[20%] left-[45%] text-[24px] xs:text-[47.54px] font-rubik">
            Before
          </h2>
        </div> */}
        {/* <div className="relative h-full" data-aos="fade-right">
          <Image
            src="/images/energy-devices/miconeedling-2.png"
            alt="miconeedling"
            fill
            className="absolute object-cover inset-0 xs:block hidden"
          />
          <img
            src="/images/energy-devices/miconeedling-2-mobile.png"
            alt="miconeedling"
            className="object-cover inset-0"
          />
          <h2 className="xs:hidden block font-semibold text-white absolute top-[40%] xs:top-[45%] right-[45%] text-[24px] xs:text-[47.54px] font-rubik">
            After
          </h2>
        </div> */}
      </ServicesAfterEffects>
    </Wrapper>
  );
}

export default Miconeedling