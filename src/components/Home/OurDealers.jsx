import Image from "next/image";
import React from "react";

const OurDealers = () => {
  const companies = [
    { name: "Ezzy Lifting Tackle Equipment", city: "Visakhapatnam" },
    { name: "Reliance Syndicate", city: "Coimbatore" },
    { name: "India Auto Enterprises", city: "Guwahati" },
    { name: "Vankos & Company (Hyderabad)", city: "Hyderabad" },
    { name: "Buraq International", city: "Pune" },
    { name: "Balaram Industries", city: "Bhubaneswar" },
    { name: "Atom Engineering Products Pvt Ltd", city: "Jharsuguda" },
    { name: "Air & Industrial Equipments Co.", city: "Guwahati" },
    { name: "Lucky Traders", city: "Chennai" },
    { name: "Globe Industrial Enterprises", city: "Bengaluru" },
    { name: "Biswal Tools Center", city: "Paradip" },
    { name: "National Hardware & Tools Centre", city: "Guwahati" },
    { name: "Industrial Chain Centre", city: "Raipur" },
    { name: "T.S. Trading Co.", city: "Bengaluru" },
    { name: "Reliance Hardware Mart", city: "Chennai" },
    { name: "Singhal Tools & Hardware", city: "Raigarh" },
    { name: "Tools Co.", city: "Bokaro" },
    { name: "Jainson Industrial House", city: "Guwahati" },
    { name: "Tools Co.", city: "Angul" },
    { name: "Balbir Singh & Sons", city: "New Delhi" },
  ];
  return (
    <div className="px-10 md:px-20 xl:px-20 pt-20 bg-[#25233e] hidden lg:flex relative overflow-hidden min-h-[49rem]">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start flex-wrap ">
        <div className="flex-col !h-full">
          {/* Left Heading  */}
          <LeftHeading
            smallTitle="Our"
            title="Dealers"
            additionalClasses={"text-white !text-start"}
          />

          <div
            className="xl:max-w-xl mt-10 flex items-end justify-end text-white"
            data-aos="fade-"
          >
            {/* <div className="flex h-full">
              <div className="flex flex-col items-center mx-2">
                {companies.slice(0, 10).map((item, i) => {
                  return (
                    <FeatureBar key={i} title={`${item?.name} ${item?.city}`} />
                  );
                })}
              </div>

              <div className="border border-[#00a0e3] mx-3 min-h-max"></div>

              <div className="flex flex-col items-center mx-2">
                {companies.slice(10).map((item, i) => {
                  return (
                    <FeatureBar key={i} title={`${item?.name} ${item?.city}`} />
                  );
                })}
              </div>
            </div> */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            placeat sequi ex molestias. Quo corporis sed perspiciatis molestiae
            odio distinctio nostrum vitae error?
          </div>
        </div>

        {/* Images  */}

        <div
          className="absolute -top-10 -right-20 mt-10 hidden lg:flex z-10"
          data-aos="fade-left"
        >
          <Image
            src={"/Home/Map.webp"}
            alt="Workers"
            width={3000}
            height={3000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurDealers;

// const FeatureBar = ({ title }) => {
//   return (
//     <div className="flex w-72 items-center my-4 h-full border-l-8 border-b border-[#00a0e3] min-h-6 max-h-6 px-3 z-20">
//       <span className="text-white font-medium -translate-y-3 text-xs">
//         {title}
//       </span>
//     </div>
//   );
// };

const LeftHeading = ({ title, smallTitle, additionalClasses }) => {
  return (
    <div
      className="flex flex-col max-w-sm xl:max-w-lg text-center mx-auto lg:mx-0 xl:text-start"
      data-aos="fade-right"
    >
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
