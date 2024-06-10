import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { HighlightFeatureCard } from "./HighlightFeatureCard";

const Banner = ({
  title,
  series,
  feature,
  ImageSource,
  productImage,
  highlightFeatures,
}) => {
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
              {productImage && (
                <Image
                  src={urlForImage(productImage)}
                  alt="Product"
                  width={500}
                  height={500}
                  className="w-72 h-[50rem] object-contain"
                />
              )}

              {highlightFeatures && (
                <div className="flex -translate-y-10 translate-x-3">
                  {highlightFeatures.map((feature, i) => {
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

            <div className="flex flex-col justify-center items-center space-y-2">
              <h1 className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center flex">
                <Image
                  src={"/Product/LeftArrow.png"}
                  alt="Highlight Image"
                  width={500}
                  height={500}
                  className="w-4 h-10 mr-5"
                />

                <span className="lg:max-w-[32rem] xl:max-w-[40rem]">
                  {title}
                </span>
              </h1>
              <h3 className="uppercase text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#00a0e3] font-bold text-center">
                {series}
              </h3>
              <h4 className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center">
                {feature}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
