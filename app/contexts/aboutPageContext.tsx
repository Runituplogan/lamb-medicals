"use client";

import { createContext, useContext } from "react"; 
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface AboutPageContextType {
  aboutPageData: any;
}

const AboutPageContext = createContext<AboutPageContextType | undefined>(
  undefined
);

export function AboutPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: aboutPageData,
    isLoading: isLoadingAboutPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["aboutPageData", "about"],
    queryFn: () => getDynamicPageData("about"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <AboutPageContext.Provider
      value={{
        aboutPageData: aboutPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingAboutPageData ? children : <Preloader />}
    </AboutPageContext.Provider>
  );
}
export function useAboutPage() {
  const context = useContext(AboutPageContext);
  if (!context) {
    throw new Error("useAboutPage must be used within a AboutPageProvider");
  }
  return context;
}
