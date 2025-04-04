import Banner from "@/components/Banner";
import Container from "@/components/constants/Container";
import Form from "@/components/Contact/Form";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";

const Contact = () => {
  return (
    <div className={""}>
      <Banner title={"Contact us"} ImageSource={"/AboutUs/Banner.webp"} />

      <Form />
    </div>
  );
};

export default Contact;
