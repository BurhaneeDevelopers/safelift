"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { LargeHeading } from "../textComponents/LargeHeading";
import { Body } from "../textComponents/Body";
import Link from "next/link";

const Banner = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [
  //   "/Home/Image-2.png",
  //   "/Home/Image-3.png",
  //   "/Home/Image-1.png",
  // ];

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // };

  // // Calculate the starting index for slicing the slides array
  // const startIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  return (
    <div className="w-full items-center justify-center bg-[url(/NewHome/HomeBanner.webp)] bg-cover bg-center bg-no-repeat h-screen 6xl:!max-h-[1080px]">
      {/* <Image
        alt="Safelift Banner"
        src={"/NewHome/HomeBanner.webp"}
        width={500}
        height={500}
        className="absolute inset-0 h-screen w-full -z-10"
      /> */}
      <div className="absolute inset-0 h-screen 6xl:!max-h-[1080px] 6xl:7xl:max-w-[1920px] mx-auto w-full !z-0 bg-[#050742]/30" />

      <Container className="flex flex-col justify-center items-center xl:items-start h-full gap-4">
        <Heading className="text-center 2xl:text-start block uppercase text-white font-semibold !leading-[1.2] xl:!leading-[1.1] lg:mt-32 z-10">
          <span className="block">Your Trusted</span>
          <span className="block">Material Handling</span>
          <span className="block">Equipment Manufacturer</span>
          <span className="block font-black">For Optimized Operations</span>
        </Heading>

        <Link href={"/products"} className="border border-white rounded-lg text-white px-5 p-2 w-fit z-10 hover:bg-white hover:text-[#050742] transition-all duration-300 ease-in-out">
          <Body className="font-semibold">Learn More</Body>
        </Link>
      </Container>
    </div>
  );
};

export default Banner;
