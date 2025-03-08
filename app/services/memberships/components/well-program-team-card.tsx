import Image from "next/image";

interface WellProgramTeamCardProps {
  card: {
    name: string;
    image: string;
  };
}

export default function WellProgramTeamCard({
  card,
}: WellProgramTeamCardProps) {
  return (
    <figure
      className="w-full overflow-hidden rounded-sm xxl:w-[32rem]"
      data-aos="fade-right"
    >
      <div className="relative h-[28rem] lg:h-[24.5rem]">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>
      <figcaption className="inline-flex w-full items-center justify-center bg-grey-150 py-[1.2rem] font-rubik text-xl font-medium text-black">
        {card.name}
      </figcaption>
    </figure>
  );
}
