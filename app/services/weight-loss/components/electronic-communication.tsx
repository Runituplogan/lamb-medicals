import Link from "next/link";
import BookNowButton from "../../components/book-now-button";
import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { ElectronicCommunicationType } from "../../memberships/types/membershipCustomType";

interface ElectronicCommunicationProps {
  data?: ElectronicCommunicationType;
}
const ElectronicCommunication: React.FC<ElectronicCommunicationProps> = ({
  data,
}) => {
  return (
    <ServiceImageContentLayout
      image={`${data?.image}`}
      imageMobile="weight-loss/visual-consultaion-3-mobile.png"
      title={`${data?.headerText}`}
    >
      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.bodyText}
      </p>
      <Link href="/schedule-online">
        <BookNowButton className="self-start">
          {data?.cta_button.text}
        </BookNowButton>
      </Link>
    </ServiceImageContentLayout>
  );
};

export default ElectronicCommunication;
