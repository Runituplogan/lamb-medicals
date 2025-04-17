import { heroSection } from "@/app/services/types/servicePageCustomTypes";

interface heroSectionProps{
  data: heroSection
}

export default function Hero({data}: heroSectionProps) {
  return (
    <section className="bg-primary relative flex h-full min-h-screen">
      <img
        src="/blog-pattern.png"
        alt="pattern"
        className="absolute -right-[100px] md:-right-[400px] top-0 h-screen z-0"
      />
      <div className="relative md:mt-0 mt-72 z-10 flex w-full md:w-[800px] flex-col items-center md:justify-center md:items-start gap-4 pl-10 md:pl-28 lg:pl-40 lg:pt-36 xl:pl-64 pt-0 md:py-10 lg:gap-7">
        <h1
         
          className="md:w-[80%] text-left font-semibold text-white text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] font-rubik"
        >
         {data?.headerText}
        </h1>
        <p
         
          className="hidden text-left leading-relaxed text-white lg:block text-[12px] sm:text-lg lg:text-md "
        >
         {data?.bodyText}
        </p>
        <p
         
          className="block leading-loose text-white lg:hidden sm:text-lg  mt-4"
        >
          {data?.bodyText}
        </p>
      </div>
    </section>
  );
};