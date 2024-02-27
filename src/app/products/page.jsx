import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const Products = () => {
  const productList = [
    {
      title: "Hoisting Equipment",
    },
    {
      title: "Polyester Lifting & Lashing Products",
    },
    {
      title: "G 80 Riggings",
    },
    {
      title: "G 100 Riggings",
    },
    {
      title: "Lifting Clamps",
    },
    {
      title: "Lifting Tackles",
    },
    {
      title: "Slings",
    },
    {
      title: "Hydraulic Lifting Equipments",
    },
    {
      title: "Special Products",
    },
  ];
  return (
    <div>
      <Banner title={"Products"} ImageSource={"/AboutUs/Banner.webp"} />

      <div className="p-20">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {productList.map((item, i) => {
            return <ProductCards title={item?.title} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

const ProductCards = ({ title }) => {
  return (
    <div class="relative block !size-96 m-3">
      <span class="absolute inset-0 border-4 border-gray-200" />

      <div class="relative flex justify-center items-center h-full transform transition-transform -translate-x-4 -translate-y-4">
        <Image
          src={"/Products/demo.jpg"}
          alt="ProofLoad"
          width={500}
          height={500}
          className="w-full h-full"
        />

        <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 flex justify-center items-center z-50 absolute w-full text-white font-semibold text-xl min-h-16 max-h-16">
          {title}
        </h2>
      </div>
    </div>
  );
};
