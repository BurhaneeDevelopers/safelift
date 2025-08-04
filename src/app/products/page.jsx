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
      title: "Slings for Lifting",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/e3ad605196378520c5cf6b7d5d1df9846d7b77f2-464x345.png", // straps/slings
    },
    {
      title: "Shackle",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/c4ea900ec51029db178acbdd97930af290f7cb4f-580x671.png", // metal D shackle
    },
    {
      title: "Lifting Points",
      image:
        "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg", // construction hook/point
    },
    {
      title: "G80 Lifting",
      image: "/Products/Prod-3.webp",
    },
    {
      title: "G100 Lifting",
      image: "/Products/Prod-4.webp",
    },
    {
      title: "WareHouse Management Products",
      image: "/Products/Prod-8.webp",
    },
    {
      title: "Chains for Lifting",
      image: "https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg", // chain
    },
    {
      title: "Wire Rope and Accessories",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/9851933323e59f509a40b4e9515ca870da715340-649x518.jpg", // steel rope
    },
    {
      title: "Rope Pulley",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/78ac90d6765bc733e6d737ef90cbd07e64e9dd89-360x614.jpg", // pulley system
    },
    {
      title: "Permanent Magnet Lifting",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/e1b7e0713ccb8a26873561772ed990086580bde2-891x618.png", // industrial crane with magnet
    },
    {
      title: "Lifting Clamps",
      image: "/Products/Prod-5.webp",
    },
    {
      title: "Non Marking Clamps",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/9b3d03e454ff80e7ff713e6d944f74bfab2bc66a-495x630.jpg", // clamp tool
    },
    {
      title: "Dynamometer",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/7a7c2c12834c7413c829bcf67c5c81ecc04dd3ca-411x586.jpg", // measuring gauge
    },
    {
      title: "Spring Balance",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/0a7ec0162028d4d951d61f8ed7c8b5481475341b-658x1535.png", // balance scale
    },
    {
      title: "Lashing Products",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/bfdbb7f951d0f531e657a15f7802fea62ee55efe-536x439.png", // tie down straps
    },
    {
      title: "Fall Arrestor",
      image:
        "https://cdn.sanity.io/images/n12km8si/production/c601e1706852fa1d7db29199a76454de58f29cd7-306x762.jpg", // safety harness
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
          className="w-full h-full object-cover"
        />

        <h2 className="bg-[#0493cf]/90 p-2 text-center py-4 flex justify-center items-center z-50 absolute w-full text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-16 max-h-16 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};
