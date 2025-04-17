import Link from "next/link";
import BookNowButton from "../../components/book-now-button";
import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { ElectronicCommunicationType } from "../../memberships/types/membershipCustomType";
import { useRouter } from "next/navigation";

interface ElectronicCommunicationProps {
  data?: ElectronicCommunicationType;
}
const ElectronicCommunication: React.FC<ElectronicCommunicationProps> = ({
  data,
}) => {
  const router = useRouter();
  return (
    <ServiceImageContentLayout
      image={`${data?.image}`}
      title={`${data?.headerText}`}
    >
      <p className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]">
        {data?.bodyText}
      </p>

      <BookNowButton
        onClick={() => router.push("/schedule-online")}
        className="self-start"
      >
        {data?.cta_button.text}
      </BookNowButton>
    </ServiceImageContentLayout>
  );
};

export default ElectronicCommunication;
