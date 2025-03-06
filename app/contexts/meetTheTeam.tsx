"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface MeetTheTeamContextType {
  meetTheTeamPageData: any;
}

const MeetTeamPageContext = createContext<MeetTheTeamContextType | undefined>(
  undefined
);

export function MeetTheTeamPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: meetTheTeamPageData,
    isLoading: isLoadingMeetTheTeamPageData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["meetTheTeamPageData", "meet-the-team"],
    queryFn: () => getDynamicPageData("meet-the-team"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <MeetTeamPageContext.Provider
      value={{
        meetTheTeamPageData: meetTheTeamPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingMeetTheTeamPageData ? children : <Preloader />}
    </MeetTeamPageContext.Provider>
  );
}
export function useMeetTheTeamPage() {
  const context = useContext(MeetTeamPageContext);
  if (!context) {
    throw new Error("useMeetTheTeamPage must be used within a MeetTheTeamPageProvider");
  }
  return context;
}
