"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface FacialServicesContextType {
  facialServicesPageData: any;
}

const FacialServicePageContext = createContext<FacialServicesContextType | undefined>(
  undefined
);

export function FacialServicesPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: facialServicesPageData,
    isLoading: isLoadingFacialServicePageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["facialServicesPageData", "facial-services"],
    queryFn: () => getDynamicPageData("facial-services"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <FacialServicePageContext.Provider
      value={{
        facialServicesPageData: facialServicesPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingFacialServicePageData ? children : <Preloader />}
    </FacialServicePageContext.Provider>
  );
}
export function useFacialServicePage() {
  const context = useContext(FacialServicePageContext);
  if (!context) {
    throw new Error("useFacialService must be used within a FacialServiceProvider");
  }
  return context;
}
