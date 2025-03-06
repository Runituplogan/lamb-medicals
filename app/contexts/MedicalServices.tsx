"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface MedicalServicesContextType {
  MedicalServicesData: any;
}

const MedicalServicesContext = createContext<MedicalServicesContextType | undefined>(
  undefined
);

export function MedicalServicesProvider({ children }: { children: React.ReactNode }) {
  const {
    data: MedicalServicesData, 
    isLoading: isLoadingWeightData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["MedicalServicesData", "MedicalServicesData"],
    queryFn: () => getDynamicPageData("medical-services"),
    initialData: { title: "", description: "", image: "" },
  });
 
  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <MedicalServicesContext.Provider
      value={{
        MedicalServicesData: MedicalServicesData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingWeightData ? children : <Preloader />}
    </MedicalServicesContext.Provider>
  );
}

export function useMedicalServices() {
  const context = useContext(MedicalServicesContext);
  if (!context) {
    throw new Error("useMedicalServices must be used within a MedicalServicesProvider");
  }
  return context;
}
