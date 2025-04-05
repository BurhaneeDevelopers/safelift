import React from "react";

export const BigBody = ({ children, className, style, ...props }) => {
  return (
    <p
      style={style}
      className={`font-inter text-lgbody 6xl:text-lgcaptionSmall font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
