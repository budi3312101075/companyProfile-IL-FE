import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col w-80 max-h-max border rounded-lg">
      <img src="./project.png" alt="project" />
      <div className="flex gap-2">
        <div className="flex items-center text-lg  rounded-r-xl font-semibold w-32 h-20 mt-6  bg-gradient-to-r from-blue-500 to-purple-500 ">
          <span class="text-center w-full text-white">Name Team</span>
        </div>
        <div className="w-[2px] h-24 my-4 bg-purple-500  " />
        <div className="mt-3">
          <h1 className="text-secondary font-semibold">Our Team :</h1>
          <div className="flex gap-3 text-sm">
            <ul className="list-disc ml-3 ">
              <li>Nanda</li>
              <li>Bima</li>
              <li>Mila</li>
              <li>Rini</li>
            </ul>
            <ul className="list-disc ml-3">
              <li>Nanda</li>
              <li>Bima</li>
              <li>Mila</li>
              <li>Rini</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
