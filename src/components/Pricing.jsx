// import React from "react";
import Basic from "../assets/basic.png";
import Frontend from "../assets/frontend.png";
import Fullstack from "../assets/fullstack.png";

function Pricing() {
  return (
    <div className="w-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3.5rem] bg-white"
            src={Basic}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Basic (Beginner)
          </h2>
          <p className="text-center text-4xl font-bold">499/-</p>
          <div className="text-center font-medium">
            {/* <p className="bg-orange-300 text-[10px] rounded-2xl py-2 mt-6">
              &#9432; For Beginners
            </p> */}
            <p className="py-2 border-b mx-8 mt-8">
              Learn Basics of web development <br /> HTML5 | CSS3 | JavaScript
            </p>
            <p className="py-2 border-b mx-8">Get Cheetsheets</p>
            <p className="py-2 border-b mx-8 text-gray-400"><del> CSS Framework + React Js</del></p>
            <p className="py-2 border-b mx-8 text-gray-400"><del>Version Control System</del></p>
            <p className="py-2 border-b mx-8">1 Project + Basic depolyment</p>
            <p className="py-2 border-b mx-8">
              {" "}
              <span>&#9733;</span> Certificate
            </p>
          </div>
          <button className="bg-[#00df9a] w-full p-2  font-medium mx-auto rounded-md text-black mt-3 my-2 hover:bg-[rgb(0,250,154)] hover:animate-pulse hover:scale-105 duration-300">
            Join
          </button>
        </div>

        <div className="w-full border shadow-xl flex flex-col p-8 my-3 bg-gray-100 rounded-2xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3.5rem]"
            src={Frontend}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Front-end Development
          </h2>
          <p className="text-center text-4xl font-bold">2999/-</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Include Basics</p>
            <p className="py-2 border-b mx-8">Get Cheetsheets</p>
            <p className="py-2 border-b mx-8">CSS Framework + React Js</p>
            <p className="py-2 border-b mx-8">Version Control System</p>
            <p className="py-2 border-b mx-8">2 Project + Depolyment</p>
            <p className="py-2 border-b mx-8">
              {" "}
              <span>&#9733;</span> Certificate
            </p>
          </div>
          <button className="bg-[#00df9a] w-full p-2 font-medium mx-auto rounded-md text-black mt-3 my-2 hover:bg-[rgb(0,250,154)] hover:animate-pulse hover:scale-105 duration-300">
            Join
          </button>
        </div>

        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3.5rem] bg-white"
            src={Fullstack}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Fullstack Development
          </h2>
          <p className="text-center text-4xl font-bold">10,998/-</p>
          <div className="text-center font-medium text-sm">
            <p className="py-2 border-b mx-8 mt-8">
              Include Front-end Development
            </p>
            <p className="py-2 border-b mx-8">Get Cheetsheets</p>
            <p className="py-2 border-b mx-8">Linux Basics</p>
            <p className="py-2 border-b mx-8">
              Node js + Express + RESTful APIs{" "}
            </p>
            <p className="py-2 border-b mx-8">MongoDB </p>
            <p className="py-2 border-b mx-8">
              1 Mini Project + 1 Main Project{" "}
            </p>
            <p className="py-2 border-b mx-8">
              <span>&#9733;</span> Certificate
            </p>
          </div>
          <button className="bg-[#00df9a] w-full p-2 font-medium mx-auto rounded-md text-black mt-5 my-2 hover:bg-[rgb(0,250,154)] hover:animate-pulse hover:scale-105 duration-300">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
