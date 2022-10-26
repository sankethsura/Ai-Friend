import React from "react";
import "./Home.css";
import { useRef } from "react";

const EssayWriting = ({ output, setOutput, prompt1, setPrompt,setModel }) => {
  let str2 = "French";
  let str = `
    
    What rooms do you have available?
      
        `;
  let output1 = "1. Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist who is best known for his contributions to the design of the modern alternating current (AC) electricity supply system. 2. Tesla's patents and theoretical work formed the basis of modern alternating current (AC) electrical power systems, including the polyphase system of electrical distribution and the AC motor. 3. Tesla's AC induction motor and alternating current power distribution were the basis for the development of the modern electric utility industry. 4. Tesla's work in the field of radiofrequency technology led to the development of wireless communication and the radio. 5. Tesla's vision of a global wireless energy network was the basis for the development of the modern day internet.";

  let inputRef = useRef();
  let langRef = useRef();

  function handleClick() {
    // setOutput("Running...")
    setModel("text-davinci-002")
    setPrompt(
      "What are 5 key points I should know when studying " + inputRef.current.value + ":"
    );
    // setPrompt(str+str2)

    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the text!!!");
  }

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1446102892025-3900145fd2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="w-[100vw] h-[100vh] object-cover -z-50  fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-80"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Essay Writing</p>
          <p className="md:text-xl text-sm py-2">
            Want to write an Essay on a Topic?
          </p>
        </div>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw]  md:h-[70vh] mb-6 flex items-center flex-col ">
            <p className="text-white my-3 ">Paste your Topic here :</p>
            <input
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Enter the Language"
              ref={inputRef}
            />
            {/* <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Code... "
              ref={inputRef}
            /> */}
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              AI Output :{output && output}
            </div>
            <div
              className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-9 md:mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Create
            </div>
          </div>
          <div className="md:w-[45%] w-[90vw]  md:h-[70vh] mb-6 flex items-center flex-col">
            <p className="text-white my-3 ">
              Look at the sample input for reference{" "}
            </p>
            <div
            className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
            
          >Nikola Tesla and his contributions to technology:</div>
            {/* <textarea className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2">
              {str}
            </textarea> */}
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              AI Output :{output1}
            </div>
            {/* <div className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 duration-200 cursor-none">
              Calculate
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EssayWriting;
