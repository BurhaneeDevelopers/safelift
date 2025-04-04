import React from "react";

export const Heading = ({ children, className, style, ...props }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 6xl:text-mdsubTitle leading-snug font-bold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};
