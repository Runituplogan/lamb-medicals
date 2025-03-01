import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import MeetTheTeam from "../components/Templates/MeetTheTeam";
// import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import AboutSection from "./_components/AboutHero";
import RedefineHealthCare from "./_components/RedefineHealthCare";
import BuilidngTrust from "./_components/BuilidngTrust";

export default function Page() {
  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <AboutSection />

      <BuilidngTrust />
      {/* <OurServices /> */}
      <RedefineHealthCare />
      <MeetTheTeam />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
