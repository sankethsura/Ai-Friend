import React from "react";
import { GrTurbolinux } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";
import PositionedMenu from "./position";

import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";
const Navbar = ({ user, setUser, email, setEmail }) => {
  function signUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log(result.user);
        setUser(result.user.displayName);
        setEmail(result.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signout() {
    signOut(auth)
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
    setUser("");
  }

  return (
    <div className="flex m-auto w-[70vw] md:w-[85vw] h-[80px] items-center justify-between md:justify-between text--1">
      <section className="text-gray-200 scale-150 font-bold flex  justify-center items-center">
        <GrTurbolinux />
        <p className="text-[10px] pl-2">Your AI friend</p>
      </section>
      <section className="md:flex justify-center items-center text-white hidden ">
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")
          }
          className="px-7 hover:scale-110 hover:text-slate-400 duration-200 font-bold scale-150 cursor-pointer"
        >
          <AiFillLinkedin />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://leetcode.com/sanketh123/"
            )
          }
          className="px-7 hover:scale-110 hover:text-slate-400 duration-200 font-bold scale-150 cursor-pointer"
        >
          <SiLeetcode />
        </div>
        <div
          onClick={() => window.open("https://github.com/sankethsura")}
          className="px-7 hover:scale-110 hover:text-slate-400 duration-200 font-bold scale-150 cursor-pointer"
        >
          <AiFillGithub />
        </div>
      </section>
      <section className="text-white md:hidden translate-x-7">
        {/* <GiHamburgerMenu /> */}
        <PositionedMenu user={ user} setUser={setUser} email={email} setEmail={setEmail} />
      </section>
      <section className="text-white md:flex hidden px-5   font-bold">
        <div onClick={signUp} className="hover:scale-110 duration-200">
          {user ? user : <IoLogoGoogle className="scale-[150%] hover:scale-110 duration-200 hover:text-slate-400 cursor-pointer" />}
        </div>
        <div onClick={signout} className="px-5 hover:scale-110 duration-200">
          {user ? "Log-out" : ""}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
