import "../index.css"; // Ensure this path is correct

const WoozosSection = () => {
  return (
    <div className="relative w-full">
      <div className="relative px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center pb-[4em] w-full relative z-30">
          {/* Left Column - Text */}
          <div className="md:w-1/2 flex flex-col items-center justify-center font-nunito w-full">
            <div className="text-center md:text-left md:max-w-lg w-full">
              <p className="text-4xl md:text-5xl font-bold text-black md:mx-14 mt-20 md:mt-0 font-quicksand">
                We may not be the <span className="text-[#6D13FF]">illuminati</span>, but we still have three sides to us.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 relative w-full">
            <img
              src="person3.png" // Ensure this path is correct
              alt="Kid"
              className="w-full h-full md:max-w-full md:max-h-full md:-mb-16 md:-mt-[10.5em]"
              loading="eager"
            />
          </div>
        </div>
        <div className="bg-[#FFCB00] h-16 md:h-32 w-full absolute left-0 bottom-0 z-20"></div>
      </div>

      {/* Dots SVG - Left Center */}
      <img
        src="/dotsleft.png"
        alt="Dots"
        className="absolute left-0  top-1/2 transform w-20 md:w-40 lg:w-auto -translate-y-1/2 z-10"
        style={{ marginLeft: '-1rem' }} // Adjust margin to ensure it touches the extreme left
        loading="eager"
      />

      {/* Dots SVG - Right Top */}
      <img
        src="/dots.png"
        alt="Dots"
        className="absolute  rotate-180 right-4 lg:right-4 w-20 lg:w-auto top-0 z-10"
        style={{ marginRight: '-1rem' }} // Adjust margin to ensure it touches the extreme right
        loading="eager"
      />

      {/* Cloud SVG - Bottom Left */}
      <img
        src="/cloud.svg"
        alt="Cloud"
        className="absolute md:left-20 bottom-0 -mb-20 z-20 w-40 md:w-[16em]"
        style={{ marginLeft: '-1rem' }} // Adjust margin to ensure it touches the extreme left
        loading="eager"
      />
    </div>
  );
};

export default WoozosSection;
