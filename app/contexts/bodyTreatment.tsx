"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface BodyTreatmentContextType {
  bodyTreatmentPageData: any;
}

const BodyTreatmentContext = createContext<BodyTreatmentContextType | undefined>(
  undefined
);

export function BodyTreatmentProvider({ children }: { children: React.ReactNode }) {
  const {
    data: bodyTreatmentPageData,
    isLoading: isLoadingBodyTreatmentPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["bodyTreatmentPageData", "body-treatments"],
    queryFn: () => getDynamicPageData("body-treatments"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <BodyTreatmentContext.Provider
      value={{
        bodyTreatmentPageData: bodyTreatmentPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingBodyTreatmentPageData ? children : <Preloader />}
    </BodyTreatmentContext.Provider>
  );
}
export function useBodyTreatmentPage() {
  const context = useContext(BodyTreatmentContext);
  if (!context) {
    throw new Error("useBodyTreatmentPage must be used within a BodyTreatmentProvider");
  }
  return context;
}
