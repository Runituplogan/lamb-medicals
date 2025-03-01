import Wrapper from "@/app/components/Wrapper";
import { CheckIcon } from "@/app/icons";
import { membershipsCard } from "@/app/utils/data";

export default function AethesticsMembership() {
  return (
    <Wrapper className="flex flex-col items-center gap-[4rem] py-[5rem] w-full">
      <h3 className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[4rem] text-grey-200 text-center md:text-left">
        Lamb Aesthetic Membership
      </h3>

      <ul className="grid h-full md:grid-cols-2 items-stretch gap-[5rem] xs:gap-[4rem] mt-5">
        {membershipsCard.map((member) => (
          <li
            className="h-full xs:w-[42rem] rounded-[1.2rem] border border-primary p-[2rem]"
            key={member.level}
          >
            <h4 className="font-rubik text-[21px] xs:text-[3.2rem] font-semibold text-grey-200">
              Level {member.level}
            </h4>
            <p className="pb-[1.8rem] text-[16px] font-work_sans xs:text-lg font-medium leading-[3rem] tracking-[0.02em] text-grey-750">
              {member.title}
            </p>
            <ul className="flex flex-wrap items-center gap-x-[1rem] pb-[2.4rem] font-work_sans">
              {member.service.map((item, index) => (
                <li
                  className="flex items-center gap-4 text-[14px] xs:text-md font-semibold leading-[3rem] tracking-[0.02em] text-grey-750"
                  key={index}
                >
                  <i className="block shrink-0 text-black">
                    <CheckIcon />
                  </i>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="grid gap-[3.2rem]">
              {member.benefits.map((item) => (
                <li
                  className="grid grid-cols-[3rem_1fr] items-center gap-[1.2rem] font-rubik text-md font-medium text-primary"
                  key={item}
                >
                  <i className="flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-primary text-[#fff]">
                    <CheckIcon />
                  </i>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
