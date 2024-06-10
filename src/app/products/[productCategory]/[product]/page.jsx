"use client";
import CenterHeading from "@/components/CenterHeading";
import Banner from "@/components/Product/Banner";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { client } from "../../../../../sanity/lib/client";
import { urlForImage } from "../../../../../sanity/lib/image";
import { HighlightFeatureCard } from "@/components/Product/HighlightFeatureCard";

const Product = ({ params }) => {
  const [product, setProduct] = useState([]);
  // const builder = imageUrlBuilder(client);

  const productSlug = params.product;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "product" && slug.current == $productSlug] [0]`,
          { productSlug: productSlug }
        );
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(productSlug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Banner
        title={product?.title}
        series={product?.series}
        feature={product?.seriesFeature}
        ImageSource={"/Product/ProductBanner.webp"}
        productImage={product?.productimage}
        highlightFeatures={product?.highlightFeatures}
      />

      <div className="bg-[#282547] py-5 my-10 lg:hidden flex">
        <CenterHeading
          title={product?.title}
          textColor={"text-white !text-2xl"}
        />
      </div>

      <div className="lg:hidden flex flex-wrap items-center justify-center w-full">
        {product?.productimage && (
          <Image
            src={urlForImage(product?.productimage)}
            alt="Product"
            width={500}
            height={500}
            className="w-64 h-72 object-contain"
          />
        )}

        {product?.highlightFeatures && (
          <div className="flex flex-wrap justify-center items-center mt-10">
            {product?.highlightFeatures.map((feature, i) => {
              return (
                <HighlightFeatureCard
                  key={i}
                  featureTitle={feature?.featureTitle}
                  featuredImage={feature?.featuredImage}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Highlight Section  */}
      {product?.highlightPoints?.length > 0 && (
        <div className="p-10 md:p-20 lg:pt-96 xl:pt-80">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="bg-gray-200 lg:col-span-2 p-5 md:p-10">
              <h3 className="text-[#1486b8] font-bold text-3xl sm:text-4xl mb-5">
                Highlights
              </h3>

              {product?.highlightPoints.map((point, i) => {
                return <HighlightPoint key={i} title={point} />;
              })}
            </div>
            <div class="">
              <Image
                src={"/Product/HighlightsImage.webp"}
                alt="Highlight Image"
                width={500}
                height={500}
                className="w-full xl:w-[36rem] h-52 xs:h-64 sm:h-72 md:h-[32rem] min-w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Table Section  */}
      <div
        className={`bg-[#282547] p-10 lg:p-20 mb-10 flex justify-center items-center ${
          product?.highlightPoints?.length > 0 ? "" : "mt-20"
        }`}
      >
        <Image
          src={"/Product/Table.webp"}
          alt="Product"
          width={1000}
          height={1000}
          className="min-w-full lg:h-full object-contain"
        />
      </div>

      <div className="p-20 flex flex-wrap justify-center items-center">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default Product;

const ImageCard = () => {
  return (
    <div className="flex flex-col bg-[#a2d9f7] w-72 h-72 lg:w-72 justify-center items-center lg:h-96 mx-4 my-3">
      <Image
        src={"/Home/Products-Range/prod-6.webp"}
        alt="Product 1"
        width={500}
        height={500}
        className="w-32 lg:w-44 h-52 object-contain"
      />
    </div>
  );
};

const HighlightPoint = ({ title }) => {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <span className="bg-[#1486b8] min-w-3 min-h-3" />
      <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
        {title}
      </h4>
    </div>
  );
};
