
import React from "react";


    const Filter = ({ title, image }) => {
  return (
    // <div className='flex flex-col items-center space-y-2 w-20 lg:w-18 cursor-pointer'>
    // <img src={`./assets/${image}.jpg alt="" `}width="40px" height="40px"alt="" />
    // <div className=' text-xs font-semibold'>{title}</div>

    <div className="flex flex-col items-center space-y-2 w-20 lg:w-18 cursor-pointer">
          {/* <img src={`./assets/${image}.jpg alt="" `} width="40px" height="40px"alt="" /> */}
          <div className="flex  ">
          <img
            src={image}
            alt=""
            className="object-cover h-5 h-5 sm:h-[0.5rem] md:h-[5rem] lg:h-[1.5rem]"
          />
        </div>
      

        <div className="text-xs font-semibold">{title}</div>
</div>

  );
};

export default Filter;


