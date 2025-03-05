"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface FooterContextType {
  footerPageData: any;
}

const FooterPageContex = createContext<FooterContextType | undefined>(
  undefined
);

export function FooterPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: footerPageData,
    isLoading: isLoadingFooterPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["footerPageData", "footer"],
    queryFn: () => getDynamicPageData("footer"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <FooterPageContex.Provider
      value={{
        footerPageData: footerPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingFooterPageData ? children : <Preloader />}
    </FooterPageContex.Provider>
  );
}
export function useFooterPage() {
  const context = useContext(FooterPageContex);
  if (!context) {
    throw new Error("useFooterPage must be used within a FooterPageProvider");
  }
  return context;
}
