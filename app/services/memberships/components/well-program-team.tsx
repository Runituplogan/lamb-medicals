import Wrapper from "@/app/components/Wrapper";
import { wellProgramTeamCard } from "@/app/utils/data";
import WellProgramTeamCard from "./well-program-team-card";
import { BeWellProgramTeamType } from "../types/membershipCustomType";


interface BeWellProgramTeamProps{
  data?:BeWellProgramTeamType
}
const BeWellProgramTeam:React.FC<BeWellProgramTeamProps>=({data}) =>{
  console.log({bewell: data})
  return (
    <Wrapper className="grid gap-[2rem] py-[6rem]">
      <h3 className="font-rubik text-[32px] xs:text-[6.4rem] font-semibold leading-[6rem] text-grey-200">
        {data?.headerText}
      </h3> 
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
        {data?.bodyText}
      </p>

      <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-4 md:gap-1 gap-y-10">
        {data?.team_members?.map((card: any, index) => (
          <WellProgramTeamCard key={index} card={card} />
        ))}
      </ul>
    </Wrapper>
  );
}
export default BeWellProgramTeam
