import Image from "next/image";
import React from "react";

const Banner = ({ title, ImageSource }) => {
  return (
    <div>
      <div className="h-96 md:h-screen w-full flex items-center">
        <Image
          src={ImageSource}
          width={500}
          height={500}
          alt="BannerImage"
          className="w-full h-96 md:h-screen absolute inset-0 -z-10"
        />

        <div className="lg:pr-20 xl:pr-20 w-full">
          <div className="bg-[#282547] h-44 lg:h-72 w-full p-5 lg:pr-20 lg:px-20 flex justify-center lg:justify-end items-center relative mx-auto">
            <div className="hidden lg:flex absolute top-0 left-20 xl:left-64 items-end justify-between">
              <Image
                src={"/Home/Product-2.webp"}
                alt="Product"
                width={500}
                height={500}
                className="w-72 h-[50rem] object-contain"
              />

              <div className="flex -translate-y-10 translate-x-3">
                <HighlightFeatureCard />
                <HighlightFeatureCard />
                <HighlightFeatureCard />
                <HighlightFeatureCard />
                <HighlightFeatureCard />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center flex">
                <Image
                  src={"/Product/LeftArrow.png"}
                  alt="Highlight Image"
                  width={500}
                  height={500}
                  className="w-4 h-10 mr-5"
                />

                <span>heavy duty chain pulley block</span>
              </h1>
              <h3 className="uppercase text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#00a0e3] font-bold text-center">
                Saif-T Series
              </h3>
              <h4 className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center">
                0.5 Ton to 30 Ton
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const HighlightFeatureCard = () => {
  return (
    <div className="flex flex-col items-center mx-3">
      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 504.14 524.92"
          className="absolute -top-2 -left-2 xl:-top-3 xl:-left-3 w-14 h-14 xl:w-20 xl:h-20"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path
              fill="#008DD2"
              d="M504.14 0c-279.29,5.09 -504.14,233.05 -504.14,513.56 0,3.8 0.06,7.58 0.14,11.37l504 0 0 -524.92z"
            />
          </g>
        </svg>

        <div className="rounded-full bg-[#d9dada] flex items-center justify-center w-24 h-24 xl:w-32 xl:h-32 z-10">
          <Image
            src={"/Infra/image-1.webp"}
            alt="Product"
            width={500}
            height={500}
            className="object-contain rounded-full w-20 h-20 xl:w-28 xl:h-28"
          />
        </div>
      </div>

      <div className="bg-[#282547] py-1 px-4 mt-4 capitalize text-white text-center font-semibold text-[10px] xl:text-xs w-full">
        surface hardened gears
      </div>
    </div>
  );
};
