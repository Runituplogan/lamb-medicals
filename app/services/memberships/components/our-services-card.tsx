import { PlusIcon } from "@/app/icons";

interface OurServicesCardProps {
  service: {
    id: number;
    icon: () => React.ReactElement;
    description: string;
    isPending: boolean;
  };
}

export default function OurServicesCard({ service }: OurServicesCardProps) {
  return (
    <article
      className="grid gap-[2rem] rounded-md bg-white p-[2.4rem]"
      data-aos="fade-up"
    >
      <hgroup className="flex items-center gap-[1.2rem]">
        <i className="inline-flex size-[4rem] items-center justify-center rounded-md bg-primary">
          <service.icon />
        </i>
        {service.isPending && (
          <span className="font-work_sans text-base font-semibold tracking-[0.02em] text-black">
            (coming soon!)
          </span>
        )}
      </hgroup>
      <p className="font-work_sans text-base leading-[2.8rem] tracking-[0.02em] text-black">
        {service.description}
      </p>
    </article>
  );
}
