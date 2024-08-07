import React from "react";

const FunSection = () => {
  return (
    <div
      className="relative flex justify-center items-center h-[50vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/Rectangles.png)` }}
    >
      <div className="relative flex justify-center items-center">
        <img src="/here.svg" alt="Fun" className="w-full max-w-3xl md:max-w-full" />
      </div>
    </div>
  );
};

export default FunSection;
