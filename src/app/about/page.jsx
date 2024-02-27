import FooterBanner from "@/components/About/FooterBanner";
import Introduction from "@/components/About/Introduction";
import Workers from "@/components/About/Workers";
import Banner from "@/components/Banner";
import React from "react";

const About = () => {
  return (
    <div>
      <Banner title={"About us"} ImageSource={"/AboutUs/Banner.webp"} />

      {/* INTRODUCTTION  */}
      <Introduction />

      {/* Workers  */}
      <Workers />

      {/* FooterBanner  */}
      <FooterBanner />
    </div>
  );
};

export default About;
