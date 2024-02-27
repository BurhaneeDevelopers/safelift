import Banner from "@/components/Banner";
import ManufacturingUnit from "@/components/Infra/ManufacturingUnit";
import Image from "next/image";
import React from "react";

const Infra = () => {
  return (
    <div>
      <Banner
        title={"Infra & Manufacturing"}
        ImageSource={"/AboutUs/Banner.webp"}
      />

      {/* MANUFACTURING UNIT */}
      <ManufacturingUnit />

      <div className="flex flex-wrap justify-center space-x-5 lg:justify-evenly items-center pb-20 px-20">
        {/* OUR VISION */}
        <ImageCards img={"/Infra/image-1.webp"} />
        <ImageCards img={"/Infra/image-2.webp"} />
        <ImageCards img={"/Infra/image-3.webp"} />
        <ImageCards img={"/Infra/image-4.webp"} />
        <ImageCards img={"/Infra/image-5.webp"} />
        <ImageCards img={"/Infra/image-6.webp"} />
      </div>
    </div>
  );
};

export default Infra;

const ImageCards = ({ img }) => {
  return (
    <div class="relative block !size-[22rem] min-w-[14rem] xxs:min-w-[18rem] md:min-w-[22rem] my-7 lg:my-5">
      <span class="absolute inset-0 border-4 border-[#00a0e3] " />

      <div class="relative flex justify-center items-center h-full transform transition-transform -translate-x-5 -translate-y-5">
        <div className="w-full h-full my-auto bg-white">
          <Image
            src={img}
            alt="ProofLoad"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
