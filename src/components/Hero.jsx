import React from "react";
import Typed from "react-typed";
// import GetStarted from "./GetStarted";
function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase font-bold text-[#00df9a] p-2">
          Explore our Programs
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Upskill yourself.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold italic py-4">
            By joining, Learn --
          </p>
            <Typed
              className="md:text-5xl sm:text-4xl font-bold pl-2 text-[#00df9a] italic"
              strings={["HTML", "CSS", "JavaScript"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Enhance your skills & become a Frontend Dev.</p>
        <button className="bg-[#00df9a] w-28 p-1 font-medium mx-auto rounded-md text-black mt-3">Get Started</button>
        {/* <GetStarted /> */}
      </div>
    </div>
  );
}

export default Hero;
