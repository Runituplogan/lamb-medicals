import Link from "next/link";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <footer className="w-full bg-primary px-5 pb-10 pt-14 font-work_sans text-white md:p-10 lg:p-14">
      <Wrapper>
        <div className="grid w-full gap-5 gap-y-10 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 lg:gap-10 xl:gap-20">
          <div className="w-full">
            <img
              src="/lamb-medical-footer-logo.svg"
              className="w-72 md:w-auto"
              alt="lamb medical logo"
            />
            <p className="mt-7 text-[14px] font-medium text-white lg:text-base xl:text-lg">
              Your health is your most valuable asset. At Lamb Medicals, we
              treat it as such.
            </p>

            <p className="mt-8 text-[16px] font-semibold md:text-base lg:text-lg">
              Socials
            </p>

            <div className="mt-3 flex items-center justify-start gap-4">
              <button className="ease transition-all hover:opacity-55">
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
              </button>

              <button className="ease transition-all hover:opacity-55">
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
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="w-full pl-0 text-[16px] md:text-base lg:pl-10 lg:text-lg xl:pl-20 2xl:pl-28">
            <h2 className="font-semibold">Company</h2>

            <div className="mt-6 flex w-full flex-col space-y-4">
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/schedule-online" className="hover:underline">
                Schedule online
              </Link>
              <Link href="/faq" className="hover:underline">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full pl-0 text-[16px] md:text-base lg:pl-10 lg:text-lg xl:pl-20">
            <h2 className="font-semibold">Contact</h2>

            <div className="mt-6 flex w-full flex-col space-y-4">
              <p className="">
                3323 Washington Road, Suite 100 McMurray, PA 15317
              </p>
              <p className="">info@lambmedical.com</p>
              <p className="">Phone: 724-969-LAMB (5262)</p>
              <p className="">PHI Fax: 724-821-9700</p>
              <p className="">Text: 724-969-5262</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full border-t border-white pb-10 pt-16 text-center">
          <p className="text-[16px] text-white sm:text-sm lg:text-base">
            Copyright © 2025 Lamb Medical all rights reserved
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
