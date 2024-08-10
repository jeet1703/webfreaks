import React from 'react';

const Div = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/Rectangles.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "25vh",
      }}
      className="relative text-white  md:p-10 flex justify-center items-center overflow-hidden"
    >
    </div>
  );
};

export default Div;
