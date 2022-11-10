import React from "react";
import "./Home.css";
import { useRef } from "react";

const TimeComplexity = ({ output, setOutput, prompt1, setPrompt, setModel }) => {
  setOutput("")
  
  let str2 = '\n"""\nThe time complexity of this "Function" is';
  let str = `// To get the correct output ,please create a function and write code inside the function

  def foo(n, k):
  accum = 0
  for i in range(n):
      for l in range(k):
          accum += i
  return accum
    `;
  let output1 = "O(nk)";

  let inputRef = useRef();

  function handleClick() {
    setOutput("Running...")
    setModel("text-davinci-002")

    setPrompt(inputRef.current.value + str2);
    // setPrompt(str+str2)
    // console.log(str+str2)
    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the code");
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
          <p>Time Complexity</p>
          <p className="md:text-xl text-sm py-2">
            Calculate the Time Complexity of you CODE !!!
          </p>
        </div>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            <p className="text-white my-3 ">Paste your code here </p>
            <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Code... "
              ref={inputRef}
            />
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              AI Output :{output && output}
            </div>
            <div
              className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Calculate
            </div>
          </div>
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col">
            <p className="text-white my-3 ">
              Look at the sample code for reference{" "}
            </p>
            <textarea className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2">
              {str}
            </textarea>
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              Output :{output1}
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

export default TimeComplexity;
