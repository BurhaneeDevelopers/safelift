import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={`p-5 py-10 lg:p-20 lg:!px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
