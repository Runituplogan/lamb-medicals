import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { VirtualconsultationsType } from "../../memberships/types/membershipCustomType";

interface VisualConsultationsProps{
  data?:VirtualconsultationsType
}
const VisualConsultations:React.FC<VisualConsultationsProps>=({data})=> {
  return (
    <ServiceImageContentLayout
      image={`${data?.image}`}
      title={`${data?.headerText}`}
      imageMobile="weight-loss/visual-consultation-mobile.png"
    >
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
      {`${data?.bodyText}`}
      </p>
    </ServiceImageContentLayout>
  );
}

export default VisualConsultations