"use client"
import Link from "next/link";
import Wrapper from "../Wrapper";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useFooterPage } from "@/app/contexts/footer";
import Preloader from "../Preloader";
import { ButtonType } from "@/app/about/types/aboutCustomTypes";
import GetInTouch from "../GetInTouch";
interface Form{
  name:string,
  placeholder:string,
  type:string,
  required:boolean
}
export interface FooterSection1Type{
  type:string,
  headerText:string,
  map:string,
  BodyText:string,
  form:{
    fields:Form[],
    primaryButton:ButtonType
  }
}

interface FooterSection2Type{
  type:string,
  image:string,
  header:string,
  bodyText:string,
  companyLinks:{
    headerText:string,
    links:string[],
    Contact:{
      headerText:string,
      details:{
        label:string,
        text:string,
      }[],
    },
    socials:{
      headerText:string,
      links: {
        icon:string,
        link:string
      }[]
    },
    copyright:string
  }
}
const Footer = () => {
  const {footerPageData} = useFooterPage()
  if (!footerPageData || !footerPageData.content || footerPageData.content.length === 0) {
      return <Preloader />;
    }

  const footerSection1: FooterSection1Type | undefined = footerPageData.content?.find(
    (item: any) => item.type === "section1"
  );
   
  const data1: FooterSection2Type | undefined = footerPageData.content?.find(
    (item: any) => item.type === "section2"
  );
   

  //console.log(footerPageData)
  return (
    <div>
      <GetInTouch data={footerSection1}/>
     <footer className="w-full bg-primary px-5 pb-10 pt-14 font-work_sans text-white md:p-10 lg:p-14 ">
      <Wrapper>
        <div className="grid w-full gap-5 gap-y-10 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 lg:gap-10 xl:gap-20">
          <div className="w-full">
            <img
              src={data1?.image}
              className="w-72 md:w-auto"
              alt="lamb medical logo"
            />
            <p className="mt-7 text-[14px] font-medium text-white lg:text-base xl:text-lg">
             {data1?.bodyText}
            </p>

            <p className="mt-8 text-[16px] font-semibold md:text-base lg:text-lg">
              {data1?.companyLinks.socials.headerText}
            </p>

            <div className="mt-3 flex items-center justify-start gap-4">
              <Link
                href={`${data1?.companyLinks.socials.links[0].link??'https://www.instagram.com/lambmedical/'}`}
                target="_blank"
                className="ease transition-all hover:opacity-55"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9244 11.9111C13.7132 11.9111 11.9087 13.7157 11.9087 15.9269C11.9087 18.1381 13.7132 19.9426 15.9244 19.9426C18.1357 19.9426 19.9402 18.1381 19.9402 15.9269C19.9402 13.7157 18.1357 11.9111 15.9244 11.9111ZM27.9687 15.9269C27.9687 14.2639 27.9837 12.6161 27.8903 10.9561C27.7969 9.02811 27.3571 7.31697 25.9472 5.90709C24.5343 4.4942 22.8262 4.05738 20.8982 3.96399C19.2352 3.8706 17.5874 3.88566 15.9275 3.88566C14.2645 3.88566 12.6166 3.8706 10.9567 3.96399C9.02868 4.05738 7.31755 4.49721 5.90767 5.90709C4.49478 7.31998 4.05796 9.02811 3.96457 10.9561C3.87118 12.6191 3.88624 14.267 3.88624 15.9269C3.88624 17.5868 3.87118 19.2377 3.96457 20.8976C4.05796 22.8256 4.49779 24.5368 5.90767 25.9467C7.32056 27.3595 9.02868 27.7964 10.9567 27.8898C12.6197 27.9831 14.2675 27.9681 15.9275 27.9681C17.5904 27.9681 19.2383 27.9831 20.8982 27.8898C22.8262 27.7964 24.5374 27.3565 25.9472 25.9467C27.3601 24.5338 27.7969 22.8256 27.8903 20.8976C27.9867 19.2377 27.9687 17.5898 27.9687 15.9269ZM15.9244 22.1056C12.5052 22.1056 9.74567 19.3461 9.74567 15.9269C9.74567 12.5076 12.5052 9.74811 15.9244 9.74811C19.3437 9.74811 22.1032 12.5076 22.1032 15.9269C22.1032 19.3461 19.3437 22.1056 15.9244 22.1056ZM22.3563 10.9381C21.5579 10.9381 20.9132 10.2934 20.9132 9.49505C20.9132 8.69672 21.5579 8.05204 22.3563 8.05204C23.1546 8.05204 23.7993 8.69672 23.7993 9.49505C23.7995 9.68462 23.7624 9.87237 23.6899 10.0476C23.6175 10.2227 23.5112 10.3819 23.3772 10.516C23.2431 10.65 23.0839 10.7563 22.9088 10.8287C22.7336 10.9011 22.5458 10.9383 22.3563 10.9381Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <Link
                href={`${data1?.companyLinks.socials.links[1].link??'https://www.facebook.com/lambmedical/'}`}
                target="_blank"
                className="ease transition-all hover:opacity-55"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6984 12.927C24.6984 6.20294 19.2475 0.752008 12.5234 0.752008C5.79936 0.752008 0.348434 6.20294 0.348434 12.927C0.348434 19.0039 4.80066 24.0407 10.6211 24.9541V16.4463H7.52978V12.927H10.6211V10.2447C10.6211 7.19334 12.4387 5.50787 15.2198 5.50787C16.5518 5.50787 17.9451 5.74566 17.9451 5.74566V8.74185H16.4099C14.8974 8.74185 14.4258 9.68035 14.4258 10.6432V12.927H17.8024L17.2626 16.4463H14.4258V24.9541C20.2462 24.0407 24.6984 19.0039 24.6984 12.927Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="w-full pl-0 text-[16px] md:text-base lg:pl-10 lg:text-lg xl:pl-20 2xl:pl-28">
            <h2 className="font-semibold">{data1?.companyLinks.headerText}</h2>

            <div className="mt-6 flex w-full flex-col space-y-4">
              {/* {
                data1?.companyLinks.links.map((item,index)=>
                <Link href="/about" className="hover:underline"key={index}>
                  {item}
                </Link>
                )
              } */}
               <Link href="/about" className="hover:underline">
                  {data1?.companyLinks.links[0]}
                </Link>
              <Link href="/contact-us" className="hover:underline">
              {data1?.companyLinks.links[1]}
              </Link>
              <Link href="/blog" className="hover:underline">
              {data1?.companyLinks.links[2]}
              </Link>
              <Link href="/schedule-online" className="hover:underline">
              {data1?.companyLinks.links[3]}
              </Link>
              <Link href="/faq" className="hover:underline">
              {data1?.companyLinks.links[4]}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full pl-0 text-[16px] md:text-base lg:pl-10 lg:text-lg xl:pl-20">
            <h2 className="font-semibold">Contact</h2>

            <div className="mt-6 flex w-full flex-col space-y-4">
           
              <p className="flex items-center justify-start">
                <FaPhoneAlt className="mr-4" />
                {data1?.companyLinks.Contact.details[2].label}:  {data1?.companyLinks.Contact.details[2].text}
              </p> 
              <p className="flex items-center justify-start">
                <FaPhoneAlt className="mr-4" />
                {data1?.companyLinks.Contact.details[3].label}:  {data1?.companyLinks.Contact.details[3].text}
              </p>
              <p className="flex items-center justify-start">
                <FaPhoneAlt className="mr-4" />
                {data1?.companyLinks.Contact.details[4].label}:  {data1?.companyLinks.Contact.details[4].text}
              </p>
              <p className="flex items-center justify-start">
                <MdEmail className="mr-4 text-xl" />
                {data1?.companyLinks.Contact.details[1].label}:  {data1?.companyLinks.Contact.details[1].text}
              </p>
              <p className="flex items-start justify-start">
                <FaLocationDot className="mr-4 text-xl ml-1 mt-2" />
                {data1?.companyLinks.Contact.details[0].label}:  {data1?.companyLinks.Contact.details[0].text}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-white pb-10 pt-16 text-center">
          <p className="text-[16px] text-white sm:text-sm lg:text-base">
            {data1?.companyLinks.copyright}
          </p>
        </div>
      </Wrapper>
    </footer>  
    </div>
   
  );
};
export default Footer;
