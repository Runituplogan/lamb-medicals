"use client";

import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import MeetTheTeam from "../components/Templates/MeetTheTeam";
import AboutSection from "./_components/AboutHero";
import RedefineHealthCare from "./_components/RedefineHealthCare";
import BuilidngTrust from "./_components/BuilidngTrust";
import { useAboutPage } from "../contexts/aboutPageContext";
import Preloader from "../components/Preloader";
import OurServices from "../components/Templates/OurServices";
import { useEffect } from "react";

export default function Page() {
  const { aboutPageData } = useAboutPage();

  const meta = aboutPageData?.meta
  ? JSON.parse(aboutPageData.meta)
  : {};

useEffect(() => {
  if (meta.og_title) {
    document.title = meta.og_title;
  } else if (aboutPageData?.title) {
    document.title = aboutPageData.title;
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
}, [meta, aboutPageData]);

    if (!aboutPageData || !aboutPageData.content || aboutPageData.content.length === 0) {
    return <Preloader />;
  }

  // Extract section data
  const heroData = aboutPageData.content.find((item: any) => item.type === "hero");
  const buildTrust = aboutPageData.content.find((item: any) => item.type === "section1");
  const redefinedHealthCare = aboutPageData.content.find((item: any) => item.type === "section2");
  const meetTheTeam = aboutPageData.content.find((item: any) => item.type === "section3");
  const faqSection = aboutPageData.content.find((item: any) => item.type === "section4");

  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <AboutSection data={heroData ?? { type: "hero" }} />
      <BuilidngTrust data={buildTrust ?? undefined} />
      <OurServices />
      <RedefineHealthCare data={redefinedHealthCare ?? undefined} />
      <MeetTheTeam />
      <Questions data={faqSection ?? undefined} />
      <div id="more-faqs">
        <FAQ data={faqSection?.faqs} />
      </div>
    </section>
  );
}
