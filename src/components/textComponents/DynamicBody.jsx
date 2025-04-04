import React from "react";

export const DynamicBody = ({ children, className, style, ...props }) => {
  return (
    <div
      style={style}
      className={`font-inter text-body 4xl:text-mdbody 6xl:text-lgbody font-normal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
