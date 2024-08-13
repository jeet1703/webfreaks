import React from 'react';


const Stairs = () => {
  return (
    <div className="relative min-h-screen h-[120vh] bg-black text-white">
      {/* Top Pink Divider */}
      <div className="bg-[#641CF8] h-3 md:h-5 w-full absolute top-0 left-0 z-20"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="./stairs.webp" loading="eager" alt="Stairs" className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row w-full h-full items-center justify-center p-6 md:p-10 z-10">
        {/* Left Column (Empty) */}
        <div className="w-full md:w-1/2">
          <h1 className='font-dangsik text-3xl md:text-5xl  text-center my-10 '>Literally me</h1>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-6 md:p-10 bg-black bg-opacity-60 relative">
          <h1 className="text-4xl font-bold mb-4 md:mb-8 font-nunito">Where does it come from?</h1>
          <p className="mb-4 font-quicksand">
            Wozoo ("Woo Joo", 우주 in Korean) means space, universe. The universe represents the totality of existence, encompassing everything from the tangible to the intangible, from the observable to the theoretical.
          </p>
          <p className="mb-4 font-quicksand">
            Every single one of us lives in our own, minuscule bubble. No one is the same as us. That means that there are (as of this moment) about 7.8 billion tiny universes in our world.
          </p>
          <p className='font-quicksand'>Wozoo is literally us.</p>
          <button className="bg-[#D9D9D9] hover:bg-[#F7CC00] transition-all  text-black px-14  font-bold py-2 rounded-md flex items-center space-x-2 mt-5">
          About Us
          </button>
        </div>
      </div>

      {/* Bottom Pink Divider */}
      <div className="bg-[#FFCB00] h-3 md:h-5 w-full absolute bottom-0 left-0 z-20"></div>
    </div>
  );
};

export default Stairs;
