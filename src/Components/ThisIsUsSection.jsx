import React from 'react';

const ThisIsUsSection = () => {
  return (
    <div className="relative starsection flex flex-col md:flex-row items-center justify-between bg-black text-white py-20 px-10">
      {/* Left Column - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden order-2 md:order-1">
        <img
          src="/path-to-your-image.png" // Replace with your actual image path
          alt="This is us image"
          className="absolute bottom-0 left-0 md:static md:-translate-x-1/2 h-full w-auto"
          style={{ transform: 'translateX(-25%)' }} // Adjust overflow position
        />
      </div>

      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">BEYOND INFINITY, BEYOND IMAGINATION</h1>
        <h2 className="text-3xl font-bold mb-10">THIS IS US</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisl non risus luctus, et hendrerit
          justo facilisis. Curabitur vehicula diam ac velit lacinia viverra.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-lg">Search</button>
      </div>
    </div>
  );
};

export default ThisIsUsSection;
