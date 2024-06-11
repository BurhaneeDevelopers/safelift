import Image from "next/image";
import React from "react";
import LeftHeading from "../LeftHeading";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="px-10 md:px-20 xl:px-0 py-20 bg-[#25233e]">
      <div className="flex flex-col xl:flex-row justify-around items-center xl:items-start flex-wrap">
        <div className="flex-col">
          {/* Left Heading  */}
          <LeftHeading
            smallTitle="What Is"
            title="Safelift"
            additionalClasses={"text-white"}
          />

          <div className="xl:max-w-xl" data-aos="fade-right">
            <div className="text-white text-center xl:text-justify my-10 text-sm font-medium">
              <p>
                Safelift Industries addressed a crucial gap in the Indian market
                for premium material handling products, swiftly gaining
                recognition and trust for their top-tier, globally complaint
                solutions.
              </p>
              <p>
                Since 1983, Safelift Industries has evolved from a small trading
                business to a prominent conglomerate for Industrial Safety
                Solutions. With four decades of expertise pning three
                generations, we serve a diverse global clientele with a century
                of experience in the material handling industry.
              </p>
            </div>

            <FeatureBar
              title={
                "High-quality lifting products for demanding industrial conditions"
              }
            />
            <FeatureBar
              title={"ISO 9001 Quality Assurance approved manufacturing"}
            />
            <FeatureBar
              title={
                "Cost-effective solutions with in-house testing and certificates"
              }
            />

            <Link
              href={"/about"}
              className="bg-[#008dd2] hover:bg-[#106793] px-5 py-2 w-fit text-white text-lg font-semibold mt-10 mx-auto xl:mx-0"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Images  */}
        <div className="flex relative mt-10 xl:mt-0" data-aos="fade-left">
          <div className="border border-[#2a292c] p-4 absolute -left-24 top-10 ">
            <div className="bg-[#008dd2] w-36 h-36 flex items-center">
              <div
                className="text-white font-semibold flex flex-col
               justify-center items-center text-center"
              >
                <span className="text-7xl text-white font-bold">17</span>
                <span className="text-xl">years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-36">
            <Image
              src={"/Home/Worker.jpg"}
              alt="Workers"
              width={500}
              height={500}
              className="w-72 h-80"
            />
          </div>
          <div className="">
            <Image
              src={"/Home/CraneImage.jpg"}
              alt="Crane"
              width={700}
              height={700}
              className="w-96 h-[35rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const FeatureBar = ({ title }) => {
  return (
    <div className="flex justify-center items-center my-4 h-full">
      <div className="w-16 xl:w-7 h-28 xsm:h-20 xxs:h-16 xs:h-12 sm:h-8 lg:h-8 bg-[#d9dada] flex" />
      <div className="w-full py-2 h-28 xsm:h-20 xxs:h-16 xs:h-12 sm:h-8 lg:h-8 bg-[#008dd2] text-white text-sm px-2 flex items-center text-wrap justify-center xl:justify-start">
        {title}
      </div>
    </div>
  );
};
