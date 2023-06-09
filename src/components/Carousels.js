import React from "react";




import { Carousel } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Carousel className="relative">
        {/* <div className="grad absolute w-full h-full rounded-b-[1.0rem]"></div> */}
        <div className="flex  ">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="object-cover rounded-[1.0rem] sm:mx-2 sm:h-[10rem]  md:h-[18rem] w-full "
          />
          <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="object-cover rounded-[1.0rem] sm:mx-2 sm:h-[10rem]  md:h-[18rem] w-full "
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="object-cover rounded-[1.0rem] sm:mx-2 sm:h-[10rem]  md:h-[18rem] w-full "
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 4"
        className="object-cover rounded-[1.0rem] sm:mx-2 sm:h-[10rem]  md:h-[18rem] w-full "
      />
        </div>
      
      
    </Carousel>
  );
}


