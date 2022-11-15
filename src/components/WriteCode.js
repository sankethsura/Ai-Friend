import React from "react";
import "./Home.css";
import { useRef } from "react";

const WriteCode = ({ output, setOutput, prompt1, setPrompt, setModel }) => {

  
  let str2 = '\n"""\nThe time complexity of this "Function" is';
  let str = `// To get the correct output ,please write instructions as detailed as you can.

  find gdc of an array with least time complexity in python
    `;
  let output1 = "def gcd(a, b): if a == 0: return b return gcd(b % a, a) def findGCD(arr, n): result = arr[0] for i in range(1, n): result = gcd(arr[i], result) return result";

  let inputRef = useRef();

  function handleClick() {
    setOutput("Running...")
    setModel("text-davinci-002")

    setPrompt("write a code to "+inputRef.current.value);
    // setPrompt(str+str2)
    // console.log(str+str2)
    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the code");
  }

  return (
    <div>
      <img
        src="https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=1380&t=st=1668170248~exp=1668170848~hmac=e3088a87e41e8bc63477dcc05a079fc350a8bd977465f7f88aed76a57edba8a6"
        className="w-[100vw] h-[100vh] object-cover -z-50 blur-[px] fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-80"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Write a Code with AI</p>
          <p className="md:text-xl text-sm py-2">
            Create a code with few instructions in your common language!!!
          </p>
        </div>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            <p className="text-white my-3 ">Write your instructions here </p>
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
              Look at the sample instructions for reference{" "}
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

export default WriteCode;
