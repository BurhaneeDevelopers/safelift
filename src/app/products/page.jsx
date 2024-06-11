import Banner from "@/components/Banner";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const productList = [
    {
      title: "Hoisting Equipment",
      image: "/Products/Prod-1.webp",
    },
    {
      title: "Polyester Lifting & Lashing Products",
      image: "/Products/Prod-2.webp",
    },
    {
      title: "G 80 Riggings",
      image: "/Products/Prod-3.webp",
    },
    {
      title: "G 100 Riggings",
      image: "/Products/Prod-4.webp",
    },
    {
      title: "Lifting Clamps",
      image: "/Products/Prod-5.webp",
    },
    {
      title: "Lifting Tackles",
      image: "/Products/Prod-6.webp",
    },
    {
      title: "Slings",
      image: "/Products/Prod-7.webp",
    },
    {
      title: "Hydraulic Lifting Equipments",
      image: "/Products/Prod-8.webp",
    },
    {
      title: "Special Products",
      image: "/Products/Prod-9.webp",
    },
  ];
  return (
    <div>
      <Banner title={"Products"} ImageSource={"/Products/Banner.webp"} />

      <div className="p-10 sm:p-20">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {productList.map((item, i) => {
            return (
              <ProductCards title={item?.title} image={item?.image} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

const ProductCards = ({ title, image }) => {
  return (
    <Link
      class="relative block !size-96 m-3"
      href={"/products/" + slugify(title)}
      data-aos="fade-up"
    >
      <span class="absolute inset-0 border-4 border-gray-200" />

      <div class="relative flex justify-center items-center h-full transform transition-transform -translate-x-4 -translate-y-4">
        <Image
          src={image}
          alt="ProofLoad"
          width={500}
          height={500}
          className="w-full h-full"
        />

        <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 flex justify-center items-center z-50 absolute w-full text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-16 max-h-16 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};
