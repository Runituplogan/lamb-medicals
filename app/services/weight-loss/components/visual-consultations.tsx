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
    >
      <p className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black opacity-80 xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-[1.9rem] xxl:leading-[3.2rem]">
        {data?.bodyText}
      </p>
    </ServiceImageContentLayout>
  );
};

export default VisualConsultations;
