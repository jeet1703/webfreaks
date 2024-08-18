import React from 'react';
import "../App.css"; // Ensure this path is correct

const PyramidSection = () => {
  return (
    <div className="starsection relative text-white flex flex-col items-center justify-between h-auto py-20">
      {/* Pyramid Image */}
      <div className="flex-grow flex items-center justify-center mx-10">
        <img
          src="./triangle2.webp" // Replace with your actual path to triangle2.png
          alt="Wozoo's Hierarchy of Fun"
          className="max-w-full h-auto"
        />
      </div>

      {/* Fig 1.3 Line */}
      <div className="mb-6">
        <p className="text-lg italic mt-10 md:text-2xl font-quicksand text-center">fig 1.3: wozoo's hierarchy of fun</p>
      </div>

      {/* Purple bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#641CF8]"></div>
    </div>
  );
};

export default PyramidSection;
