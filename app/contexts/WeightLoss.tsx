
"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface WeightLossContextType {
  WeightLossData: any;
}

const WeightLossContext = createContext<WeightLossContextType | undefined>(
  undefined
);

export function WeightLossProvider({ children }: { children: React.ReactNode }) {
  const {
    data: WeightLossData,
    isLoading: isLoadingWeightData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["WeightLossData", "wellness-and-weight-loss"],
    queryFn: () => getDynamicPageData("wellness-and-weight-loss"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <WeightLossContext.Provider
      value={{
        WeightLossData: WeightLossData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingWeightData ? children : <Preloader />}
    </WeightLossContext.Provider>
  );
}
export function useWeightLoss() {
  const context = useContext(WeightLossContext);
  if (!context) {
    throw new Error("useWeightLoss must be used within a WeightLossProvider");
  }
  return context;
}
