import React from "react";

const Card = () => {
  return (
    <div className="w-72 max-h-max rounded-lg border  ">
      <img className="w-full" src="./web-card.png" alt="gambar" />
      <div className="px-6 my-6 ">
        <h1 className="text-white text-xl">Web Development</h1>
        <p className="text-gray-400 text-sm">
          Unlock the World of Game Development: build, innovate, transform!
        </p>
      </div>
      <div className="mb-5 ml-32 text-sm flex items-center bg-transparent rounded-lg font-semibold w-32 h-8  border border-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-500 ">
        <span class="text-center bg-gradient-to-r  w-full from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white">
          Read More
        </span>
      </div>
    </div>
  );
};

export default Card;
