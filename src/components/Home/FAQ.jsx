"use client";
import React, { useState } from "react";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { SmallCaption } from "../textComponents/SmallCaption";
import { Body } from "../textComponents/Body";
import Image from "next/image";
import { LargeCaption } from "../textComponents/LargeCaption";
import Link from "next/link";

// FAQ data array for better maintainability
const faqData = [
  {
    question: "What is an example of material handling?",
    answer:
      "Material handling involves using warehouse conveyors to move goods efficiently, which lowers manual labor requirements and boosts storage and distribution productivity.",
  },
  {
    question: "What is manual material handling equipment?",
    answer:
      "Pallet jacks, hand trucks, and trolleys represent manual material handling equipment that needs human power to move materials in storage and industrial environments.",
  },
  {
    question: "What are the different uses for material handling equipment?",
    answer:
      "Material handling equipment enables the lifting and moving of materials as well as their storage and sorting during loading and unloading processes in manufacturing, logistics, construction sites, and warehouses to enhance safety and efficiency.",
  },
  {
    question: "Who uses material handling equipment?",
    answer:
      "Material handling equipment serves manufacturing, logistics, warehousing, retail, e-commerce, construction, and transportation industries by streamlining operations while reducing labor work and improving safety conditions.",
  },
  {
    question: "What is the duty of material handling?",
    answer:
      "Material handling serves primarily to manage the movement, storage, and control of goods safely and efficiently while reducing costs across production and distribution stages.",
  },
];

const FAQ = () => {
  // Initialize with 0 (first item) as open
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container className="bg-[#050742]">
      <Heading className="text-white mb-7">Frequently Asked Questions</Heading>
      <div className="flex flex-wrap 2xl:flex-nowrap gap-20 justify-between w-full">
        <div className="flex flex-col gap-7 min-w-fit">
          {faqData.map((faq, index) => (
            <FaqCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              setIsOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="border-4 border-white p-5 flex flex-col justify-between items-center gap-4 w-full  2xl:max-w-screen-xs">
          <div className="flex flex-col gap-4 items-center h-full py-10">
            <Image
              src="/NewHome/icons/chat.svg"
              alt="Partner"
              width={500}
              height={500}
              className="object-contain object-center size-40"
            />

            <LargeCaption className="text-white text-center !max-w-xl">
              Do you have more questions ?
            </LargeCaption>
          </div>

          <Link href={"/about"} className="w-fit bg-gray-200 p-3 px-10">
            <Body className="text-[#050742] !font-medium">
              Let&apos;s connect
            </Body>
          </Link>
        </div>
      </div>
    </Container>
  );
};

// Optimized FaqCard with props and collapsible functionality
const FaqCard = ({ question, answer, isOpen, setIsOpen }) => {
  return (
    <div className="bg-white p-5 px-5 pr-14 w-full 2xl:max-w-screen-sm 6xl:max-w-screen-lg flex flex-col gap-2 relative">
      <button
        onClick={setIsOpen}
        className="bg-gray-300 size-10 flex justify-center items-center rounded-full text-4xl absolute top-3 right-3 hover:bg-gray-400 transition-colors"
      >
        {isOpen ? "-" : "+"}
      </button>
      <SmallCaption className="!font-semibold text-gray-800">
        {question}
      </SmallCaption>
      {isOpen && <Body className="text-gray-600">{answer}</Body>}
    </div>
  );
};

export default FAQ;
