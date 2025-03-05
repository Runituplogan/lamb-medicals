import { sanityClient } from "@/sanity/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/utils/imageBuilder";
import { notFound } from "next/navigation"; // Ensure proper error handling

interface BlogPostProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    mainImage,
    title,
    publishedAt,
    body
  }`;

  return sanityClient.fetch(query, { slug });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug);

  if (!post) return notFound(); // Uses Next.js's built-in 404 handling

  return (
    <div className="w-full py-[100px] px-8 lg:px-16">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-gray-500 text-center font-semibold">
          {new Date(post.publishedAt).toDateString()}
        </p>
        <h1 className="text-3xl font-bold mt-2 text-center pb-6">{post.title}</h1>

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

        <div className="mt-6 text-gray-700">
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({ children }) => <p className="mb-4">{children}</p>,
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-6">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold mt-5">{children}</h2>,
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
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
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
