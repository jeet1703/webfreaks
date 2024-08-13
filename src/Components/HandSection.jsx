import React from 'react';
import "../App.css"; // Ensure this path is correct

const HandSection = () => {
  return (
    <div className="relative starsection text-white flex flex-col items-center py-10">
      {/* Main Image */}
      <div className="w-full max-w-full p-4">
        <img src="./hand.webp" alt="Hand" className="w-full h-auto" />
      </div>

      {/* Text Below the Image */}
      <p className="mt-4 text-center text-sm md:text-base">
        fig 1.3: woozoo's thumb rule
      </p>
    </div>
  );
};

export default HandSection;
