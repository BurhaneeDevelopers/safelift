"use client";
import CenterHeading from "@/components/CenterHeading";
import Banner from "@/components/Product/Banner";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { HighlightFeatureCard } from "@/components/Product/HighlightFeatureCard";
import { slugify, unslugify } from "@/utils/slugify";
import Link from "next/link";
import { client } from "../../../../../sanityBackend/lib/client";
import { urlForImage } from "../../../../../sanityBackend/lib/image";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState([]);
  // const builder = imageUrlBuilder(client);

  const productSlug = params.product;

  // Search Single Product
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Search All Products
  const [products, setProducts] = useState([]);

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "product" && category == $category]`,
          { category: productCategory }
        );
        setProducts(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

      <div className="bg-[#050742] py-5 my-10 lg:hidden flex">
        <CenterHeading
          title={product?.title}
          textColor={"text-white"}
        />
      </div>

      <div className="lg:hidden flex flex-wrap items-center justify-center w-full">
        {product?.productimage && (
          <Image
            src={urlForImage(product?.productimage)}
            alt={product?.title}
            width={500}
            height={500}
            className="w-64 h-72 object-contain"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" // Disable dragging
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
        <div className="p-10 md:p-20">
          <div class="grid grid-cols-1 xl:grid-cols-3">
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
                className="w-full xl:w-[36rem] md:h-[32rem] !min-w-full lg:h-full hidden xl:flex"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                draggable="false" // Disable dragging
              />
            </div>
          </div>
        </div>
      )}

      {/* Table Section  */}
      {product?.table && (
        <div
          className={`bg-[#050742] p-10 lg:p-20 mb-10 flex justify-center items-center ${
            product?.highlightPoints?.length > 0 ? "" : "mt-20"
          }`}
        >
          <Image
            src={product?.table && urlForImage(product?.table?.asset?._ref)}
            alt="Product"
            width={500}
            height={500}
            quality={100}
            className="min-w-full lg:max-h-[500px] object-contain"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" // Disable dragging
          />
        </div>
      )}

      <div className={`bg-[#050742] py-7 mb-10 ${product?.table ? "mt-20" : "mt-20"}`}>
        <CenterHeading
          title={`Other Products in ${productCategory}`}
          textColor={"text-white !text-2xl"}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {products.map((item, i) => {
          if (item?._id !== product?._id) {
            return (
              <ProductCards
                key={i}
                item={item}
                productCategory={productCategory}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetail;

const ProductCards = ({ item, productCategory }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 mx-4">
      <Link
        href={
          "/products/" +
          `${slugify(productCategory)}/` +
          slugify(item?.slug.current)
        }
        class="w-96 h-96 border-4 border-gray-200"
      >
        <div class="relative flex justify-center items-center h-full transform transition-transform p-2">
          <Image
            src={urlForImage(item?.productimage)}
            alt={item?.title}
            width={500}
            height={500}
            className="w-full h-full object-contain"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" // Disable dragging
          />
        </div>
      </Link>
      <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 z-50 w-96 text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-16 max-h-16 mt-2">
        <span className="line-clamp-1">{item?.title}</span>
      </h2>
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
