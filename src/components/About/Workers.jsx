import Image from "next/image";
import React from "react";

const Workers = () => {
  return (
    <div className="p-5 lg:p-20 lg:pb-32 bg-gray-200">
      <div className="flex flex-wrap justify-center items-center space-y-5 lg:space-y-0">
        <div className="bg-transparent lg:bg-white lg:p-3 z-10">
          <Image
            src={"/AboutUs/Workers.webp"}
            alt="ProofLoad"
            width={500}
            height={500}
            className="w-[34rem] h-[16rem] sm:h-[28rem]"
          />
        </div>

        <div className="lg:translate-y-20 lg:-translate-x-10">
          <Image
            src={"/AboutUs/Workers-2.webp"}
            alt="ProofLoad"
            width={500}
            height={500}
            className="w-[34rem] h-[16rem] sm:h-[28rem]"
          />
        </div>

      </div>
    </div>
  );
};

export default Workers;
