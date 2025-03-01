import Image from "next/image";

interface WellProgramTeamCardProps {
  card: {
    name: string;
    photo: string;
  };
}

export default function WellProgramTeamCard({
  card,
}: WellProgramTeamCardProps) {
  return (
    <figure
      className="w-[32rem] overflow-hidden rounded-sm"
      data-aos="fade-right"
    >
      <div className="relative h-[24.5rem]">
        <Image
          src={card.photo}
          alt={card.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <figcaption className="bg-grey-150 inline-flex w-full items-center justify-center py-[1.2rem] font-rubik text-xl font-medium text-black">
        {card.name}
      </figcaption>
    </figure>
  );
}
