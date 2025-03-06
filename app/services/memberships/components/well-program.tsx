import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import { BaseSection, SectionWithCTA } from "../../weight-loss/types/weightLoss";

interface beWellProps {
  data: SectionWithCTA;
}

const BeWellProgram: React.FC<beWellProps> = ({ data }) => {
  return (
    <Wrapper id="well-program" className="grid gap-[4rem]">
      <ServicesIntro title={data?.headerText || ''} description={data?.bodyText} btnLink="/schedule-online"/>
    </Wrapper>
  );
};

export default BeWellProgram;
