"use client";
import Image from "next/image";
import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import Wrapper from "./components/Wrapper";
import FAQ from "./components/Templates/FAQ";
import Questions from "./components/Templates/Questions";
import MeetTheTeam from "./components/Templates/MeetTheTeam";
import OurServices from "./components/Templates/OurServices";
import { home_faq } from "./data/faq";
import ExperienceLamb from "./components/ExperienceLamb";
import WallOfLove from "./components/WallOfLove";
import { useHomePage } from "./contexts/homepageContext";
import Preloader from "./components/Preloader";
import { FaqSection, MeetTeamType } from "./about/types/aboutCustomTypes";
import { useEffect } from "react";

export default function Home() {
  const { homePageData } = useHomePage();

   const meta = homePageData?.meta
      ? JSON.parse(homePageData.meta)
      : {};
  
    useEffect(() => {
      if (meta.og_title) {
        document.title = meta.og_title;
      } else if (homePageData?.title) {
        document.title = homePageData.title;
      }
  
      if (meta.og_description) {
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute("content", meta.og_description);
      }
  
      if (meta.keywords) {
        document
          .querySelector('meta[name="keywords"]')
          ?.setAttribute("content", meta.keywords.join(", "));
      }
    }, [meta, homePageData]);

  // Ensure the main content exists before rendering
  if (  
    !homePageData ||
    !homePageData.content ||
    homePageData.content.length === 0 
  ) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = homePageData?.content?.find(
    (item: any) => item.type === "hero"
  );

  const section1: homepageSection1 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section1"
  );

  const section2: HomepageSection2 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section2"
  );

  const section3: OurServicesType | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section3"
  );

  const section4: MeetTeamType | undefined = homePageData?.content?.find(
    (item: any) => item.type === "Section4"
  );

  const section5: HomepageSection5 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section5"
  );

  const section6: FaqSection  | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section6"
  );

  const section7: HomepageSection7 | undefined = homePageData?.content?.find(
    (item: any) => item.type === "section7"
  );


  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <HeroSection data={heroData ?? { type: "hero" }} />

      {/* Empowering your look */}
      <Wrapper className="w-full px-5 py-16 sm:px-10 md:p-14">
        <div className="w-full max-w-[1500px] grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-32 2xl:gap-48">
          <div className="w-full my-auto">
            <h1
              data-aos="fade-up"
              className="text-black md:block hidden font-rubik font-semibold text-6xl leading-tight"
            >
              {section1?.headerText}
            </h1>
            <h1
              data-aos="fade-up"
              className="md:hidden block text-black font-rubik font-semibold text-[32px] md:text-3xl lg:text-4xl leading-snug"
            >
              {section1?.headerText}
            </h1>
            <p
              data-aos="fade-up"
              className="text-black mt-6 text-[14px] xs:text-lg lg:text-xl font-work_sans"
            >
              {section1?.bodyText}
            </p>
          </div>
          <div data-aos="fade-up">
            <Image
              src={section1?.image as string ?? "/test.png"}
              width={1000}
              height={1000}
              className="w-full h-full"
              alt="empowering"
              unoptimized
            />
          </div>
        </div>
      </Wrapper> 

      {/* Experience the lamb look */}
      <ExperienceLamb data={section2 ?? {type: 'section2'}}/>
      <OurServices/> 
      <MeetTheTeam/>
      <WallOfLove data={section5 }/>
      <Questions data={section6}/>
      <div id="more-faqs">
      <FAQ data={section6?.faqs} />
      </div>
      {/* <GetInTouch data={section7 ?? {type: 'section7'}}/> */}
    </section>
  );
}
