"use client";

import { FaqSection } from "@/app/about/types/aboutCustomTypes";
import Image from "next/image";
import Link from "next/link";

interface QuestionsProps {
  data?: FaqSection;
}

const Questions:React.FC<QuestionsProps> = ({data}) => {
  
  return (
    <section className="w-full py-10 px-5 md:py-20 lg:py-32 bg-white font-rubik">
      <div className="w-full mx-auto max-w-[1200px] flex flex-col gap-7 md:gap-10 divide-y-[0.4px] divide-[#D9D9D9]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <h1
            data-aos="fade-up"
            className="text-black font-bold text-[32px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[70px] leading-tight"
          >
            {/* Questions? We've Got The Answers Here For You */}
            {data?.headerText}
          </h1>
          <div data-aos="fade-up" className="font-work_sans">
            <p className="text-black text-base sm:text-lg md:text-xl">
              {/* Find quick answers to common queries in our FAQs section, designed
              to address your most pressing questions and provide you with the
              information you need. Many questions surround concierge medicine,
              so here are a few, answered. */}
              {data?.bodyText}
            </p>
            
            <Link href="#more-faqs">
            <button className="h-20 xs:h-16 rounded-xl bg-primary text-white font-poppins mt-8 px-7 w-full xs:w-max font-semibold">
              Find More FAQs
            </button>
            </Link>
          </div>
        </div>
      </div>
      <img src={data?.image} alt="3jj" className="mt-24 w-full max-h-[400px] object-cover" />
    </section>
  );
};

export default Questions;
