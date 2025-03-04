"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IWallLove } from "../data/wall_of_love";

interface Section5Props {
  data: HomepageSection5;
}

const WallOfLove: React.FC<Section5Props> = ({ data }) => {
  const slides = [
    ...(data?.testimonials ?? []),
    ...(data?.testimonials ?? []),
  ];

  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = useRef<number>(0);
  const animation = useRef<Promise<void> | null>(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector<HTMLDivElement>(".card-item");
        if (card) {
          const style = window.getComputedStyle(card);
          itemWidth.current =
            card.clientWidth +
            parseFloat(style.marginLeft) +
            parseFloat(style.marginRight);
        }
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    const startAnimation = () => {
      if (slides.length > 0) {
        animation.current = controls.start({
          x: [-itemWidth.current * (slides.length / 2), 0],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    startAnimation();

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [controls, slides.length]);

  return (
    <section className="h-full w-full bg-white py-28 md:pb-32 md:pt-56">
      <h1
        data-aos="fade-up"
        className="w-full px-5 text-center font-rubik text-[32px] font-semibold leading-tight text-[#12121299] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px]"
      >
        {data?.headerText}
      </h1>

      <div className="mt-20 h-full w-full overflow-hidden" data-aos="fade-up" ref={containerRef}>
        <motion.div className="flex space-x-8" animate={controls}>
          {slides.map((item, index) => (
            <div key={`${item.username}-${index}`} className="card-item h-full py-4 flex-shrink-0">
              <Card {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Card Component
const Card: React.FC<any> = ({ avatar, testimonial, name, occupation, social, username }) => {
  return (
    <div className="h-full w-[500px] rounded-md bg-white px-5 py-7 font-work_sans shadow-md shadow-[#00000012] lg:px-8">
      <div className="gap3 flex w-full items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img src={avatar} alt={name} className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-medium text-[#121212] sm:text-base lg:text-lg">{name}</p>
            <p className="text-xs text-grey-500 sm:text-sm lg:text-base">{occupation}</p>
          </div>
        </div>

        {social && (
          <img
            alt={name}
            src={social === "twitter" ? "/twitter.png" : social === "linkedin" ? "/linkedin.png" : ""}
          />
        )}
      </div>

      <div className="mt-5 flex w-full items-center justify-start gap-3">
        <svg width="45" height="64" viewBox="0 0 45 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22.5" cy="22.9546" r="22.5" fill="#656EE8" />
          <path
            d="M24.7582 27.5327C24.071 26.2236 23.7273 24.9309 23.7273 23.6545C23.76 22.3454 24.071 21.0036 24.66 19.629C25.2819 18.2545 26.1164 16.8472 27.1637 15.4072C27.6219 14.7854 28.0964 14.4581 28.5873 14.4254C29.0782 14.36 29.5037 14.4909 29.8637 14.8181C30.2564 15.1454 30.5019 15.5709 30.6 16.0945C30.6982 16.5854 30.5837 17.0927 30.2564 17.6163C29.5364 18.729 29.0128 19.7436 28.6855 20.66C28.3582 21.5763 28.1946 22.4436 28.1946 23.2618C28.2273 24.0472 28.391 24.8654 28.6855 25.7163C28.8819 26.3381 28.8491 26.8781 28.5873 27.3363C28.3255 27.7945 27.9491 28.1381 27.4582 28.3672C26.9673 28.5636 26.46 28.6127 25.9364 28.5145C25.4455 28.3836 25.0528 28.0563 24.7582 27.5327Z"
            fill="white"
          />
        </svg>

        <p className="text-sm text-grey-500 sm:text-sm lg:text-base">{testimonial}</p>
      </div>

      <p className="mr-auto mt-16 text-sm text-grey-500 sm:text-sm lg:text-base">{username}</p>
    </div>
  );
};

export default WallOfLove;
