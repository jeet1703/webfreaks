import React from 'react';
import "../App.css"; // Ensure this path is correct

const Bored = () => {
  return (
    <div className="relative starsection text-white px-10 py-10 font-quicksand">
      {/* Section Header */}
      <div className="flex items-center mb-20">
        <img src="./graphicon.svg" alt="Bored Icon" className="w-8 h-8 md:w-10 md:h-10 mr-4" />
        <h2 className="text-2xl md:text-4xl  font-bold">Bored in class? Time killers here</h2>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 mx-10">
        <div className="flex flex-col items-center">
          <img src="./image1.webp" alt="Activity 1" className="w-full h-auto rounded-lg" />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./image2.webp" alt="Activity 2" className="w-full h-auto rounded-lg " />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./image1.webp" alt="Activity 3" className="w-full h-auto rounded-lg" />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./image2.webp" alt="Activity 4" className="w-full h-auto rounded-lg" />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./image1.webp" alt="Activity 5" className="w-full h-auto rounded-lg" />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./image2.webp" alt="Activity 6" className="w-full h-auto rounded-lg" />
          <p className="text-center text-lg md:text-2xl lg:text-3xl mt-8 mx-4 font-bold">ACTIVITIES</p>
        </div>
      </div>
    </div>
  );
};

export default Bored;
