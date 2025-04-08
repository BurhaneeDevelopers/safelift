import React from "react";
import Banner from "@/components/Banner";
import BlogList from "@/components/Blogs/BlogList";

const Blogs = () => {
  return (
    <div className="">
      <Banner title={"Blogs"} ImageSource={"/Products/Banner.webp"} />
      <BlogList />
    </div>
  );
};

export default Blogs;
