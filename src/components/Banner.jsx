import Image from "next/image";
import React from "react";
import { Heading } from "./textComponents/Heading";

const Banner = ({ title, ImageSource }) => {
  return (
    <div className="z-10">
      <div className="h-[36rem] w-full flex items-center justify-center">
        <Image
          src={ImageSource}
          width={500}
          height={500}
          alt="BannerImage"
          className="w-full h-[36rem] object-cover object-top absolute inset-0 -z-10"
        />
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <h1 className="font-inter text-white text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 6xl:text-mdsubTitle leading-snug font-bold">
              {title}
            </h1>
            <div className="bg-[#008dd2] w-52 sm:w-56 mx-auto md:mx-0 md:w-60 h-1.5 mt-2 mb-4"></div>
          </div>

          <div className="flex text-white font-semibold items-center">
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11.39 10.29"
              fill="#008dd2"
              className="w-3 h-3 mx-3"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="cls-1"
                    d="M8.36,5.26,4.79,8.83l1.45,1.46,5.15-5.12c0-.06,0,0,0-.07L6.23,0,4.79,1.46,8.47,5.15l-.11.11ZM0,1.46,1.45,0,6.6,5.15,1.45,10.29,0,8.83,3.68,5.15Z"
                  />
                </g>
              </g>
            </svg>
            {title}
          </div>
        </div>

        {/* <div className="items-center justify-center absolute translate-x-7 sm:translate-x-0 right-0 bottom-28 rotate-90 hidden md:flex">
          <span className="uppercase text-white tracking-[0.5rem]">Scroll</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.12 30.22"
            fill="#008dd2"
            className="w-7 h-7 -rotate-90"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect class="cls-1" width="32.12" height="30.22" />
                <path
                  class="cls-2"
                  fill="#fff"
                  d="M16.06,12.6c-.81-.54-4.88-5-5.47-5.34A1.27,1.27,0,0,0,8.66,8.71c.12.43,4.45,4.62,5.33,5.51,2.48,2.52,2,2,6.06-1.92.55-.54,3.39-3.11,3.45-3.85A1.25,1.25,0,0,0,21.63,7.2,13.88,13.88,0,0,0,19.72,9Z"
                />
                <path
                  class="cls-2"
                  fill="#fff"
                  d="M16.06,20a43.74,43.74,0,0,1-3.65-3.59,19.54,19.54,0,0,0-1.82-1.75,1.27,1.27,0,0,0-1.92,1.46,40.22,40.22,0,0,0,3.55,3.74c.6.63,1.15,1.15,1.77,1.78.37.38,1.34,1.57,2.07,1.56s3.23-2.71,3.84-3.35a38.72,38.72,0,0,0,3.54-3.73,1.25,1.25,0,0,0-1.81-1.51,15.07,15.07,0,0,0-1.92,1.8A47.13,47.13,0,0,1,16.06,20Z"
                />
              </g>
            </g>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
