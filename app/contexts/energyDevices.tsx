"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface EnergyDevicesPageContextType {
  energyDevicesPageData: any;
}

const EnergyDevicesPageContext = createContext<EnergyDevicesPageContextType | undefined>(
  undefined
);

export function EnergyDevicesPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: energyDevicesPageData,
    isLoading: isLoadingEnergyDevicesPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["energyDevicesPageData", "energy-devices"],
    queryFn: () => getDynamicPageData("energy-devices"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <EnergyDevicesPageContext.Provider
      value={{
        energyDevicesPageData: energyDevicesPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingEnergyDevicesPageData ? children : <Preloader />}
    </EnergyDevicesPageContext.Provider>
  );
}
export function useEnergyDevicesPage() {
  const context = useContext(EnergyDevicesPageContext);
  if (!context) {
    throw new Error("useEnergyDevicePage must be used within a energyDevicesPageProvider");
  }
  return context;
}
