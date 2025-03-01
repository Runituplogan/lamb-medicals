"use client";

import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import { all_services, IServices } from "@/app/data/services";

const OurServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const first_three_Services = all_services.slice(0, 3);
  const [services, setServices] = useState<IServices[]>(first_three_Services);

  useEffect(() => {
    if (isExpanded) {
      setServices(all_services);
    } else {
      setServices(first_three_Services);
    }
  }, [isExpanded]);

  return (
    <section className="w-full bg-[#F1F1F1] px-5 py-10 md:py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1400px] p-5 sm:p-10 md:p-14">
        <h1
          data-aos="fade-up"
          className="font-rubik text-[32px] font-semibold leading-tight text-[#12121299] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Our Services
        </h1>

        <h2
          data-aos="fade-up"
          className="mt-5 font-work_sans leading-loose text-[#12121299] md:text-lg lg:w-[70%] xl:w-[60%]"
        >
          Discover our range of innovative solutions designed to support your
          health, wellness, and confidence.
        </h2>
        <button
          data-aos="fade-up"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="xs:w-max w-full font-poppins mt-10 h-20 rounded-md bg-primary px-12 text-sm font-semibold text-white transition hover:opacity-70 sm:text-base md:px-14"
        >
          {isExpanded ? "See Less" : "See all services"}
        </button>

        <div className="mt-28 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              bgImgSrc={item.bgImgSrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
