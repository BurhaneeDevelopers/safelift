import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center px-24">
      <input
        type="text"
        id="name"
        name="name"
        class="w-full bg-white border border-[#197ab3] text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-s-sm max-w-sm"
        placeholder="Sign up for Newsletter"
      />

      <button className="bg-[#008dd2] hover:bg-[#106793] px-5 py-2 min-w-max text-white text-lg font-semibold">
        Sign Up
      </button>
    </div>
  );
};

export default NewsLetter;
