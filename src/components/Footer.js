import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
// import Loader from "./loader";


const Footer = ({ output, setOutput, prompt1, setPrompt }) => {
  let nav = useNavigate();
  return (
    <div className="mb-10">
      {/* <Loader /> */}
      {/* <div className="w-[80vw] h-[.2vh] bg-gray-400 m-auto translate-y-[85px] hidden md:flex "></div> */}
      <div className="flex w-[90vw] m-auto justify-evenly items-top text-white text--1 flex-col md:flex-row">
        <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md underline ">
            Coding help
          </p>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("TimeComplexity");
            }}
          >
            Calc Time Complexity
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("ConvertToLang");
            }}
          >
            Convert to other Language
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("writeCode");
            }}
          >
            Write a Code
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
        </section>
        {/* <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md">
            Frendly chat
          </p>
          <div className=" hover:scale-110 duration-300 cursor-pointer" onClick={() => {
              setOutput("");
              nav("ChatBot");
            }}>Chat Bot</div>
        </section> */}
        <section>
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md underline">
            Image Generator
          </p>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("imagegen");
            }}
          >
            AI Image Generator
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
        </section>
        <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md underline">
            English / General
          </p>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("Translate");
            }}
          >
            Translate
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("EssayWriting");
            }}
          >
            Essay Writing
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer flex items-center"
            onClick={() => {
              setOutput("");
              nav("Grammer");
            }}
          >
            Grammar Correction
            <span className="text-white px-3">
              <HiArrowCircleRight />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
