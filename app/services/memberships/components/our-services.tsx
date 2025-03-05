import Wrapper from "@/app/components/Wrapper";
import { ourServices } from "@/app/utils/data";
import OurServicesCard from "./our-services-card";
import { BeWellProgramServices } from "../types/membershipCustomType";
interface OurServicesProps{
  data?:BeWellProgramServices
}
const OurServices:React.FC<OurServicesProps>=({data}) =>{
  return (
    <section className="bg-primary-light py-[5rem]">
      <Wrapper className="grid gap-[2rem]">
        <hgroup className="grid gap-[2rem]" data-aos="fade-up">
          <h3 className="font-rubik text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
           {data?.headerText}
          </h3>
          <p className="grid md:w-[40%] gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
           {data?.bodyText}
          </p>
        </hgroup>

        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-[2rem]">
          {data?.services.map((service,index) => (
            <OurServicesCard key={index} service={service} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
export default OurServices