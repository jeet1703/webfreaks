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
      <div className="relative flex justify-center items-center z-10 mx-auto">
        <div className="text-center font-nunito md:ms-20">
          <h1 className="text-lg text-gray-200 md:text-4xl font-thin ">You really dive deep, huh!</h1>
          <p className="text-2xl md:text-4xl font-semibold">Guess what, we love it too</p>
        </div>
        <img src="./person.png" alt="person" className="w-24 h-24 md:w-48 md:h-48  " />
      </div>
      <div className="bg-[#F31EB1] h-3 md:h-5 w-full absolute left-0 bottom-0"></div>
    </div>
  );
};

export default Div;
