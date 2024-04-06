import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Marquee from "react-fast-marquee";
import Project from "../components/project";
import Footer from "../components/footer";

const LandingPage = () => {
  const cards = [
    {
      id: 1,
      img: "./icons-1.png",
      size: "sm:w-32 w-20",
      title: "Expert Instructors",
      desc: " Learn from experienced instructors with real world knowledge.",
    },
    {
      id: 2,
      img: "./icons-2.png",
      size: "sm:w-24",
      title: "Web Development",
      desc: "Learn at your own pace and your own comfort",
    },
    {
      id: 3,
      img: "./icons-3.png",
      size: "sm:w-20",
      title: "Web Development",
      desc: "Gain practical skills through live project",
    },
  ];
  return (
    <div className="font-montserrat max-h-max overflow-x-hidden">
      <Navbar />
      <div className="relative bg-primary">
        <img className="mt-6 w-full" src="./NDP.png" alt="Hero screen" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10">
          <h1 className="text-white text-center xl:text-5xl text-base font-semibold tracking-wide mt-10 sm:mt-0">
            HI, WE BELIEVES THAT{" "}
            <span className="bg-gradient-to-r  from-cyan-400 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              #ANYONEANYTHING
            </span>
          </h1>
          <p className="text-white text-center lg:text-2xl font-light tracking-wide max-w-5xl lg:mt-8 lg:mb-12 text-xs my-2">
            Solution provider in the technology sector, research, and
            development, as well as innovation through training and education
          </p>

          <div className="text-lg flex items-center bg-transparent rounded-lg font-semibold lg:w-52 lg:h-14 p-2 border border-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-500  mb-10 sm:mb-0">
            <span class="text-center bg-gradient-to-r  w-full from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white text-sm lg:text-lg">
              Start Your Journey
            </span>
          </div>
        </div>
      </div>
      <div className="max-h-max bg-primary flex flex-col items-center py-16 ">
        <div className="text-center text-secondary">
          <h1 className="lg:text-4xl font-semibold  mb-5 text-2xl">
            Infinite Learning Program
          </h1>
          <p className="lg:text-lg font-light tracking-wide text-sm">
            This program has been participated by more than 2000 people
          </p>
        </div>
        <div className="grid lg:grid-cols-4 lg:gap-10 gap-5 my-11">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="text-lg flex items-center  rounded-xl font-semibold w-72 border border-gradient-to-r bg-gradient-to-r from-blue-500 to-purple-500 btn btn-outline btn-info -mb-4">
          <span class="text-center w-full text-white">Load More Program</span>
        </div>
      </div>
      {/* section animation */}
      <div className="bg-secondary max-h-max pb-8">
        <h1 className="lg:text-4xl text-2xl font-semibold text-center text-black tracking-wide py-10 ">
          Our Partnership
        </h1>
        <Marquee>
          <div className="flex gap-11 items-center">
            <img className="w-40 " src="./aws.png" alt="epic-games" />
            <img className="h-40" src="./epic-games.png" alt="epic-games" />
            <img className="w-56 " src="./ibm.png" alt="epic-games" />
            <img className="w-72 " src="./redHat.png" alt="epic-games" />
            <img className="h-40" src="./epic-games.png" alt="epic-games" />
            <img className="w-56 mr-11" src="./kamdek.png" alt="epic-games" />
          </div>
        </Marquee>
      </div>
      <div className="flex flex-col max-h-max py-32  bg-primary items-center justify-center ">
        <div className="grid sm:grid-cols-2 gap-28">
          <img
            className="w-80 mx-auto sm:w-full sm:ml-10"
            src="./team.png"
            alt="Hero screen"
          />
          <div className="">
            <div className="flex justify-center items-center mt-14 md:mt-0">
              <h1 className="text-white text-center text-4xl font-semibold tracking-wide  ">
                Why Choose Us ?
              </h1>
              <img
                className="z-20 absolute "
                src="./circle-blue.png"
                alt="circle"
              />
            </div>
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex sm:gap-6 gap-3 mt-16 items-center w-96 sm:mx-auto px-6 sm:px-0"
              >
                <img className={card.size} src={card.img} alt="" />
                <div className="">
                  <h1 className="text-xl font-semibold text-secondary">
                    {card.title}
                  </h1>
                  <p className="text-gray-300 font-light tracking-wide sm:text-sm text-xs">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 ">
          <h1 className="lg:text-4xl text-2xl font-semibold text-center mb-16 text-gray-300">
            What We Can Provide ?
          </h1>
          <div className="grid lg:grid-cols-5 lg:gap-10 gap-5">
            <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
              <img src="./card-1.png" alt="" />
              <h1 className="text-xl font-medium text-center text-gray-300">
                Training
              </h1>
            </div>
            <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
              <img src="./card-2.png" alt="" />
              <h1 className="text-xl font-medium text-center text-gray-300">
                Seminar
              </h1>
            </div>
            <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
              <img src="./card-3.png" alt="" />
              <h1 className="text-xl font-medium text-center text-gray-300">
                Certification
              </h1>
            </div>
            <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
              <img src="./card-4.png" alt="" />
              <h1 className="text-xl font-medium text-center text-gray-300">
                Development
              </h1>
            </div>
            <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
              <img src="./card-5.png" alt="" />
              <h1 className="text-xl font-medium text-center text-gray-300">
                Bootcamp
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="lg:text-4xl text-2xl font-semibold text-center mb-16 text-gray-300">
            Product By Our Student
          </h1>
          <div className="grid lg:grid-cols-4 lg:gap-7 gap-5 px-12">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
        <div className="mt-20 flex-none">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-center lg:text-4xl font-semibold tracking-wide  text-2xl">
              Frequently Asked Questions
            </h1>
            <img
              className="absolute lg:w-36 lg:ml-5 w-24 ml-3"
              src="./circle-blue.png"
              alt="circle"
            />
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-6 text-black px-12">
            <div className="collapse collapse-plus bg-secondary rounded-lg p-6 ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is Infinite Learning
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-secondary rounded-lg p-6">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How long does the bootcamp last?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-secondary rounded-lg p-6">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Are there any prerequisites for attending the bootcamp?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-secondary rounded-lg p-6">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I work while undergoing training?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
