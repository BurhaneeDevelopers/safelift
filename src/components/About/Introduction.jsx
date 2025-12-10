import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="p-20">
      <div className="flex flex-row flex-wrap justify-center lg:justify-between lg:px-20 relative">
        <Image
          src={"/AboutUs/IntroBg.webp"}
          width={500}
          height={500}
          alt="BannerImage"
          className="w-[40rem] h-[50rem] absolute right-0 top-0 -z-10"
        />

        <div
          className="flex flex-col space-y-5 w-[28rem] relative"
          data-aos="fade-right"
        >
          <span className="absolute -z-10 -translate-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132.03 394.13"
              className="fill-[#ececed] w-24 h-full"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    className="cls-1"
                    points="0 394.13 132.03 394.13 0 0 0 394.13"
                  />
                </g>
              </g>
            </svg>
          </span>

          <h2 className="uppercase text-2xl sm:text-3xl border-4 mx-auto lg:mx-0 border-[#00aeef] px-5 lg:px-7 py-3 font-bold text-[#00aeef] w-fit">
            Introduction
          </h2>

          <span className="font-bold text-3xl text-center lg:text-start">
            Est 2006
          </span>

          <p className="font-medium text-lg text-center lg:text-start">
            Safelift Industries addressed a crucial gap in the Indian market for
            premium material handling products, swiftly gaining recognition and
            trust for their top-tier, globally compliant solutions.
          </p>
        </div>

        <div
          className="flex flex-col space-y-5 w-[28rem] mt-10 lg:mt-0"
          data-aos="fade-left"
        >
          <div className="font-bold text-3xl flex flex-col lg:flex-row items-center space-x-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52.72 33.85"
                className="w-16 h-16"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1 fill-[#00aeef]"
                      d="M25.27,28.51a25.27,25.27,0,0,0-.69-3.4,2.44,2.44,0,0,1,.84-2.89c.72-.62.72-1.15,0-1.74-.17-.13-.28-.34-.44-.48a.79.79,0,0,1,0-1.33c.38-.39.7-.84,1.12-1.36a21.82,21.82,0,0,1-2.19-.55,8.59,8.59,0,0,1-5.3-8.71A8.53,8.53,0,0,1,22,1.46,7,7,0,0,1,32.13,3.2a9.25,9.25,0,0,1-1.64,12.45,7.72,7.72,0,0,1-1.95,1.08,17.25,17.25,0,0,1-2.22.58c.41.5.73,1,1.11,1.33a.83.83,0,0,1,0,1.29c-1.16,1.45-1.17,1.48,0,2.87a1.74,1.74,0,0,1,.44,1.77c-.34,1.28-.54,2.6-.8,3.91l.28.09c1.24-3.36,2.47-6.72,3.74-10.16a12.4,12.4,0,0,1,4.65,3.4A18.21,18.21,0,0,1,40.18,33c0,.68-.16.88-.82.88H13c-.5,0-.84-.07-.79-.71.45-5.86,2.58-10.8,7.75-14.06a12.89,12.89,0,0,1,1.32-.69L25,28.59Z"
                    />
                    <path
                      className="cls-2 fill-[#2b2946] "
                      d="M34.15,19.34l2.74-1.66L40,26.11l.28-.08a12.59,12.59,0,0,0-.45-2.31,2.48,2.48,0,0,1,.76-3,5.63,5.63,0,0,0,.46-.6c-1.31-1-1.72-2.1,0-3.32-.74-.16-1.22-.23-1.67-.38a7.26,7.26,0,0,1-4.69-7.75,7.38,7.38,0,0,1,3-5.28A5.92,5.92,0,0,1,45.8,4.72a7.73,7.73,0,0,1-1.23,10.71A18.94,18.94,0,0,1,41.34,17a5,5,0,0,0,.55.78.89.89,0,0,1,0,1.43c-.91,1-.91,1.1,0,2.1a1.66,1.66,0,0,1,.44,1.83A25.82,25.82,0,0,0,41.83,26l.28.08c1-2.76,2-5.52,3-8.34a9.53,9.53,0,0,1,3.62,2.53,15,15,0,0,1,4,9.64c0,.46,0,.77-.63.77-3.71,0-7.43,0-11.14,0a1.26,1.26,0,0,1-.31-.09A18.12,18.12,0,0,0,34.15,19.34Z"
                    />
                    <path
                      className="cls-2  fill-[#2b2946]"
                      d="M10.81,26a14,14,0,0,0-.44-2.27,2.49,2.49,0,0,1,.72-3,4.12,4.12,0,0,0,.44-.53c-.42-.57-1.12-1.11-1.17-1.71s.64-1.09,1.07-1.74c-.54-.12-1-.2-1.48-.34-3.68-1.09-5.15-5.18-4.64-8.1A7.06,7.06,0,0,1,8.65,3.17a5.9,5.9,0,0,1,8,2C19.11,9,18,14.15,14.22,16a17.88,17.88,0,0,1-2.38.81,6.41,6.41,0,0,0,.64.93.9.9,0,0,1,0,1.43c-.9,1-.94,1.12,0,2s.31,2,.23,2.95a17.48,17.48,0,0,1-.36,1.89l.26.08,3.09-8.46,2.31,1.42c-1.37,1.75-2.75,3.31-3.91,5A14.71,14.71,0,0,0,11.88,30c-.09.49-.28.69-.78.69H.08C-.56,26.28,2.9,19.18,7.51,17.85l3,8.27Z"
                    />
                  </g>
                </g>
              </svg>
            </span>

            <div className="text-[#2b2946] text-center lg:text-start">
              <span className="block text-center lg:text-start">Our</span>
              <span className="block text-center lg:text-start">Founders</span>
            </div>
          </div>

          <p className="font-medium text-lg text-center lg:text-start">
            Since 1983, <b>Safelift Industries</b> has evolved from a small
            trading business to a prominent conglomerate for Industrial Safety
            Solutions. With <b>four decades</b> of expertise spanning{" "}
            <b>three generations</b>, we serve a diverse global clientele with a
            century of experience in the material handling industry.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-20 justify-center md:space-x-3 lg:space-x-5 lg:justify-evenly items-center">
        {/* OUR MOTTO */}
        <div
          className="relative block !size-[22rem] min-h-[30rem] xs:min-h-[24rem] sxm:min-h-full min-w-[14rem] xxs:min-w-[18rem] md:min-w-[22rem] my-7 xl:my-0"
          data-aos="fade-right"
        >
          <span className="absolute inset-0 border-4 border-[#00aeef] " />

          <div className="relative flex justify-center items-center h-full transform transition-transform -translate-x-5 -translate-y-5">
            <div className="w-full h-full my-auto bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-5">
              <div className="flex justify-center items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 93.19 85.7"
                  className="w-20 h-20"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1 fill-[#1b92d1]"
                        d="M71.17,56.92A19.26,19.26,0,0,0,68,60.13a40.49,40.49,0,0,0-5.24,5.07,25.74,25.74,0,0,0-3,2.85l-5.74,5.67a22.23,22.23,0,0,0-3,3,66.87,66.87,0,0,0-5.63,5.41c-.48.46-.94.93-1.42,1.37a3.87,3.87,0,0,1-5.27,0,3.81,3.81,0,0,1-.29-5.26c.5-.6,1.08-1.12,1.62-1.69a48,48,0,0,0,5.41-5.45,18.81,18.81,0,0,0,3.15-3,73.48,73.48,0,0,0,5.48-5.4,22.9,22.9,0,0,0,3-3A13.92,13.92,0,0,0,59.91,57H54.84c-.35-.11-.72-.21-1,.1a21.5,21.5,0,0,0-2.67,2.81,35.72,35.72,0,0,0-5.22,5.14,14.78,14.78,0,0,0-3.27,3.24,49,49,0,0,0-5.39,5.2l-5.4,5.23c-1.81,1.77-4.11,1.9-5.71.31s-1.49-4,.35-5.8l5.15-5.14a71.85,71.85,0,0,0,5.41-5.49A14.28,14.28,0,0,0,40.3,59.5a58.4,58.4,0,0,0,4.9-4.67c.51-.48,0-.71-.3-.93-.81-.49-1.63-1-2.43-1.46-.36-.22-.68-.29-1,0-1.75,1.79-3.67,3.42-5.26,5.36a6.07,6.07,0,0,0-2,2.07,32.73,32.73,0,0,0-5.13,5c-2.05,1.6-3.73,3.6-5.63,5.35-.76.7-1.45,1.47-2.21,2.16a3.83,3.83,0,0,1-5.36-.13,3.77,3.77,0,0,1,0-5.35c2.41-2.44,4.86-4.82,7.29-7.23Q29,54,34.85,48.31c1.56-1.54,1.55-1.55.39-3.33a8.73,8.73,0,0,1-.65-1c-.36-.74-.72-.73-1.29-.17q-6.51,6.48-13.07,12.92-2.51,2.48-5,4.94c-1.87,1.84-4.14,1.94-5.79.27S8,58,9.77,56.18s3.35-3.3,5-5Q24,42.14,33.31,33.06c4.6-4.49,9-9.15,13.76-13.5,1.2-1.1,1.89-1.06,3,.1Q57.34,27,64.58,34.4a3.73,3.73,0,0,0,5.23.08,3.66,3.66,0,0,0,.12-5.22c-.92-1-1.87-2-2.82-3q-4.74-4.87-9.49-9.74C55,13.86,52.38,11.08,49,9.18,48,8.57,46.87,8,45.79,7.4a25,25,0,0,1,16-2.28A7.15,7.15,0,0,0,68.17,3.3c1-.9,2-1.85,2.91-2.85.55-.59.89-.6,1.46,0Q80.15,8.22,87.8,16c1.65,1.68,3.29,3.36,5,5,.54.52.58.85,0,1.38-1.24,1.14-2.39,2.39-3.63,3.54A6.58,6.58,0,0,0,87,31.06a22,22,0,0,1-7.94,18c-.77.67-1.46,1.45-2.19,2.18Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M45.79,7.4C46.87,8,48,8.57,49,9.18c3.34,1.9,5.94,4.68,8.59,7.39q4.76,4.86,9.49,9.74c1,1,1.9,2,2.81,3a3.65,3.65,0,0,1-.11,5.22,3.73,3.73,0,0,1-5.23-.08q-7.26-7.35-14.47-14.74c-1.15-1.16-1.84-1.2-3-.1-4.73,4.35-9.16,9-13.76,13.5Q24,42.12,14.78,51.23c.06-.58-.36-.88-.69-1.24a37.93,37.93,0,0,1-4.3-4.74A21.43,21.43,0,0,1,6.08,33.93,30.42,30.42,0,0,0,6,30.48,7.32,7.32,0,0,0,3.68,26c-1.16-1.05-2.2-2.23-3.33-3.31-.47-.45-.46-.76,0-1.2,5.15-5,10.08-10.2,15.33-15.09,1.81-1.69,3.53-3.46,5.25-5.24.57-.59.92-.57,1.49,0A27.56,27.56,0,0,0,26.55,5a5.9,5.9,0,0,0,4.33,1,26.7,26.7,0,0,1,14.3,1.33A2.49,2.49,0,0,0,45.79,7.4Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M62.76,65.2A40.49,40.49,0,0,1,68,60.13c.68,0,1,.47,1.41.89a98.4,98.4,0,0,0,7,7.15,3.93,3.93,0,0,1-1.83,6.68,3.2,3.2,0,0,1-3-.65c-3-2.87-5.82-5.83-8.72-8.77C62.8,65.38,62.79,65.28,62.76,65.2Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M71.17,56.92l5.67-5.66c.07.54.51.83.84,1.18,1.86,1.93,3.84,3.74,5.59,5.77a3.68,3.68,0,0,1-.16,5.3,3.79,3.79,0,0,1-5.34.08C75.54,61.4,73.37,59.15,71.17,56.92Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M54.06,73.72l5.74-5.67c0,.57.47.84.81,1.19,2,2.06,4.1,3.93,5.9,6.14a3.78,3.78,0,0,1-5.39,5.24c-2-2-4-4-6-6C54.76,74.29,54.4,74,54.06,73.72Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M20.24,56.68c4.35-4.3,8.72-8.6,13.06-12.92.57-.56.93-.57,1.29.17a8.73,8.73,0,0,0,.65,1c1.16,1.79,1.17,1.8-.39,3.33L23.2,59.7A6.12,6.12,0,0,0,20.24,56.68Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M45.46,82.14a66.87,66.87,0,0,1,5.63-5.41,15,15,0,0,1,2.83,2.73,4,4,0,0,1-.5,5.27,3.83,3.83,0,0,1-5.24-.14C47.29,83.76,46.64,82.66,45.46,82.14Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M37.27,73.51a49,49,0,0,1,5.39-5.2,13.75,13.75,0,0,1,2.85,2.8,48,48,0,0,1-5.41,5.45Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M29.09,64.9a33.17,33.17,0,0,1,5.13-5,6.28,6.28,0,0,1,2.85,2.71,71.85,71.85,0,0,1-5.41,5.49c-.3-.92-1.14-1.37-1.72-2C29.63,65.69,29.14,65.46,29.09,64.9Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M54.14,62.68a73.48,73.48,0,0,1-5.48,5.4c-.83-1.08-2-1.86-2.73-3a35.72,35.72,0,0,1,5.22-5.14A10.32,10.32,0,0,1,54.14,62.68Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M36.21,57.84c1.59-1.94,3.51-3.57,5.26-5.36a.7.7,0,0,1,1,0c.8.5,1.62,1,2.43,1.46.34.22.8.45.3.93a58.4,58.4,0,0,1-4.9,4.67c-.81-1.08-1.68-2-3.25-1.58A2.47,2.47,0,0,1,36.21,57.84Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e]"
                        d="M57.16,59.71c-.66-1-1.83-1.55-2.32-2.69h5.07A13.92,13.92,0,0,1,57.16,59.71Z"
                      />
                    </g>
                  </g>
                </svg>

                <h3 className="text-[#1a183e] font-bold text-xl">
                  Our Drive / Our Motto
                </h3>
              </div>

              <div className="mt-4">
                <div className="text-[#1a183e] font-medium text-sm">
                  <BulletPoints
                    title={"Prioritizing safety as a fundamental ethos"}
                  />
                  <BulletPoints
                    title={
                      "Zero-tolerance approach towards hazardous work conditions"
                    }
                  />
                  <BulletPoints
                    title={
                      "Unwavering commitment to fostering secure work environments"
                    }
                  />
                  <BulletPoints
                    title={
                      "Pioneering cutting-edge safety and sustainability solutions for years"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VISION */}
        <div
          className="relative block !size-[22rem] min-w-[14rem] xxs:min-w-[18rem] md:min-w-[22rem] my-7 xl:my-0"
          data-aos="fade-up"
        >
          <span className="absolute inset-0 border-4 border-[#00aeef] " />

          <div className="relative flex justify-center items-center h-full transform transition-transform -translate-x-5 -translate-y-5">
            <div className="w-full h-full my-auto bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-5">
              <div className="flex justify-center items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90.71 50.64"
                  className="w-20 h-20"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1 fill-[#1a183e]"
                        d="M55.82,31.91c-.76,8.06,7.59,15.63,16,15.28,9.3-.39,15.64-6.79,15.45-15.66s-5.81-15.36-15.8-15.64c-8-.23-16.16,7.68-15.61,16ZM18.74,47.69c7.77,0,16.84-8.56,16.39-16.21a17.05,17.05,0,0,0-5.21-10.87,15.25,15.25,0,0,0-11.2-4.71A15.88,15.88,0,0,0,3,31.54C3,40,10.37,47.31,18.74,47.69Zm26.2-21c-7.87,0-7.76,0-8,6.68-.5,13.23-13,19-22.84,16.53C.15,46.38-3.41,29.83,3.25,21A71.45,71.45,0,0,1,26.46,1.25c4.83-2.65,8.7-.93,11.6,3.68,1.09,1.73,2,2.36,3.83,2.19a22.43,22.43,0,0,1,3.38,0c3.16.19,5.73.23,7.45-3.6S59.86-.83,63.81,1.33A77.37,77.37,0,0,1,86.06,19.41c6.67,7.92,5.93,17.84-.73,25.07-7.6,8.23-18.58,7.64-25.8,1.61A18.07,18.07,0,0,1,52.84,30c.29-2.87-.52-3.63-3.17-3.35A46.61,46.61,0,0,1,44.94,26.66Z"
                      />
                      <path
                        className="cls-2 fill-[#1b92d1]"
                        d="M27.38,28.88a16.63,16.63,0,0,0-15.77-1.61c-1.41.53-2.07.38-1.5-1.51,1-3.33,3.47-4.87,6.51-5.52a8.1,8.1,0,0,1,8.64,3.16A10.52,10.52,0,0,1,27.38,28.88Z"
                      />
                      <path
                        className="cls-2 fill-[#1b92d1]"
                        d="M62.75,28.43c-.25-4.65,2.72-7.92,7.39-8.36s9,2.57,9.67,6.58c.25,1.4-.24,1.72-1.4,1.15A15.45,15.45,0,0,0,62.75,28.43Z"
                      />
                    </g>
                  </g>
                </svg>

                <h3 className="text-[#1a183e] font-bold text-xl">Our Vision</h3>
              </div>

              <div className="mt-4">
                <p className="text-[#1a183e] font-medium text-sm">
                  Safelift Industries is on the path to becoming the top
                  professional choice for premium material handling products,
                  offering diverse solutions for complex industrial needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR Mission */}
        <div
          className="relative block !size-[22rem] min-w-[14rem] xxs:min-w-[18rem] md:min-w-[22rem] my-7 xl:my-0"
          data-aos="fade-left"
        >
          <span className="absolute inset-0 border-4 border-[#00aeef] " />

          <div className="relative flex justify-center items-center h-full transform transition-transform -translate-x-5 -translate-y-5">
            <div className="w-full h-full my-auto bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-5">
              <div className="flex justify-center items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 84.68 85.04"
                  className="w-20 h-20"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1 fill-[#1b92d1]"
                        d="M71.45,85c-2.51-2.55-4.84-5.32-7.58-7.6s-4-4.92-2.79-8.38c.74-2.09-.17-3.33-1.6-4.73q-9.37-9.16-18.54-18.56c-1.13-1.16-1.55-3-2.5-4.34s-2.26-2.61-3.32-4S31.22,35,33,33.15c2-2.08,3.15,1,4.46,2.06,1.78,1.46,3,3.49,5.74,3.69.85.07,1.7,1.13,2.43,1.85C51.43,46.49,57.4,52,62.81,58.11c2.7,3,5.41,3.37,8.93,2.76a4.53,4.53,0,0,1,3.36.93c2.92,2.64,5.64,5.49,8.39,8.31A10.49,10.49,0,0,1,84.68,72a10.14,10.14,0,0,1-2.22,1c-2.14.41-4.3.73-6.46,1-1.35.13-2,.61-2.12,2.06-.33,3-.9,6-1.38,9Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e] "
                        d="M52.06,61.51C40,70.24,20.23,69.42,8.22,55.7A33.63,33.63,0,0,1,55.62,8.21C68.29,19,71.09,39.1,61.51,52.09c-.76-.72-1.44-1.5-2.24-2.12-1.5-1.15-1.57-2.22-.68-4A27.95,27.95,0,1,0,6.79,25.51C2.25,40.7,11.32,56.9,26.59,60.74A25.84,25.84,0,0,0,45,59.06c2.61-1.32,4.28-1.27,5.86,1.14A11.42,11.42,0,0,0,52.06,61.51Z"
                      />
                      <path
                        className="cls-1 fill-[#1b92d1]"
                        d="M52,43.17a20.55,20.55,0,0,0-2.5-2.89c-1.4-1.08-1.47-2.3-1.14-3.88,1.25-6.08-.83-11.07-5.61-14.78S32.54,17.4,27,20a15.09,15.09,0,0,0-7.84,18.3A14.94,14.94,0,0,0,36.44,48.42c2.48-.5,2.51-.49,6.13,3.74-7.35,4.56-18.7,2.28-24.83-5A20.83,20.83,0,0,1,45.16,16.32C53.85,22.12,56.85,33.21,52,43.17Z"
                      />
                      <path
                        className="cls-2 fill-[#1a183e] "
                        d="M42.1,35.69c-1.59-1.72-2.87-3.23-4.28-4.61-2.37-2.31-5.12-2.37-7.18-.29-1.89,1.92-1.81,4.73.37,7,1.32,1.38,2.84,2.57,4.43,4A7.58,7.58,0,0,1,26.37,39a9.15,9.15,0,0,1,.33-11.16,9,9,0,0,1,10.67-2.41C41.15,27.21,43,30.89,42.1,35.69Z"
                      />
                    </g>
                  </g>
                </svg>

                <h3 className="text-[#1a183e] font-bold text-xl">
                  Our Mission
                </h3>
              </div>

              <div className="mt-4">
                <div className="text-[#1a183e] font-medium text-sm">
                  <BulletPoints
                    title={
                      "Deep understanding of customers and their intricate safety needs "
                    }
                  />
                  <BulletPoints
                    title={"Highly customized material handling solutions"}
                  />
                  <BulletPoints
                    title={
                      "Commitment to safety, quality, variety, and value-for-money"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

const BulletPoints = ({ title }) => {
  return (
    <div className="flex space-x-2 text-sm my-1">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.86 6.89"
          className="w-3 h-3"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon
                className="cls-1 fill-[#1a183e]"
                points="0 6.89 3.45 3.45 0 0 5.69 0 9.14 3.45 5.69 6.89 0 6.89"
              />
              <polygon
                className="cls-2 fill-[#1b92d1]"
                points="6.95 6.89 10.39 3.45 6.95 0 9.42 0 12.86 3.45 9.42 6.89 6.95 6.89"
              />
            </g>
          </g>
        </svg>
      </span>

      <span>{title}</span>
    </div>
  );
};
