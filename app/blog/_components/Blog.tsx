"use client";

import { sanityClient } from "@/sanity/sanity";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const fetchBlogs = async () => {
  return sanityClient.fetch(
    `*[_type == "blog"]{
      title,
      slug,
      mainImage {
        asset->{
          url
        }
      },
      publishedAt,
      readTime,
      author->{
        name
      },
      categories[]->{
        title
      },
      body
    }`
  );
};
const Blog = () => {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p className="text-center text-white">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading blogs</p>;

  return (
    <div className="w-full py-10 md:py-28 px-8 lg:px-10 2xl:px-48 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-10 gap-y-16 md:gap-y-10 lg:gap-y-14 w-full">
        {blogs.map((item: any, index: number) => (
          <div key={index} className="w-full flex flex-col items-start justify-between">
            <div className="w-full">
              <div className="w-full h-[185px] rounded-sm">
                {item.mainImage?.asset?.url && (
                  <Image
                    src={item.mainImage.asset.url}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full rounded-md object-cover"
                  />
                )}
              </div>
              <p className="text-black font-medium text-[16px] md:text-lg lg:text-[20px] mt-5 font-rubik">
                {item.title}
              </p>

              <p className="text-black font-medium text-sm lg:text-[14px] mt-5 ">
                {new Date(item.publishedAt).toDateString()}
              </p>

              <p className="text-black font-[400] text-sm lg:text-[14px] mt-6 ">
                {item.body?.[0]?.children?.[0]?.text?.length > 100
                  ? item.body[0].children[0].text.substring(0, 100) + "..."
                  : item.body?.[0]?.children?.[0]?.text || ""}
              </p>
            </div>

            <Link href={`/blog/${item.slug?.current}`}>
              <button className="rounded-md bg-primary px-4 py-2.5 text-white  mt-7 text-sm md:text-md ease transition-all duration-300 hover:opacity-65">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
