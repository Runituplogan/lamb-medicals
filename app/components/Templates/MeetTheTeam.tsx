"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { MeetTeamType } from "@/app/about/types/aboutCustomTypes";
import { useMeetTheTeamPage } from "@/app/contexts/meetTheTeam";
import Preloader from "../Preloader";

const MAX_ACTIVE_WIDTH = 300;
const MAX_INACTIVE_WIDTH = 150;


function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}


const MeetTheTeam = () => {
  const { meetTheTeamPageData } = useMeetTheTeamPage();

  const data: MeetTeamType | undefined = meetTheTeamPageData?.content?.find(
    (item: any) => item.type === "section1",
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    const debouncedUpdate = debounce(updateWidth, 100);
    window.addEventListener("resize", debouncedUpdate);

    const resizeObserver = new ResizeObserver(debouncedUpdate);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial measurement
    updateWidth();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
    };
  }, []);

  if (
    !meetTheTeamPageData ||
    !meetTheTeamPageData.content ||
    meetTheTeamPageData.content.length === 0
  ) {
    return <Preloader />;
  }

  const handleClick = (index: number, direction?: "left" | "right") => {
    if (direction === "left" && index > 0) {
      setActiveIndex(index - 1);
    } else if (
      direction === "right" &&
      data?.teamMembers &&
      index < data?.teamMembers?.length - 1
    ) {
      setActiveIndex(index + 1);
    } else if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const totalMembers = data?.teamMembers?.length;
  const remainingWidth = containerWidth - MAX_ACTIVE_WIDTH;
  const inactiveCount = (totalMembers && totalMembers - 1) || 0;
  const inactiveWidth = Math.min(
    MAX_INACTIVE_WIDTH,
    remainingWidth / inactiveCount
  );

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-8">
        <h1 className="font-rubik text-5xl font-semibold text-black">
          {data?.headerText}
        </h1>
        <h2 className="mt-5 text-lg text-black">
          {data?.bodyText}
        </h2>
        <div 
          ref={containerRef} 
          className="mt-10 flex w-full min-w-[300px]"
        >
          {data?.teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${
                activeIndex !== index && "sm:!w-0"
              } relative flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                width:
                  activeIndex === index
                    ? window.innerWidth >= 640
                      ? `${MAX_ACTIVE_WIDTH}px`
                      : "100%"
                    : window.innerWidth >= 640
                      ? `${inactiveWidth}px`
                      : "0px",
              }}
              onClick={() => handleClick(index)}
            >
              <Image
                src={`${member.image}`}
                width={1000}
                height={100}
                className="h-[400px] w-full object-cover transition-all duration-300"
                alt={member.name}
                unoptimized
                priority={index === activeIndex}
              />

              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 m-4 flex min-w-[200px] items-center justify-between rounded bg-white p-4 shadow-md">
                  {index > 0 && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(index, "left");
                      }}
                      className="absolute left-2 cursor-pointer rounded-full bg-[#F1F1F1] p-2"
                    >
                      <MdChevronRight className="rotate-180 text-xl text-[#8E9BAE]" />
                    </div>
                  )}

                  <div
                    className={`flex w-full flex-col items-center ${
                      index > 0 && data?.teamMembers && index < data?.teamMembers?.length - 1 
                        ? "text-center" 
                        : "text-left"
                    }`}
                  >
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm font-medium text-gray-600">
                      {member.role}
                    </p>
                  </div>

                  {data?.teamMembers &&
                    index < data?.teamMembers.length - 1 && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(index, "right");
                        }}
                        className="absolute right-2 cursor-pointer rounded-full bg-[#F1F1F1] p-2"
                      >
                        <MdChevronRight className="text-xl text-[#8E9BAE]" />
                      </div>
                    )}
                </div>
              )}

              {activeIndex !== index && (
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;