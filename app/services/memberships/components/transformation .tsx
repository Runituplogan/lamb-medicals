import Wrapper from "@/app/components/Wrapper";
import BookNowButton from "../../components/book-now-button";
import Image from "next/image";
import { TransformationType } from "../types/membershipCustomType";
import { useRouter } from "next/navigation";

interface TransformationProps {
  data?: TransformationType;
}
const Transformation: React.FC<TransformationProps> = ({ data }) => {
  const  btnLink = `/schedule-online`
  const router = useRouter();
  return (
    <Wrapper className="grid w-full gap-[4rem] py-[1rem] md:gap-[8rem] lg:grid-cols-[58rem_1fr] lg:py-[5em]">
      <div className="flex w-full flex-col gap-[2.4rem]">
        <h3
          className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-black xs:text-[4rem] lg:text-[5.8rem] lg:leading-[4.2rem] xl:leading-[6rem]"
         
        >
          {data?.headerText}
        </h3>
        <p
          className="font-work_sans text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]"
         
        >
          {data?.bodyText}
        </p>
        <BookNowButton
          className="hidden self-start xs:block"
         
          onClick={() => router.push(btnLink)}
        >
          {data?.cta_button.text}
        </BookNowButton>
      </div>

      <figure
        className="relative xs:flex lg:size-full xl:justify-end"
       
      >
        <div
          className="relative flex h-[30rem] w-full lg:w-[45rem] xxl:h-[57rem]"
         
        >
          <Image
            src={data?.image || ""}
            alt="visual consultation"
            fill
            unoptimized 
            className="object-cover object-center"
          />
        </div>
      </figure>
    </Wrapper>
  );
};
export default Transformation;
