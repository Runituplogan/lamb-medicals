"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader"; 
import { getDynamicPageData } from "../request/homepage";

interface ScheduleOnlineContextType {
  ScheduleOnlineData: any;
}

const ScheduleOnlineContext = createContext<ScheduleOnlineContextType | undefined>(
  undefined
);

export function ScheduleOnlineProvider({ children }: { children: React.ReactNode }) {
  const { 
    data: ScheduleOnlineData,
    isLoading: isLoadingScheduleOnlineData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["ScheduleOnlineData", "schedule-online"],
    queryFn: () => getDynamicPageData("schedule-online"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <ScheduleOnlineContext.Provider
      value={{
        ScheduleOnlineData: ScheduleOnlineData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingScheduleOnlineData ? children : <Preloader />}
    </ScheduleOnlineContext.Provider>
  );
}
export function useScheduleOnline() {
  const context = useContext(ScheduleOnlineContext);
  if (!context) {
    throw new Error("useScheduleOnline must be used within a ScheduleOnlineProvider");
  }
  return context;
}
