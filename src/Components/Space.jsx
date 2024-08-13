import React from "react";
import "../index.css"; // Ensure this path is correct

function SpaceGraph() {
  return (
    <section className="relative flex flex-col items-center justify-center font-quicksand text-white py-10 md:py-0">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Rectangles.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Two-Column Layout */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        {/* Left Column - Graph */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <img
            src="/graph.png"
            alt="Graph"
            loading="eager"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Column - Space Image with Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative p-4 md:p-8">
          <img
            src="/space.png"
            alt="Space"
            loading="eager"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Text Below Columns */}
      <div className="relative z-10 my-8 text-center">
        <p className="text-2xl ">fig 1.1: fuck around - find out graph</p>
      </div>
    </section>
  );
}

export default SpaceGraph;
