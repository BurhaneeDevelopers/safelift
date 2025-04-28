"use client";
import React from "react";
import Container from "../constants/Container";
import Image from "next/image";
import { SmallCaption } from "../textComponents/SmallCaption";
import { Body } from "../textComponents/Body";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../../../sanityBackend/lib/client";
import { urlForImage } from "../../../sanityBackend/lib/image";
import { components } from "@/utils/portableTextComponent";
import { DynamicBody } from "../textComponents/DynamicBody";
import { PortableText } from "@portabletext/react";
import { LargeCaption } from "../textComponents/LargeCaption";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "blogs"]`);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dummyImage =
    "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  return (
    <Container
      className={
        blogs.length !== 0
          ? "grid md:grid-cols-3 gap-8"
          : "flex justify-center items-center"
      }
    >
      {blogs.length !== 0 ? (
        blogs.map((blog, i) => (
          <article key={i} className="group cursor-pointer">
            <Image
              width={500}
              height={500}
              alt=""
              // src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              src={urlForImage(blog.blogImage) || dummyImage}
              className="h-72 6xl:h-96 w-full object-cover shadow-xl transition group-hover:grayscale-0 grayscale-[70%]"
            />

            <div className="mt-4 flex flex-col gap-4 items-start">
              <LargeCaption className="">{blog.title}</LargeCaption>

              <DynamicBody className="line-clamp-3 font-medium text-gray-700">
                <PortableText value={blog.content} components={components} />
              </DynamicBody>

              <Link
                href={"/blogs/" + blog.slug.current}
                className="w-fit bg-[#050742] p-3 px-10"
                rel="dofollow"
              >
                <Body className="text-gray-200 !font-medium">Read more...</Body>
              </Link>
            </div>
          </article>
        ))
      ) : (
        <LargeCaption className="text-center text-[#050742] mx-auto">
          Blogs Coming Soon...
        </LargeCaption>
      )}
    </Container>
  );
};

export default BlogList;
