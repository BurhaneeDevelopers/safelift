import Image from "next/image";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { SmallBody } from "../textComponents/SmallBody";
import { LargeCaption } from "../textComponents/LargeCaption";
import { SmallCaption } from "../textComponents/SmallCaption";

const Applications = () => {
  return (
    <Container className="">
      <Heading className="!capitalize text-center max-w-screen-lg mx-auto">
        <span className="text-[#00aeef]">Applications of Safelift&apos;s</span>{" "}
        Material Handling Equipment
      </Heading>
      <LargeCaption className="text-gray-700 !font-semibold text-center my-4">
        Our material handling equipment is used accross various industries,
        including:
      </LargeCaption>

      <div className="flex flex-wrap justify-center mb-5 gap-10 gap-y-32 mt-32">
        <Card
          img={"/NewHome/icons/5.jpg"}
          title={"Warehousing and Logistics"}
          points={[
            "Optimizing storage space with stackers and forklifts.",
            "Efficient loading/unloading of goods using conveyors.",
          ]}
        />
        <Card
          img={"/NewHome/icons/6.jpg"}
          title={"MANUFACTURING AND PRODUCTION"}
          points={[
            "Moving raw materials with cranes and hoists.",
            "Automating processes with conveyors and AGVs.",
          ]}
        />
        <Card
          img={"/NewHome/icons/7.jpg"}
          title={"CONSTRUCTION"}
          points={[
            "Heavy lifting with gantry cranes and winches.",
            "Material transport using belt conveyors.",
          ]}
        />
        <Card
          img={"/NewHome/icons/8.jpg"}
          title={"AUTOMOTIVE INDUSTRY"}
          points={[
            "Handling vehicle parts with roller conveyors.",
            "Automated storage for efficiency.",
          ]}
        />
        <Card
          img={"/NewHome/icons/9.jpg"}
          title={"E-COMMERCE AND RETAIL"}
          points={[
            "High-density storage solutions with AS/RS.",
            "Efficient package handling with automated conveyors.",
          ]}
        />
      </div>
    </Container>
  );
};

export default Applications;

const Card = ({ title, img, points }) => {
  return (
    <div
      className="flex flex-col bg-[#d4effb] size-80 2xl:!size-96 relative items-center"
      // data-aos="fade-down"
    >
      <div
        // href={`/products/${slugify(title)}`}
        className="border-4 border-white rounded-full absolute -top-20 w-fit mx-auto"
      >
        <Image
          src={img}
          alt="Product 1"
          width={500}
          height={500}
          className="size-40 !object-contain rounded-full border-8 border-[#00aeef] p-1 bg-white"
        />
      </div>

      <div className="mt-28 flex flex-col justify-center items-center gap-7 px-10 2xl:px-16">
        <SmallCaption className="text-[#2b2a29] text-center !font-semibold !capitalize">
          {title.toLowerCase()}
        </SmallCaption>

        <ul className="flex flex-col gap-3">
          {points?.map((point, index) => (
            <li key={index} className="!list-disc">
              <SmallBody className="!font-medium">{point}</SmallBody>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
