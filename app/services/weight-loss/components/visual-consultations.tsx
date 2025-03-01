import ServiceImageContentLayout from "../../components/service-image-content-layout";

export default function VisualConsultations() {
  return (
    <ServiceImageContentLayout
      image="weight-loss/visual-consultation.png"
      title="Virtual consultations"
      imageMobile="weight-loss/visual-consultation-mobile.png"
    >
      <p className="grid gap-8 font-work_sans text-[14px] xs:text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
        At Lamb Medical, we believe that true wellness begins from the inside
        out. That’s why we’re excited to offer virtual consultations tailored to
        your personal wellness journey. Our program includes the latest
        innovations in metabolic health and body transformation, such as
        cutting-edge weight loss injections like Semaglutide and Tirzepatide.
        With personalized guidance and advanced treatments, we’re here to help
        you achieve your health goals, from weight management to overall
        well-being, all from the comfort of your home.
      </p>
    </ServiceImageContentLayout>
  );
}
