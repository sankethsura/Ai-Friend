import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Loader from "./loader";

const ImageGen = () => {
  let [image, setImage] = useState("");
  let [prompt2, setPrompt2] = useState("");
  let [spin, setSpin] = useState(false);
  let langRef = useRef();

  function handleClick() {
    console.log(langRef.current.value);
    setPrompt2(langRef.current.value);
  }

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    console.log("inside useeffect", prompt2);
    setImage("")
    if(prompt2)
    setSpin(<div className="py-10"><Loader/></div>)
    if (prompt2)
      (async () => {
        const response = await openai.createImage({
          prompt: `${prompt2}`,
          n: 2,
          size: "512x512",
        });
        setImage(response.data.data[0].url);

        console.log(response.data.data[0].url);
        // setSpin(true);
      })();
  }, [prompt2]);

  return (
    <div>
      <img
        src="https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology-remix_53876-104233.jpg?w=1480&t=st=1668170075~exp=1668170675~hmac=ca7b4ad0ed8bb8a11f69a92af20b49983d3bbbf35997af03e999470f77d396e9"
        className="w-[100vw] h-[100vh] object-cover -z-50 fixed"
      />

      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-80"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[25%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[18%]"></div>
      <section className="w-[90vw] m-auto flex flex-col">
        <div className="font-extrabold text-transparent md:text-6xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 text--1 py-6 h-[20vh] flex justify-center items-center flex-col">
          <p>AI Image Generator</p>
          <p className="md:text-xl text-sm py-2">
            Generate an image from the description.
          </p>
        </div>
        <p className="text-white py-5">
          Note : Please enter maximum information about the image to get the
          proper result.
        </p>

        <div className=" w-[90vw] h-[] md:h-[] mb-6 flex items-center flex-col ">
          <input
            ref={langRef}
            className="w-[100%] rounded-xl bg-slate-50/10 text-left text-white p-5 mb-2 no-underline"
            placeholder="Write description here!!! "
          ></input>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleClick}
            className="w-[150px] h-[48px] bg-[#ff1f71]  flex justify-center items-center rounded-3xl shadows--2 text-white mt-9 md:mt-5 py-2 opacity-60 hover:opacity-95 duration-200 cursor-pointer"
          >
            Generate
          </button>
        </div>
        <div className="">
          {image ? (
            <img
            src={image}
            className="md:w-[70vw] w-[90vw] h-[90vw]  m-auto md:h-[70vw] w-min-[300px] h-min-[300px] justify-center items-center p-10 rounded-lg"
            />
            ) : (
              spin
              )}
        </div>
      </section>
    </div>
  );
};

export default ImageGen;
