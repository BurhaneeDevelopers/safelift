import React from "react";

export const LargeHeading = ({ children, className, style, as = "h2", ...props }) => {
  const Tag = as;
  return (
    <Tag
      style={style}
      className={`font-inter text-xlcaptionLarge sm:text-mdsubTitle 6xl:text-title leading-snug font-extrabold ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
