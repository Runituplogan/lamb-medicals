import Wrapper from "@/app/components/Wrapper";
import { BeWellProgramServices } from "../types/membershipCustomType";
import {
  ClockIcon,
  DropIcon,
  EmptyFaceIcon,
  FaceIcon,
  HealthIcon,
  LoveIcon,
  LoveSignalIcon,
  PlusIcon,
  SkincareIcon,
  StarIcon,
} from "../../../icons";

interface OurServicesProps {
  data?: BeWellProgramServices;
}

const OurServices: React.FC<OurServicesProps> = ({ data }) => {
  const icons = [
    ClockIcon,
    DropIcon,
    EmptyFaceIcon,
    FaceIcon,
    HealthIcon,
    LoveIcon,
    LoveSignalIcon,
    PlusIcon,
    SkincareIcon,
    StarIcon,
  ];

  return (
    <section className="bg-primary-light py-[5rem]">
      <Wrapper className="grid gap-[2rem]">
        <hgroup className="grid gap-[2rem]">
          <h3 className="font-rubik text-[3.2rem] font-semibold text-black xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4rem] xl:leading-[4rem]">
            {data?.headerText}
          </h3>
          <p className="w-full  text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg  xxl:text-md xxl:leading-[4.5rem]">
            {data?.bodyText}
          </p>
        </hgroup>

        <ul className="grid grid-cols-1 gap-[2rem] xs:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
          {data?.services?.map((service, index) => {
            const Icon = icons[index % icons.length] || StarIcon; // Default to StarIcon if none available

            return (
              <article
                className="grid gap-[2rem] rounded-md bg-white p-[2.4rem]"
               
                key={index}
              >
                <hgroup className="flex items-center gap-[1.2rem]">
                  <i className="inline-flex size-[4rem] items-center justify-center rounded-md bg-primary">
                    <Icon />
                  </i>
                  {service?.title.startsWith("(coming soon!)") && (
                    <span className="font-semibold">(coming soon!)</span>
                  )}
                </hgroup>
                <p className="text-md md:h-[11rem] tracking-[0.02em] text-black">
                  {service?.title.replace("(coming soon!)", "")}
                </p>
              </article>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
};

export default OurServices;
