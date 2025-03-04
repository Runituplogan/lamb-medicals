import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import ServiceHeroSection from "./components/ServiceHero";

export default function Page() {
  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <ServiceHeroSection />
      <div className="w-full font-work_sans bg-primary flex md:flex-row flex-col justify-center items-center gap-16 md:gap-20 lg:gap-36 xl:gap-48 text-white py-20 md:py-28 lg:py-36">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[36px]">
            Monday - Friday (9am - 5pm)
          </p>
          <p className="font-medium text-base sm:text-lg md:text-[20px]">
            Operation Hours
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[36px]">
            Over 20+ Services
          </p>
          <p className="font-medium text-base sm:text-lg md:text-[20px]">
            Treatments Provided
          </p>
        </div>
      </div> 
      <OurServices />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
