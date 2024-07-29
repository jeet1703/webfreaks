import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Stairs = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img src="./stairs.png" alt="Stairs" className="w-full max-h-screen object-contain" />
      </div>
      <div className="w-full md:w-1/2 h-3/4 md:h-full flex font-quicksand flex-col items-start justify-center p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-4 md:mb-8 font-nunito">Where does it come from?</h1>
        <p className="mb-4">
          Wozoo ("Woo Joo", 우주 in Korean) means space, universe. The universe represents the totality of existence, encompassing everything from the tangible to the intangible, from the observable to the theoretical.
        </p>
        <p className="mb-4">
          Every single one of us lives in our own, minuscule bubble. No one is the same as us. That means that there are (as of this moment) about 7.8 billion tiny universes in our world.
        </p>
        <p>Wozoo is literally us.</p>
        <button className="border border-white text-white hover:bg-yellow-400 hover:text-black font-bold py-2 px-6 rounded-md flex items-center space-x-2 mt-5 mb-10 md:mb-0">
          Know our journey   
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Stairs;
