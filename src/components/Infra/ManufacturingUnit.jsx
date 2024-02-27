import Image from "next/image";
import React from "react";

const ManufacturingUnit = () => {
  return (
    <div className="px-5 xl:px-20">
      <div className="flex flex-wrap justify-center items-center xl:-translate-y-40 my-10 xl:my-0">
        <div className="bg-[#ebecec] p-5 xl:pl-20 xl:py-20 xl:pr-10 w-full lg:min-w-[30rem] lg:max-w-[30rem] lg:min-h-[30rem] xl:min-w-[36rem] xl:size-[36rem] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center xl:justify-normal items-center w-full">
            <h2 className="uppercase text-[#2b2a29] text-center lg:text-start font-bold text-2xl xs:text-3xl md:text-4xl xl:text-5xl">
              Manufacturing Unit
            </h2>
            <span className="bg-[#008dd2] w-52 sm:w-60 md:w-full h-1.5 mt-2" />
          </div>

          <p className="font-medium text-xl text-center lg:text-start mt-7">
            Since 1983, <b>Safelift Industries</b> has evolved from a small
            trading business to a prominent conglomerate for Industrial Safety
            Solutions. With <b>four decades</b> of expertise spanning{" "}
            <b>three generations</b>, we serve a diverse global clientele with a
            century of experience in the material handling industry.
          </p>
        </div>

        <div className="bg-[#008dd2] p-5 w-full lg:min-w-[30rem] lg:max-w-[30rem] lg:min-h-[30rem] xl:min-w-[36rem] xl:size-[36rem] flex flex-col justify-center items-center">
          <Image
            src={"/Infra/UnitBanner.webp"}
            alt="Manufacturing Unit"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ManufacturingUnit;
