import Banner from "@/components/Banner";
import Container from "@/components/constants/Container";
import Form from "@/components/Contact/Form";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

export async function generateMetadata() {
  const seoData = await getSEOData("/contact");
  
  return generateMetadataFromSEO(seoData, {
    title: "Contact Us | Safelift",
    description: "Get in touch with Safelift for material handling equipment solutions. Contact us for inquiries, support, and more information.",
    alternates: {
      canonical: "https://safelift.in/contact",
    },
  });
}

const Contact = () => {
  return (
    <div className={""}>
      <Banner title={"Contact us"} ImageSource={"/AboutUs/Banner.webp"} />

      <Form />
    </div>
  );
};

export default Contact;
