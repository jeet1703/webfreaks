import React from "react";

const TriangularSection = () => {
  return (
    <div
      id="products-section"  // Added ID
      className="relative starsection justify-center items-center h-full bg-cover bg-center py-10 z-10"
    >
      <div className="relative flex justify-center items-center">
        <img loading="eager" src="triangle.png" alt="Triangle" className="w-full max-w-2xl md:max-w-6xl py-20" />
      </div>
    </div>
  );
};

export default TriangularSection;
