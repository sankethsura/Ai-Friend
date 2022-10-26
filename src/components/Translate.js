import React from "react";
import { useRef } from "react";
const Translate = ({ output, setOutput, prompt1, setPrompt, setModel }) => {
  let str2 = "French";
  let str = `
  Sentence : 
  What rooms do you have available?
    
      `;
  let output1 = "O(nk)";

  let inputRef = useRef();
  let langRef = useRef();

  function handleClick() {
    // setOutput("Running...")
    setModel("text-davinci-002");

    setPrompt(
      "Translate this into 1. " +
        langRef.current.value +
        " :\n\n" +
        inputRef.current.value +
        "\n\n1."
    );
    // setPrompt(str+str2)
    console.log("lang", langRef.current.value);
    console.log(
      "Translate this into 1. " +
        langRef.current.value +
        " :\n\n" +
        inputRef.current.value +
        "\n\n1."
    );
    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the text!!!");
  }

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        className="w-[100vw] h-[100vh] object-cover -z-50 fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-[78%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[19%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[13%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Translation</p>
          <p className="md:text-xl text-sm py-2">
            Want to translate from English to other langauage?
          </p>
        </div>

        <p className="text-white py-5">
          Note : Your "AI friend" may find difficuly in some regional Languages,
          Please don't mind.😁{" "}
        </p>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            <input
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Enter the Language"
              ref={langRef}
            />
            <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Enter the text here... "
              ref={inputRef}
            />

            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              Answer :{output && output}
            </div>
            <div
              className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Translate
            </div>
          </div>

          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            {/* <input
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder={str2}
              //   ref={langRef}
            ></input> */}
            <div className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline">
              {str2}
            </div>
            {/* <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder={str}
              //   ref={inputRef}
            ></textarea> */}
            <div className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline">
              {str}
            </div>
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              AI Answer : Quels sont les chambres disponibles?
            </div>
            {/* <div className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer">
              Translate
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Translate;
