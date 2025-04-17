"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Link from "next/link";
import { heroSection } from "../types/servicePageCustomTypes";

interface ServiceHeroSectionProps{
  data?:heroSection,
}
const ServiceHeroSection:React.FC<ServiceHeroSectionProps> = ({data}) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // TODO:
  //   const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
  //     e.preventDefault();

  //     setLoading(true);

  //     emailjs
  //       .send(
  //         "service_6gs5319",
  //         "template_0lzto0f",
  //         { phone },
  //         "apQJg2DtjcCfWOzGP"
  //       )
  //       .then(
  //         (response) => {
  //           console.log("SUCCESS!", response.status, response.text);
  //           setLoading(false);
  //           setPhone("");
  //           toast.success("Request sent successfully!");
  //         },
  //         (error) => {
  //           console.log("FAILED...", error);
  //           setLoading(false);
  //         }
  //       );
  //   };

  return (
    <section className="bg-service_hero relative flex h-full min-h-screen bg-center bg-no-repeat md:bg-cover">
      <div className="relative z-10 flex w-[700px] flex-col items-center gap-4 md:pl-28 pt-64 text-center sm:mt-8 md:mt-0 md:items-start md:justify-center md:pb-10 md:pt-28 lg:gap-7">
        <h1
         
          className="text-center text-[32px] font-rubik font-semibold text-white sm:text-5xl md:text-left md:text-6xl xl:text-[70px] leading-none mb-8 md:mb-0"
        >
         {data?.headerText}
        </h1>
        <p
         
          className="hidden w-[80%] text-center leading-relaxed text-white md:text-left lg:block xl:text-lg  font-medium"
        >
        {data?.bodyText}
        </p>
        <p
         
          className="block leading-loose text-white lg:hidden  font-medium"
        >
         {data?.bodyText}
        </p>

        <div
         
          className="mt-8 flex h-max items-center justify-center gap-6 font-poppins font-semibold md:justify-start md:gap-10 xs:w-max w-full px-3 xs:px-0"
        >
          <Link href="#service-section" className="xs:w-max w-full">
            <button className="xs:w-max w-full h-20 rounded-md bg-primary text-white transition hover:opacity-70 text-sm lg:text-md xs:px-14">
              {data?.cta_buttons[0].text}
            </button>
          </Link>
          <Link href="/schedule-online" className="xs:w-max w-full">
            <button className="xs:w-max w-full h-20 rounded-md bg-white text-sm lg:text-md text-black transition hover:opacity-70 xs:px-14">
            {data?.cta_buttons[1].text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
