"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/Preloader";
import { getDynamicPageData } from "../request/homepage";

interface BlogContextType {
  BlogData: any;
}

const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const {
    data: BlogData,
    isLoading: isLoadingBlogData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["BlogData"],
    queryFn: () => getDynamicPageData("blog"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return <div>Something went wrong</div>;
  }

  return (
    <BlogContext.Provider
      value={{
        BlogData: BlogData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingBlogData ? children : <Preloader />}
    </BlogContext.Provider>
  );
}
export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
