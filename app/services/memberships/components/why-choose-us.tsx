import Wrapper from "@/app/components/Wrapper";
import { whyChooseUsCard } from "@/app/utils/data";
import { CheckIcon } from "@/app/icons";
import { SectionWithFeatures } from "../../weight-loss/types/weightLoss";
import { WhyChooseUsType } from "../types/membershipCustomType";

interface whyusProps {
  data: WhyChooseUsType;
}

export default function WhyChooseUs({ data }: whyusProps) {

  return (
    <Wrapper className=" items-start gap-[2.4rem] pb-[8rem] pt-10 grid xs:gap-[8rem] xs:pt-0 xl:grid-cols-[58rem_1fr]">
      <div className="flex w-full flex-col gap-[2.4rem] px-2">
        <h3
          className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-black xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]"
         
        >
          {data?.headerText}
        </h3>
        <p
          className=" text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]"
         
        >
          {data?.bodyText}
        </p>
      </div>
      <ul className="grid w-full grid-cols-1 gap-[2rem] lg:grid-cols-2">
        {data?.features?.map((feature, index) => (
          <article
            className="flex items-start gap-[0.8rem]"
            key={index}
           
          >
            <i className="block text-black md:shrink-0">
              <CheckIcon />
            </i>
            <div className="flex flex-col gap-[0.8rem]">
              <h6 className="font-rubik text-md font-medium text-black lg:text-lg">
                {feature?.title}
              </h6>
              <p className=" text-sm font-normal text-black lg:text-md">
                {feature?.bodyText}
              </p>
            </div>
          </article>
        ))}
      </ul>
    </Wrapper>
  );
}
