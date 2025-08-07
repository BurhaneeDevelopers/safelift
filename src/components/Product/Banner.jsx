import Image from "next/image";
import React from "react";
import { HighlightFeatureCard } from "./HighlightFeatureCard";
import { urlForImage } from "../../../sanityBackend/lib/image";
import CenterHeading from "../CenterHeading";

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
          className="w-full h-96 md:h-screen absolute inset-0 -z-10 "
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          draggable="false" // Disable dragging
        />

        <div className="bg-[#050742] py-5 lg:hidden flex flex-col w-full mt-32 text-center">
          <h3 className="uppercase text-2xl xs:text-3xl text-[#00aeef] font-bold text-center">
            {series}
          </h3>
          <h4 className="uppercase text-lg xs:text-xl sm:text-2xl text-white font-semibold text-center">
            {feature}
          </h4>
          <CenterHeading title={title} textColor={"text-white"} />
        </div>

        <div className="xl:pr-20 w-full hidden lg:flex">
          <div className="bg-[#050742] h-fit py-10 lg:py-5 lg:h-72 w-full p-5 lg:pr-20 xl:px-20 flex justify-between lg:justify-end items-center relative mx-auto mt-16">
            <div className="hidden lg:flex absolute -top-20 left-20 xl:left-64 items-center justify-between">
              <div className="h-[28rem] w-[28rem] flex justify-center items-center bg-white rounded overflow-hidden">
                {productImage && (
                  <Image
                    src={urlForImage(productImage)}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-96 h-[28rem] object-contain p-2 "
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click
                    draggable="false" // Disable dragging
                  />
                )}
              </div>

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

            <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-auto">
              <div className="h-[28rem] w-[28rem] flex justify-center items-center bg-white rounded overflow-hidden lg:hidden">
                {productImage && (
                  <Image
                    src={urlForImage(productImage)}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-96 h-[28rem] object-contain p-2 "
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click
                    draggable="false" // Disable dragging
                  />
                )}
              </div>

              <div className="uppercase text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center flex flex-row items-center mt-7 lg:mt-0">
                <Image
                  src={"/Product/LeftArrow.png"}
                  alt="Highlight Image"
                  width={500}
                  height={500}
                  className="w-4 h-10 mr-5 "
                  onContextMenu={(e) => e.preventDefault()} // Disable right-click
                  draggable="false" // Disable dragging
                />

                <h1 className="lg:max-w-[32rem] xl:max-w-[40rem]">{title}</h1>
              </div>
              <h3 className="uppercase text-3xl xs:text-4xl sm:text-5xl xl:text-6xl 6xl:text-7xl text-[#00aeef] font-bold text-center max-w-xl xl:max-w-2xl 2xl:max-w-3xl 5xl:max-w-6xl">
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
