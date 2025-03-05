"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface SkinCareProductPageContextType {
  skinCareProductPageData: any;
}

const SkinCareProductPageContext = createContext<SkinCareProductPageContextType | undefined>(
  undefined
);

export function SkinCareProductProvider({ children }: { children: React.ReactNode }) {
  const {
    data: skinCareProductPageData,
    isLoading: isLoadingSkinCareProductPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["skinCareProductPageData", "skin-care-products"],
    queryFn: () => getDynamicPageData("skin-care-products"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <SkinCareProductPageContext.Provider
      value={{
        skinCareProductPageData: skinCareProductPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingSkinCareProductPageData ? children : <Preloader />}
    </SkinCareProductPageContext.Provider>
  );
}
export function useSkinCareProductPage() {
  const context = useContext(SkinCareProductPageContext);
  if (!context) {
    throw new Error("useSkinCareProductPage must be used within a SkinCareProductPageContext");
  }
  return context;
}
