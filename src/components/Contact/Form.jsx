import React from "react";
import Container from "../constants/Container";
import { Body } from "../textComponents/Body";
import { Heading } from "../textComponents/Heading";

const Form = () => {
  return (
    <Container className="relative bg-[#050742] flex flex-col justify-center items-center border-b border-gray-500 overflow-hidden">
      {/* <div
        className="flex flex-col gap-4 4xl:gap-10 lg:max-w-screen-xs 2xl:max-w-screen-sm 4xl:max-w-screen-md"
        data-aos="fade-up"
      >
        <Heading className="text-white">
          Future of Material Handling Equipment{" "}
          <span className="text-nowrap text-[#00aeef]">What’s Next?</span>
        </Heading>

        <Body className="text-justify flex flex-col gap-4 !font-medium text-white">
          <span>
            Material handling equipment manufacturers must focus on automation
            technologies combined with AI-driven solutions and IoT-enabled
            systems to remain competitive in the future. Safelift leads the
            smart warehousing sector through its development of intelligent
            automated equipment that meets modern business demands sustainably.
          </span>
        </Body>
      </div> */}

      <div className="w-full flex sm:flex-nowrap flex-wrap flex-row-reverse ">
        <div
          className="w-full overflow-hidden sm:ml-10 items-end justify-start relative hidden lg:flex"
          data-aos="fade-left"
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.391388747704!2d88.2380495108365!3d22.60185523181188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f517a6fb081%3A0xb15b32f215a1643f!2sSafelift%20Industries!5e0!3m2!1sen!2sin!4v1718015002087!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div
          className="flex flex-col gap-4 md:ml-auto w-full md:py-8 mt-8 md:mt-0 max-w-screen-sm"
          data-aos="fade-right"
        >
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-white">
              <Body>First Name</Body>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-white">
              <Body>Last Name</Body>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-white">
              <Body>Email *</Body>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div className="relative">
            <label for="subject" className="leading-7 text-sm text-white">
              <Body>Subject</Body>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-white">
              <Body>Message</Body>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out rounded-sm"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className=" bg-[#00aeef] border-0 !p-2 !px-6 focus:outline-none hover:bg-indigo-600">
              <Body className="text-white font-semibold">Submit</Body>
            </button>
          </div>
        </div>
        <div
          className="w-full sm:ml-10 flex items-end justify-start relative border lg:hidden mt-10"
          data-aos="fade-left"
        >
          <iframe
            width="100%"
            height="100%"
            className="w-full h-96"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.391388747704!2d88.2380495108365!3d22.60185523181188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f517a6fb081%3A0xb15b32f215a1643f!2sSafelift%20Industries!5e0!3m2!1sen!2sin!4v1718015002087!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Form;
