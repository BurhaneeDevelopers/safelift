import CenterHeading from "@/components/CenterHeading";
import Banner from "@/components/Product/Banner";
import Image from "next/image";
import React from "react";

const product = () => {
  return (
    <div>
      <Banner title={"Products"} ImageSource={"/Product/ProductBanner.webp"} />

      <div className="bg-[#282547] py-5 my-10 lg:hidden flex">
        <CenterHeading
          title={"Heavy Duty Chain Pulley Block"}
          textColor={"text-white !text-2xl"}
        />
      </div>

      <div className="lg:hidden flex flex-wrap items-center justify-center w-full">
        <Image
          src={"/Home/Product-2.webp"}
          alt="Product"
          width={500}
          height={500}
          className="w-64 h-72 object-contain"
        />

        <div className="flex flex-wrap justify-center items-center mt-10">
          <HighlightFeatureCard />
          <HighlightFeatureCard />
          <HighlightFeatureCard />
          <HighlightFeatureCard />
          <HighlightFeatureCard />
        </div>
      </div>

      {/* Highlight Section  */}
      <div className="p-10 md:p-20 lg:pt-96 xl:pt-80">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <div class="bg-gray-200 lg:col-span-2 p-5 md:p-10">
            <h3 className="text-[#1486b8] font-bold text-3xl sm:text-4xl mb-5">
              Highlights
            </h3>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Individual Spares Readily Available
              </h4>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Overload markings on hook
              </h4>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Rang 500KG - 50,000KG
              </h4>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Heat treated alloy steel triple spur gear & pining shaft
              </h4>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Heat treated alloy steel triple spur gear & pining shaft
              </h4>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-[#1486b8] min-w-3 min-h-3" />
              <h4 className="font-semibold text-lg md:text-xl text-[#434242]">
                Heat treated alloy steel triple spur gear & pining shaft
              </h4>
            </div>
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

      {/* Table Section  */}
      <div className="bg-[#282547] p-10 lg:p-20 mb-10 flex justify-center items-center">
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

export default product;

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

const HighlightFeatureCard = () => {
  return (
    <div className="flex flex-col items-center mx-3 my-3">
      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 504.14 524.92"
          className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 xl:-top-3 xl:-left-3 w-8 h-8 sm:w-14 sm:h-14 xl:w-20 xlh-20"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path
              fill="#008DD2"
              d="M504.14 0c-279.29,5.09 -504.14,233.05 -504.14,513.56 0,3.8 0.06,7.58 0.14,11.37l504 0 0 -524.92z"
            />
          </g>
        </svg>

        <div className="rounded-full bg-[#d9dada] flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 xl:w-32 xl:h-32 z-10">
          <Image
            src={"/Infra/image-1.webp"}
            alt="Product"
            width={500}
            height={500}
            className="object-contain rounded-full w-12 sm:w-20 h-12 sm:h-20 xl:w-28 xl:h-28"
          />
        </div>
      </div>

      <div className="bg-[#282547] py-1 px-4 mt-4 capitalize text-white text-center font-semibold text-[10px] xl:text-xs w-full">
        surface hardened gears
      </div>
    </div>
  );
};
