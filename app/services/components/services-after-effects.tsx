import { cn } from "@/app/utils";

interface ServicesAfterEffectsProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  hideTitleOnMobile?: boolean;
}

export default function ServicesAfterEffects({
  children,
  className,
  title,
  hideTitleOnMobile,
}: ServicesAfterEffectsProps) {
  return (
    <figure
      className={cn(
        "flex flex-col xs:grid xs:grid-cols-[1.5fr_2fr] grid-rows-[42.4rem_48.9rem] ngap-[2.4rem]",
        className
      )}
    >
      {!!title && (
        <figcaption
          className={`${hideTitleOnMobile ? "hidden xs:block" : ""} text-black col-span-full text-center font-rubik text-[24px] xs:text-[3.8rem] font-semibold leading-[4rem]`}
          data-aos="fade-left"
        >
          {title}
        </figcaption>
      )}
      {children}
    </figure>
  );
}
