import React from "react";
import Marquee from "react-fast-marquee";

function Classes() {
  return (
    <div className="bg-orange-300 ">
        
      <Marquee>
        <div className="font-semibold italic">
        New batch will start every Monday.
        </div>
      </Marquee>
    </div>
  );
}

export default Classes;
