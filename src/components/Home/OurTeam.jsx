import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="py-20 pt-44">
      <div className="flex flex-col xl:flex-row justify-between relative">
        <div className="bg-[#a2d9f7] py-10 xl:py-5 px-5 xs:px-14 sm:px-20 md:px:24 lg:px-28 xl:px-32 w-full xl:w-[40rem]">
          <LeftHeading smallTitle="Meet" title="Our Team" />

          <div className="">
            <span className="block mt-4 text-sm sm:text-base text-center xl:text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              odit nemo et fuga molestias totam, id eligendi quisquam
              consequuntur corrupti.
            </span>

            <span className="block mt-4 text-sm sm:text-base text-center xl:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quidem at unde autem quae nostrum nisi fuga earum sit dolore
              laborum ea consequatur ut sunt nemo, laudantium neque id? Nobis
              libero consequuntur corporis sequi dolorum distinctio repellendus
              doloremque error molestias.
            </span>
          </div>
        </div>

        <div className="xl:absolute xl:-top-20 xl:right-0">
          <Image
            src={"/Home/Group.jpg"}
            alt="Our Team"
            width={1000}
            height={1000}
            className="w-screen xl:w-[44rem] 2xl:w-[48rem] 3xl:w-[52rem] 4xl:w-[56rem] 5xl:w-[64rem] h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

const LeftHeading = ({ smallTitle, title }) => {
  return (
    <div className="flex flex-col max-w-sm xl:max-w-lg text-center mx-auto xl:mx-0 xl:text-start">
      <span
        className={`text-4xl md:text-5xl font-semibold uppercase`}
      >
        {smallTitle}{" "}
        <span className="text-4xl md:text-5xl font-bold block">
          {title}
        </span>
      </span>
      <div className="bg-[#008dd2] w-52 sm:w-60 mx-auto md:mx-0 md:w-full h-1.5 mt-2"></div>
    </div>
  );
};
