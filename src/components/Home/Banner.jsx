"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/Home/Product-2.webp",
    "/Home/Product-3.webp",
    "/Home/Product-1.webp",
  ];

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Calculate the starting index for slicing the slides array
  const startIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  return (
    <div className="">
      <div className="h-screen w-full items-center justify-center bg-no-repeat">
        <Image alt="Safelift Banner" src={"/Home/HomeBanner.webp"} width={500} height={500} className="absolute inset-0 h-screen w-full -z-10"/>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-20 h-full px-10 lg:px-16 xl:px-20">
          <div className="flex items-center relative -translate-y-36 sm:-translate-y-24 md:-translate-y-20 lg:translate-y-0 xl:mt-20">
            <Image
              src={"/Home/Triangles.webp"}
              alt="Blob"
              width={500}
              height={500}
              className="xl:w-[30rem] xl:h-96 hidden xl:flex -translate-x-44 absolute left-0"
            />

            <h2 className="z-10 translate-y-10">
              <span
                className="text-center lg:text-start block text-3xl xxs:text-5xl xs:text-5xl lg:text-6xl xl:text-7xl uppercase text-white font-medium"
                data-aos="fade-down"
              >
                Safety
              </span>
              <span
                className="text-center lg:text-start block text-3xl xxs:text-5xl xs:text-6xl lg:text-7xl xl:text-8xl uppercase text-white font-semibold"
                data-aos="fade-right"
              >
                Reliability
              </span>
              <span
                className="text-center lg:text-start block text-3xl xxs:text-5xl xs:text-5xl lg:text-6xl xl:text-7xl uppercase text-white font-medium"
                data-aos="fade-up"
              >
                Quality
              </span>
            </h2>
          </div>

          <div
            className="relative flex flex-col justify-end"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="flex items-center max-w-[28rem] relative -translate-y-20 sm:-translate-y-14 -translate-x-10 lg:translate-y-0">
              <AnimatePresence initial={false} custom={currentSlide + 3}>
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={currentSlide + index}
                    custom={currentSlide + 3}
                    variants={{
                      enter: (direction) => ({
                        x: direction > 0 ? 1000 : -1000,
                        opacity: 0,
                      }),
                      center: { zIndex: 1, x: 0, opacity: 1 },
                      exit: (direction) => ({
                        zIndex: 0,
                        x: direction < 0 ? 1000 : -1000,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { stiffness: 300, damping: 20 },
                      opacity: { duration: 0.1 },
                    }}
                    className="flex items-center"
                  >
                    <Image
                      src={slides[(startIndex + index) % slides.length]}
                      alt={`Product ${
                        ((startIndex + index) % slides.length) + 1
                      }`}
                      width={500}
                      height={500}
                      className={` w-20 xsm:w-20 xs:w-24 md:w-32 xl:w-44 xl:mt-7 object-contain ${
                        index === 1
                          ? "h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-gradient-to-t from-[#a6acbb] via-transparent to-transparent rounded-b-xl"
                          : "h-44 sm:h-48 md:h-56 lg:h-64 xl:h-72 hidden md:inline-block mx-2 xl:w-52"
                      } `}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-10 -translate-y-5 sxm:-translate-y-2 sm:translate-y-0">
              {/* Previous Button  */}
              <button
                className=" cursor-pointer absolute bottom-0 pb-1 sm:pb-2 md:pb-3 lg:-bottom-20 z-10"
                onClick={prevSlide}
              >
                <Image
                  src={"/Home/Icons/Previous.webp"}
                  alt="Previous"
                  width={500}
                  height={500}
                  className="w-5"
                />
              </button>

              {/* Next Button  */}
              <button
                className="cursor-pointer absolute bottom-0 pb-1 sm:pb-2 md:pb-3 lg:-bottom-20 z-10"
                onClick={nextSlide}
              >
                <Image
                  src={"/Home/Icons/Next.webp"}
                  alt="Next"
                  width={500}
                  height={500}
                  className="w-5"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center absolute translate-x-7 sm:translate-x-0 right-0 bottom-28 rotate-90">
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
