import ServiceImageContentLayout from "../../components/service-image-content-layout";
import { SectionWithImage } from "../types/weightLoss";

interface virtualConsultationProp {
  data: SectionWithImage;
}

const VisualConsultations: React.FC<virtualConsultationProp> = ({ data }) => {
  return (
    <ServiceImageContentLayout
      image={data?.image || ""}
      title={data?.headerText || ""}
      imageMobile={data?.image}
    >
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
          {data?.bodyText}
      </p>
    </ServiceImageContentLayout>
  );
};

export default VisualConsultations;
