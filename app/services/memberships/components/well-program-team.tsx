import Wrapper from "@/app/components/Wrapper";
import { wellProgramTeamCard } from "@/app/utils/data";
import WellProgramTeamCard from "./well-program-team-card";

export default function BeWellProgramTeam() {
  return (
    <Wrapper className="grid gap-[2rem] py-[6rem]">
      <h3 className="font-rubik text-[32px] xs:text-[6.4rem] font-semibold leading-[6rem] text-grey-200">
        The Be Well Team
      </h3>
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
        Lamb Medical is excited to welcome Mollie DeSimone, CRNP, to our care
        team with a focus on the Be Well program. With nearly a decade of
        experience in Bariatric Medicine and Family Medicine, Mollie joins our
        exceptional team, including Ellie Meehl, PA-C, and Colin Smith, CRNP,
        PMHNP-BC, under the leadership of Dr. Mary Lamb. Together, they are
        dedicated to helping you achieve your health and wellness goals.
      </p>

      <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-4 md:gap-1 gap-y-10">
        {wellProgramTeamCard.map((card) => (
          <WellProgramTeamCard key={card.id} card={card} />
        ))}
      </ul>
    </Wrapper>
  );
}
