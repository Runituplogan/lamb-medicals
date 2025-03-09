import Image from "next/image";

interface ServicesHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServicesHero({
  title,
  description,
  image,
}: ServicesHeroProps) {
  return (
<section className="h-[100vh] flex flex-col justify-center items-center gap-[4rem] pt-[8rem] md:grid md:grid-cols-2 md:bg-primary xl:gap-[8.2rem] xxl:h-[100vh]">
      <div
        className="relative z-10 size-full before:absolute before:z-20 before:size-full before:bg-gradient-1 md:before:static md:before:bg-transparent"
        data-aos="fade-right"
      >
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="absolute object-cover object-center"
        />
      </div>
      <div className="absolute z-30 grid gap-[1.8rem] px-[1.6rem] text-center text-white md:static md:pl-0 md:text-left lg:pr-[2.4rem] xxl:w-[65rem] xxl:gap-[2.4rem] xxl:pr-[4rem]">
        <h2
          className="font-rubik text-4xl font-semibold leading-[3.7rem] sm:text-[4.4rem] lg:text-[5.2rem] lg:leading-[7rem] xxl:text-10xl"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="font-work_sans text-base font-normal leading-[2.8rem] tracking-[0.02em] text-opacity-80 lg:text-md lg:leading-[3.5rem]"
          data-aos="fade-left"
        >
          {description}
        </p>
      </div>
    </section>
  );
}
