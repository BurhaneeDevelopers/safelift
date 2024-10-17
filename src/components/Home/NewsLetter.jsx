import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-between items-center px-44 py-10 bg-gray-100">
      <div className="">
        <h3 className="text-3xl font-bold max-w-2xl">
          Sign Up for Fresh Updates & Insights!
        </h3>
      </div>

      <div className="flex">
        <input
          type="text"
          id="name"
          name="name"
          class="bg-white border border-[#197ab3] text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-s-sm w-96"
          placeholder="Sign up for Newsletter"
        />

        <button className="bg-[#008dd2] hover:bg-[#106793] px-5 py-2 min-w-max text-white text-lg font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
