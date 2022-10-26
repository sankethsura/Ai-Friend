import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ output, setOutput, prompt1, setPrompt }) => {
  let nav = useNavigate();
  return (
    <div className="mb-10">
      {/* <div className="w-[80vw] h-[.2vh] bg-gray-400 m-auto translate-y-[85px] hidden md:flex "></div> */}
      <div className="flex w-[70vw] m-auto justify-between items-top text-white text--1 flex-col md:flex-row">
        <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md">
            Coding help
          </p>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer"
            onClick={() => {
              setOutput("");
              nav("TimeComplexity");
            }}
          >
            Calc Time Complexity
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer"
            onClick={() => {
              setOutput("");
              nav("ConvertToLang");
            }}
          >
            Convert to other Language
          </div>
        </section>
        <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md">
            Frendly chat
          </p>
          <div className=" hover:scale-110 duration-300 cursor-pointer" onClick={() => {
              setOutput("");
              nav("ChatBot");
            }}>Chat Bot</div>
        </section>
        <section className="">
          <p className="my-10 font-semibold text-lg underline-offset-[10px] bg-gray-700/40 text-white py-3 px-5 rounded-md">
            English / General
          </p>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer"
            onClick={() => {
              setOutput("");
              nav("Translate");
            }}
          >
            Translate
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer"
            onClick={() => {
              setOutput("");
              nav("EssayWriting");
            }}
          >
            Essay Writing
          </div>
          <div
            className=" hover:scale-110 duration-300 cursor-pointer"
            onClick={() => {
              setOutput("");
              nav("Grammer");
            }}
          >
            Grammar Correction
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
