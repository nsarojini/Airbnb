import React from "react";


const Total = () => {
    return (
<div className="flex justify-between items-center mx-3 sm:mx-6 md:mx-10 lg:mx-12 ">
<div className="hidden lg:flex justify-center items-center relative ml-80 shadow-sm shadow-gray-400 border rounded-xl ">
          <input
            type="search"
            placeholder=""
            className="px-18 py-5 w-[35rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full  text-black-600 text-[14px]">
          <button className="w-full">Display total price</button>
            {/* <button className="w-full border-x px-4 ml-0">Display total price</button> */}
            
            <button className="w-full border-l px-4 text-gray-600/60 ">Includes all fees, before taxes</button>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"></input>
  <div class="w-11 h-6 mr-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">/span> */}
</label>
    </div>
    </div>

        );


};

export default Total;