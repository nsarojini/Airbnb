import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";
import house10 from "../assets/house10.jpg";
import house11 from "../assets/house11.jpg";
import house12 from "../assets/house12.jpg";
import house13 from "../assets/house13.jpg";
import house14 from "../assets/house14.jpg";
import house15 from "../assets/house15.jpg";
import house16 from "../assets/house16.jpg";

import Place from "./Place";

const Places = () => {
  const places = [
    { title: "Texas, USA", image: house1, price: "9,500" ,rating:4.5},
    { title: "Surry, Austraila", image: house2, price: "6,000" ,rating:4.7},
    { title: "London, UK", image: house3, price: "8,000",rating:4.0 },
    { title: "Lyon, France", image: house4, price: "7,500" ,rating:4.6},
    { title: "Valencia,Spain", image: house5, price: "3,500",rating:4.8 },
    { title: "Torino, Italy", image: house6, price: "4,500" ,rating:4.5},
    { title: "Paris, France", image: house7, price: "10,540" ,rating:4.6},
    { title: "Wirobrajan, Indonesia", image: house8, price: "1,500",rating:4.8 },
    { title: "Madrid, Spain", image: house9, price: "7,500",rating:4.7 },
    { title: "Paris, France", image: house10, price: "8,500",rating:4.3 },
    { title: "Edinburgh, Uk", image: house11, price: "10,500" ,rating:4.4},
    { title: "Padova, Italy", image: house12, price: "2,800",rating:4.7 },
    { title: "Nariz, Portugal", image: house13, price: "3,500" ,rating:4.8},
    { title: "Rome, Italy", image: house14, price: "9,000" ,rating:4.4},
    { title: "Paris, France", image: house15, price: "11,500",rating:4.7 },
    { title: "Paris, France", image: house16, price: "11,500",rating:4.2 },
  ];
  return (

    <div className="py-3  mx-5 sm:py-5 sm:mx-5 md:mx-10 lg:mx-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">

        {places.map((place) => (
          <Place
            title={place.title}
            image={place.image}
            price={place.price}
            rating={place.rating}
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Places;
