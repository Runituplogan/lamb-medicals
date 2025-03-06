import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import { BeWellProgramType } from "../types/membershipCustomType";

interface BeWellProgramProps{
  data?:BeWellProgramType
}
const BeWellProgram:React.FC<BeWellProgramProps>=({data})=> {
  return (
    <Wrapper id="well-program" className="grid gap-[4rem]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
    </Wrapper>
  );
}

export default BeWellProgram
