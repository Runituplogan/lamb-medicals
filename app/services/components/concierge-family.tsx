import Wrapper from "@/app/components/Wrapper";
import { CheckIcon } from "@/app/icons";
import { conciergeItems } from "@/app/utils/data";
import { ConciergeFamilyType } from "../memberships/types/membershipCustomType";

interface ConciergeFamilyProps {
  data?: ConciergeFamilyType;
}
const ConciergeFamily: React.FC<ConciergeFamilyProps> = ({ data }) => {
  return (
    <section id="concierge-medicine" className="bg-primary">
      <Wrapper className="grid place-content-center gap-[2rem] py-[4rem] text-center md:py-[7rem]">
        <h3
          className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-white xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]"
         
        >
          {data?.headerText}
        </h3>

        <p
          className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-white opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]"
         
        >
          {data?.bodyText}
        </p>

        <ul
          className="mx-auto grid w-full gap-[2rem] gap-y-[2.4rem] py-[2rem] md:grid-cols-2 lg:gap-[3rem] xxl:gap-x-[10rem] xxl:gap-y-[4rem]"
         
        >
          {data?.features?.map((item, index) => (
            <li className="flex items-center gap-[1rem]" key={index}>
              <i className="flex size-[2.2rem] shrink-0 items-center justify-center rounded-full bg-white text-black xs:size-[3.2rem]">
                <CheckIcon />
              </i>
              <span className="text-left font-rubik text-md font-medium leading-[2rem] text-white xs:text-lg xl:text-start">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default ConciergeFamily;
