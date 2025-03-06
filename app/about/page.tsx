"use client"
import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import MeetTheTeam from "../components/Templates/MeetTheTeam";
// import OurServices from "../components/Templates/OurServices"
import AboutSection from "./_components/AboutHero";
import RedefineHealthCare from "./_components/RedefineHealthCare";
import BuilidngTrust from "./_components/BuilidngTrust";
import { BuildTrustType, FaqSection, MeetTeamType, RefineHealthCareType } from "./types/aboutCustomTypes";
import { useAboutPage } from "../contexts/aboutPageContext";
import Preloader from "../components/Preloader";
import OurServices from "../components/Templates/OurServices";

export default function Page() {
  const { aboutPageData } = useAboutPage()
  if (!aboutPageData || !aboutPageData.content || aboutPageData.content.length === 0) {
    return <Preloader />;
  }

  const heroData: ContentItem | undefined = aboutPageData.content?.find(
    (item: any) => item.type === "hero"
  ); 

  const buildTrust: BuildTrustType | undefined = aboutPageData.content?.find(
    (item: any) => item.type === "section1"
  )
  const redefinedHealthCare: RefineHealthCareType | undefined = aboutPageData.content?.find(
    (item: any) => item.type === "section2"
  )
  const meetTheTeam: MeetTeamType | undefined = aboutPageData.content?.find(
    (item: any) => item.type === "section3"
  )
  const faqSection: FaqSection | undefined = aboutPageData.content?.find(
    (item: any) => item.type === "section4"
  )

  console.log({faqSection})

  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <AboutSection data={heroData ?? { type: "hero" }} />
      <BuilidngTrust data={buildTrust ?? undefined} />
      <OurServices />
      <RedefineHealthCare data={redefinedHealthCare ?? undefined} />
      <MeetTheTeam/>
      <Questions data={faqSection ?? undefined} />
      <FAQ data={faqSection?.faqs} />
      {/* <GetInTouch /> */}
    </section>
  );
}
