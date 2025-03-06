import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { PeelsType } from "../types/facialServicesCustomType";

interface PeelsProps{
  data?:PeelsType
}
const Peels:React.FC<PeelsProps>=({data})=> {
  console.log("stress",data?.subsections[0].image)
  return (
    <Wrapper id="peels" className="grid gap-[4rem]">
      {/* <ServicesIntro
        title="Peels - Chemical Peels"
        description="Chemical peels are a fast and effective way to exfoliate dry or damaged skin allowing new, smoother, healthier skin to surface. Your skin will gain a healthier and younger appearance. Peels help to minimize fine wrinkles, improve discoloration and age spots, and improve the overall texture of your skin. We understand that sometimes decision making is complicated, and we will help you choose the best option for your skin needs."
      /> */}
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`${data?.cta_button.link}`}
        btnText={`${data?.cta_button.text}`}
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded xs:block hidden"
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
        <li className="text-[32px] text-[#12121299]">
          <h2
            data-aos="fade-top"
            className="font-semibold text-[32px] md:text-[47.06px] font-rubik"
          >
           {data?.subsections[0].title}
          </h2>
        </li>
      </ul>

      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-4">
      {data?.subsections[0].bodyText}
      </p>

      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded"
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
          src={data?.subsections[0].image??'https://api.ourtestingdomain.site/storage/uploads/ijXalrZ4LI89Q9XW836gDs5kBz5gSYEyeVDil3gO.png'}
          alt="Vi peel image"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>

      <ul className="w-full list-disc pl-14 md:px-10">
        <li className="text-[32px] text-[#12121299]">
          <h2
            data-aos="fade-top"
            className="font-semibold text-[32px] md:text-[47.06px] font-rubik"
          >
            {data?.subsections[1].title}
          </h2>
        </li>
      </ul>
      <p className="text-grey-750 font-work_sans text-[14px] xs:text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-4">
      {data?.subsections[1].bodyText}
      </p>
      <figure
        className="relative xs:h-[62.3rem] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src={`${data?.subsections[1].image}`}
          alt=""
          role="presentation"
          fill
          className="object-cover hidden md:block"
        />
      </figure>
    </Wrapper>
  );
}

export default Peels