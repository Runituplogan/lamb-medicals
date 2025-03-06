"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import { useOurServices } from "@/app/contexts/ourServices";
import Preloader from "../Preloader";
interface Section3Props {
  data?: OurServicesType;
}
const OurServices: React.FC<Section3Props> = () => {
  const {ourServiceData} = useOurServices()

   

  const data: OurServicesType | undefined = ourServiceData.content.find(
    (item: any) => item.type === "section1"
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const first_three_Services = data?.features?.slice(0, 3);
  const [services, setServices] = useState(first_three_Services);

  useEffect(() => {
    if (isExpanded) {
      setServices(data?.features);
    } else {
      setServices(first_three_Services);
    }
  }, [isExpanded]);

  if (
      !ourServiceData ||
      !ourServiceData.content ||
      ourServiceData.content.length === 0
    ) {
      return <Preloader />;
    }
  
  return (
    <section className="w-full bg-[#F1F1F1] px-5 py-10 md:py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1400px] p-5 sm:p-10 md:p-14">
        <h1
          data-aos="fade-up"
          className="font-rubik text-[32px] font-semibold leading-tight text-[#12121299] sm:text-4xl md:text-5xl lg:text-6xl"
        >
         {data?.headerText}
        </h1>

        <h2
          data-aos="fade-up"
          className="mt-5 font-work_sans leading-loose text-[#12121299] md:text-lg lg:w-[70%] xl:w-[60%]"
        >
          {data?.bodyText}
        </h2>
       {data?.features && data?.features?.length > 3 && <button
          data-aos="fade-up"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="xs:w-max w-full font-poppins mt-10 h-20 rounded-md bg-primary px-12 text-sm font-semibold text-white transition hover:opacity-70 sm:text-base md:px-14"
        >
          {isExpanded ? "See Less" : "See all services"}
        </button>}

        <div className="mt-28 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services?.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              bgImgSrc={item.image}
              link={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
