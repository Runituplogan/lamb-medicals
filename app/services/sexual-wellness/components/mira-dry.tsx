import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { MiraDryFAQ, MiraDryType } from "../types/sexualWellnessCustomTypes";

interface MiraDryProps {
  data?: MiraDryType;
  faqs?: MiraDryFAQ;
}
const MiraDry: React.FC<MiraDryProps> = ({ data, faqs }) => {
  return (
    <Wrapper id="mira-dry" className="grid gap-[2.5em]">
      <ServicesIntro
        title={`${data?.headerText}`}
        description={
          <span>
            {data?.bodyText}
            {/* miraDry is the only{" "}
            <span className=" font-bold text-black">
              FDA-approved{" "}
            </span>
            treatment for permanent reduction of underarm sweat, odor, and hair.
            Ideal for those with hyperhidrosis or anyone wanting to avoid harsh
            deodorants, miraDry delivers immediate results—you’ll leave your
            appointment sweat- and odor-free. With a{" "}
            <span className=" font-bold text-black">90% </span> 
            ‘Worth It’ rating on realself.com, most patients are thrilled after
            just one treatment. */}
          </span>
        }
      />

      <ServicesAfterEffects className="grid-cols-1 mb-[6rem] xs:grid-rows-[52rem]">
        <div className="relative col-span-full h-full">
          <Image
            src={`${data?.image}`}
            width={1000}
            height={1000}
            alt="mira dry"
            className="w-full object-cover object-top"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
};

export default MiraDry;
