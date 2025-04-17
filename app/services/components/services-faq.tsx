import FAQ from "@/app/components/Templates/FAQ";
import { IFaq } from "@/app/data/faq";

interface ServicesFAQProps {
  title: string;
  description: string;
  faqs?: IFaq[];
  className?: string;
  align?: "left" | "center";
}

export default function ServicesFAQ({
  title,
  description,
  faqs,
  className,
  align = "center",
}: ServicesFAQProps) {
  return (
    <section className={className}>
      <hgroup
        className={`${align === "left" ? "" : "mx-auto"} pb-5 flex w-full flex-col gap-[2rem] px-1 md:px-5 lg:px-0 xxl:w-[100rem]`}
      >
        <h4
          className={`${align === "left" ? "text-left" : "text-center"} font-rubik text-[3.2rem] font-bold leading-[3.7rem] tracking-[0.02em] text-black md:text-[5.5rem] md:leading-[4.8rem] lg:leading-[5.5rem]`}
        >
          {title}
        </h4>
        <p
          className={`${align === "left" ? "text-left" : "text-center"} font-work_sans text-md font-normal leading-[2.4rem] tracking-[1.24px] text-black lg:text-lg lg:leading-[3.5rem]`}
        >
          {description}
        </p>
      </hgroup>

      <FAQ data={faqs}/>
    </section>
  );
}
