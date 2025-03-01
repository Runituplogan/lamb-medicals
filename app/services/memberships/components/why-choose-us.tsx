import Wrapper from "@/app/components/Wrapper";
import { whyChooseUsCard } from "@/app/utils/data";
import { CheckIcon } from "@/app/icons";

export default function WhyChooseUs() {
  return (
    <Wrapper className="grid xl:grid-cols-[58rem_1fr] md:grid-rows-[38rem] items-start gap-20 xs:gap-[8rem] pb-[8rem] xs:pt-0 pt-10">
      <div className="flex w-full flex-col gap-[2.4rem] px-2">
        <h3
          className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[6.2rem] text-grey-200"
          data-aos="fade-right"
        >
          Why Choose Our Virtual Wellness Program?
        </h3>
        <p
          className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80"
          data-aos="fade-up"
        >
          This isn’t just weight loss; it’s a complete lifestyle transformation
          that boosts your confidence, energy, and well-being. Experience a
          tailored, results-driven approach to wellness that aligns with your
          unique goals and helps you achieve lasting vitality and health
        </p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] w-full">
        {whyChooseUsCard.map((card) => (
          <article
            className="flex items-start gap-[0.8rem]"
            key={card.id}
            data-aos="fade-left"
          >
            <i className="block md:shrink-0 text-grey-300">
              <CheckIcon />
            </i>
            <div className="flex flex-col gap-[0.8rem]">
              <h6 className="font-rubik text-lg font-medium text-grey-200">
                {card.title}
              </h6>
              <p className="font-work_sans text-base font-normal text-grey-200">
                {card.content}
              </p>
            </div>
          </article>
        ))}
      </ul>
    </Wrapper>
  );
}
