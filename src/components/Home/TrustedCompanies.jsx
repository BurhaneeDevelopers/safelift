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
      <div className="flex mt-10 justify-evenly items-center mx-auto flex-wrap">
        <Image
          src={"/Home/TrustedCompanies/logo-1.webp"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="w-56 h-32"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-2.webp"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="w-56 h-32"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-3.webp"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="w-56 h-32"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-4.webp"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="w-56 h-32"
        />
        <Image
          src={"/Home/TrustedCompanies/logo-5.webp"}
          alt="Tata Steel"
          width={"500"}
          height={"500"}
          className="w-56 h-32"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
