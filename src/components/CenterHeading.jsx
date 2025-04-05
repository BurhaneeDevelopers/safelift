import React from "react";
import { Heading } from "./textComponents/Heading";

const CenterHeading = ({ title, textColor, additionalClasses }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${additionalClasses} mx-auto`}
      data-aos="zoom-in-down"
    >
      <Heading
        className={`font-bold uppercase ${textColor}`}
      >
        {title}
      </Heading>
      <div className="bg-[#008dd2] w-52 sm:w-60 mx-auto md:mx-0 md:w-96 h-1.5 mt-2"></div>
    </div>
  );
};

export default CenterHeading;
