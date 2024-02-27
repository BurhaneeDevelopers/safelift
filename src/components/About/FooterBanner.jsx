import Image from "next/image";
import React from "react";

const FooterBanner = () => {
  return (
    <div className="px-20 hidden md:flex">
      <div className="flex flex-col">
        <div className="px-5 z-10 flex justify-center items-center translate-y-24">
          <Image
            src={"/AboutUs/FooterBanner.webp"}
            width={500}
            height={500}
            alt="Footer Banner"
            className="w-full h-56"
          />

          <div className="w-full flex justify-between items-center absolute px-20 h-full">
            <Stats title={"17"} desc={"years of Experience"} />
            <div className="h-32 bg-gray-200 w-0.5 mx-4"></div>
            <Stats title={"17"} desc={"years of Experience"} />
            <div className="h-32 bg-gray-200 w-0.5 mx-4"></div>
            <Stats title={"17"} desc={"years of Experience"} />
            <div className="h-32 bg-gray-200 w-0.5 mx-4"></div>
            <Stats title={"17"} desc={"years of Experience"} />
          </div>
        </div>

        <div className="bg-[#2694d1] w-full h-20 translate-y-10 z-0"></div>
      </div>
    </div>
  );
};

export default FooterBanner;

const Stats = ({ title, desc }) => {
  return (
    <div className="">
      <span className="block text-white font-bold text-4xl lg:text-5xl text-center">
        {title}
      </span>
      <span className="block text-white font-semibold text-lg lg:text-xl text-center w-24">
        {desc}
      </span>
    </div>
  );
};
