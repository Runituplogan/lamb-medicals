import Wrapper from "@/app/components/Wrapper";
import { ourServices } from "@/app/utils/data";
import OurServicesCard from "./our-services-card";

export default function OurServices() {
  return (
    <section className="bg-primary-light py-[5rem]">
      <Wrapper className="grid gap-[2rem]">
        <hgroup className="grid gap-[2rem]" data-aos="fade-up">
          <h3 className="font-rubik text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
            Our Services
          </h3>
          <p className="grid md:w-[40%] gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
            The Be Well program offers a range of services designed to support
            your journey to better health and wellness.
          </p>
        </hgroup>

        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-[2rem]">
          {ourServices.map((service) => (
            <OurServicesCard key={service.id} service={service} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
