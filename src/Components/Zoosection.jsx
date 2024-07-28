import React from "react";

const Zoosection = () => {
  return (
    <div className="relative flex items-center justify-center bg-cover bg-no-repeat">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Rectangles.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10"></div>

      {/* Mask Image */}
      <img
        src="/Mask.png"
        alt="Mask"
        className="absolute z-20 object-cover"
        style={{ width: '100%', height: '100%' }} // Adjust size as needed
      />

      <div className="relative z-30 flex flex-col items-center text-center mb-10">
        <p className="text-white text-2xl md:text-4xl mt-20 mb-8 font-nunito">
          One more thing...
        </p>
        <img src="./eventlg.png" alt="Event" className="w-[10em] mb-8" />

        <img src="/phone.png" alt="Phone" className="w-full md:max-w-2xl mb-8" />

        <div className="flex items-center justify-center w-full max-w-lg space-x-4"> {/* Adjusted spacing */}
          <button className="border border-gray-200 text-white hover:text-yellow-400  font-bold py-2 px-8 rounded-md flex items-center space-x-2">
            <span>Know More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <p className="text-gray-300 flex items-center">
            This is <a href="#" className="underline ml-1 hover:text-yellow-500">magic</a>
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Zoosection;
