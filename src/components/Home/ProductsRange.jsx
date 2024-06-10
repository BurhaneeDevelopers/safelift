import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";

const ProductsRange = () => {
  return (
    <div>
      <div className="bg-[#282547] py-5">
        <CenterHeading title={"Our Products Range"} textColor={"text-white"} />
      </div>

      <div className="p-10 py-20">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-wrap justify-center mb-5">
            <UpCard
              title={"Hoisting Equipments"}
              img={"/Home/Products-Range/prod-1.webp"}
            />
            <DownCard
              title={"Polyester Lifting and Lashing Products"}
              img={"/Home/Products-Range/prod-2.webp"}
            />
            <UpCard
              title={"Riggings"}
              img={"/Home/Products-Range/prod-3.webp"}
            />
            <DownCard
              title={"Lifting Clamps"}
              img={"/Home/Products-Range/prod-4.webp"}
            />
          </div>

          <div className="flex flex-wrap justify-center mt-5 sm:mt-0 xl:-translate-y-20">
            <UpCard
              title={"Lifting Tackles"}
              img={"/Home/Products-Range/prod-5.webp"}
            />
            <DownCard
              title={"Slings"}
              img={"/Home/Products-Range/prod-6.webp"}
            />
            <UpCard
              title={"Hydraulic Lifting Equipments"}
              img={"/Home/Products-Range/prod-7.webp"}
            />
            <DownCard
              title={"Special Products"}
              img={"/Home/Products-Range/prod-8.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsRange;

const UpCard = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5">
      <div className="flex flex-col bg-[#a2d9f7] min-h-[32rem] justify-center items-center max-h-[32rem]">
        <Image
          src={img}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 max-h-[32rem] object-contain"
        />
      </div>

      <h4 className="font-bold text-[#2b2a29] text-xl text-center">{title}</h4>
    </div>
  );
};

const DownCard = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5">
      <div className="flex flex-col bg-[#d4edfc] min-h-[32rem] justify-center items-center my-5 sxm:mt-32 max-h-[32rem]">
        <Image
          src={img}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 max-h-[32rem]"
        />
      </div>

      <h4 className="font-bold text-[#2b2a29] text-xl text-center">{title}</h4>
    </div>
  );
};
