import React from "react";

export const LargeCaption = ({ children, className, style }) => {
  return (
    <h3
      style={style}
      className={`font-inter text-captionSmall sm:text-captionLarge 4xl:text-mdCaptionLarge 6xl:text-lgcaptionLarge leading-snug font-extrabold ${className}`}
    >
      {children}
    </h3>
  );
};
