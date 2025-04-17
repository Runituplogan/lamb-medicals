import Link from "next/link";
import BookNowButton from "./book-now-button";
import { useRouter } from "next/navigation";

interface ServicesIntroProps {
  title: string;
  description: string | React.ReactNode;
  btnText?: string;
  btnLink?: string;
  btnStyle?: string;
}

export default function ServicesIntro({
  title,
  description,
  btnText = "Book Now",
  btnLink = `/schedule-online`,
}: ServicesIntroProps) {
  const router = useRouter();
  return (
    <section
      className="grid gap-[2rem] pt-[2rem] xl:gap-[2.4rem]"
     
    >
      <h3 className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-black xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]">
        {title}
      </h3>

      <div className="grid w-full gap-8  text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[3.5rem]">
        {description}
      </div>
      <BookNowButton
        className="w-fit place-self-start"
        onClick={() => router.push(btnLink)}
      >
        {btnText}
      </BookNowButton>
    </section>
  );
}

// className=" text-md font-normal leading-[2.8rem] tracking-[0.02em] text-opacity-80 lg:text-md lg:leading-[3.5rem]"
