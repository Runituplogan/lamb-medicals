import { cn } from "@/app/utils";
import { ImageData } from "../services/medical-services/types/medical-services";


interface BeforeAfterProps {
  items: ImageData[];
}

export default function BeforeAfter({
  items,
}: BeforeAfterProps) {
  return (
    <figure
      className="flex flex-col xs:grid xs:grid-cols-2 gap-[2.4rem]" >
 
      {items.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item.image}
            alt={item.type}
            className="w-full h-full max-h-[550px] object-cover"
          />
          <span className="absolute top-4 left-4 text-white px-3 py-1 text-3xl bg-black font-medium rounded">
            {item.type}
          </span>
        </div>
      ))}
    </figure>
  );
}
