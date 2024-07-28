import React from 'react';

const Stairs = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img src="./stairs.png" alt="Stairs" className="w-full max-h-screen object-contain" />
      </div>
      <div className="w-full md:w-1/2 flex font-quicksand flex-col items-start justify-center p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-4 md:mb-8 font-nunito">Where does it come from?</h1>
        <p className="mb-4">
          Wozoo ("Woo Joo", 우주 in Korean) means space, universe. The universe represent the totality of existence, encompassing everything from the tangible to the intangible, from the observable to the theoretical.
        </p>
        <p className="mb-4">
          Every single one of us lives in our own, minuscule bubble. No one is same as us. That means that there are (as of this moment) about 7,8 billion tiny universes on our world.
        </p>
        <p>Wozoo is literally us.</p>
        <button className="border border-white text-white hover:bg-yellow-400 hover:text-black font-bold py-2 px-6 rounded-md flex items-center space-x-2 mt-5">
          Know our journey 
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
      </div>
    </div>
  );
};

export default Stairs;
