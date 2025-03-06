import Link from "next/link";
import BookNowButton from "../../components/book-now-button";
import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { SectionWithImage } from "../types/weightLoss";

interface ElectronicCommProp{
 data: SectionWithImage
}

export default function ElectronicCommunication({data}:ElectronicCommProp) {
  return (
    <ServiceImageContentLayout
      image={data?.image || ''}
      imageMobile={data?.image || ''}
      title={data?.headerText || ''}
    >
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
        {data?.bodyText}
      </p>
      <Link href="/schedule-online">
      <BookNowButton className="self-start">Learn more</BookNowButton>
      </Link>
    </ServiceImageContentLayout>
  );
}
