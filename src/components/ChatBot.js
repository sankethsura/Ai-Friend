import React, { useEffect } from "react";
import "./Home.css";
import { useRef, useState } from "react";

const ChatBot = ({ output, setOutput, prompt1, setPrompt, setModel,value,setValue }) => {

  let inputRef = useRef();
  function handleClick() {
    setModel("text-curie-001");
      setPrompt("\n"+value + "\n" + inputRef.current.value+"\n");
      inputRef.current.value = ""
      
  }

  return (
    <div>
      <img
        src="https://media.gettyimages.com/photos/cityscape-data-picture-id1222958278?k=20&m=1222958278&s=612x612&w=0&h=xnVTyWQgCPTbvo0XW5ipTOrpOVH54cQ07O_nLCfNNHw="
        className="w-[100vw] h-[100vh] object-cover -z-50 blur-[3px] fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-60"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Chat Bot</p>
          <p className="md:text-xl text-sm py-2">
            Friendly chat with your AI bot friend
          </p>
        </div>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            <p className="text-white my-3 ">Chat here </p>
            <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="ask here..."
              ref={inputRef}
            >
              
                      </textarea>
                      <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5">
                          {value}
                      </div>
            <div
              className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Enter
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatBot;
