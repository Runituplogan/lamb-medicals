import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative xs:bg-home_hero h-screen bg-no-repeat xs:bg-top md:bg-cover flex flex-col xs:justify-center items-center mt-32 xs:mt-0">
      {/* Background image for mobile view */}
      <img
        data-aos="fade-right"
        src="/images/landing/1_mobile.png"
        alt="memberships"
        className="absolute inset-0 h-screen object-cover object-center xs:hidden block"
      />
      <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-7 xs:mt-8 md:mt-0 md:py-10 py-20 justify-center text-center container max-w-[900px]">
        <h1
          data-aos="fade-up"
          className="xl:text-[70px] md:text-6xl xs:text-5xl text-[32px] text-white font-bold"
        >
          Lamb Medical Aesthetics
        </h1>
        <p
          data-aos="fade-up"
          className="xl:text-lg text-white leading-relaxed lg:block hidden w-[80%] text-center font-work_sans"
        >
          At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve.
        </p>
        <p
          data-aos="fade-up"
          className="text-white leading-loose block lg:hidden text-left font-work_sans text-[16px]"
        >
          At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve.
        </p>

        <div
          data-aos="fade-up"
          className="xs:flex hidden mx-auto self-center h-max justify-center items-center gap-5 mt-8 font-poppins font-semibold"
        >
          <Link href="#">
            <button className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 xs:text-base text-sm">
              Gift Cards
            </button>
          </Link>
          <Link href="#">
            <button className="bg-white h-20 px-12 md:px-14 rounded-md text-primary transition hover:opacity-70 xs:text-base text-sm">
              Services
            </button>
          </Link>
        </div>

        <div
          data-aos="fade-up"
          className="w-full xs:hidden grid grid-cols-2 gap-5 mt-8 font-poppins font-semibold "
        >
          <Link href="#">
            <button className="text-white h-20 w-full rounded-md bg-primary transition hover:opacity-70">
              Gift Cards
            </button>
          </Link>
          <Link href="#">
            <button className="bg-white h-20 w-full rounded-md text-primary transition hover:opacity-70">
              Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
