"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface SexualWellnessPageContextType {
  sexualWellnessPageData: any;
}

const SexualWellnessPageContext = createContext<SexualWellnessPageContextType | undefined>(
  undefined
);

export function SexualWellnessPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: sexualWellnessPageData,
    isLoading: isLoadingSexualWellnessPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["sexualWellnessPageData", "sexual-wellness"],
    queryFn: () => getDynamicPageData("sexual-wellness"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    console.error("Error fetching data:", errorPageData);
    return <div>Something went wrong</div>;
  }

  return (
    <SexualWellnessPageContext.Provider
      value={{
        sexualWellnessPageData: sexualWellnessPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingSexualWellnessPageData ? children : <Preloader />}
    </SexualWellnessPageContext.Provider>
  );
}
export function useSexualWellnessPage() {
  const context = useContext(SexualWellnessPageContext);
  if (!context) {
    throw new Error("useSexualWellnessPage must be used within a SexualWellnessPageProvider");
  }
  return context;
}
