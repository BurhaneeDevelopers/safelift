import React from "react";
import CenterHeading from "../CenterHeading";
import Image from "next/image";

const Certification = () => {
  const cards = [
    {
      title: "Dynamic Fatigue Testing",
      image: "/Home/Certification/icons/icon-1.svg",
    },
    {
      title: "Proof Load Testing",
      image: "/Home/Certification/icons/icon-2.svg",
    },
    {
      title: "Spectographic Analysis",
      image: "/Home/Certification/icons/icon-3.svg",
    },
    {
      title: "Ultimate Breakload Testing",
      image: "/Home/Certification/icons/icon-4.svg",
    },
    {
      title: "Magnaflux crack detection",
      image: "/Home/Certification/icons/icon-5.svg",
    },
    {
      title: "Eddy Current Testing",
      image: "/Home/Certification/icons/icon-6.svg",
    },
  ];
  return (
    <div className="p-5 sm:p-16">
      <CenterHeading title={"Certification"} textColor={"xl:!text-6xl"} />

      <div
        className="my-10 flex flex-wrap justify-center items-center h-full"
        data-aos="fade-down"
      >
        <Image
          src={"Home/Certification/logos/logo-1.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-2.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-3.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-4.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-5.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-6.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-7.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-8.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-9.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-10.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
        <Divider />
        <Image
          src={"Home/Certification/logos/logo-11.svg"}
          alt="ISI"
          width={500}
          height={500}
          className="w-20 h-20 mx-3 sm:mx-2"
        />
      </div>

      <div
        className="flex flex-wrap justify-center items-center"
        data-aos="fade-up"
      >
        {cards.map((item, i) => {
          return <Cards key={i} title={item?.title} img={item?.image} />;
        })}
      </div>
    </div>
  );
};

export default Certification;

const Cards = ({ title, img }) => {
  return (
    <div className="flex justify-center m-3">
      <div className="bg-[#ebecec] px-5 py-2 xl:p-7 flex justify-center items-center ">
        <Image
          src={img}
          alt="ProofLoad"
          width={500}
          height={500}
          className="h-20 w-20"
        />
      </div>

      <div className="bg-[#d4edfc] px-5 py-2 xl:p-7 flex items-center">
        <h4 className="font-bold text-[#2b2a29] text-base xs:text-xl sm:text-2xl text-center min-w-36 max-w-36 xxs:min-w-52 xxs:max-w-52 lg:min-w-56 lg:max-w-56 xl:min-w-60 xl:max-w-60">
          {title}
        </h4>
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <di2 className="border border-gray-300 mx-3 h-16 hidden sm:flex"></di2>
  );
};
