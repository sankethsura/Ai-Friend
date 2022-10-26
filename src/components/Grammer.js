import React from "react";
import "./Home.css";
import { useRef } from "react";

const Grammer = ({ output, setOutput, prompt1, setPrompt,setModel }) => {
  let str2 = "French";
  let str = `
    
    What rooms do you have available?
      
        `;
  let output1 = "She didn't go to the market.";

  let inputRef = useRef();
  let langRef = useRef();

  function handleClick() {
    // setOutput("Running...")
    setModel("text-davinci-002")

    setPrompt(
      "Correct this to standard English: \n\n" + inputRef.current.value + ":"
    );
    // setPrompt(str+str2)

    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the text!!!");
  }

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        className="w-[100vw] h-[100vh] object-cover -z-50 blur-[] fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-[85%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Grammar Correction</p>
          <p className="md:text-xl text-sm py-2">
          Free grammar checker finds and instantly corrects grammar, spelling, and other writing errors in your text.
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
              className="w-[150px] h-[48px] bg-[#ff1f71]  flex justify-center items-center rounded-3xl shadows--2 text-white mt-9 md:mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Correct Sentense
            </div>
          </div>
          <div className="md:w-[45%] w-[90vw]  md:h-[70vh] mb-6 flex items-center flex-col">
            <p className="text-white my-3 ">
              Look at the sample input for reference{" "}
            </p>
            <div
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              
            >She no went to the market.</div>
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

export default Grammer;
