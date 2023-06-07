import React from "react";
import Filter from "./Filter";

import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import icon5 from "../assets/icon5.jpg";
import icon6 from "../assets/icon6.jpg";
import icon7 from "../assets/icon7.jpg";
import icon8 from "../assets/icon8.jpg";
import icon9 from "../assets/icon9.jpg";
import icon10 from "../assets/icon10.jpg";
import icon11 from "../assets/icon11.jpg";
import icon12 from "../assets/icon12.jpg";
import icon13 from "../assets/icon13.jpg";
import icon14 from "../assets/icon14.jpg";
import icon15 from "../assets/icon15.jpg";



const Filters = () => {
  const filters = [
    
    { image: icon1 , title: "Rooms" },
    { image: icon2 , title: "Rooms" },
    { image: icon3 , title: "Rooms" },
    { image: icon4 , title: "Rooms" },
    { image: icon5 , title: "Rooms" },
    { image: icon6 , title: "Rooms" },
    { image: icon7 , title: "Rooms" },
    { image: icon8 , title: "Rooms" },
    { image: icon9 , title: "Rooms" },
    { image: icon10 , title: "Rooms" },
    { image: icon11 , title: "Rooms" },
    { image: icon12 , title: "Rooms" },
    { image: icon13 , title: "Rooms" },
    { image: icon14 , title: "Rooms" },
    { image: icon15 , title: "Rooms" },
    // { image: icon15 , title: "Rooms" },
    // { image: icon15 , title: "Rooms" },
   
  ];
  return (

    <div className="py-3 sm:py-5">
      
      {/* <div className='mx-4 lg:mx-20 my-5 lg:my-6 flex space-x-3 lg:overflow-hidden overflow-auto bar '> */}
      <div className='mx-5 sm:mx-6 md:mx-10 lg:mx-12 lg:my-6 flex space-x-3 lg:overflow-hidden overflow-auto bar '>
        {/* <div className='flex  space-x-1'> */}

        {filters.map((filter) => (
          <Filter
            image={filter.image}
            title={filter.title}
            
          />
        ))}

<div className='flex items-center space-x-4'>
            <div className='border-2 items-center hidden lg:flex p-1 rounded-full'>
                <img src="/right.png" width="25px" alt="" />
            </div>
            <div className='flex border-2 items-center rounded-xl py-4 px-6 space-x-1'>
                <img src="/filters.png" width="10px" alt="" />
                <div className='pr-2 lg:pr-6  text-[12px] ' >Filters</div>
            </div>
            </div>

      </div>
     </div>
      // </div> 

     
  );
};





export default Filters;