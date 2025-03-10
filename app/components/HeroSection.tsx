import Link from "next/link";

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section
      className="relative h-screen bg-no-repeat xs:bg-top md:bg-cover flex flex-col xs:justify-center items-center mt-32 xs:mt-0"
      style={{ backgroundImage: `url(${data?.backgroundImage})` }}
    >
      {/* Background image for mobile view */}
      <img
        data-aos="fade-right"
        src={data?.backgroundImage}
        alt="memberships"
        className="absolute inset-0 h-screen object-cover object-center xs:hidden block"
      />
      <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-7 xs:mt-8 md:mt-0 md:py-10 py-20 justify-center text-center container max-w-[900px]">
        <h1
          data-aos="fade-up"
          className="xl:text-[70px] md:text-6xl xs:text-5xl text-[32px] text-white font-bold"
        >
          {data?.headerText}
        </h1>
        <p
          data-aos="fade-up"
          className="xl:text-lg text-white  leading-relaxed lg:block hidden w-[80%] text-center font-work_sans"
        >
          {data?.bodyText}
        </p>
        <p
          data-aos="fade-up"
          className="text-white md:text-center leading-loose block  text-center lg:hidden font-work_sans text-[16px]"
        >
          {data?.bodyText}
        </p>

        <div
          data-aos="fade-up"
          className="xs:flex hidden mx-auto self-center h-max justify-center items-center gap-5 mt-8 font-poppins font-semibold"
        >
          <Link href={'/schedule-online'}>
            <button className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 xs:text-base text-sm">
              {data?.buttonPrimaryText}
            </button>
          </Link>
        </div>

        <div
          data-aos="fade-up"
          className="w-full xs:hidden grid grid-cols-2 gap-5 mt-8 font-poppins font-semibold "
        >
          <Link href={data?.buttonPrimaryLink as string || ''}>
            <button className="text-white h-20 w-full rounded-md bg-primary transition hover:opacity-70">
              {data?.buttonPrimaryText}
            </button>
          </Link>
          <Link href={data?.buttonSecondaryLink as string || ''}>
            <button className="bg-white h-20 w-full rounded-md text-primary transition hover:opacity-70">
              {data?.buttonSecondaryText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
