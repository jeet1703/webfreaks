import React from 'react';
import "../App.css"; // Ensure this path is correct

const Villan = () => {
  return (
    <div className="relative starsection text-white flex flex-col md:flex-row items-center justify-between pt-24 px-10 md:px-15 lg:px-20 py-10 font-quicksand overflow-hidden">
      {/* Left Side: Logo and Text */}
      <div className="flex flex-col items-start justify-center text-center md:text-left mb-10 md:mb-0">
        <img src="./logofun.webp" alt="Logo" className="w-auto md:max-w-lg lg:max-w-xl" />
        <p className="text-lg md:text-xl mt-2 max-w-2xl">
          It's time you get your serotonin from real life, get your ass up and book yourself for shit ton of spontaneity on Wozoo Fun.
        </p>
        <div className="flex mt-10">
          <input
            type="text"
            placeholder="Type 'fun'"
            className="text-white placeholder-white px-4 py-1 bg-[#8b8a8a] rounded-l-2xl opacity-50 z-10 focus:outline-none focus:ring-0 border-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 -ml-10 text-black px-8 py-2.5 rounded-lg font-bold z-20">
            Search
          </button>
        </div>
      </div>

      {/* Right Side: Villain Image */}
      <div className="flex items-center justify-center w-full md:w-auto">
        <img src="./villan.webp" alt="Villain" className="w-full max-w-xs md:max-w-xl md:-mb-[40%]" />
      </div>
    </div>
  );
};

export default Villan;
