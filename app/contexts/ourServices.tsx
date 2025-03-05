"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface OurServicesContextType {
  ourServiceData: any;
}

const OurServicesContext = createContext<OurServicesContextType | undefined>(
  undefined
);

export function OurServicesProvider({ children }: { children: React.ReactNode }) {
  const {
    data: ourServiceData,
    isLoading: isLoadingOurServiceData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["ourServiceData", "service-list"],
    queryFn: () => getDynamicPageData("service-list"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <OurServicesContext.Provider
      value={{
        ourServiceData: ourServiceData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingOurServiceData ? children : <Preloader />}
    </OurServicesContext.Provider>
  );
}
export function useOurServices() {
  const context = useContext(OurServicesContext);
  if (!context) {
    throw new Error("useOurServices must be used within a OurServicesProvider");
  }
  return context;
}
