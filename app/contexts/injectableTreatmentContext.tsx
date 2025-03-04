"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface InjectableTreatmentContextType {
  InjectableTreatmentPageData: any;
}

const InjectableTreatmentContext = createContext<InjectableTreatmentContextType | undefined>(
undefined);

export function InjectableTreatmentPageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: InjectableTreatmentPageData,
    isLoading: isLoadingInjectableTreatmentePageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["injectable-treatments"],
    queryFn: () => getDynamicPageData("injectable-treatments"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <InjectableTreatmentContext.Provider
      value={{
        InjectableTreatmentPageData: InjectableTreatmentPageData || {
          title: "",
          description: "",
          image: "",
        },
      }}
    >
      {!isLoadingInjectableTreatmentePageData ? children : <Preloader />}
    </InjectableTreatmentContext.Provider>
  );
}

export function useInjectableTreatmentPage(){
  const context = useContext(InjectableTreatmentContext);
  if (!context) {
    throw new Error(
      "useInjectableTreatment must be used within a injectableTreatmentProvider"
    );
  }
  return context;
}
