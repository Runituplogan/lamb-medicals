import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesFAQ from "../../components/services-faq";
import { prpBreastRejuvenationFAQs } from "@/app/utils/data";

export default function PRPBreastRejuvenation() {
  return (
    <Wrapper
      id="prp-breast-rejuvenation"
      className="grid gap-[4rem] pt-20 md:pt-0"
    >
      <ServicesIntro
        title="PRP Breast Rejuvenation"
        description="At Lamb Medical, we are dedicated to offering innovative and personalized treatments that enhance both your physical appearance and overall well-being. The Vampire Wing Lift is one of our most unique procedures, designed to rejuvenate and enhance the labia majora, giving you a more youthful and revitalized appearance. This non-surgical treatment leverages the power of Platelet-Rich Plasma (PRP) to restore volume, improve texture, and boost your confidence."
      />
      <ServicesFAQ
        className="pt-[10rem]"
        title="PRP Breast Rejuvenation FAQs: Your questions answered"
        description="Curious about PRP Breast Rejuvenation? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={prpBreastRejuvenationFAQs}
      />
    </Wrapper>
  );
}
