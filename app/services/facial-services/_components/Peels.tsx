import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { PeelsType } from "../types/facialServicesCustomType";

interface PeelsProps {
  data?: PeelsType;
}
const Peels: React.FC<PeelsProps> = ({ data }) => {
  console.log("stress", data?.subsections[0].image);
  return (
    <Wrapper id="peels" className="grid gap-[4rem] ">
      {/* <ServicesIntro
        title="Peels - Chemical Peels"
        description="Chemical peels are a fast and effective way to exfoliate dry or damaged skin allowing new, smoother, healthier skin to surface. Your skin will gain a healthier and younger appearance. Peels help to minimize fine wrinkles, improve discoloration and age spots, and improve the overall texture of your skin. We understand that sometimes decision making is complicated, and we will help you choose the best option for your skin needs."
      /> */}
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={ '/schedule-online'}
        btnText={`${data?.cta_button.text}`}
      />
      <figure
          className="relative h-[62.3rem] max-h-[400px] sm:max-h-[1200px] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/facial-services/chemical-peel.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        /> */}
        <Image
          src={`${data?.image}`}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      {/* <img
        data-aos="zoom-in"
        src="/images/facial-services/chemical-peel-mobile.png"
        alt="chemical-peel"
        className="object-cover xs:hidden block"
      /> */}

      <ul className="w-full list-disc pl-14 md:px-10">
        <li className="text-[32px] text-black">
          <h2
            data-aos="fade-top"
            className="font-rubik text-[32px] font-semibold md:text-[47.06px]"
          >
            {data?.subsections[0].title}
          </h2>
        </li>
      </ul>

      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-black text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.subsections[0].bodyText}
      </p>

      <figure
            className="relative h-[62.3rem] max-h-[400px] sm:max-h-[1200px] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/facial-services/vi-peels.png"
          alt=""
          role="presentation"
          fill
          className="object-cover hidden md:block"
        /> */}
        <Image
          src={
            data?.subsections[0].image ??
            "https://api.ourtestingdomain.site/storage/uploads/ijXalrZ4LI89Q9XW836gDs5kBz5gSYEyeVDil3gO.png"
          }
          alt="Vi peel image"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>

      <ul className="w-full list-disc pl-14 md:px-10">
        <li className="text-[32px] text-black">
          <h2
            data-aos="fade-top"
            className="font-rubik text-[32px] font-semibold md:text-[47.06px]"
          >
            {data?.subsections[1].title}
          </h2>
        </li>
      </ul>
      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-black text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.subsections[1].bodyText}
      </p>
      <figure
           className="relative h-[62.3rem] max-h-[400px] sm:max-h-[1200px] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src={`${data?.subsections[1].image}`}
          alt=""
          role="presentation"
          fill
          className=" object-cover"
        />
      </figure>
    </Wrapper>
  );
};

export default Peels;
