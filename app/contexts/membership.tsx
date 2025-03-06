"use client";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface MembershipPageContextType {
  membershipPageData: any;
}

const MembershipPageContext = createContext<MembershipPageContextType | undefined>(
  undefined
);

export function MembershipPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: membershipPageData,
    isLoading: isLoadingMembershipPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["membershipPageData", "membership"],
    queryFn: () => getDynamicPageData("membership"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <MembershipPageContext.Provider
      value={{
        membershipPageData: membershipPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingMembershipPageData ? children : <Preloader />}
    </MembershipPageContext.Provider>
  );
}
export function useMembershipPage() {
  const context = useContext(MembershipPageContext);
  if (!context) {
    throw new Error("useMembershipPage must be used within a MembershipPageProvider");
  }
  return context;
}
