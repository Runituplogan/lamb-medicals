"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import BookNowButton from "../services/components/book-now-button";
import { lamb_differences } from "../data/lamb_differences";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

const ExperienceLamb = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const first_four_differences = lamb_differences.slice(0, 4);
  const [lambDifferences, setLambDifferences] = useState(
    first_four_differences
  );

  useEffect(() => {
    if (isExpanded) {
      setLambDifferences(lamb_differences);
    } else {
      setLambDifferences(first_four_differences);
    }
  }, [isExpanded]);

  return (
    <Wrapper className="w-full px-5 xs:py-28 sm:p-10 md:px-14 md:py-48">
      <div className="grid w-full max-w-[1500px] gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32 2xl:gap-40">
        <div data-aos="fade-up" className="xs:block hidden">
          <Image
            src="/25.png"
            width={1000}
            height={1000}
            className="h-full w-full md:h-[582px]"
            alt="empowering"
          />
        </div>
        <div className="w-full">
          <h1
            data-aos="fade-up"
            className="hidden font-rubik text-6xl font-semibold leading-tight text-[#12121299] md:block 2xl:w-[70%]"
          >
            Experience the Lamb Difference
          </h1>
          <h1
            data-aos="fade-up"
            className="block font-rubik text-[32px] font-semibold leading-loose text-[#12121299] sm:text-2xl md:hidden md:text-3xl lg:text-4xl"
          >
            Experience the Lamb Difference
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 font-work_sans text-base text-[#12121299] md:text-lg lg:text-xl"
          >
            Here’s what we can do for you at Lamb Medical
          </p>

          <div
            data-aos="fade-up"
            className="mt-10 grid w-full sm:grid-cols-1 gap-5 gap-y-8 font-rubik md:grid-cols-2"
          >
            {lambDifferences.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-start justify-start gap-1 text-[#12121299] md:gap-2"
              >
                <div>
                  <BiCheck size={23} color="#12121299" />
                </div>
                <div className="">
                  <p className="text-sm font-medium md:text-base lg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            data-aos="fade-up"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-10 h-20 w-full xs:w-max rounded-md bg-primary px-12 font-poppins text-sm font-semibold text-white transition hover:opacity-70 sm:text-base md:px-14"
          >
            {isExpanded ? "See Less" : "See all benefits"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExperienceLamb;
