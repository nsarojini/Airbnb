import React from "react";

import { BsStarFill } from "react-icons/bs";
const Place = ({ title, image, price, rating }) => {
  return (
    <div className="">
      <div className="relative">
        {/* <div className="grad absolute w-full h-full rounded-b-[1.0rem]"></div> */}
        <div className="flex  ">
          <img
            src={image} 
            alt=""
            className="object-cover rounded-[1.0rem] sm:mx-2 sm:h-[10rem]  md:h-[18rem] w-full "
          />
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 flex justify-between items-start">
        {/* Left */}
        <div className="">
          <p className="max-w-[17rem] font-semibold text-[15px]">{title}</p>
          <p className="max-w-[17rem]  text-[15px] -mt-1 text-gray-500">
            Jan 1 - Dec 30
          </p>
          <p className="max-w-[17rem] font-semibold text-[15px]">&#8377;{price}</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-1">
          <BsStarFill />
          <p className="text-[15px]">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;