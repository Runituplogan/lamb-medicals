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
    <Wrapper className="grid xl:grid-cols-[58rem_1fr] md:grid-rows-[38rem] items-start gap-20 xs:gap-[8rem] pb-[8rem] xs:pt-0 pt-10">
      <div className="flex w-full flex-col gap-[2.4rem] px-2">
        <h3
          className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[6.2rem] text-grey-200"
          data-aos="fade-right"
        >
          {data?.headerText}
        </h3>
        <p
          className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80"
          data-aos="fade-up"
        >
          {data?.bodyText}
        </p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] w-full">
        {data?.features?.map((feature, index) => (
            <article
              className="flex items-start gap-[0.8rem]"
              key={index}
              data-aos="fade-left"
            >
              <i className="block md:shrink-0 text-grey-300">
                <CheckIcon />
              </i>
              <div className="flex flex-col gap-[0.8rem]">
                <h6 className="font-rubik text-lg font-medium text-grey-200">
                  {feature?.title}
                </h6>
                <p className="font-work_sans text-base font-normal text-grey-200">
                  {feature?.bodyText}
                </p>
              </div>
            </article>
          )
        )}
      </ul>
    </Wrapper>
  );
}