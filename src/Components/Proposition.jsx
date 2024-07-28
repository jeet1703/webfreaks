import React from 'react';

const Proposition = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center my-5" style={{ backgroundImage: 'url("/bg.png")' }}>
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left side image */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/comic.png")' }}
        ></div>

        {/* Right side text box with image */}
        <div
          className="w-full md:w-2/4 h-1/4 md:h-full bg-no-repeat bg-contain flex justify-center items-center z-20 md:my-10"
          style={{
            backgroundImage: 'url("/textbox.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Optional content in text box */}
        </div>
      </div>

      {/* Cloud image positioned behind the text box */}
      <img
        src="/cloud.svg"
        alt="Cloud"
        className="absolute  bottom1/2 right-20 md:right-0 md:top-0 md:translate-x-0 z-10"
        style={{ width: '20%', height: 'auto' }} // Adjust size for responsiveness
      />

      {/* Top decoration image */}
      
    </div>
  );
};

export default Proposition;
