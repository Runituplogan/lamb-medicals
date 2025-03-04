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
    <section data-aos="fade-up" className={className}>
      <hgroup
        className={`${align === "left" ? "" : "mx-auto"} flex md:w-[100rem] flex-col gap-[2rem] px-1 md:px-5 lg:px-0`}
      >
        <h4
          className={`${align === "left" ? "text-left" : "text-center"} text-grey-750 font-rubik text-[32px] md:text-[5.5rem] font-bold xs:leading-[5.5rem] tracking-[0.02em]`}
        >
          {title}
        </h4>
        <p
          className={`${align === "left" ? "text-left" : "text-center"} text-grey-750 font-work_sans text-[14px] xs:text-lg font-normal leading-[3.5rem] tracking-[1.24px]`}
        >
          {description}
        </p>
      </hgroup>

      <FAQ data={faqs} />
    </section>
  );
}
