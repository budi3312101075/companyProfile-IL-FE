import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full h-14">
      <div className="bg-primary flex justify-between items-center px-14 py-5 ">
        <img className="h-10 mx-auto sm:mx-0" src="./Logo-IL.png" alt="logo" />
        <div className="sm:flex gap-5 text-secondary hidden ">
          <Link>LEARNING</Link>
          <Link>NEWS</Link>
          <Link>ABOUT</Link>
          <Link>TEAM</Link>
          <Link>CAREER</Link>
        </div>
        <button className="border border-secondary text-secondary rounded-xl sm:w-32 text-xs sm:text-base p-2 hidden sm:block">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
