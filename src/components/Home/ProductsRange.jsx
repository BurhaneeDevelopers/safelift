import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";

const ProductsRange = () => {
  return (
    <div>
      <div className="bg-[#282547] py-5">
        <CenterHeading title={"Our Products Range"} textColor={"text-white"} />
      </div>

      <div className="p-10">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-wrap justify-center mb-5">
            <UpCard title={"Hoisting Equipments"} />
            <DownCard title={"Polyester Lifting and Lashing Products"} />
            <UpCard title={"Riggings"} />
            <DownCard title={"Lifting Clamps"} />
          </div>

          <div className="flex flex-wrap justify-center mt-5">
            <UpCard title={"Lifting Tackles"} />
            <DownCard title={"Slings"} />
            <UpCard title={"Hydraulic Lifting Equipments"} />
            <DownCard title={"Special Products"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsRange;

const UpCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5">
      <div className="flex flex-col bg-[#a2d9f7] h-96">
        <Image
          src={"/Home/Product-1.png"}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 h-96"
        />
      </div>

      <h4 className="font-bold text-[#2b2a29] text-xl text-center">{title}</h4>
    </div>
  );
};

const DownCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5">
      <div className="flex flex-col bg-[#d4edfc] h-96 my-5 sxm:mt-32">
        <Image
          src={"/Home/Product-1.png"}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 h-96"
        />
      </div>

      <h4 className="font-bold text-[#2b2a29] text-xl text-center">{title}</h4>
    </div>
  );
};
