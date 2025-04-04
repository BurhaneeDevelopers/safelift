import FooterBanner from "@/components/About/FooterBanner";
import Introduction from "@/components/About/Introduction";
import Workers from "@/components/About/Workers";
import Banner from "@/components/Banner";
import OurTeam from "@/components/Home/OurTeam";
import React from "react";

export const metadata = {
  title: "About Us | Safelift",
  description:
    "Safelift Industries delivers premium, globally compliant material handling solutions in India. Trusted for quality, innovation & efficiency.",
  alternates: {
    canonical: `https://safelift.in/about`,
  },
};

const About = () => {
  return (
    <div className="overflow-hidden">
      <Banner title={"About us"} ImageSource={"/AboutUs/Banner.webp"} />

      {/* INTRODUCTTION  */}
      <Introduction />

      {/* Workers  */}
      {/* <Workers /> */}

      {/* Our Team  */}
      {/* <OurTeam /> */}

      {/* FooterBanner  */}
      <FooterBanner />
    </div>
  );
};

export default About;
