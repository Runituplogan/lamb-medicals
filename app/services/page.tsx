"use client";
import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import ServiceHeroSection from "./components/ServiceHero";
import { useServicePage } from "../contexts/services";
import Preloader from "../components/Preloader";
import { ButtonType, FaqSection } from "../about/types/aboutCustomTypes";
import { heroSection, ServicePageFaqs } from "./types/servicePageCustomTypes";
export default function Page() {
  const { servicePageData } = useServicePage();

  if (
    !servicePageData ||
    !servicePageData.content ||
    servicePageData.content.length === 0
  ) {
    return <Preloader />;
  }

  const heroData: heroSection | undefined = servicePageData.content.find(
    (item: any) => item.type === "hero",
  );
  const section2: FaqSection | undefined = servicePageData.content.find(
    (item: any) => item.type === "section2",
  );

  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <ServiceHeroSection data={heroData} />
      <div className="flex w-full flex-col items-center justify-center gap-16 bg-primary py-20 font-work_sans text-white md:flex-row md:gap-20 md:py-28 lg:gap-36 lg:py-36 xl:gap-48">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-lg font-bold sm:text-xl md:text-2xl lg:text-[36px]">
            {heroData?.information[0].BodyText}
          </p>
          <p className="text-base font-medium sm:text-lg md:text-[20px]">
            {heroData?.information[0].headerText}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-lg font-bold sm:text-xl md:text-2xl lg:text-[36px]">
            {heroData?.information[1].headerText}
          </p>
          <p className="text-base font-medium sm:text-lg md:text-[20px]">
            {heroData?.information[1].BodyText}
          </p>
        </div>
      </div>
      <div id="service-section">
        <OurServices />
      </div>
      <Questions data={section2} />
      <div id="more-faqs">
        <FAQ data={section2?.faqs} />
      </div>
      {/* <GetInTouch /> */}
    </section>
  );
}
