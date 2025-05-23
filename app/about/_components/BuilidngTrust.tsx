import Image from "next/image";
import { BuildTrustType } from "../types/aboutCustomTypes";


interface BuildTrustSectionProps {
  data?: BuildTrustType;
}

const BuilidngTrust: React.FC<BuildTrustSectionProps>  = ({data}) => {
  return (
    <section className="h-full w-full py-10 !pt-0 lg:py-25 xl:pb-44 xl:pt-44 px-0 md:px-10">
      <div className="w-full">
        <div className="mx-auto w-full max-w-[1000px] p-8 py-14 sm:p-10 md:px-14">
          <h1
           
            className="font-rubik text-center text-[32px] font-semibold leading-tight text-black sm:text-3xl md:text-5xl lg:text-6xl"
          >
            {/* Building trust through transparency and communication */}
            {data?.headerText}
          </h1>
          <h2
           
            className="mt-5  text-center leading-loose text-black md:text-lg w-full"
          >
            {/* From preventive care and wellness programs to advanced treatments
            and personalized health plans, our offerings are designed to empower
            you to live your best life. */}
            {data?.bodyText}
          </h2>
        </div>

        <div
         
          className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 md:gap-10 mt-16 mx-auto"
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-3 object-cover h-[90%]">
          <Image
                src={data?.images[0]??'/'}
                width={600}
                height={400}
                className="w-full md:h-[529px]"
                alt={`member ship`}
              />
            {/* {
              data?.images.map((item,index)=> (
             
              ))
            }
           */}
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 h-[90%]">
          <Image
                src={data?.images[1]??'/'}
                width={600}
                height={400}
                className="w-full md:h-[529px]"
                alt={`member ship`}
              />
          </div>
          {/* <div className="col-span-1 md:col-span-2 lg:col-span-4 object-cover h-[90%]">
          <Image
                src={data?.images[2]??'/'}
                width={600}
                height={400}
                className="w-full md:h-[529px]"
                alt={`member ship`}
              />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 h-[90%]">
          <Image
                src={data?.images[3]??'/'}
                width={600}
                height={400}
                className="w-full md:h-[529px]"
                alt={`member ship`}
              />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BuilidngTrust;
