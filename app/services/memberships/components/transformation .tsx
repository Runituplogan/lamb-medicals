import Wrapper from "@/app/components/Wrapper";
import BookNowButton from "../../components/book-now-button";
import Image from "next/image";

export default function Transformation() {
  return (
    <Wrapper className="grid w-full lg:grid-cols-[58rem_1fr] xs:gap-[8rem] pb-[10rem]">
      <div className="flex w-full flex-col gap-[2.4rem]">
        <h3
          className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[6.2rem] text-grey-200"
          data-aos="fade-right"
        >
          Take the first step toward your transformation today
        </h3>
        <p
          className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80"
          data-aos="fade-up"
        >
          Schedule your virtual consultation and discover the possibilities! For
          those considering membership, please send an email indicating your
          interest through our “Get in Touch” form below
        </p>
        <BookNowButton
          className="self-start hidden xs:block"
          data-aos="fade-up"
        >
          Get Touch
        </BookNowButton>
      </div>

      <figure
        className="relative xs:flex lg:size-full xl:justify-end"
        data-aos="fade-left"
      >
        <div
          className="relative flex h-full lg:w-[45rem] w-full"
          data-aos="fade-left"
        >
          <Image
            src="/images/weight-loss/visual-consultation-2.png"
            alt="visual consultation"
            fill
            className="xs:block hidden"
          />
          <img
            src="/images/weight-loss/visual-consultation-2-mobile.png"
            alt="visual-consultation-2-mobile"
            className="block xs:hidden mt-16"
          />
        </div>
       
      </figure>
    </Wrapper>
  );
}
