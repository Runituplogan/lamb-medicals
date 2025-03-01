import Link from "next/link";
import { IServices } from "../data/services";

const ServiceCard = ({ title, description, link, bgImgSrc }: IServices) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bgImgSrc})`,
      }}
      className="h-[337px] w-full rounded bg-cover bg-no-repeat md:h-[474px]"
    >
      <div className="relative z-10 flex h-full flex-col items-start justify-between p-7 font-rubik">
        <div className="w-full">
          <h1 className="font-medium leading-snug text-white md:w-[89%] text-[24px] md:text-2xl lg:text-3xl lg:font-semibold xl:w-[96%] xl:text-4xl 2xl:text-[50px]">
            {title}
          </h1>

          <p className="text-sm font-thin text-white md:mt-5 md:text-base lg:text-[20px] mt-2">
            {description}
          </p>
        </div>

        <Link href={!!link ? link : "#"} className="w-full">
          <div className="flex w-full items-center justify-between gap-2 rounded bg-white px-5 py-4 md:px-7 lg:px-8">
            <p className="text-[21.44px] font-semibold md:text-lg">
              Learn more
            </p>
            <svg
              width="40"
              height="39"
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
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
