import Wrapper from "@/app/components/Wrapper";
import { whyChooseUsCard } from "@/app/utils/data";
import { CheckIcon } from "@/app/icons";
import { SectionWithFeatures } from "../../weight-loss/types/weightLoss";
import { WhyChooseUsType } from "../types/membershipCustomType";

interface whyusProps {
  data: WhyChooseUsType;
}

export default function WhyChooseUs({ data }: whyusProps) {
  console.log({ data });
  return (
    <Wrapper className="grid items-start gap-[2.4rem] pb-[8rem] pt-10 xs:gap-[8rem] xs:pt-0 md:grid-rows-[38rem] xl:grid-cols-[58rem_1fr]">
      <div className="flex w-full flex-col gap-[2.4rem] px-2">
        <h3
          className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-grey-200 xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]"
          data-aos="fade-right"
        >
          {data?.headerText}
        </h3>
        <p
          className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]"
          data-aos="fade-up"
        >
          {data?.bodyText}
        </p>
      </div>
      <ul className="grid w-full grid-cols-1 gap-[2rem] lg:grid-cols-2">
        {data?.features?.map((feature, index) => (
          <article
            className="flex items-start gap-[0.8rem]"
            key={index}
            data-aos="fade-left"
          >
            <i className="block text-grey-300 md:shrink-0">
              <CheckIcon />
            </i>
            <div className="flex flex-col gap-[0.8rem]">
              <h6 className="font-rubik text-base font-medium text-grey-200 lg:text-lg">
                {feature?.title}
              </h6>
              <p className="font-work_sans text-sm font-normal text-grey-200 lg:text-base">
                {feature?.bodyText}
              </p>
            </div>
          </article>
        ))}
      </ul>
    </Wrapper>
  );
}
