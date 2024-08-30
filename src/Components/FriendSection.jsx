import React from 'react';
import "../App.css"; // Ensure this path is correct
import { Link } from 'react-router-dom';

const FriendSection = () => {
  return (
    <div className="bg-black text-white p-6 h-auto py-14 flex justify-center md:px-20 relative">
      {/* Grid layout for image and text */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center w-full">
        {/* Image on the left - 1/3 column */}
        <div className="md:col-span-2 flex justify-center ">
          <img
            src="./patrick.webp"
            alt="Patrick Bateman"
            className="w-auto h-auto mb-2 object-cover md:max-w-md"
          />
        </div>

        {/* Text and button on the right - 2/3 column */}
        <div className="md:col-span-3 flex flex-col justify-center font-quicksand">
          <p className="text-4xl mb-20 text-center md:text-left">
            Dost ne apni bandi k saath weekend plan kar ke phir se apni aukaat dikha di
          </p>

          <div className="flex flex-col md:flex-row items-center">
            <button className="bg-[#f31EB1] hover:bg-pink-500 text-white py-6 text-xl md:text-3xl px-20 md:px-32 rounded-lg">
              Get new friends
            </button>
            <Link to="/connect">
            <p className="md:ml-14 text-pink-500 text-2xl font-bold mt-4 md:mt-0 order-first md:order-none">
              CONNECT
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Purple bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#F31EB1] z-20"></div>
    </div>
  );
};

export default FriendSection;
