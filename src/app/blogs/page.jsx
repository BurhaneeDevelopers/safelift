import React from "react";
import Link from "next/link";
import Banner from "@/components/Banner";
import BlogList from "@/components/Blogs/BlogList";

const blogs = [
  {
    id: 1,
    title: "Mastering Next.js: The Ultimate Guide",
    description:
      "Learn how to build blazing-fast web applications with Next.js in this comprehensive guide.",
    image: "https://source.unsplash.com/600x400/?technology,code",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer",
    description:
      "Discover why developers are switching to Tailwind CSS for rapid UI development.",
    image: "https://source.unsplash.com/600x400/?design,ux",
  },
  {
    id: 3,
    title: "React vs. Vue: Which One Should You Choose?",
    description:
      "A deep dive into the pros and cons of React and Vue to help you make an informed choice.",
    image: "https://source.unsplash.com/600x400/?react,vue",
  },
];

const Blogs = () => {
  return (
    <div className="">
      <Banner title={"Blogs"} ImageSource={"/Products/Banner.webp"} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blogs;
