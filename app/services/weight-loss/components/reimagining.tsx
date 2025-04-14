import Wrapper from "@/app/components/Wrapper";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import Image from "next/image";
import ServicesFAQ from "../../components/services-faq";
import { aviClearFAQs } from "@/app/utils/data";
import {
  ReImagingFAQ,
  ReImagingType,
} from "../../memberships/types/membershipCustomType";
import BeforeAfter from "@/app/components/BeforeandAfter";

interface ReImagingProps {
  data?: ReImagingType;
  faqs?: ReImagingFAQ;
}

const ReImaging: React.FC<ReImagingProps> = ({ data, faqs }) => {
  console.log({ data });

  const imagesArr = [
    "/images/memberships/1.png",
    "/images/memberships/2.png",
    "/images/memberships/3.png",
    "/images/memberships/4.png",
  ];

  return (
    <Wrapper className="grid gap-[4rem]">
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[56rem] gap-[4rem]">
        <div className="relative xs:h-full col-span-full" data-aos="fade-left">
          <Image
            src={`${data?.image}`}
            alt="reimaging"
            fill
            role="presentation"
            className="absolute object-top xs:block hidden"
            unoptimized
          />
          <img
            src={`${data?.image}`}
            alt="reimaging"
            role="presentation"
            className="block xs:hidden object-top"
          />
        </div>
      </ServicesAfterEffects>
      <section className="grid gap-6 py-[2rem] text-center" data-aos="fade-up">
        <h3 className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[4rem] text-black">
          {data?.headerText}
        </h3>
        <p className="mx-auto grid xs:w-[80%] gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-black opacity-80">
          {data?.bodyText}
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-5">
        {imagesArr?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Image ${index + 1}`}
            className={`w-full sm:w-[48%] md:w-[30%] lg:w-[23%] object-cover rounded-lg`}
          />
        ))}
      </div>

      <ServicesFAQ
        title={`${faqs?.headerText}`}
        description={`${faqs?.bodyText}`}
        faqs={faqs?.faqs}
      />
    </Wrapper>
  );
};
export default ReImaging;
