import React from "react";

export const BigBody = ({ children, className, style, ...props }) => {
  return (
    <p
      style={style}
      className={`font-inter text-mdbody 4xl:text-lgbody font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
