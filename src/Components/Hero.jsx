import React from "react";
import "../index.css"; // Make sure to import your CSS file for the font

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
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-24 px-4">
          {/* Text Content */}
          <div className="md:col-span-1 flex flex-col items-start justify-center space-y-6 p-6 md:p-10 font-nunito">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              Welcome Mortal,
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We are on a mission <br />
              Click on the spaceship to find out.
            </p>
            <p className="text-sm md:text-base mb-8">
              At Wozco, we are constantly researching our <br /> ass off to find
              new ways to survive on this <br /> planet and find yourself. We
              would love to <br /> have you on our side in the spaceship and{" "}
              <br />
              enter a new world where there is just a bit less <br /> confusion.
            </p>
            <div className="flex space-x-4">
              <button className="border border-white text-white hover:bg-yellow-400 hover:text-black font-bold py-2 px-6 rounded-md flex items-center space-x-2 z-30">
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
              <button className="text-white hover:text-yellow-400 font-bold py-2 px-6 rounded-full flex items-center space-x-2 z-30">
                <span>Jump In→</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Eclipse Image */}
          <div className="md:col-span-2 flex items-center justify-center p-6 md:p-10 relative">
            <div className="relative">
              <img
                src="/eclipse.png"
                alt="Astronaut"
                className="w-full max-w-sm md:max-w-md lg:max-w-3xl transform overflow-hidden"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="relative text-white flex items-end justify-center font-quicksand bg-[#1C55D7]">
        {/* Text Content */}
        <div className="relative z-20 justify-center items-end text-center md:text-left p-6 md:p-20 md:ms-36">
          <h2 className="items-center text-2xl md:text-6xl md:my-5 font-bold text-yellow-400">
            But wait a minute <br /> who are{" "}
            <span className="text-white">you?</span>
          </h2>
        </div>

        {/* Foreground Image */}
        <img
          src="kidmin.png"
          alt="Kid"
          className="hidden md:block md:max-w-3xl z-20 absolute bottom-0 left-10"
        />

        <div className="absolute bottom-0 w-full h-4 bg-[#F31EB1] z-10"></div>
      </section>
    </>
  );
}

export default Hero;
