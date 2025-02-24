import React from "react";

const Contact = () => {
  return (
    <section class="relative bg-[#282547] flex flex-col justify-center items-center">
      <span
        className="text-3xl lg:text-3xl xl:text-4xl font-bold uppercase text-white text-center mt-20"
        id="contactUs"
        data-aos="fade-down"
      >
        Contact Us
      </span>
      <div class="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap flex-row-reverse">
        <div
          class="lg:w-2/3 md:w-1/2-lg overflow-hidden sm:ml-10 flex items-end justify-start relative"
          data-aos="fade-left"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.391388747704!2d88.2380495108365!3d22.60185523181188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f517a6fb081%3A0xb15b32f215a1643f!2sSafelift%20Industries!5e0!3m2!1sen!2sin!4v1718015002087!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div
          class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          data-aos="fade-right"
        >
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div class="relative">
            <label for="subject" class="leading-7 text-sm text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-sm"
            />
          </div>
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out rounded-sm"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button class="text-white bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
