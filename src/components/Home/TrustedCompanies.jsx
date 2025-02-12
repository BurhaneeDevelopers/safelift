import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";
import AboutUs from "./AboutUs";

const TrustedCompanies = () => {
  return (
    <div className="p-20">
      <CenterHeading
        textColor={"text-[#2b2a29]"}
        title={"Trusted By 200+ Companies"}
        additionalClasses={"max-w-xl xl:max-w-lg"}
      />
      <div
        className="flex mt-10 justify-around items-end flex-wrap"
        data-aos="fade-up"
      >
        <Image
          src={"/Home/TrustedCompanies/logo-1.png"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="aspect-video h-full w-64 object-contain"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-2.png"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="aspect-video h-full w-64 object-contain"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-3.png"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="aspect-video h-full w-64 object-contain"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-4.png"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="aspect-video h-full w-64 object-contain"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-5.png"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="aspect-video h-full w-64 object-contain"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
