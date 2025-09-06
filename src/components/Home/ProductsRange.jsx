"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { SmallBody } from "../textComponents/SmallBody";

const ProductsRange = () => {
  return (
    <Container className="2xl:!pb-0">
      <Heading className="!capitalize text-center max-w-screen-md mx-auto">
        Types of material handling equipment offered by{" "}
        <span className="text-[#00aeef]">safelift</span>
      </Heading>

      <div className="p-10 2xl:!pb-0">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <UpCard
              title={"Vertical Plate Lifting Clamp"}
              img={"/Home/Products-Range/prod-4.webp"}
              category="lifting-clamps"
            />
            <DownCard
              title={"Polyester Sling"}
              img={"/Home/Products-Range/prod-2.webp"}
              category="slings-for-lifting"
            />
            <UpCard
              title={"Swivel Hook"}
              img={"/Home/Products-Range/prod-3.webp"}
              category="g80-lifting"
            />
            <DownCard
              title={"Chain Block"}
              img={"/Home/Products-Range/prod-1.webp"}
              category="manual-hoist"
            />
          </div>

          <div className="flex flex-wrap justify-center mt-5 sm:mt-0 xl:-translate-y-20">
            <UpCard
              title={"Spring Balancer"}
              img={"/Home/Products-Range/prod-5.webp"}
              category="spring-balance"
            />
            <DownCard
              title={"Chain Sling"}
              img={"/Home/Products-Range/prod-6.webp"}
              category="g80-lifting"
              slug="g80-master-link-assembly-with-enlarged-sublinks"
            />
            <UpCard
              title={"Hydraulic Lifting Table"}
              img={"/Home/Products-Range/prod-7.webp"}
              category="manual"
            />
            <DownCard
              title={"Electric FolkLift"}
              img={"/Home/Products-Range/prod-8.webp"}
              category="electric"
            />
          </div>

          {/* <div className="flex flex-wrap justify-center mb-5 xl:-translate-y-20">
            <UpCard
              title={"Drum Trolley"}
              img={"/Home/Products-Range/prod-9.webp"}
            />
            <DownCard
              title={"Self Loading Stacker"}
              img={"/Home/Products-Range/prod-10.webp"}
            />
            <UpCard
              title={"Electric Stacker"}
              img={"/Home/Products-Range/prod-11.webp"}
            />
            <DownCard
              title={"Electric Pallet Truck"}
              img={"/Home/Products-Range/prod-12.webp"}
            />
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default ProductsRange;

const UpCard = ({ title, img, category, slug }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5 mt-5" data-aos="fade-down">
      <Link
        href={`/products/${category}/${slug ? slug : slugify(title)}`}
        className="flex flex-col bg-[#a2d9f7] min-h-64 p-2 justify-center items-center max-h-64"
      >
        <Image
          src={img}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 max-h-56 object-contain"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          draggable="false" // Disable dragging
        />
      </Link>

      <SmallBody className="text-[#2b2a29] text-center !font-medium mt-1">
        {title}
      </SmallBody>
    </div>
  );
};

const DownCard = ({ title, img, category, slug }) => {
  return (
    <div className="flex flex-col items-center w-56 mx-5" data-aos="fade-up">
      <Link
        href={`/products/${category}/${slug ? slug : slugify(title)}`}
        className="flex flex-col bg-[#d4edfc] min-h-64 p-2 justify-center items-center my-5 sxm:mt-32 max-h-64"
      >
        <Image
          src={img}
          alt="Product 1"
          width={500}
          height={500}
          className="w-56 max-h-56 object-contain"
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          draggable="false" // Disable dragging
        />
      </Link>

      <SmallBody className="text-[#2b2a29] text-center !font-medium -mt-4">
        {title}
      </SmallBody>
    </div>
  );
};
