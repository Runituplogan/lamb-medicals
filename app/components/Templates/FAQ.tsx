"use client";

import { IoAddCircleSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IFaq } from "@/app/data/faq";

const FAQ = ({ data }: { data?: IFaq[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  return (
    <section className="w-full bg-white py-10 md:py-20 px-8 md:px-10 xl:px-5">
      <div
       // data-aos="fade-up"
        className="flex w-full max-w-[1200px] flex-col gap-7 divide-y-[0.4px] divide-[#D9D9D9] md:gap-10 mx-auto"
      >
        {data?.map((item: IFaq, index) => (
          <FaqItemButton
            key={index}
            item={item}
            isExpanded={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

interface FaqItemButtonProps {
  item: IFaq;
  isExpanded: boolean;
  onToggle: () => void;
}

const FaqItemButton: React.FC<FaqItemButtonProps> = ({ item, isExpanded, onToggle }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded, item?.answer]);

  return (
    <div className={`${isExpanded ? "" : "pb-8"} w-full pt-5`}>
      <div className="flex w-full items-center justify-between gap-3">
        <p className="w-[90%] xs:w-full font-rubik text-[14px] font-medium text-black md:text-base lg:text-lg">
          {item.question}
        </p>
        <button
          className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]"
          onClick={onToggle}
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
        style={{ height: isExpanded ? `${height}px` : "0px" }}
      >
        <div
          ref={contentRef}
          className="w-full py-4 text-sm font-medium text-black sm:text-sm md:pr-7 md:text-base lg:pr-10 xl:pr-16"
        >
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
