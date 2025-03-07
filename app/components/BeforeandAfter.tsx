import Image from "next/image";
import { ImageData } from "../services/medical-services/types/medical-services";
import { cn } from "../utils";

interface BeforeAfterProps {
  items: ImageData[];
  className?: string;
}

export default function BeforeAfter({ items, className }: BeforeAfterProps) {
  return (
    <figure
      className={cn(
        "grid h-[24rem] grid-cols-2 xl:h-[48rem] xl:gap-[1.8rem]",
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="relative size-full">
          <Image
            src={item.image}
            alt={item.type}
            fill
            unoptimized
            className="h-full max-h-[550px] w-full object-cover object-center"
          />
          <span className="absolute left-4 top-4 rounded bg-black px-3 py-1 text-3xl font-medium text-white">
            {item.type}
          </span>
        </div>
      ))}
    </figure>
  );
}
