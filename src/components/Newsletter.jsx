// import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Ready to Begin Your Journey?
          </h1>
          <p className="text-[12px] md:text-[16px] mb-4">
            Enroll Today and Elevate Your Web Development Skills for a
            Future-Ready Career.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-[#00df9a] w-28 p-1 font-medium mx-auto rounded-full text-sm lg:text-xl lg:w-40 text-black mt-3 hover:bg-[rgb(0,250,154)] hover:animate-pulse">
            Contact us
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Newsletter;
