import React from "react";
import "../index.css"; // Ensure this path is correct

function Hero() {
  return (
    <>
      <section className="relative text-white flex flex-col items-center justify-center font-quicksand">
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
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-4 mx-2 md:ms-28 md:mb-8 px-4 md:px-0">
          {/* Text Content */}
          <div className="md:col-span-1 flex flex-col items-start justify-center space-y-6 p-4 md:py-10 font-nunito mt-28 md:mt-0">
            <h1 className="text-4xl md:text-4xl font-extrabold font-dangsik">
              get in, Loser
            </h1>
            <p className="text-xl md:text-xl mb-8 font-thin">
              we are wozoo. we handle fun in your area.
            </p>
          </div>

          {/* Eclipse Image */}
          <div className="md:col-span-3 flex items-center justify-end relative mb-32 md:mb-0">
            <div className="relative w-full max-w-full md:w-[60em]">
              <img
                src="/eclipse.png"
                alt="Astronaut"
                className="w-full h-auto object-cover"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section with Continuous Background */}
      <section className="relative text-white flex items-end justify-center font-quicksand py-10 md:py-0 md:-mt-48">
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

        {/* Text Content */}
        <div className="relative w-full flex flex-col items-end text-center md:text-right md:p-20 z-30">
          <h2 className="text-2xl md:text-6xl md:my-3 font-bold text-white z-30">
            But wait a minute, who are{" "}
            <span className="text-[#F7CC00] font-bold  z-30">YOU?</span>
          </h2>
          <div className="flex w-full justify-center md:me-40 items-end mt-4">
            <button className="bg-[#D9D9D9] hover:bg-gray-200 text-black px-10 font-bold py-2 rounded-sm z-30">
              Join Wozoo
            </button>
          </div>
        </div>

        {/* Foreground Image */}
        <img
          src="/kidmin.svg"
          alt="Kid"
          className="block md:max-w-3xl z-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 md:mt-10"
        />

        <div className="absolute bottom-0 w-full h-4 bg-[#641CF8] z-20"></div>
      </section>
    </>
  );
}

export default Hero;
