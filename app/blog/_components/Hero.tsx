const Hero = () => {
  return (
    <section className="bg-primary relative flex h-full min-h-screen">
      <img
        src="/blog-pattern.png"
        alt="pattern"
        className="absolute -right-[100px] md:-right-[400px] top-0 h-screen z-0"
      />
      <div className="relative md:mt-0 mt-72 z-10 flex w-full md:w-[800px] flex-col items-center md:justify-center md:items-start gap-4 pl-10 md:pl-28 lg:pl-40 lg:pt-36 xl:pl-64 pt-0 md:py-10 lg:gap-7">
        <h1
          data-aos="fade-up"
          className="md:w-[80%] text-left font-semibold text-white text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] font-rubik"
        >
          Stay updated with Lamb Medical
        </h1>
        <p
          data-aos="fade-up"
          className="hidden text-left leading-relaxed text-white lg:block text-[14px] sm:text-lg lg:text-[18px] font-work_sans"
        >
          Stay informed and empowered with the latest tips, trends, and expert
          advice in health and wellness.
        </p>
        <p
          data-aos="fade-up"
          className="block leading-loose text-white lg:hidden sm:text-lg font-work_sans mt-4"
        >
          Stay informed and empowered with the latest tips, trends, and expert
          advice in health and wellness.
        </p>
      </div>
    </section>
  );
};

export default Hero;
