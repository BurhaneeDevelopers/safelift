import React from "react";

const LeftHeading = ({ title, smallTitle, additionalClasses }) => {
  return (
    <div
      className="flex flex-col max-w-sm xl:max-w-lg text-center mx-auto xl:mx-0 xl:text-start"
      data-aos="fade-right"
    >
      <span
        className={`text-3xl lg:text-4xl xl:text-5xl font-medium uppercase ${additionalClasses}`}
      >
        {smallTitle}{" "}
        <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold block">
          {title}
        </span>
      </span>
      <div className="bg-[#008dd2] w-52 sm:w-60 mx-auto md:mx-0 md:w-full h-1.5 mt-2"></div>
    </div>
  );
};

export default LeftHeading;
