import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import { prpBreastRejuvenationFAQs } from "@/app/utils/data";
import { PRPFAQ, PRPType } from "../types/sexualWellnessCustomTypes";

interface PRPBreastRejuvenationProps{
  data?:PRPType,
  faqs?:PRPFAQ
}

const PRPBreastRejuvenation:React.FC<PRPBreastRejuvenationProps>=({data,faqs})=> {
  return (
    <Wrapper
      id="prp-breast-rejuvenation"
      className="grid gap-[4rem] pt-20 md:pt-0"
    >
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
      />
    <ServicesFAQ
        className="pt-[10rem]"
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
    />
    </Wrapper>
  );
}

export default PRPBreastRejuvenation