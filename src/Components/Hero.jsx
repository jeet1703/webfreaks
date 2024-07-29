import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../index.css"; // Ensure this path is correct

function Hero() {
  return (
    <>
      <section className="relative text-white flex items-center justify-center font-quicksand">
        {/* Starry Background Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/Rectangles.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Two-Column Layout */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3  mx-2 md:ms-28 md:mb-14 px-4 md:px-0">
          {/* Text Content */}
          <div className="md:col-span-1 flex flex-col items-start justify-center space-y-6 p-4 md:py-10 font-nunito mt-28 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              Welcome Mortal,
            </h1>
            <p className="text-xl md:text-xl mb-8 font-thin ">
              We are on a mission <br />
              Click on the spaceship to find out.
            </p>
            <p className="text-xl md:text-base mb-8 font-thin">
              At Wozco, we are constantly researching our <br /> ass off to find
              new ways to survive on this <br /> planet and find yourself. We
              would love to <br /> have you on our side in the spaceship and{" "}
              <br />
              enter a new world where there is just a bit less <br /> confusion.
            </p>
            <div className="flex space-x-4 z-30">
              <button className="border border-white text-white hover:bg-yellow-400 hover:text-black font-bold py-2 px-6 rounded-md flex items-center space-x-2">
                <span>Know More</span>
                
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
              </button>
              <button className="text-white hover:text-yellow-400 font-bold py-2 px-6 rounded-full flex items-center space-x-2">
                <span>Jump In</span>
                <div className="flex flex-col items-center ">
                  <img
                    src="/right.svg"
                    alt="Arrow"
                    className="w-4 h-4 mb-[-1px]"
                  />
                  <img
                    src="/right.svg"
                    alt="Arrow"
                    className="w-4 h-4 mb-[-1px]"
                  />
                  <img
                    src="/right.svg"
                    alt="Arrow"
                    className="w-4 h-4 mb-[-1px]"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Eclipse Image */}
          <div className="md:col-span-2 flex items-center justify-center relative mb-32 md:mb-0">
            <div className="relative w-full h-full">
              <img
                src="/eclipse.png"
                alt="Astronaut"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="relative text-white flex items-end justify-center font-quicksand py-10 md:py-0 bg-[#1C55D7]">
        {/* Text Content */}
        <div className="relative justify-center items-end text-center md:text-left  md:p-20 md:ms-36 z-30">
          <h2 className="items-center text-2xl md:text-6xl md:my-5 font-bold text-yellow-400 z-30">
            But wait a minute <br /> who are{" "}
            <span className="text-white z-30">you?</span>
          </h2>
        </div>

        {/* Foreground Image */}
        <img
          src="kidmin.svg"
          alt="Kid"
          className="block md:max-w-3xl z-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-10 md:translate-x-0 md:mt-10"
        />

        <div className="absolute bottom-0 w-full h-4 bg-[#F31EB1] z-10"></div>
      </section>
    </>
  );
}

export default Hero;
