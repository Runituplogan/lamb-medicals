import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import { cn } from "@/app/utils";

interface ServiceImageContentLayoutProps {
  image: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceImageContentLayout({
  image,
  title,
  children,
  className,
}: ServiceImageContentLayoutProps) {
  return (
    <Wrapper
      className={cn(
        "grid items-center gap-10 py-[3rem] xs:gap-6 xs:py-[8rem] md:gap-[3rem] xl:grid-cols-[58rem_1fr] xl:gap-[13rem]",
        className,
      )}
    >
      <h3 className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-grey-200 xs:text-[4rem] lg:hidden lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]">
        {title}
      </h3>
      <div
        className="relative h-[21rem] md:h-[28rem] xxl:h-[38rem]"
        data-aos="fade-right"
      >
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <figcaption className="flex flex-col gap-[2.4rem]" data-aos="fade-left">
        <h3 className="hidden font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-grey-200 xs:text-[4rem] lg:block lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]">
          {title}
        </h3>
        {children}
      </figcaption>
    </Wrapper>
  );
}
