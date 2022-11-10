import React, { useRef } from "react";

const ConvertToLang = ({ output, setOutput, prompt1, setPrompt, setModel }) => {
  setOutput("")

  let str2 = '\n"""\nThe time complexity of this "Function" is';
  let str = `// Write your code in any language of your choice

  def foo(n, k):
  accum = 0
  for i in range(n):
      for l in range(k):
          accum += i
  return accum
    `;
  let output1 = `public static int foo(int n, int k) { int accum = 0; for (int i = 0; i < n; i++) { for (int l = 0; l < k; l++) { accum += i; } } return accum; }`;

  let inputRef = useRef();
  let langRef = useRef();
  function handleClick() {
    setOutput("Running...")
    setModel(`text-curie-001`);
    setPrompt(
      `Translate this function into ${langRef.current.value} ${inputRef.current.value}`
    );
    // setPrompt(str+str2)
    console.log(`Translate this function into ${langRef.current.value}`);
    if (inputRef.current.value.length == 0)
      setOutput("Please Complete the code");
  }

  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg"
        className="w-[100vw] h-[100vh] object-cover -z-50 fixed"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-60"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>Convert to other Language</p>
          <p className="md:text-xl text-sm py-2">
            Want to convert your code from one language to other ?
          </p>
        </div>
        <p className="text-white py-5">
          Note : Please use this tool to convert small pieces of your code for better understanding.
        </p>
        <div className=" flex justify-evenly items-center flex-col md:flex-row ">
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col ">
            <p className="text-white my-3 ">Paste your code here </p>
            <input
              ref={langRef}
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Convert your code to ______ Language "
            ></input>
            <textarea
              className="w-[100%] h-[90%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Write your code in any language of your choice "
              ref={inputRef}
            />
            <div className="w-[100%] bg-slate-50/10 flex justify-start items-center text-white rounded-lg p-5 ">
              AI Output :{output && output}
            </div>
            <div
              className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--2 text-white mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
              onClick={handleClick}
            >
              Convert
            </div>
          </div>
          <div className="md:w-[45%] w-[90vw] h-[60vh] md:h-[70vh] mb-6 flex items-center flex-col">
            <p className="text-white my-3 ">
              Look at the sample code for reference{" "}
            </p>
            <input
              className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
              placeholder="Java "
            ></input>
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

export default ConvertToLang;
