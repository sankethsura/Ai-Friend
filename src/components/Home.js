import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home({
  output,
  setOutput,
  prompt1,
  setPrompt,
  user,
  setUser,
  email,
  setEmail,
}) {
  return (
    <div className="">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/your-ai-friend-6c07f.appspot.com/o/robot-handshake-human-background-futuristic-digital-age%20(1).jpg?alt=media&token=7c5e3eca-be2f-4cf5-aeac-933088a8d744"
        className="w-[100vw] h-[100vh] fixed object-cover -z-50"
      />
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-black opacity-80"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-bl via-[#512d0100] from-[#ff1f71de] opacity-[19%]"></div>
      <div className="w-[100vw] h-[100vh] fixed object-cover -z-40 bg-gradient-to-tr via-[#611933a6] from-[#ff1f71] opacity-[12%]"></div>
      <div>
        <Navbar
          user={user}
          setUser={setUser}
          email={email}
          setEmail={setEmail}
        />
      </div>
      {/* <div className="w-[90vw] h-[.2vh] bg-gray-400 m-auto"></div> */}
      <div className="h-[50vh] flex items-center justify-center flex-col ">
        {user ? <p className="text-[18px] text-white text--1 mb-4 max-w-[90vw] font-semibold">
          Welcome {user.toUpperCase()} {" !!!"}
        </p> : ""}
        <p className="text-[36px] text-white text--1 mb-20 max-w-[90vw] font-semibold">
          {" "}
          Your AI friend is always there to help you{" "}
        </p>
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")
          }
          className="w-[150px] h-[48px] bg-[#ff1f71] flex justify-center items-center rounded-3xl shadows--1 hover:scale-110 duration-200 cursor-pointer opacity-70 hover:opacity-100 text-white"
        >
          Contact me
        </div>
      </div>
      <Footer
        output={output}
        setOutput={setOutput}
        prompt1={prompt1}
        setPrompt={setPrompt}
      />
    </div>
  );
}

export default Home;
