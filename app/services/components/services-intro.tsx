import BookNowButton from "./book-now-button";

interface ServicesIntroProps {
  title: string;
  description: string | React.ReactNode;
}

export default function ServicesIntro({
  title,
  description,
}: ServicesIntroProps) {
  return (
    <section className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
      <h3 className="font-rubik text-[32px] xs:text-[5.8rem] font-semibold leading-[6rem] text-grey-200">
        {title}
      </h3>

      <div className="grid gap-8 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
        {description}
      </div>
      <BookNowButton>Book Now</BookNowButton>
    </section>
  );
}
