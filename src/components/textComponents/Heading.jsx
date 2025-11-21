import React from "react";

export const Heading = ({ children, className, style, as = "h2", ...props }) => {
  const Tag = as;
  return (
    <Tag
      style={style}
      className={`font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 6xl:text-mdsubTitle leading-snug font-bold ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
