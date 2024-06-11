import React from "react";

const CenterHeading = ({ title, textColor, additionalClasses }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${additionalClasses} mx-auto`}
      data-aos="zoom-in-down"
    >
      <span
        className={`text-3xl lg:text-4xl xl:text-5xl font-bold uppercase ${textColor}`}
      >
        {title}
      </span>
      <div className="bg-[#008dd2] w-52 sm:w-60 mx-auto md:mx-0 md:w-96 h-1.5 mt-2"></div>
    </div>
  );
};

export default CenterHeading;
