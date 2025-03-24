"use client"
import Blog from "./_components/Blog";
import Hero from "./_components/Hero";
import { useBlog } from "../contexts/blogContext";
import { useEffect } from "react";
import { heroSection } from "../services/types/servicePageCustomTypes";

const Page = () => {
  const { BlogData } = useBlog()
  const meta = BlogData?.meta
  ? JSON.parse(BlogData.meta)
  : {};

useEffect(() => {
  if (meta.og_title) {
    document.title = meta.og_title;
  } else if (BlogData?.title) {
    document.title = BlogData.title;
  }

  if (meta.og_description) {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.og_description);
  }

  if (meta.keywords) {
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", meta.keywords.join(", "));
  }
}, [meta, BlogData]);

const heroSection: heroSection = BlogData?.content?.find(
  (item: any) => item.type === "hero"   )

  return (
    <main className="h-full w-full">
      <Hero data={heroSection}/>
      <Blog />
    </main>
  );
};

export default Page;
