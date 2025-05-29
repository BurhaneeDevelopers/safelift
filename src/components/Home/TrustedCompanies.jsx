import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";
import AboutUs from "./AboutUs";
import Container from "../constants/Container";
import { Body } from "../textComponents/Body";
import { Heading } from "../textComponents/Heading";

const TrustedCompanies = () => {
  return (
    <Container className="flex flex-wrap 2xl:flex-nowrap items-center justify-between gap-10 lg:!pb-32">
      <div className="flex gap-16 2xl:gap-36 4xl:gap-32 relative">
        <Image
          src="/NewHome/solutions/solution-1.webp"
          alt="Material Handling"
          width={500}
          height={500}
          className="w-40 h-40 lg:w-72 lg:h-52 2xl:w-80 2xl:h-52 absolute -bottom-16 2xl:-bottom-10 left-5 2xl:-left-0 border-4 border-white object-cover object-bottom"
        />
        <div className="w-3 h-32 md:h-40 2xl:h-48 rounded-full bg-[#00aeef]"></div>
        <Image
          src="/NewHome/solutions/solution-2.webp"
          alt="Material Handling"
          width={500}
          height={500}
          className="ww-72 h-[16rem] lg:w-96 lg:h-96 2xl:w-96 2xl:h-[26rem] object-cover object-center border-8 border-[#8dd7f7]"
        />
      </div>
      <div
        className="flex flex-col gap-4 max-w-screen-sm xl:max-w-screen-sxm 4xl:max-w-screen-sm 6xl:max-w-screen-lg mt-10 2xl:mt-0"
        data-aos="fade-up"
      >
        <Heading>
          ENHANCE EFFICIENCY & SAFETY WITH SAFELIFT’S CUTTING-EDGE{" "}
          <span className="2xl:text-nowrap text-[#00aeef]">
            MATERIAL HANDLING SOLUTIONS
          </span>
        </Heading>

        <Body className="text-justify flex flex-col gap-4 !font-medium">
          <span>
            Safelift has been a trailblazer in material handling Equipment
            technology for over 20 years, specializing in the design and
            production of top-tier equipment and solutions. Our company stands
            as India&apos;s biggest producer of Bulk Material Handling equipment
            while offering a comprehensive range of products designed to meet
            specific needs of multiple industries such as steel, power, marine,
            chemical, cement, mining, fertilizer among others.
          </span>
          <span>
            Adopting efficient material handling equipment is essential for
            fast-paced industries to boost productivity while lowering labor
            expenses and safeguarding workplace conditions. The proper warehouse
            material handling equipment in warehouses, factories, and logistics
            hubs enables significant improvement in operational efficiency.
          </span>
          <span>
            Safelift focuses on producing top-notch material handling solutions
            that serve multiple sectors like manufacturing, logistics,
            warehousing, construction, and beyond. Our material handling
            equipment solutions enable smooth processing and storage of
            materials, boosting business operations and decreasing downtime.
          </span>
        </Body>
      </div>
    </Container>
  );
};

export default TrustedCompanies;
