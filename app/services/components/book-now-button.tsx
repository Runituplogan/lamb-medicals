import { cn } from "@/app/utils";
import { ButtonHTMLAttributes } from "react";

interface BookNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BookNowButton({
  children,
  ...props
}: BookNowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "w-full xs:w-max flex items-center justify-center rounded-[0.5rem] bg-primary px-[4.1rem] py-[1.2rem] font-poppins text-md font-semibold text-white transition hover:opacity-70",
        props.className
      )}
    >
      {children}
    </button>
  );
}
