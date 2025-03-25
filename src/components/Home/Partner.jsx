import React from "react";
import Image from "next/image";
import Container from "../constants/Container";
import { Body } from "../textComponents/Body";
import { Heading } from "../textComponents/Heading";

const Partner = () => {
  return (
    <Container className="flex flex-wrap 2xl:flex-nowrap items-center justify-between gap-10 !bg-[#d4effb]">
      <div className="flex gap-32 relative">
        <Image
          src="/NewHome/partner/partner.webp"
          alt="Partner"
          width={500}
          height={500}
          className="!w-screen h-[24rem] 2xl:!h-[34rem] object-cover object-center border-8 border-[#00aeef]"
        />
      </div>
      <div className="flex flex-col gap-4 max-w-4xl" data-aos="fade-up">
        <Heading className="2xl:mb-10">
          Partner with Safelift for Unmatched Material Handling Solutions
        </Heading>

        <Body className="text-justify flex flex-col gap-7 !font-medium">
          <span>
            Safelift dedicates itself to delivering the superior material
            handling equipment that improves operational efficiency while
            cutting expenses and safeguarding workplace environments. Our
            expertise spans both customized warehouse material handling
            equipment and large-scale industrial solutions to fulfill your
            needs.
          </span>
          <span>
            Reach out to us today to talk about your requirements and see how
            our material handling equipment can improve your operations.
          </span>
        </Body>

        <button className="w-fit bg-[#050742] p-3 px-10 2xl:mt-7">
          <Body className="text-gray-200 !font-medium">
            Let&apos;s connect
          </Body>
        </button>
      </div>
    </Container>
  );
};

export default Partner;
