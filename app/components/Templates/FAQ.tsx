"use client";

import { IFaq } from "@/app/data/faq";
import { IoAddCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const FAQ = ({ data }: { data: IFaq[] }) => {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-8 md:px-10 xl:px-5">
      <div
        data-aos="fade-up"
        className="flex w-full max-w-[1200px] flex-col gap-7 divide-y-[0.4px] divide-[#D9D9D9] md:gap-10 mx-auto"
      >
        {data.map((item: IFaq, index) => (
          <FaqItemButton item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

const FaqItemButton = ({ item }: { item: IFaq }) => {
  const [height, setHeight] = useState<number | "auto">(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded, item?.content]); // Measure height when content changes

  return (
    <div ref={contentRef} className={`${isExpanded ? "" : "pb-8"} w-full pt-5`}>
      <div className="flex w-full items-center justify-between gap-3">
        <p className="w-[90%] xs:w-full font-rubik text-[14px] font-medium text-grey-700 md:text-base lg:text-lg">
          {item.title}
        </p>
        <button
          className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]"
          onClick={handleToggle}
        >
          {!isExpanded ? (
            <IoAddCircleSharp className="h-full w-full" />
          ) : (
            <IoIosCloseCircle className="h-full w-full" />
          )}
        </button>
      </div>

      <div
        className="ease max-h-max w-full overflow-hidden transition-[max-height] duration-300"
        style={{
          height: isExpanded ? `${height}px` : "0px",
        }}
      >
        <div
          ref={contentRef}
          className="w-full py-4 text-sm font-medium text-[#55534E] sm:text-sm md:pr-7 md:text-base lg:pr-10 xl:pr-16"
        >
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
