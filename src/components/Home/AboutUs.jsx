import Image from "next/image";
import React from "react";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { Body } from "../textComponents/Body";
import { SmallBody } from "../textComponents/SmallBody";

const AboutUs = () => {
  const cardData = [
    {
      ImageSource: "/NewHome/icons/1.svg",
      title: "ENHANCED EFFICIENCY",
      description:
        "Automated and mechanized material handling reduces manual labor and speeds up processes.",
    },
    {
      ImageSource: "/NewHome/icons/2.svg",
      title: "WORKPLACE SAFETY",
      description:
        "Proper equipment minimizes the risk of injuries caused by lifting, pushing, and carrying heavy loads.",
    },
    {
      ImageSource: "/NewHome/icons/3.svg",
      title: "COST REDUCTION",
      description:
        "Efficient material handling leads to lower operational costs by reducing product damage and labor expenses.",
    },
    {
      ImageSource: "/NewHome/icons/4.svg",
      title: "IMPROVED SPACE UTILIZATION",
      description:
        "Warehouse material handling equipment helps in better organization, storage & maximizing available space.",
    },
  ];
  return (
    <Container className="bg-[#050742] flex justify-between gap-10 flex-wrap 2xl:!flex-nowrap">
      <div className="flex flex-col gap-4 max-w-screen-sm" data-aos="fade-up">
        <Heading className="text-white capitalize">
          <span>The importance of</span>
          <span className="2xl:text-nowrap text-[#00aeef] block">
            material handling equipment
          </span>
          <span>in modern industries</span>
        </Heading>

        <Body className="text-justify flex flex-col gap-4 !font-medium text-white">
          <span>
            Material handling equipment plays an irreplaceable role in
            industries that depend on moving bulk materials and heavy loads for
            uninterrupted operational flow. Every business that invests in
            high-quality material handling equipment will experience the
            multiple benefits such as reduced workplace injuries and improved
            operational efficiency while minimizing waste.
          </span>
          <span>
            At Safelift, we provide customized material handling equipment
            tailored to meet the specific needs of industries, ensuring seamless
            operations and maximum productivity.
          </span>
        </Body>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardData.map((card, index) => (
          <Card
            key={index} // Using index as key (or use a unique ID if available)
            ImageSource={card.ImageSource}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;

const Card = ({ title, description, ImageSource }) => {
  return (
    <div className="bg-[#00002e] p-3 px-4 rounded-xl w-full size-52 6xl:!size-96 flex flex-col gap-4 justify-between">
      <div className="flex items-center justify-between w-full gap-2">
        <Image
          src={ImageSource}
          alt="Material Handling"
          width={500}
          height={500}
          className="w-24 h-24 object-contain"
        />
        <Body className="text-[#00aeef] !font-bold !capitalize text-right">
          {title}
        </Body>
      </div>
      <SmallBody className="text-white">{description}</SmallBody>
    </div>
  );
};
