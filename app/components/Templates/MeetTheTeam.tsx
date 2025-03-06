"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { MeetTeamType } from "@/app/about/types/aboutCustomTypes";
import { useMeetTheTeamPage } from "@/app/contexts/meetTheTeam";
import Preloader from "../Preloader";

const MAX_ACTIVE_WIDTH = 300;
const MAX_INACTIVE_WIDTH = 150;

interface MeetTheTeamSectionProps {
  data?: MeetTeamType;
}

const MeetTheTeam =() => {
  const {meetTheTeamPageData} = useMeetTheTeamPage()
   
    const data: MeetTeamType | undefined = meetTheTeamPageData.content.find(
      (item: any) => item.type === "section1"
    );
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

   if (!meetTheTeamPageData || !meetTheTeamPageData.content || meetTheTeamPageData.content.length === 0) {
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
      <div className="max-w-[1400px] mx-auto px-8">
        <h1 className="text-[#12121299] font-rubik font-semibold text-5xl">{data?.headerText}</h1>
        <h2 className="text-[#12121299] font-work_sans text-lg mt-5">
          {/* Get to know the passionate professionals behind Lamb Medical. */}
          {data?.bodyText}
        </h2>
        <div ref={containerRef} className="flex w-full mt-10">
          {data?.teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0"
              style={{
                width:
                  activeIndex === index
                    ? `${MAX_ACTIVE_WIDTH}px`
                    : `${inactiveWidth}px`,
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
              />

              {activeIndex === index && (
                <div className="absolute flex items-center justify-between bottom-0 left-0 right-0 min-w-[200px] bg-white p-4 m-4 shadow-md rounded">
                  {index > 0 && (
                    <div
                      onClick={() => handleClick(index, "left")}
                      className="p-2 bg-[#F1F1F1] rounded-full absolute left-2 cursor-pointer"
                    >
                      <MdChevronRight className="text-[#8E9BAE] text-xl rotate-180" />
                    </div>
                  )}

                  <div
                    className={`w-full flex flex-col items-center ${index > 0 && data?.teamMembers && index < data?.teamMembers?.length - 1 ? "text-center" : "text-left"}`}
                  >
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm font-medium text-gray-600">{member.role}</p>
                  </div>

                  {data?.teamMembers &&
                    index < data?.teamMembers.length - 1 && (
                      <div
                        onClick={() => handleClick(index, "right")}
                        className="p-2 bg-[#F1F1F1] rounded-full absolute right-2 cursor-pointer"
                      >
                        <MdChevronRight className="text-[#8E9BAE] text-xl" />
                      </div>
                    )}
                </div>
              )}

              {activeIndex !== index && (
                <div className="h-full w-full bg-[black] opacity-50 absolute left-0 top-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
