import React from 'react';

const Div = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/Rectangles.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "25vh",
      }}
      className="relative text-white md:p-10 flex justify-center md:justify-between items-end md:items-center overflow-hidden"
    >
      <div className=" flex flex-col md:flex-row justify-center items-center z-30 mx-auto md:mx-[35%] lg:mx-[30%] w-full md:w-auto">
        <div className="text-center font-nunito mb-10 md:mb-4 px-10 "> {/* Adjusted margin to move text left on md and larger devices */}
          <h1 className=" text-lg text-gray-200 md:text-4xl font-thin ">
            You really dive deep, huh!
          </h1>
          <p className="text-2xl md:text-4xl font-semibold">Guess what, we love it too {";)"} </p>
        </div>
      </div>
      <img 
        src="./person.png" 
        alt="person" 
        className="w-48 h-48 md:w-56 md:h-56 absolute bottom-0 md:right-[20em] md:-bottom-3 lg:bottom-0 z-10"
        style={{ zIndex: 10 }}
        loading="eager"
      />
      <div className="bg-[#F31EB1] h-3 md:h-5 w-full absolute left-0 bottom-0"></div>
    </div>
  );
};

export default Div;
