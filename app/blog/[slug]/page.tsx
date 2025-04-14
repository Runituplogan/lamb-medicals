import { sanityClient } from "@/sanity/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/utils/imageBuilder";
import { notFound } from "next/navigation";
import Link from "next/link"; // Import Next.js Link for navigation

interface BlogPostProps {
  params: { slug: string };
}

// Fetch the current post
async function getPost(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    mainImage,
    title,
    publishedAt,
    body
  }`;
  return sanityClient.fetch(query, { slug });
}

// Fetch the last 3 published articles, excluding the current one
async function getRecentPosts(slug: string) {
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
}

export default async function BlogPost({ params }: any) {
  const post = await getPost(params.slug);
  const recentPosts = await getRecentPosts(params.slug);

  if (!post) return notFound();

  return (
    <div className="w-full py-[100px] px-8 lg:px-16">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-[gray] text-center font-semibold">
          {new Date(post.publishedAt).toDateString()}
        </p>
        <h1 className="text-3xl font-bold mt-2 text-center pb-6">
          {post.title}
        </h1>

        {post.mainImage && (
          <div className="w-full h-auto mt-4 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={800}
              height={450}
              className="rounded-lg w-full h-full max-h-[500px] object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-6 text-[grey]">
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({ children }) => <p className="mb-4">{children}</p>,
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-5">{children}</h2>
                ),
                strong: ({ children }) => (
                  <strong className="text-2xl font-semibold mt-5">
                    {children}
                  </strong>
                ),
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={
                      value?.href?.startsWith("http")
                        ? value.href
                        : `https://${value.href}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="my-4">
                    <Image
                      src={urlFor(value).url()}
                      alt="Sanity Image"
                      width={1000}
                      height={1000}
                      className="rounded-lg w-full max-h-[500px] object-cover"
                    />
                  </div>
                ),
                code: ({ value }) => (
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code className="text-sm">{value.code}</code>
                  </pre>
                ),
              },
            }}
          />
        </div>

        {/* Display the latest 3 articles */}
        {recentPosts.length > 0 && (
          <div className="mt-12 w-full">
            <h2 className="text-2xl font-bold text-[grey] mb-4">Other Updates</h2>
            <div className="flex items-center justify-between flex-wrap">
              {recentPosts.slice(1, 4).map((item:any, index:any) => (
               <div key={index} className="sm:w-[33%] sm:flex-row w-full flex flex-col items-start justify-start">
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
                   {item.title?.length > 39
                     ? item.title.substring(0, 39) + "..."
                     : item.title|| ""}
                 </p>
   
                 <p className="text-black font-medium text-sm lg:text-[14px] mt-5 font-work_sans">
                   {new Date(item.publishedAt).toDateString()}
                 </p>
   
                 <p className="text-black font-[400] text-sm lg:text-[14px] mt-6 font-work_sans">
                   {item.body?.[0]?.children?.[0]?.text?.length > 100
                     ? item.body[0].children[0].text.substring(0, 100) + "..."
                     : item.body?.[0]?.children?.[0]?.text || ""}
                 </p>
               </div>
   
               <Link href={`/blog/${item.slug?.current}`}>
                 <button className="rounded-md bg-primary px-4 py-2.5 text-white font-work_sans mt-7 text-sm md:text-base ease transition-all duration-300 hover:opacity-65">
                   Read more
                 </button>
               </Link>
             </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
