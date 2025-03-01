import Image from "next/image";

const BuilidngTrust = () => {
  return (
    <section className="h-full w-full py-10 lg:py-32 xl:pb-44 xl:pt-44 px-0 md:px-10">
      <div className="w-full">
        <div className="mx-auto w-full max-w-[1000px] p-8 py-14 sm:p-10 md:px-14">
          <h1
            data-aos="fade-up"
            className="font-rubik text-center text-[32px] font-semibold leading-tight text-[#12121299] sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Building trust through transparency and communication
          </h1>
          <h2
            data-aos="fade-up"
            className="mt-5 font-work_sans text-center leading-loose text-[#12121299] md:text-lg w-full"
          >
            From preventive care and wellness programs to advanced treatments
            and personalized health plans, our offerings are designed to empower
            you to live your best life.
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 md:gap-10 mt-16 mx-auto"
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-3 object-cover h-[90%]">
            <Image
              src="/33.png"
              width={600}
              height={400}
              className="w-full md:h-[529px]"
              alt="empowering"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 h-[90%]">
            <Image
              src="/34.png"
              width={600}
              height={400}
              className="w-full md:h-[529px]"
              alt="empowering"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 object-cover h-[90%]">
            <Image
              src="/35.png"
              width={600}
              height={400}
              className="w-full md:h-[529px]"
              alt="empowering"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 h-[90%]">
            <Image
              src="/36.png"
              width={600}
              height={400}
              className="w-full md:h-[529px]"
              alt="empowering"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilidngTrust;
