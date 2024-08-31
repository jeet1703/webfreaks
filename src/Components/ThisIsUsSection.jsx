import React from 'react';
import eyes from '/eyes.webp'; // Replace with the correct path to eyes.png

const ThisIsUsSection = () => {
  return (
    <div className="starsection relative md:h-auto ">
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between text-white py-36 px-10">
        {/* Left Column - Image */}
        <div className="relative w-full h-44 md:h-0 md:w-1/2 flex justify-center md:justify-end overflow-hidden order-2 md:order-1">
          {/* You can add any additional content here if needed */}
        </div>

        {/* Right Column - Text */}
        <div className="w-full md:w-1/2   order-1 md:order-2 z-30">
          <div className="flex  mb-10">
            <h2 className="text-5xl font-bold mr-4 font-dangsik">THIS<br/>IS US</h2>
            <img
              src={eyes}
              alt="Eyes"
              className="w-28" // Adjust size as necessary
            />
          </div>
          <p className="text-lg max-w-xl font-quicksand text-[#FBE266]  mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisl non risus luctus, et hendrerit justo facilisis. Curabitur vehicula diam ac velit lacinia viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisl non risus luctus, et hendrerit justo facilisis. Curabitur vehicula diam ac velit lacinia viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisl non risus luctus, et hendrerit justo facilisis. Curabitur vehicula diam ac velit lacinia viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisl non risus luctus, et hendrerit justo facilisis. Curabitur vehicula diam ac velit lacinia viverra.  
          </p>
          <button className="bg-[#FF33C3] hover:bg-pink-600 text-white font-bold py-3 font-quicksand px-10 rounded-lg">
            Search
          </button>
        </div>
      </div>

      {/* Bottom Image */}
      <img
        src="/about.webp" // Replace with your actual image path
        alt="This is us image"
        className="w-full absolute bottom-0 pt-20 z-10"
      />

      {/* Coming Soon Label */}
      <div className="absolute right-0 top-1/4 transform -rotate-90 origin-bottom-right z-30">
        <div className="bg-gray-800 text-white text-sm py-2 px-4 rounded-t-lg">
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default ThisIsUsSection;
