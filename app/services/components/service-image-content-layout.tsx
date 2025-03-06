import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import { cn } from "@/app/utils";

interface ServiceImageContentLayoutProps {
  image: string;
  imageMobile?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceImageContentLayout({
  image,
  title,
  children,
  className,
  imageMobile,
}: ServiceImageContentLayoutProps) {
  return (
    <Wrapper
      className={cn(
        "flex flex-col-reverse gap-10 xs:grid xl:grid-cols-[58rem_1fr] grid-rows-[38rem] items-center xs:gap-6 md:gap-[13rem] py-[3rem] xs:py-[8rem]",
        className
      )}
    >
      <div className="relative xs:h-full" data-aos="fade-right">
        <Image
          src={`${image}`}
          alt={title}
          fill
          className="xs:block hidden"
        />
        <img
          src={`/images/${imageMobile}`}
          alt={title}
          className="xs:hidden block"
        />
      </div>
      <figcaption className="flex flex-col gap-[2.4rem]" data-aos="fade-left">
        <h3 className="font-rubik text-[32px] xs:text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
          {title}
        </h3>
        {children}
      </figcaption>
    </Wrapper>
  );
}
