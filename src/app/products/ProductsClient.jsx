"use client"
import Banner from "@/components/Banner";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanityBackend/lib/client";
import { urlForImage } from "../../../sanityBackend/lib/image";

const ProductsClient = () => {
  const customOrder = [
    "Hoisting Equipment",
    "Slings For Lifting",
    "Shackle",
    "Lifting Points",
    "G80 Lifting",
    "G100 Lifting",
    "Warehouse Management Products",
    "Chains For Lifting",
    "Wire Rope and Accessories",
    "Rope Pulley",
    "Permanent Magnet Lifting",
    "Lifting Clamps",
    "Non Marking Clamps",
    "Dynamometer",
    "Spring Balance",
    "Lashing Products",
    "Fall Arrestor",
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "mainCategory"]`);

        // Sort based on custom order
        const sorted = customOrder
          .map((title) => result.find((cat) => cat.title === title))
          .filter(Boolean); // Remove undefined if any title doesn't match

        setCategories(sorted);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Banner title={"Categories"} ImageSource={"/Products/Banner.webp"} />

      <div className="p-10 sm:p-20">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {categories.map((item, i) => {
            return (
              <ProductCards title={item?.title} slug={item.slug} categoryImage={item?.categoryImage} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsClient;

const ProductCards = ({ title, categoryImage, slug }) => {
  return (
    <Link
      class="relative block !size-96 m-3"
      href={`/products/${slug.current}`}
      data-aos="fade-up"
    >
      <span class="absolute inset-0 border-4 border-gray-200 shadow" />

      <div class="relative flex justify-center items-center h-full transform transition-transform -translate-x-4 -translate-y-4">
        <Image
          src={categoryImage ? urlForImage(categoryImage) : "https://placehold.co/600x400/orange/white"}
          alt="ProofLoad"
          width={500}
          height={500}
          className="w-full h-full object-cover border border-gray-200"
        />

        <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 flex justify-center items-center z-50 absolute w-full text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-16 max-h-16 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};
