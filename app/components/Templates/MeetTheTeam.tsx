"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="w-full py-20 lg:py-28 h-full">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="w-full p-8 sm:p-10 md:px-14 py-14">
          <h1
            data-aos="fade-up"
            className="text-[#12121299] font-rubik font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight"
          >
            Meet the Team
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[#12121299] font-work_sans md:text-lg leading-loose lg:w-[77%] mt-5"
          >
            Get to know the passionate professionals behind Lamb Medical. Our
            team is dedicated to delivering personalized, concierge-style care
            designed around you.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="w-full hidden md:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 mx-0 md:px-20"
        >
          <Image
            src="/4.png"
            width={600}
            height={400}
            className="w-full col-span-5 md:col-span-3 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/5.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/6.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/7.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/8.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/9.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/10.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/11.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/12.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/13.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
        </div>

        <MobileSwipper />
      </div>
    </section>
  );
};

const MobileSwipper = () => {
  const data = [
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/4.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/5_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/6_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/7_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/8_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/9_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/11_mobile.png",
    },
    {
      name: "Mary Parks Lamb, MD",
      positon: "Founder and Director of Lamb Medical",
      imgSrc: "/12_mobile.png",
    },
  ];
  return (
    <div className="mt-20 h-full w-full xs:hidden" data-aos="fade-up">
      <Swiper
        className="h-full"
        autoplay={true}
        modules={[Autoplay, Pagination]}
        speed={3000}
        // pagination={{
        //   el: ".custom-pagination",
        //   clickable: true,
        // }}
        navigation={false}
        scrollbar={false}
        spaceBetween={20}
        // how many slides to show
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="py-4 w-[548px] h-[548px] relative overflow-hidden"
          >
            <div className="absolute bottom-16 right-12 left-12 bg-white py-4 px-3 rounded-lg z-10 flex justify-start items-center gap-0">
              <div className="w-full">
                <p className="font-rubik font-medium text-[16px]">
                  {item.name}
                </p>
                <p className="font-work_sans font-medium text-xs">
                  {item.positon}
                </p>
              </div>

              <svg
                width="35"
                height="35"
                viewBox="0 0 55 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.879883"
                  y="0.280273"
                  width="53.6316"
                  height="53.6316"
                  rx="26.8158"
                  fill="#F1F1F1"
                />
                <path
                  d="M27.4722 32.6835L33.0588 27.0969L27.4722 21.5103"
                  stroke="#8E9BAE"
                  strokeWidth="2.01119"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              className="w-full h-[349px] object-contain"
              src={item.imgSrc}
              alt={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MeetTheTeam;
