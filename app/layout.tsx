// app/layout.js
import type { Metadata } from "next";
import { Nunito_Sans, Poppins, Rubik, Work_Sans } from "next/font/google";
import Navbar from "./components/Templates/Navbar";
import Footer from "./components/Templates/Footer";
import AOSInitializer from "./components/AOSInitializer"; // Import the AOS initializer
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css"; // Import AOS CSS
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactQueryProvider } from "./request/ReactQueryProvider";
import { HomePageProvider } from "./contexts/homepageContext";
import { FacialServicesPageProvider } from "./contexts/facialService";
import { AboutPageProvider } from "./contexts/aboutPageContext";
import { EnergyDevicesPageProvider } from "./contexts/energyDevices";
import { InjectableTreatmentPageProvider } from "./contexts/injectableTreatmentContext";
import { SexualWellnessPageProvider } from "./contexts/sexualWellness";
import { BodyTreatmentProvider } from "./contexts/bodyTreatment";
import { SkinCareProductProvider } from "./contexts/skinCareProduct";
import { MembershipPageProvider } from "./contexts/membership";
import { MeetTheTeamPageProvider } from "./contexts/meetTheTeam";

export const metadata: Metadata = {
  title: "Lamb Medical Aestheics",
  description:
    "Our commitment is to provide a highly personalized healthcare experience. From routine checkups to complex medical needs, Lamb Medicals offers services tailored to your unique requirements. Our expert team of dedicated professionals takes the time to understand you, delivering exceptional care with compassion and precision.",
};

const workSans = Work_Sans({
  variable: "--font-work_sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "200"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "200"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${rubik.variable} ${nunito_sans.variable} ${poppins.variable}`}
      >
        <ReactQueryProvider>
          <HomePageProvider>
          <AboutPageProvider>
            <InjectableTreatmentPageProvider>
            <FacialServicesPageProvider>
              <EnergyDevicesPageProvider>
                <SexualWellnessPageProvider>
                  <BodyTreatmentProvider>
                    <SexualWellnessPageProvider>
                      <SkinCareProductProvider>
                        <MembershipPageProvider>
                          <MeetTheTeamPageProvider>
                            <Navbar />
                            <ToastContainer
                              autoClose={2000}
                              hideProgressBar={true}
                              theme="colored"
                            />
                            <AOSInitializer /> {/* Initialize AOS */}
                            {children}
                            <Footer />
                          </MeetTheTeamPageProvider>
                        </MembershipPageProvider>
                      </SkinCareProductProvider>
                    </SexualWellnessPageProvider>
                  </BodyTreatmentProvider>
                </SexualWellnessPageProvider>
              </EnergyDevicesPageProvider>
            </FacialServicesPageProvider>
            </InjectableTreatmentPageProvider>
            </AboutPageProvider>
          </HomePageProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
