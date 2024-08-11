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
                src="/eclipse.webp"
                alt="Astronaut"
                className="w-full h-auto object-cover"
                style={{ mixBlendMode: "multiply" }}
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section with Continuous Background */}
      <section className="relative text-white flex items-center justify-center font-quicksand py-10 md:py-0 md:-mt-46">
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

        {/* Two Column Layout */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row z-30">
          {/* Empty Column */}
          <div className="w-full md:w-1/3 hidden md:block"></div>

          {/* Content Column */}
          <div className="w-full md:w-30 flex flex-col items-center md:items-start text-center md:text-left md:p-10 z-30">
            <h2 className="text-xl mx-1 md:mx-0 lg:text-4xl md:my-3 font-bold font-dangsik text-white z-30">
              But wait a minute, who are{" "}
              <span className="text-[#F7CC00] font-bold md:text-6xl z-30">
                YOU?
              </span>
            </h2>
            <div className="flex w-full justify-center md:justify-start items-end mt-4">
              <button className="bg-[#D9D9D9] hover:bg-[#F7CC00] transition-all text-black px-10 font-bold py-2 rounded-sm z-30 md:mb-14">
                Join Wozoo
              </button>
            </div>
          </div>
        </div>

        {/* Foreground Image */}
        <img
          src="/kidmin.png"
          alt="Kid"
          className="block md:max-w-xl z-20 absolute bottom-0 -mb-8 md:-mb-12 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 md:mt-10"
        />

        <div className="absolute bottom-0 -mb-2 w-full h-4 bg-[#641CF8] z-20"></div>
      </section>
    </>
  );
}

export default Hero;
