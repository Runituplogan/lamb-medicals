import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import ServicesAfterEffects from "../../components/services-after-effects";
import ServicesFAQ from "../../components/services-faq";
import { sculptraFAQs } from "@/app/utils/data";
import { Section5 } from "../types/InjectableTreatmentType";

interface SculptraProps {
  data: Section5;
}

const Sculptra: React.FC<SculptraProps> = ({ data }) => {
  const testImges = [
    { image: "/images/37.png", type: "before" },
    { image: "/images/37.png", type: "after" },
    { image: "/images/37.png", type: "before" },
    { image: "/images/37.png", type: "after" },
  ];
  return (
    <Wrapper id="sculptra" className="grid gap-[4rem]">
      <ServicesIntro
        title={data?.headerText}
        description={data?.bodyText}
        btnText={data?.cta_button?.text}
        btnLink="/book-online"
      />
      <ServicesAfterEffects className="grid-cols-1 grid-rows-[50rem]">
        <div className="relative h-full col-span-full" data-aos="fade-right">
          <Image
            src={data?.image}
            alt=""
            fill
            className="absolute object-cover xs:block hidden"
            unoptimized
          />
          <img
            src={data?.image}
            alt="sculptra"
            className="xs:hidden block object-cover "
          />
        </div>
      </ServicesAfterEffects>
      <ServicesAfterEffects
        title={data?.subsection?.headerText}
        className="space-y-6 [&>figcaption]:text-left"
      >
        {testImges
          ?.reduce(
            (pairs, img, index, arr) => {
              if (img.type === "Before") {
                const afterImg = arr.find(
                  (item) => item.type === "After" && item !== img
                );
                if (afterImg) {
                  pairs.push([img, afterImg]);
                }
              }
              return pairs;
            },
            [] as { image: string; type: string }[][]
          )
          .map(([before, after], index) => (
            <div
              key={index}
              className="flex justify-center gap-4 border-2 border-red-500 p-2"
            >
              <div className="relative w-[45%] h-[60rem]">
                <Image
                  src={before.image}
                  alt="Before"
                  fill
                  className="absolute object-cover"
                  unoptimized
                />
              </div>
              <div className="relative w-[45%] h-[60rem]">
                <Image
                  src={after.image}
                  alt="After"
                  fill
                  className="absolute object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
      </ServicesAfterEffects>

      <ServicesFAQ
        title="Sculptra FAQs: Your questions answered"
        description="Curious about Sculptra? Get answers to common questions about how it works, what to expect, and how it can help you feel confident"
        faqs={sculptraFAQs}
      />
    </Wrapper>
  );
};

export default Sculptra;
