import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="lg:flex  p-10 bg-primary text-base-content ">
        <aside className="ml-5 mr-10">
          <img className="w-64" src="./Logo-IL.png" alt="logo" />
          <p className="w-72 mt-16">
            Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau
            29466
          </p>
        </aside>
        <div className="grid lg:grid-cols-4 gap-20 mt-10 sm:mt-0">
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              Program
            </h1>
            <a className="link link-hover">Course</a>
            <a className="link link-hover">Bootcamp</a>
            <a className="link link-hover">Event</a>
            <a className="link link-hover">MSIB</a>
            <a className="link link-hover">Internship</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              Community
            </h1>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">News</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              About
            </h1>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Career</a>
          </nav>
          <div className="text-center">
            <h1 className="lg:text-2xl text-xl text-white font-semibold">
              Our Social Media
            </h1>
            <div className="flex justify-between mt-5 ">
              <FaInstagram size={50} />
              <FaLinkedin size={50} />
              <FaTiktok size={50} />
            </div>
            <p className="lg:text-end text-center mt-10">0896387111079</p>
            <p className="lg:text-end">csc@infinitelearning.id</p>
          </div>
        </div>
      </footer>
      <div className="py-8 text-center bg-[#212130] tracking-wide sm:text-base text-sm">
        <h1>Copyright © 2023 | Infinite Learning Indonesia </h1>
      </div>
    </>
  );
};

export default Footer;
