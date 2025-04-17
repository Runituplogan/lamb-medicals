import Image from "next/image";
import Link from "next/link";
import { BuildTrustType,RefineHealthCareType } from "../types/aboutCustomTypes";


interface RedefineHealthCareProps {
  data?: RefineHealthCareType;
}

const RedefineHealthCare: React.FC<RedefineHealthCareProps>= ({data}) => {
  return (
    <div
      style={{
        backgroundImage: "url(/blue-background.png",
      }}
      className="w-full px-4 sm:px-10 md:px-14 py-28 lg:py-35 xl:py-38 bg-cover bg-no-repeat"
    >
      <div className="w-full max-w-[1500px] grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-32 2xl:gap-48">
        <div className="w-full my-auto">
          <h1
           
            className="text-white lg:block hidden font-rubik font-semibold text-6xl xl:text-[70px] leading-tight"
          >
            {/* Let's Redefine
            <br /> Healthcare
            <br /> Together */}
            {data?.headerText}
          </h1>
          <h1
           
            className="lg:hidden block text-white font-rubik font-semibold text-[32px] sm:text-5xl md:text-6xl lg:text-7xl leading-loose"
          >
            {data?.headerText}
            {/* Let's Redefine Healthcare Together */}
          </h1>
          <p
           
            className="text-white mt-6 text-base md:text-lg lg:text-xl font-work_sans"
          >
            {data?.bodyText}
            {/* We invite you to experience the difference that true personalized
            care can make in your life. Take the first step towards a healthier,
            happier you. Reach out to Lamb Medicals to schedule your
            consultation and learn more about our concierge-style services. */}
          </p>

          <div
           
            className="xs:flex hidden justify-start items-center gap-5 mt-10 md:mt-16 font-poppins font-semibold"
          >
            {/* <Link href="/schedule-online">
              <button className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 sm:text-base text-sm">
                Book Online
              </button>
            </Link>
            <Link href="https://squareup.com/gift/7K57RX20Y6T10/order" >
              <button className="bg-white h-20 px-12 md:px-14 rounded-md text-black transition hover:opacity-70 sm:text-base text-sm">
                Gift Cards
              </button>
            </Link> */}
         
             <Link href={'/schedule-online'}>
               <button className={`text-white h-20 px-12 md:px-14 rounded-md bg-[#656EE8] transition hover:opacity-70 sm:text-base text-sm`}>
                 {data?.buttons[0].text}
               </button>
             </Link> 
             <Link href={'https://squareup.com/gift/7K57RX20Y6T10/order'}>
               <button className={`bg-white h-20 px-12 md:px-14 rounded-md text-black transition hover:opacity-70 sm:text-base text-sm`}>
                 {data?.buttons[1].text}
               </button>
             </Link> 
          </div>
          <div
           
            className="grid grid-cols-2 xs:hidden  items-center gap-5 mt-10 md:mt-16 font-poppins font-semibold"
          >
            <Link href="/services" className="w-full">
              <button className="text-white h-20 rounded-md bg-primary transition hover:opacity-70 sm:text-base text-sm w-full">
                Explore Services
              </button>
            </Link>
            <Link href="/schedule-online" className="w-full">
              <button className="bg-white h-20 w-full rounded-md text-black transition hover:opacity-70 sm:text-base text-sm">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="xs:block max-h-[600px] hidden">
          <Image
            src={`${data?.image}`}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            alt="empowering"
          />
        </div>
      </div>
    </div>
  );
};

export default RedefineHealthCare;
