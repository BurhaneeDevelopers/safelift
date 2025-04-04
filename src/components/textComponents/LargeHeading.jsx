import React from "react";

export const LargeHeading = ({ children, className, style, ...props }) => {
  return (
    <h1
      style={style}
      className={`font-inter text-xlcaptionLarge sm:text-mdsubTitle 6xl:text-title leading-snug font-extrabold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
