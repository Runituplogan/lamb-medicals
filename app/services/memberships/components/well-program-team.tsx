import Wrapper from "@/app/components/Wrapper";
import { wellProgramTeamCard } from "@/app/utils/data";
import WellProgramTeamCard from "./well-program-team-card";
import { BeWellProgramTeamType } from "../types/membershipCustomType";

interface BeWellProgramTeamProps {
  data?: BeWellProgramTeamType;
}
const BeWellProgramTeam: React.FC<BeWellProgramTeamProps> = ({ data }) => {
  return (
    <Wrapper className="grid gap-[1.4rem] py-[6rem] xl:gap-[2rem]">
      <h3 className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-black xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]">
        {data?.headerText}
      </h3>
      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-black opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.bodyText}
      </p>

      <ul className="grid grid-cols-1 gap-10 gap-y-10 xs:grid-cols-2 xs:gap-4 md:gap-1 lg:grid-cols-4">
        {data?.teamMembers?.map((card: any, index) => (
          <WellProgramTeamCard key={index} card={card} />
        ))}
      </ul>
    </Wrapper>
  );
};
export default BeWellProgramTeam;
