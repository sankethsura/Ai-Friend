import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home({ output, setOutput, prompt1, setPrompt,user,setUser,email,setEmail }) {
  return (
    <div className="">
      <img
        src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=996&t=st=1666506677~exp=1666507277~hmac=ca2a5c5dc5ae1295902ab49e8497650074e8916000953affa4b4b825d3480938"
        className="w-[100vw] h-[100vh] fixed object-cover -z-50"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-80"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[12%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[8%]"></div>
      <div>
        <Navbar user={user} setUser={ setUser}  email={email} setEmail={setEmail} />
      </div>
      {/* <div className="w-[90vw] h-[.2vh] bg-gray-400 m-auto"></div> */}
      <div className="h-[55vh] flex items-center justify-center flex-col ">
        <p className="text-[36px] text-white text--1 mb-20 max-w-[90vw] font-semibold">
          {" "}
          Your AI friend is always there to help you{" "}
        </p>
        <div className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--1 hover:scale-110 duration-200 cursor-pointer opacity-70 hover:opacity-100 text-white">
          Contact me
        </div>
      </div>
        <Footer output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt} />
    </div>
  );
}

export default Home;
