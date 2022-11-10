import React from "react";
import { GrTurbolinux } from "react-icons/gr";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";
const Navbar = ({user,setUser,email,setEmail}) => {
  

  function signUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log(result.user);
        setUser(result.user.displayName);
        setEmail(result.user.email)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signout() {
    signOut(auth).then(() => {
      console.log("logout successful")
    }).catch((error) => {
      console.log(error)
    });
    setUser("")
  }

  return (
    <div className="flex m-auto w-[70vw] md:w-[85vw] h-[80px] items-center justify-between text--1">
      <section className="text-gray-200 scale-150 font-bold flex flex-col justify-center items-center">
        <GrTurbolinux />
        <p className="text-[10px] ">Your AI friend</p>
      </section>
      <section className="md:flex justify-center items-center text-white hidden ">
        <div className="px-5 hover:scale-110 duration-200 font-bold">Home</div>
        <div className="px-5 hover:scale-110 duration-200 font-bold">Pages</div>
        <div className="px-5 hover:scale-110 duration-200 font-bold">
          Linked-in
        </div>
      </section>
      <section className="text-white md:hidden">
        <GiHamburgerMenu />
      </section>
      <section className="text-white md:flex hidden px-5   font-bold">
        <div onClick={signUp} className="hover:scale-110 duration-200">
          {user ? user : "Log -in"}
        </div>
        <div         onClick={signout} className="px-5 hover:scale-110 duration-200">
          {user ? "Log-out" : ""}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
