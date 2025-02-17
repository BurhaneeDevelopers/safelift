"use client";
import Banner from "@/components/Banner";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { slugify, unslugify } from "@/utils/slugify";

const ProductList = ({ params }) => {
  const [products, setProducts] = useState([]);

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(productCategory);
        const result = await client.fetch(
          `*[_type == "product" && category == $category]`,
          { category: productCategory }
        );
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Banner title={"Products"} ImageSource={"/Products/Banner.webp"} />

      <div className="p-10 sm:p-20">
        <div className="flex flex-wrap justify-center items-center">
          {products.map((item, i) => {
            return (
              <ProductCards
                key={i}
                title={item?.title}
                productimage={item?.productimage}
                productCategory={productCategory}
                slug={item?.slug.current}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

const ProductCards = ({ title, productimage, productCategory, slug }) => {
  return (
    <div
      className="flex flex-col justify-center items-center mb-10 mx-4"
      data-aos="fade-up"
    >
      <Link
        href={"/products/" + `${slugify(productCategory)}/` + slugify(slug)}
        class="w-96 h-96 border-4 border-gray-200"
      >
        <div class="relative flex justify-center items-center h-full transform transition-transform p-2">
          <Image
            src={urlForImage(productimage)}
            alt={productCategory}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 z-50 w-96 text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-16 max-h-16 mt-2">
        <span className="line-clamp-1">{title}</span>
      </h2>
    </div>
  );
};
