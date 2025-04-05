import Image from "next/image";
import React from "react";
import { SmallCaption } from "./textComponents/SmallCaption";
import { Body } from "./textComponents/Body";
import { SmallBody } from "./textComponents/SmallBody";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#050742]">
        <div className="mx-auto px-20">
          <div className="flex flex-wrap 2xl:!flex-nowrap justify-center sm:justify-between">
            <div className="text-white">
              <div className="flex justify-center text-white font-semibold sm:justify-start">
                <SmallCaption>Enquiries</SmallCaption>
              </div>

              <Body className="mt-2 text-center leading-relaxed sm:text-start">
                <span className="block">For any enquiries, questions</span>
                <span className="block">or commendations,</span>
                <span className="block">please call (033) 2230 0662 / 2230 5760</span>
              </Body>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row flex-wrap md:justify-start lg:justify-end sm:items-start lg:space-x-5 mt-10 xl:mt-0 h">
              <div className="text-center sm:text-start max-w-screen-sm text-white flex flex-col justify-center xl:justify-normal">
                <SmallCaption className="font-semibold mb-4 4xl:translate-x-10 5xl:translate-x-16">
                  Address
                </SmallCaption>

                <div className="flex gap-1 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.22 35.64"
                    className="min-w-7 size-7 xl:min-w-10 xl:!size-10 hidden lg:flex"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <rect
                          className="fill-[#01002f]"
                          width="31.22"
                          height="35.64"
                        />
                        <path
                          className="fill-[#fff]"
                          d="M19.41,14a3.83,3.83,0,0,1-4.19,3.39A3.93,3.93,0,0,1,13.78,17l-.28-.17a3.4,3.4,0,0,1-.28-.21A3.81,3.81,0,0,1,16,9.82,3.82,3.82,0,0,1,19.41,14ZM17.63,27.27a1.75,1.75,0,0,1,1,.44c.89,1-4.79,1.38-6,.41a.31.31,0,0,1,0-.47,3.38,3.38,0,0,1,1-.41l-1.06-1.48c-.93,0-6.53.84-5.57,2.48,1.3,2.22,13.07,2.64,16.65.54.49-.29,1-.8.47-1.42-.88-1-4.1-1.53-5.43-1.6l-1.05,1.51Zm-2,.67c2.74-3.56,5.8-7.81,7.54-12a6.58,6.58,0,0,0,.62-4,8.08,8.08,0,0,0-1.54-3.34L21.68,8a8.09,8.09,0,0,0-2.11-1.56,8.76,8.76,0,0,0-7.87,0A8,8,0,0,0,9,8.6c-2.92,3.74-1.45,6.94.65,10.67.35.63,1,1.67,1.38,2.27.17.26.34.48.5.73l3.55,5A5.62,5.62,0,0,0,15.62,27.94Z"
                        />
                      </g>
                    </g>
                  </svg>

                  <Body className="text-white min-w-fit">
                    <span className="block">Ankurhati Industrial Park</span>
                    <span className="block">
                      Near Ludhiana Hotel (Pathak Machine)
                    </span>
                    <span className="block">NH-6 Domjur</span>
                    <span className="block">Howrah - 711-302</span>
                    <span className="block">West Bengal</span>
                  </Body>
                </div>
              </div>

              <div className="hidden md:flex h-40 self-end bg-gray-200 w-[1px] mx-4"></div>

              <div className="text-center sm:text-start max-w-screen-sm text-white flex flex-col justify-center xl:justify-normal">
                <SmallCaption className="font-semibold mb-4 4xl:translate-x-10 5xl:translate-x-16">
                  Phone
                </SmallCaption>

                <div className="flex gap-1 items-center mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.22 35.64"
                    className="min-w-7 size-7 xl:min-w-10 xl:!size-10 hidden lg:flex"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <rect
                          className="fill-[#01002f]"
                          width="31.22"
                          height="35.64"
                        />
                        <path
                          className="fill-white"
                          d="M6.86,12.59a8.8,8.8,0,0,0,.15,2,16.6,16.6,0,0,0,1.45,4,29.58,29.58,0,0,0,2.11,3.48l1.57,1.95a12.5,12.5,0,0,0,3.36,2.65,5.89,5.89,0,0,0,3,.73,3.75,3.75,0,0,0,.9-.19,3.45,3.45,0,0,0-.37-.63L18.65,26c-.27-.43-.52-.81-.78-1.24-.13-.21-1.52-2.37-1.56-2.54-.25,0-.35.15-.63.08-.66-.16-1.59-1.39-2-1.92s-2-3.15-2.35-3.84A2.85,2.85,0,0,1,11,15.15a.69.69,0,0,1,.44-.64c-.47-.86-1.42-2.3-2-3.22L8.67,10a4.38,4.38,0,0,1-.4-.67c-.4.1-.87,1-1,1.33A5.22,5.22,0,0,0,6.86,12.59Z"
                        />
                        <path
                          className="fill-white"
                          d="M8.62,9.12l3.22,5.16,1-.59c.39-.21.81-.33.81-.84A4.32,4.32,0,0,0,13,11.59l-1.88-3a.7.7,0,0,0-.54-.39h-.1a2.87,2.87,0,0,0-.94.43C9.22,8.78,8.94,9,8.62,9.12Z"
                        />
                        <path
                          className="fill-white"
                          d="M16.66,22c.07.12.1.2.18.32s.12.18.2.3L19.8,27l1.5-.82c.77-.45.09-1.18-.32-1.85-.22-.35-1.85-3-2.06-3.18-.47-.32-.93.08-1.34.3S17,21.8,16.66,22Z"
                        />
                        <path
                          className="fill-white"
                          d="M17.61,9.69c0,.14.27.19.52.28a8.52,8.52,0,0,1,2,1.21,7,7,0,0,1,1,1,8.43,8.43,0,0,1,1.4,2.23,7.45,7.45,0,0,1,.6,3.41,4.84,4.84,0,0,1-.11,1.05,4.81,4.81,0,0,0,1.13.23c0-.26.11-.62.12-.9a13.69,13.69,0,0,0-.06-1.94,8.85,8.85,0,0,0-1.48-3.82A9.66,9.66,0,0,0,18.75,9,4.47,4.47,0,0,0,18,8.75a1.25,1.25,0,0,1-.1.21A3.33,3.33,0,0,0,17.61,9.69Z"
                        />
                        <path
                          className="fill-white"
                          d="M16.74,12.4a5.43,5.43,0,0,1,2.87,2.29A5,5,0,0,1,20.35,17v.64c0,.25,0,.32,0,.56a4.42,4.42,0,0,0,1.06.23c0-.26.08-.47.08-.79A5.79,5.79,0,0,0,21,15.06a6.36,6.36,0,0,0-1.56-2.24,6.17,6.17,0,0,0-2.38-1.44A2.91,2.91,0,0,0,16.74,12.4Z"
                        />
                      </g>
                    </g>
                  </svg>

                  <Body className="text-white">
                    <span className="block">+91 93302 41259</span>
                    <span className="block">Whatsapp: +91 81005 45253</span>
                    {/* <span className="block">+91 98316 66620/91238 69865</span> */}
                  </Body>
                </div>
              </div>

              <div className="hidden md:flex h-40 self-end bg-gray-200 w-[1px] mx-4"></div>

              <div className="text-center sm:text-start max-w-72 text-white flex flex-col justify-center xl:justify-normal">
                <SmallCaption className="font-semibold mb-4 4xl:translate-x-10 5xl:translate-x-16">
                  Email
                </SmallCaption>

                <div className="flex gap-1 items-center mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.22 35.64"
                    className="min-w-7 size-7 xl:min-w-10 xl:!size-10 hidden lg:flex"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <rect
                          className="fill-[#01002f]"
                          width="31.22"
                          height="35.64"
                        />
                        <path
                          className="fill-[#fff]"
                          d="M25.79,9.83v0L5.43,16.16a11.65,11.65,0,0,0,1,.74l1.9,1.44a6.79,6.79,0,0,1,.94.77v6.72l1.35-1.16.2-.19,2-1.79a9.5,9.5,0,0,0-.84-1c-.27.21-1.3,1.19-1.47,1.28V19.23c0-.12.2-.19.35-.28l12.08-7.3a7.9,7.9,0,0,1,.85-.5c-.45.42-1,.8-1.44,1.21L16.5,17.18c-1.3,1.11-2.73,2.22-4,3.31l-.37.33c.17.17,2.41,1.79,2.7,2l2,1.5c.23.16.46.36.69.49l4.11-7.49c.7-1.22,1.38-2.61,2.06-3.75.17-.31.32-.61.51-.93l1-1.88A8.07,8.07,0,0,1,25.79,9.83Z"
                        />
                      </g>
                    </g>
                  </svg>

                  <Body className="text-white">info@safelift.in</Body>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 py-3 xl:py-5 bg-[#01002f]">
          <div className="text-center sm:flex sm:justify-between sm:text-start px-10 xl:px-20">
            <SmallBody className="text-sm text-white">
              <span className="border-e border-white px-3 hover:underline">
                Privacy Policy
              </span>
              <span className="border-e border-white px-3 hover:underline">
                Terms & Condition
              </span>
              <span className="border-e border-white px-3 hover:underline">
                FAQ
              </span>
            </SmallBody>

            <SmallBody className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              <span className="block sm:inline">
                &copy; 2024 Safelift and{" "}
                <a
                  href="https://www.studio53.in/"
                  className="cursor-pointer hover:underline font-medium"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Powered by Studio53
                </a>
              </span>
            </SmallBody>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
