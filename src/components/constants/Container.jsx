import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={`p-5 py-10 lg:p-14 lg:px-14 2xl:p-20 2xl:!px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
