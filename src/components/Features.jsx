// import React from "react";
import Man from "../assets/Features.jpg";
import GetStarted from "./GetStarted";

function Features() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Man} className="w-[500px] mx-auto my-4" alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold ">Online Training Program</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Unlock Your Potential: Transformative Benefits Await in Our Web
            Development Training Program!
          </h1>
          <div>
            <ul>
                <li className="bg-orange-400 py-0 my-2 text-white border-green-700 border-l-4  font-bold rounded-r-3xl ps-6 hover:bg-orange-300 hover:text-gray-900 hover:cursor-pointer"> Flexible Learning</li>
                <li className="bg-orange-400 py-0 my-2 text-white border-green-700 border-l-4  font-bold rounded-r-3xl ps-6 hover:bg-orange-300 hover:text-gray-900 hover:cursor-pointer"> Expert-Led Training</li>
                <li className="bg-orange-400 py-0 my-2 text-white border-green-700 border-l-4  font-bold rounded-r-3xl ps-6 hover:bg-orange-300 hover:text-gray-900 hover:cursor-pointer"> Interactive Community</li>
                <li className="bg-orange-400 py-0 my-2 text-white border-green-700 border-l-4  font-bold rounded-r-3xl ps-6 hover:bg-orange-300 hover:text-gray-900 hover:cursor-pointer"> Career Advancement Opportunities</li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-start ">
          <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
