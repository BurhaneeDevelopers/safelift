import Image from "next/image";
import React from "react";

const OurDealers = () => {
  return (
    <div className="px-10 md:px-20 xl:px-20 pt-20 bg-[#25233e] hidden lg:flex relative">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start flex-wrap">
        <div className="flex-col">
          {/* Left Heading  */}
          <LeftHeading
            smallTitle="Our"
            title="Dealers"
            additionalClasses={"text-white"}
          />

          <div className="xl:max-w-xl mt-10">
            <div className="flex h-full">
              <div className="flex flex-col items-center mx-2">
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
              </div>

              <div className="border border-[#00a0e3] mx-3 min-h-max"></div>

              <div className="flex flex-col items-center mx-2">
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
                <FeatureBar
                  title={
                    "High-quality lifting products for demanding industrial conditions"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Images  */}

        <div className="border absolute top-0 right-0 mt-10 z-50">
          <Image
            src={"/Home/India-Image.jpg"}
            alt="Workers"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurDealers;

const FeatureBar = ({ title }) => {
  return (
    <div className="flex w-72 justify-center items-center my-4 h-full border-l-8 border-b border-[#00a0e3] px-3">
      <span className="text-white font-medium -translate-y-3 text-xs">
        {title}
      </span>
    </div>
  );
};

const LeftHeading = ({ title, smallTitle, additionalClasses }) => {
  return (
    <div className="flex flex-col max-w-sm xl:max-w-lg text-center mx-auto xl:mx-0 xl:text-start">
      <span
        className={`text-3xl lg:text-4xl xl:text-5xl font-bold uppercase ${additionalClasses}`}
      >
        {smallTitle}{" "}
        <span className="text-3xl lg:text-4xl xl:text-5xl font-bold block">
          {title}
        </span>
      </span>
      <div className="bg-[#008dd2] w-52 sm:w-64  mx-auto md:mx-0 h-1.5 mt-2"></div>
    </div>
  );
};
