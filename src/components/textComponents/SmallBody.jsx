import React from "react";

export const SmallBody = ({ children, className, style, ...props }) => {
  return (
    <p
      style={style}
      className={`font-inter text-mdsmallText font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
