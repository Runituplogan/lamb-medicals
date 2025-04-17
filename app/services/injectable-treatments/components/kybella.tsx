import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { kybellaFAQs } from "@/app/utils/data";
import { Section9 } from "../types/InjectableTreatmentType";
import { FAQsSection } from "../../medical-services/types/medical-services";

interface KybellaProps {
  data: Section9,
  question: FAQsSection
}

const Kybella:React.FC <KybellaProps> =({data, question}) => {
  return (
    <Wrapper id="kybella" className="grid py-6 gap-[4rem]">
      <ServicesIntro
        title="Kybella (Double chin)"
        description="Kybella is the first and only FDA approved injectable treatment of double chin. Kybella works by breaking down and destroyong the fat cells under the chin. Once they are destroyed, they will not return."
      />
      <ServicesAfterEffects className="xs:grid-cols-1 xs:grid-rows-[80rem]">
        <div
          className="relative h-full overflow-hidden rounded-md col-span-full"
         
        >
          <Image
            src="/images/injectable-treatments/Kybella.png"
            alt=""
            fill
            className="hidden xs:block absolute object-cover"
          />
          <img
            src="/images/injectable-treatments/Kybella.png"
            alt=""
            className="xs:hidden block object-cover"
          />
        </div>
      </ServicesAfterEffects>
      <ServicesFAQ
        title={question?.headerText}
        description={`${question?.textBody}`}
        faqs={question?.questions
        }
      />
    </Wrapper>
  );
}

export default Kybella
