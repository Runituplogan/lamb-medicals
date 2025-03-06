import Link from "next/link";
import BookNowButton from "./book-now-button";

interface ServicesIntroProps {
  title: string;
  description: string | React.ReactNode;
  btnText?:string,
  btnLink?:string,
  btnStyle?:string,
}

export default function ServicesIntro({
  title,
  description,
  btnText='Book Now',
  btnLink = `/schedule-online`,
}: ServicesIntroProps) {
  return (
    <section className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
      <h3 className="font-rubik text-[32px] xs:text-[5.8rem] font-semibold leading-[6rem] text-grey-200">
        {title}
      </h3>

      <div className="grid gap-8  font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
        {description}
      </div>
      <Link href={`${btnLink}`} className="pt-2">
      <BookNowButton>{btnText}</BookNowButton>
      </Link>
    </section>
  );
}
