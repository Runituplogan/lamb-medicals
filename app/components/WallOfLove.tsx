"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IWallLove } from "../data/wall_of_love";
import { FaStar } from "react-icons/fa";

interface Section5Props {
  data?: HomepageSection5;
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
       
        className="w-full px-5 text-center font-rubik text-[32px] font-semibold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px]"
      >
        {data?.headerText}
      </h1>

      <div className="mt-20 h-full w-full overflow-hidden" ref={containerRef}>
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

const Card: React.FC<any> = ({ image, testimonial, name, occupation, social, username, rating=5 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80; // Max testimonial length before truncation

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="h-full w-[500px] rounded-md bg-white px-5 py-7 font-work_sans shadow-md shadow-[#00000012] lg:px-8">
      {/* User Info */}
      <div className="gap3 flex w-full items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <div>
            <p className="text-sm font-medium text-black sm:text-base lg:text-lg">{name}</p>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="mt-5 flex w-full flex-col">
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color="gold"
              size={18}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <div className="flex items-start gap-3">

          <p className="text-sm text-black sm:text-sm lg:text-base">
            {isExpanded ? testimonial : `${testimonial.slice(0, maxLength)}...`}
            {testimonial.length > maxLength && (
              <button onClick={toggleReadMore} className="ml-2 text-black">
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
