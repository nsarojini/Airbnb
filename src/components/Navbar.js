import React from 'react';
import logo from "../assets/logo2.png";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b sticky top-2 z-50 bg-white/[95%]">
      {/* <div class="text-center sm:text-left"> */}
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 my-4 ">
      
        
         {/* logo */}
        <div className="  h-11  flex">
          <img src={logo} className=" object-cover -my-0" alt=""/>
        </div>

        <div className="hidden lg:flex justify-center items-center relative ml-40 shadow-sm shadow-gray-400 border rounded-full ">
          <input
            type="search"
            placeholder=""
            className="px-3 py-3 w-[22rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full  pr-16 pl-6 text-black-600 text-[14px]">
            <button className="w-full">Anywhere</button>
            <button className="w-full border-l border-x px-4">Any week</button>
            <button className="w-full text-gray-600/60 pl-3">Add guests</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
             <FiSearch className="text-white w-full" /> 
          </div>
        </div>
      
      <div className="flex items-center pr-3 text-gray-600">
          <p className="text-[14px] text-black">Airbnb your home</p>
          <div className="flex items-center mx-8 gap-1">
             <TbWorld className="text-[18px]" /> 
          </div>

          <div className="flex items-center border px-3 py-2 rounded-full gap-2  text-[20px] text-gray font-bold shadow-lg shadow-gray-300  duration-100 ease-out">
             <FiMenu />  
            <FaUserCircle className="text-[28px]" /> 
          </div>
        </div>
         
</div>
    </div>
    
    // </div>
    
  );


};

export default Navbar;
