import BookNowButton from "../../components/book-now-button";
import ServiceImageContentLayout from "../../components/service-image-content-layout";

export default function ElectronicCommunication() {
  return (
    <ServiceImageContentLayout
      image="weight-loss/visual-consultaion-3.png"
      imageMobile="weight-loss/visual-consultaion-3-mobile.png"
      title="Electronic Communication"
    >
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
        Lamb Medical uses Elation Passport and state-of-the-art electronic
        medical record that provides a patient portal and provides email
        communication for test results, routine questions, medication refills,
        and scheduling. For more information about these communication tools,
        please click the button below
      </p>
      <BookNowButton className="self-start">Learn more</BookNowButton>
    </ServiceImageContentLayout>
  );
}
