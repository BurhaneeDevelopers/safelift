"use client"
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanityBackend/lib/image";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { PortableText } from "@portabletext/react";
import { DynamicBody } from "@/components/textComponents/DynamicBody";
import { components } from "@/utils/portableTextComponent";
import { Heading } from "@/components/textComponents/Heading";
import { client } from "../../../../sanityBackend/lib/client";

const BlogList = ({ params }) => {
  const slug = params.blog;
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Combine both fetch operations into a single useEffect to prevent race conditions
  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      try {
        // Fetch both blog and blogs data simultaneously
        const [blogResult, blogsResult] = await Promise.all([
          client.fetch(
            `*[_type == "blogs" && slug.current == $slug][0]`,
            { slug: slug }
          ),
          client.fetch(`*[_type == "blogs"]`)
        ]);
        
        setBlog(blogResult);
        setBlogs(blogsResult || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setBlog(null);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // const BLOG_QUERY = groq`*[_type == "blogs" && slug.current == $slug][0]`;
  // const BLOGS_QUERY = groq`*[_type == "blogs"]`;

  // const blog = await sanityFetch({
  //   query: BLOG_QUERY,
  //   params: {
  //     slug: slug, // Passing slug as a parameter
  //   },
  // });

  // const blogs = await sanityFetch({
  //   query: BLOGS_QUERY,
  // });

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <Container>
        <Banner title="Loading..." ImageSource={"/Infra/Banner.webp"} />
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <div className="w-full h-80 xl:h-[32rem] rounded-xl bg-gray-200 animate-pulse" />
            <div className="mt-6">
              <div className="w-32 h-4 bg-gray-200 animate-pulse rounded" />
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded mt-4" />
              <div className="space-y-3 mt-6">
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded" />
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded" />
                <div className="w-3/4 h-3 bg-gray-200 animate-pulse rounded" />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div className="w-32 h-6 bg-gray-200 animate-pulse rounded" />
            <div className="flex gap-3 items-center mt-5">
              <div className="min-w-[5rem] h-20 rounded-xl animate-pulse bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded" />
                <div className="w-3/4 h-3 bg-gray-200 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  // Show error state if blog is not found
  if (!blog) {
    return (
      <Container>
        <Banner title="Blog Not Found" ImageSource={"/Infra/Banner.webp"} />
        <div className="text-center py-12">
          <Heading className="text-2xl text-gray-600 mb-4">
            Sorry, this blog post could not be found.
          </Heading>
          <Link href="/blogs" className="text-[#197ab3] hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Banner title={blog.title} ImageSource={"/Infra/Banner.webp"} />

      <div className="lg:flex lg:-mx-6">
        <div className="lg:w-3/4 lg:px-6">
          {blog.blogImage && (
            <Image
              width={2000}
              height={2000}
              src={urlForImage(blog.blogImage)}
              alt={blog.title}
              className="object-cover object-center w-full h-80 xl:h-[32rem] rounded-xl bg-white"
            />
          )}

          <div>
            <Body className="mt-6 text-[#197ab3] uppercase !font-semibold">
              {blog.slug?.current}
            </Body>

            <Heading className="max-w-screen-xl my-4 text-2xl font-semibold leading-tight text-[#050742]">
              {blog.title}
            </Heading>

            {blog.content && (
              <DynamicBody>
                <PortableText value={blog.content} components={components} />
              </DynamicBody>
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
          
          {blogs.length > 0 ? (
            blogs.map((item) => (
              <div key={item._id || item.slug?.current} className="my-5">
                <div className="flex gap-3 items-center">
                  {item.blogImage && (
                    <Image
                      className="object-cover object-center min-w-[5rem] max-w-[5rem] h-20 rounded-xl"
                      width={500}
                      height={500}
                      src={urlForImage(item.blogImage)}
                      alt={item.title}
                    />
                  )}

                  <Link href={`/blogs/${item.slug?.current}`} className="flex-1">
                    <Body className="mt-2 !font-bold hover:underline text-[#050742] line-clamp-3">
                      {item.title}
                    </Body>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 mt-4">No other blogs available</div>
          )}

          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </div>
      </div>
    </Container>
  );
};

export default BlogList;
