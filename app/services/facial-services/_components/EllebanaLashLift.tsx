import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";
import { EllebanaLashLiftType } from "../types/facialServicesCustomType";

interface  EllebanaLashListProps {
  data?:EllebanaLashLiftType
}
const EllebanaLashList:React.FC<EllebanaLashListProps>=({data})=> {
  return (
    <Wrapper id="ellebana-lash-lift" className="grid gap-[4rem] pb-16">
         {/* <ServicesIntro
        title="Ellebana Lash Lift"
        description="With our re-gen formula boasting amino acids, peptides, and plant based ingredients; Elleebana Lash Lift strengthens, nourishes, and protects lashes. Elleebana Lash Lift provides a sensational, natural enhancement to your eyelashes.   "
      /> */}
         <ServicesIntro
        title={`${data?.headerText}`}
        description={`${data?.bodyText}`}
        btnLink={`${data?.cta_button.link}`}
        btnText={`${data?.cta_button.text}`}
      />
         <figure
        className="relative h-[62.3rem] overflow-hidden rounded md:block hidden"
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
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
            {data?.subsections[0].title}
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
          {data?.subsections[0].bodyText}
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
          {data?.subsections[1].title}
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
          {data?.subsections[1].bodyText}
          </div>
        </div>

        <div className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
          <h3 className="font-rubik text-[32px] xs:text-[46.57px] font-semibold leading-[6rem] text-grey-200">
          {data?.subsections[2].title}
          </h3>

          <div className="grid gap-8 font-work_sans text-[14px] xs:text-[23.28px] font-medium leading-[3.6rem] tracking-[0.02rem] text-grey-750 opacity-80">
          {data?.subsections[2].bodyText}
          </div>
        </div>
      </div>
      <div className="py-16">
        <h3 className="font-rubik text-[32px] xs:text-[40px] font-semibold leading-[6rem] text-grey-200 w-full md:text-center">
        {data?.before_and_after[0].title}
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {
            data?.before_and_after[0].images.map((item,index)=>
              <div className="relative" key={index}>
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
              {item.type}
            </h2>

            <img
              src={`${item?.image}`}
              alt="eye-before"
              className="object-cover"
              data-aos="zoom-in"
            />
          </div>
            )
          }
        
          {/* <div className="relative">
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
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
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
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
            <h2 className="font-semibold text-white absolute top-10 right-[50%] xs:text-[47.54px] text-[32px] z-10">
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
}


export default EllebanaLashList