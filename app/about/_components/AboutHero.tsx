"use client";

import Link from "next/link";

interface AboutHeroSectionProps {
  data: HeroData;
}

const AboutSection: React.FC<AboutHeroSectionProps>  = ({data}) => {
  return (
    <section className="bg-about_hero_mbile px-4 xs:px-0 xs:bg-about_hero relative flex h-[90vh] xs:min-h-[106vh] bg-center bg-no-repeat bg-cover mt-28 xs:mt-0">
      <div className="relative z-10 mx-auto flex w-full md:w-[800px] lg:w-[1400px] flex-col items-center xs:justify-center gap-4 md:pl-28 pt-16 text-center sm:mt-8 md:mt-0 md:py-10 md:pt-0 lg:gap-7">
        <h1
         
          className="text-center text-[32px] font-semibold text-white sm:text-6xl md:text-7xl lg:text-[65px] font-rubik"
        >
          {data?.headerText}
        </h1>
        <p
         
          className="hidden w-[80%] text-center leading-relaxed text-white lg:block sm:text-lg lg:text-xl"
        >
          {/* At Lamb Medical, we're dedicated to providing expert care in
          aesthetics, wellness, and concierge medicine. Whether you're focused
          on rejuvenating your look or enhancing your overall well-being, our
          knowledgeable team is here to guide you every step of the way. */}
          {data?.bodyText}
        </p>
        <p
         
          className="block leading-loose text-white lg:hidden sm:text-lg  font-medium"
        >
          {/* At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve. */}
          {data?.bodyText}
        </p>

        <div
         
          className="mt-8 flex h-max items-center justify-center gap-6 font-poppins font-semibold md:justify-start md:gap-10"
        >
          <Link href="/schedule-online">
            <button className="h-20 rounded-md bg-primary px-20 xs:px-12 text-sm text-white transition hover:opacity-70 sm:text-md md:px-14">
              Schedule Online
              {/* {data?.buttonPrimaryText} */}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
