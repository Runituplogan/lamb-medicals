import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { EllebanaLashLiftType } from "../types/facialServicesCustomType";

interface EllebanaLashListProps {
  data?: EllebanaLashLiftType;
}
const EllebanaLashList: React.FC<EllebanaLashListProps> = ({ data }) => {
  console.log(data?.image);
  return (
    <Wrapper id="ellebana-lash-lift" className="grid gap-[4rem] pb-16">
      {/* <ServicesIntro
        title="Ellebana Lash Lift"
        description="With our re-gen formula boasting amino acids, peptides, and plant based ingredients; Elleebana Lash Lift strengthens, nourishes, and protects lashes. Elleebana Lash Lift provides a sensational, natural enhancement to your eyelashes.   "
      /> */}
      <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`/schedule-online`}
        btnText={`${data?.cta_button.text}`}
      />
      <figure
        className="relative hidden h-[62.3rem] overflow-hidden rounded md:block"
        data-aos="zoom-in"
      >
        {/* <Image
          src="/images/facial-services/ellana.png"
          alt="ellana"
          role="presentation"
          fill
          className="object-cover"
        /> */}
        <Image
          src={`${data?.image}`}
          alt="ellana"
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>
      {/* <img
        data-aos="zoom-in"
        src="/images/facial-services/ellana-mobile.png"
        alt="ellana lash lift"
        className="object-cover md:hidden block"
      /> */}
      <div className="w-full space-y-[2rem]">
        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[3.2rem] font-semibold leading-[2.4rem] text-grey-200 xs:text-[4rem] lg:text-[5.8rem] lg:leading-[3.2rem] xl:leading-[6rem]">
            {data?.subsections[0].title}
          </h3>

          <div className="grid w-full gap-8 font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
            {data?.subsections[0].bodyText}
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[3.2rem] font-semibold leading-[2.4rem] text-grey-200 xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]">
            {data?.subsections[1].title}
          </h3>

          <div className="grid w-full gap-8 font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 text-opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
            {data?.subsections[1].bodyText}
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[3.2rem] font-semibold leading-[6rem] text-grey-200 xs:text-[46.57px]">
            {data?.subsections[2].title}
          </h3>

          <div className="grid w-full gap-8 font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
            {data?.subsections[2].bodyText}
          </div>
        </div>
      </div>
      <div className="py-16">
        <h3 className="w-full font-rubik text-[3.2rem] font-semibold leading-[6rem] text-grey-200 xs:text-[4rem] md:text-center">
          {data?.before_and_after[0].title}
        </h3>

        <div className="mt-16 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {data?.before_and_after[0].images.map((item, index) => (
            <div className="relative" key={index}>
              <h2 className="absolute right-[50%] top-10 z-10 text-[3.2rem] font-semibold text-white xs:text-[47.54px]">
                {item.type}
              </h2>

              <img
                src={`${item?.image}`}
                alt="eye-before"
                className="object-cover"
                data-aos="zoom-in"
              />
            </div>
          ))}

          {/* <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[3.2rem] z-10">
              After
            </h2>
            <img
              src="/images/facial-services/eye-after-1.png"
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div> */}

          {/* <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[3.2rem] z-10">
              Before
            </h2>
            <img
              src="/images/facial-services/eye-before-2.png"
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div> */}

          {/* <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[3.2rem] z-10">
              After
            </h2>
            <img
              data-aos="zoom-in"
              src="/images/facial-services/eye-after-2.png"
              alt="eye-before"
              className="object-cover"
            />
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default EllebanaLashList;
