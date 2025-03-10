import Wrapper from "@/app/components/Wrapper";
import { CheckIcon } from "@/app/icons";
import { membershipsCard } from "@/app/utils/data";
import { AethesticsMembershipType } from "../types/membershipCustomType";

interface AethesticsMembershipProps {
  data?: AethesticsMembershipType;
}
const AethesticsMembership: React.FC<AethesticsMembershipProps> = ({
  data,
}) => {
  return (
    <Wrapper
      id="aesthetic-membership"
      className="flex w-full flex-col items-center gap-[4rem] py-[5rem]"
    >
      <h3 className="text-center font-rubik text-[32px] font-semibold leading-[4rem] text-grey-200 xs:text-[4.8rem] md:text-left">
        {data?.headerText}
      </h3>

      <ul className="mt-5 grid h-full items-stretch gap-[5rem] xs:gap-[4rem] md:grid-cols-2">
        {data?.levels.map((member, index) => (
          <li
            className="h-full rounded-[1.2rem] border border-primary p-[2rem] xs:w-[42rem]"
            key={index}
          >
            <h4 className="font-rubik text-[21px] font-semibold text-grey-200 xs:text-[3.2rem]">
              {member?.title}
            </h4>
            <p className="pb-[1.8rem] font-work_sans text-[16px] font-medium leading-[3rem] tracking-[0.02em] text-grey-750 xs:text-lg">
              {member?.description}
            </p>
            <ul className="flex flex-wrap items-center gap-x-[1rem] pb-[2.4rem] font-work_sans">
              {member.services.map((item, index) => (
                <li
                  className="flex items-center gap-4 text-[14px] font-semibold leading-[3rem] tracking-[0.02em] text-grey-750 xs:text-md"
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
              {member.packages.map((item, index) => (
                <li
                  className="grid grid-cols-[3rem_1fr] items-center gap-[1.2rem] font-rubik text-md font-medium text-primary"
                  key={index}
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
};
export default AethesticsMembership;
