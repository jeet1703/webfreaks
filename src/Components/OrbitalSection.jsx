import React from 'react';
import alien from '/alien.webp'; // Replace with the correct path to alien.png
import orbitImage from '/Ellipse.webp'; // Replace with the correct path to Ellipse.png

const OrbitalSection = () => {
  return (
    <div className="relative starsection text-white flex flex-col justify-center pt-20 min-h-screen overflow-hidden">
    {/* Vertical Line with Alien */}
    <div className="absolute left-12 md:left-20 lg:left-28 transform -translate-x-1/2 h-full w-1/4">
      <div className="relative flex flex-col items-center h-full">
        {/* Top 3/4 White Line */}
        <div className="w-1 bg-white h-3/4"></div>

        {/* Alien Image on Top of Pink Div */}
        <img
          src={alien}
          alt="Alien"
          className="absolute w-12 h-auto top-[75%] transform  -translate-y-1/2 z-10 focus:outline-none"
        />

        {/* Bottom 1/4 Pink Line */}
        <div className="w-1 bg-pink-500 h-1/4"></div>
      </div>
    </div>
      {/* Orbiting Planets and Text */}
      <div className="flex flex-col w-full mx-auto">
        <Planet
          size="w-40 h-40 md:w-64 md:h-64"
          gradient="bg-gradient-to-r from-[#ff00ad] to-[#ff00af]"
          text="May 2023"
          subtext="Team Building"
          orbitImage={orbitImage}
          glowColor="rgba(255, 0, 173, 0.7)"
        />
        <Planet
          size="w-32 h-32 md:w-56 md:h-56"
          gradient="bg-gradient-to-r from-[#6d13ff] to-indigo-500"
          text="May 2023"
          subtext="Team Building"
          orbitImage={orbitImage}
          glowColor="rgba(109, 19, 255, 0.7)"
        />
        <Planet
          size="w-28 h-28 md:w-42 md:h-42"
          gradient="bg-gradient-to-r from-[#0061e8] to-[#0061e9]"
          text="May 2023"
          subtext="Team Building"
          orbitImage={orbitImage}
          glowColor="rgba(0, 97, 232, 0.7)"
        />
        <Planet
          size="w-24 h-24 md:w-36 md:h-36"
          gradient="bg-gradient-to-r from-[#f2c700] to-yellow-500"
          text="May 2023"
          subtext="Team Building"
          orbitImage={orbitImage}
          glowColor="rgba(242, 199, 0, 0.7)"
        />
        <Planet
          size="w-20 h-20 md:w-32 md:h-32"
          gradient="bg-gradient-to-r from-white to-gray-100"
          text="May 2023"
          subtext="Team Building"
          orbitImage={orbitImage}
          glowColor="rgba(169, 169, 169, 0.7)"
        />
      </div>
    </div>
  );
};

const Planet = ({ size, gradient, text, subtext, orbitImage, glowColor }) => {
  return (
    <div className="relative flex flex-col items-center mb-16 md:mb-48 focus:outline-none">
      <div className="absolute w-auto top-10 md:top-20">
        <img src={orbitImage} alt="Orbit" className="w-full object-cover z-0 focus:outline-none" />
      </div>
      <div
        className={`relative ${size} ${gradient} rounded-full z-10 focus:outline-none`}
        style={{
          boxShadow: `0 0 1px 1px ${glowColor}, 0 0 50px 20px ${glowColor}`,
        }}
      ></div>
      <p className="absolute bottom-[-3rem] md:bottom-[-8rem] md:my-10 text-center text-sm md:text-lg z-20 focus:outline-none">
        {text}
        <br />
        {subtext}
      </p>
    </div>
  );
};

export default OrbitalSection;
