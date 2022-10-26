import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div className="flex m-auto w-[70vw] md:w-[85vw] h-[80px] items-center justify-between text--1">
      <section className="text-gray-200 scale-150 font-bold flex flex-col justify-center items-center">
       
        {/* <FaRobot /> */}
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
      <section className="text-white md:flex hidden px-5 hover:scale-110 duration-200 font-bold">
        Log-in
      </section>
    </div>
  );
};

export default Navbar;
