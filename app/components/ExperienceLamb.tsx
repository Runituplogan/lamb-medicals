"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import BookNowButton from "../services/components/book-now-button";
import { lamb_differences } from "../data/lamb_differences";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

interface Section2Props {
  data: HomepageSection2;
}

const ExperienceLamb: React.FC<Section2Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const first_four_differences = data?.features?.slice(0, 4);
  const [lambDifferences, setLambDifferences] = useState(
    first_four_differences
  );

  useEffect(() => {
    if (isExpanded) {
      setLambDifferences(data?.features);
    } else {
      setLambDifferences(first_four_differences);
    }
  }, [isExpanded]);

  return (
    <Wrapper className="w-full px-5 xs:py-28 sm:p-10 md:px-14 md:py-48">
      <div className="grid w-full max-w-[1500px] gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32 2xl:gap-40">
        <div className="xs:block hidden">
          <Image
            src={data?.image as string}
            width={1000}
            height={1000}
            className="h-full w-full md:h-[582px]"
            alt="empowering"
            unoptimized
          />
        </div>
        <div className="w-full">
          <h1
           
            className="hidden font-rubik text-6xl font-semibold leading-tight text-black md:block 2xl:w-[70%]"
          >
            {data?.headerText}
          </h1>
          <h1
           
            className="block font-rubik text-[32px] font-semibold leading-loose text-black sm:text-2xl md:hidden md:text-3xl lg:text-4xl"
          >
            {data?.headerText}
          </h1>
          <p
           
            className="mt-6  text-md text-black md:text-lg lg:text-xl"
          >
            {data?.bodyText}
          </p>

          <div
           
            className="mt-10 grid w-full sm:grid-cols-1 gap-5 gap-y-8 font-rubik md:grid-cols-2"
          >
            {lambDifferences?.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-start justify-start gap-1 text-black md:gap-2"
              >
                <div>
                  <BiCheck size={23} color="#12121299" />
                </div>
                <div className="">
                  <p className="text-sm font-medium md:text-md lg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {data?.features && data?.features?.length > 4 && (
            <button
             
              onClick={() => setIsExpanded((prev) => !prev)}
              className="mt-10 h-20 w-full xs:w-max rounded-md bg-primary px-12 font-poppins text-sm font-semibold text-white transition hover:opacity-70 sm:text-md md:px-14"
            >
              {isExpanded ? "See Less" : "See all benefits"}
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ExperienceLamb;
