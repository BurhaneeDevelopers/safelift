import React from "react";

export const SmallCaption = ({ children, className, style }) => {
  return (
    <h4
      style={style}
      className={`font-inter text-captionSmall sm:text-mdcaptionSmall 4xl:text-mdCaptionLarge 6xl:text-lgcaptionLarge leading-snug font-extrabold ${className}`}
    >
      {children}
    </h4>
  );
};
