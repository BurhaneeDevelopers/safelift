import React from "react";
import Banner from "@/components/Banner";
import BlogList from "@/components/Blogs/BlogList";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

export async function generateMetadata() {
  const seoData = await getSEOData("/blogs");
  
  return generateMetadataFromSEO(seoData, {
    title: "Blogs | Safelift",
    description: "Read our latest blogs about material handling equipment, industry insights, and best practices from Safelift experts.",
    alternates: {
      canonical: "https://safelift.in/blogs",
    },
  });
}

const Blogs = () => {
  return (
    <div className="">
      <Banner title={"Blogs"} ImageSource={"/Products/Banner.webp"} />
      <BlogList />
    </div>
  );
};

export default Blogs;
