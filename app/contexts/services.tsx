"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface ServiceContextType {
  servicePageData: any;
}

const ServicePageContext = createContext<ServiceContextType | undefined>(
  undefined
);

export function ServicePageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: servicePageData,
    isLoading: isLoadingservicePageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["servicePageData", "services"],
    queryFn: () => getDynamicPageData("services"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <ServicePageContext.Provider
      value={{
        servicePageData: servicePageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingservicePageData ? children : <Preloader />}
    </ServicePageContext.Provider>
  );
}
export function useServicePage() {
  const context = useContext(ServicePageContext);
  if (!context) {
    throw new Error("useServicePage must be used within a ServicePageProvider");
  }
  return context;
}
