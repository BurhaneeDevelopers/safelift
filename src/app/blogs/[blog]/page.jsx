import React from "react";
import Banner from "@/components/Banner";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanityBackend/lib/image";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { PortableText } from "@portabletext/react";
import { DynamicBody } from "@/components/textComponents/DynamicBody";
import { components } from "@/utils/portableTextComponent";
import { sanityFetch } from "../../../../sanityBackend/utils/sanityFetch";
import { groq } from "next-sanity";
import { Heading } from "@/components/textComponents/Heading";

const Blog = async ({ params }) => {
  const slug = params.blog;
  console.log(slug);

  const BLOG_QUERY = groq`*[_type == "blogs" && slug.current == $slug][0]`;
  const BLOGS_QUERY = groq`*[_type == "blogs"]`;

  const blog = await sanityFetch({
    query: BLOG_QUERY,
    params: {
      slug: slug, // Passing slug as a parameter
    },
  });

  const blogs = await sanityFetch({
    query: BLOGS_QUERY,
  });

  return (
    <Container>
      <Suspense
        fallback={
          <div className="absolute top-0 left-0 text-white">Loading...</div>
        }
      >
        <Banner title={blog?.title} ImageSource={"/Infra/Banner.webp"} />

        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            {blog?.blogImage ? (
              <Image
                width={2000}
                height={2000}
                src={urlForImage(blog?.blogImage)}
                alt={blog?.title}
                className="object-cover object-center w-full h-80 xl:h-[32rem] rounded-xl  bg-white"
              />
            ) : (
              <div className="w-full h-80 xl:h-[28rem] rounded-xl bg-gray-200 animate-pulse">
                {/* Loading {product.title} Image */}
              </div>
            )}

            <div>
              <Body className="mt-6 text-[#197ab3] uppercase !font-semibold">
                {blog?.slug.current}
              </Body>

              <Heading className="max-w-screen-xl my-4 text-2xl font-semibold leading-tight text-[#050742]">
                {blog?.title}
              </Heading>

              {blog?.content ? (
                <DynamicBody>
                  <PortableText value={blog?.content} components={components} />
                </DynamicBody>
              ) : (
                <>
                  <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                  <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                  <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                  <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                </>
              )}

              <div className="flex items-center mt-6">
                <Image
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Profile"
                  width={500}
                  height={500}
                />

                <div className="mx-4">
                  <Body className="text-gray-900 font-semibold">Safelift</Body>
                  <p className="text-sm text-gray-500 font-medium">
                    Safelift & Team
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <Body className="text-[#197ab3] capitalize text-xl font-semibold">
              Explore Blogs
            </Body>
            {blog?.blogImage ? (
              blogs.map((item, index) => {
                return (
                  <div key={index} className="my-5">
                    <div className="flex gap-3 items-center">
                      <Image
                        className="object-cover object-center min-w-[5rem] max-w-[5rem] h-20 rounded-xl"
                        width={500}
                        height={500}
                        src={urlForImage(item.blogImage)}
                        alt={item.title}
                      />

                      <Link href={"/blogs/" + item.slug.current} className="">
                        <Body
                          className={
                            "mt-2 !font-bold hover:underline text-[#050742] line-clamp-3"
                          }
                        >
                          {item.title}
                        </Body>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex gap-3 items-center">
                <div className="min-w-[5rem] h-20 rounded-xl animate-pulse bg-gray-200"></div>

                <div className="">
                  <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                  <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                  <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                </div>
              </div>
            )}

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
          </div>
        </div>
      </Suspense>
    </Container>
  );
};

export default Blog;
