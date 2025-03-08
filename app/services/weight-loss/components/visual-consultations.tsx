import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { VirtualconsultationsType } from "../../memberships/types/membershipCustomType";

interface VisualConsultationsProps {
  data?: VirtualconsultationsType;
}
const VisualConsultations: React.FC<VisualConsultationsProps> = ({ data }) => {
  return (
    <ServiceImageContentLayout
      image={`${data?.image}`}
      title={`${data?.headerText}`}
      imageMobile={`${data?.image}`}
    >
      <p className="font-work_sans text-[1.4rem] font-medium leading-[2.4rem] tracking-[0.02rem] text-grey-750 opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[2.3rem] xxl:leading-[4.5rem]">
        {data?.bodyText}
      </p>
    </ServiceImageContentLayout>
  );
};

export default VisualConsultations;
