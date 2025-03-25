import Image from "next/image";
import React from "react";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { LargeCaption } from "./../textComponents/LargeCaption";
import { Body } from "../textComponents/Body";
import { BigBody } from "../textComponents/BigBody";

const WhyUs = () => {
  return (
    <Container className="bg-[#050742] flex flex-col gap-10">
      <div
        className="flex flex-col gap-4 mx-auto max-w-screen-md"
        data-aos="fade-up"
      >
        <Heading className="text-white capitalize text-center">
          <span className="text-nowrap text-[#00aeef]">
            Why choose safelift{" "}
          </span>
          <span>as your material handling equipment manufacturer</span>
        </Heading>

        <LargeCaption className="text-white !font-semibold text-center">
          As a leading material handling equipment manufacturer, Safelift stands
          out due to:
        </LargeCaption>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-20 2xl:gap-10">
        <div className="flex flex-col gap-20 2xl:gap-4 items-center">
          <Card
            index={1}
            title={"Cutting Edge Technology and Innovation"}
            content={
              <Body className="!font-medium text-justify">
                We integrate the latest technology into our material handling
                equipment, ensuring superior performance and energy efficiency.
                Our R&D team continuously innovates to meet evolving industry
                needs.
              </Body>
            }
          />
          <Card
            index={2}
            title={"Customized Solutions for Diverse Industries"}
            content={
              <Body className="!font-medium text-justify">
                We understand that every industry has unique requirements. Our
                team works closely with clients to design and manufacture
                material handling equipment tailored to their specific needs.
              </Body>
            }
          />
          <Card
            index={3}
            title={"Sustainability and Eco-Friendly Solutions"}
            content={
              <Body className="!font-medium text-justify">
                We prioritize sustainability by designing energy-efficient
                equipment that reduces carbon footprints while maintaining
                optimal performance.
              </Body>
            }
          />
        </div>
        <div className="flex flex-col gap-20 2xl:gap-4 items-center">
          <Card
            index={4}
            title={"High-Quality Manufacturing Standards"}
            content={
              <Body className="!font-medium text-justify">
                We follow strict quality control measures, ensuring our
                equipment meets global safety and performance standards. Every
                component undergoes rigorous testing for durability and
                reliability.
              </Body>
            }
          />
          <Card
            index={5}
            title={"Comprehensive After-Sales Support"}
            className="!h-full"
            content={
              <div className="flex flex-col justify-end h-full gap-7">
                <Body className="!font-medium text-justify">
                  At Safelift, our relationship with clients doesn’t end after
                  the sale. We provide:
                </Body>

                <ul className="flex flex-col gap-5">
                  <li>
                    <Body className="!font-medium text-justify">
                      <span className="font-bold">
                        Installation Assistance –{" "}
                      </span>
                      Expert guidance for seamless integration.
                    </Body>
                  </li>
                  <li>
                    <Body className="!font-medium text-justify">
                      <span className="font-bold">Maintenance Services – </span>
                      Regular servicing to enhance equipment lifespan.
                    </Body>
                  </li>
                  <li>
                    <Body className="!font-medium text-justify">
                      <span className="font-bold">
                        Spare Parts Availability –{" "}
                      </span>
                      Genuine replacement parts to ensure smooth operations.
                    </Body>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;

const Card = ({ index, title, content, className }) => {
  return (
    <div
      className={`flex flex-col justify-center h-60 w-fit relative ${className}`}
    >
      <div className="bg-[#00aeef] size-16 2xl:size-20 rounded-full border-4 border-white absolute -top-5 2xl:top-3 -left-5 z-10 flex justify-center items-center">
        <LargeCaption className="text-white text-center">{index}</LargeCaption>
      </div>
      <div className="bg-[#00aeef] p-3 px-7 flex justify-center items-center rounded-e-full translate-y-7">
        <BigBody className="text-white text-right 2xl:text-center !font-bold">
          {title}
        </BigBody>
      </div>
      <div className="bg-white h-full max-w-screen-sxm p-10 flex flex-col justify-end">
        {content}
      </div>
    </div>
  );
};
