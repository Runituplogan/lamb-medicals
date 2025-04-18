import Link from "next/link";

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section
      className="relative h-screen bg-no-repeat xs:bg-top md:bg-cover flex flex-col xs:justify-center items-center"
      style={{ backgroundImage: `url(${data?.backgroundImage})` }}
    >
      {/* Background image for mobile view */}
      <img
       
        src={data?.backgroundImage}
        alt="memberships"
        className="absolute inset-0 h-screen object-cover object-center xs:hidden block"
      />
      <div className="relative h-full z-10 flex flex-col items-center gap-4 lg:gap-7 xs:mt-8 md:mt-0 md:py-10 py-20 justify-center text-center container max-w-[900px]">
        <h1
         
          className="xl:text-[70px] md:text-6xl xs:text-5xl text-[32px] text-white font-bold"
        >
          {data?.headerText}
        </h1>
        <p
         
          className="xl:text-lg text-white  leading-relaxed lg:block hidden w-[80%] text-center "
        >
          {data?.bodyText}
        </p>
        <p
         
          className="text-white md:text-center leading-loose block  text-center lg:hidden  text-md"
        >
          {data?.bodyText}
        </p>

        <div
         
          className="xs:flex hidden mx-auto self-center h-max justify-center items-center gap-5 mt-8 font-poppins font-semibold"
        >
          <Link href={'/schedule-online'}>
            <button className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 xs:text-md text-sm">
              {data?.buttonPrimaryText}
            </button>
          </Link>
        </div>

        <div
         
          className="w-full mx-auto xs:hidden mt-8 font-poppins font-semibold "
        >
          <Link href={'/schedule-online'}>
            <button className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 xs:text-md text-sm">
              {data?.buttonPrimaryText}
            </button>
          </Link>
          {/* <Link href={data?.buttonSecondaryLink as string || ''}>
            <button className="bg-white h-20 w-full rounded-md text-black transition hover:opacity-70">
              {data?.buttonSecondaryText}
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
