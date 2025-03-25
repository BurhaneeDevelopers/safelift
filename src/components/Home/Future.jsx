import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";
import AboutUs from "./AboutUs";
import Container from "../constants/Container";
import { Body } from "../textComponents/Body";
import { Heading } from "../textComponents/Heading";

const Future = () => {
  return (
    <Container className="flex flex-wrap 2xl:flex-nowrap items-center justify-between gap-10 bg-[#050742] pb-40 ">
      <div className="flex flex-col gap-4 2xl:max-w-screen-sm" data-aos="fade-up">
        <Heading className="text-white">
          Future of Material Handling Equipment{" "}
          <span className="text-nowrap text-[#00aeef]">What’s Next?</span>
        </Heading>

        <Body className="text-justify flex flex-col gap-4 !font-medium text-white">
          <span>
            Material handling equipment manufacturers must focus on automation
            technologies combined with AI-driven solutions and IoT-enabled
            systems to remain competitive in the future. Safelift leads the
            smart warehousing sector through its development of intelligent
            automated equipment that meets modern business demands sustainably.
          </span>
        </Body>
      </div>

      <div className="flex flex-row-reverse gap-16 2xl:gap-32 relative">
        <Image
          src="/NewHome/material-handling/material-handling-2.webp"
          alt="Material Handling"
          width={500}
          height={500}
          className="w-40 h-40 2xl:w-80 2xl:h-52 absolute -bottom-20 2xl:-bottom-10 right-0 border-4 border-white object-cover object-center"
        />
        <div className="w-3 h-32 md:h-40 2xl:h-48 rounded-full bg-[#00aeef]"></div>
        <Image
          src="/NewHome/material-handling/material-handling-1.webp"
          alt="Material Handling"
          width={500}
          height={500}
          className="w-72 h-[16rem] 2xl:w-96 2xl:h-[26rem] object-cover object-center border-8 border-[#8dd7f7]"
        />
      </div>
    </Container>
  );
};

export default Future;
