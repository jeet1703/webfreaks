import "../index.css"; // Ensure this path is correct

const WoozosSection = () => {
  return (
    <div className="relative">
      <div className="container mx-auto relative px-4">
        <div className="flex flex-col md:flex-row justify-between items-center pb-20 relative">
          {/* Left Column - Text */}
          <div className="md:w-1/2 flex flex-col items-center justify-center font-nunito">
            <div className="text-center md:text-left md:max-w-lg">
              <p className="text-3xl font-bold text-black md:mx-14 mt-20 md:mt-0">
                We may not be the <span className="text-purple-600">illuminati</span>, but we still have three sides to us.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 relative z-20">
            <img
              src="person3.png" // Ensure this path is correct
              alt="Kid"
              className="w-auto h-full md:max-w-full md:max-h-full md:-mt-[10em]"
            />
          </div>
        </div>
        <div className="bg-[#FFCB00] h-10 md:h-20 w-full absolute left-0 bottom-0"></div>
      </div>

      {/* Dots SVG - Left Center */}
      <img
        src="/dots.svg"
        alt="Dots"
        className="absolute left-0 top-1/2 transform w-20 md:w-auto -translate-y-1/2 z-10"
        style={{ marginLeft: '-1rem' }} // Adjust margin to ensure it touches the extreme left
      />

      {/* Dots SVG - Right Top */}
      <img
        src="/dots.svg"
        alt="Dots"
        className="absolute rotate-180 right-4 md:right-4 w-20 md:w-auto top-0 z-10"
        style={{ marginRight: '-1rem' }} // Adjust margin to ensure it touches the extreme right
      />

      {/* Cloud SVG - Bottom Left */}
      <img
        src="/cloud.svg"
        alt="Cloud"
        className="absolute left-20 bottom-0  w-40 md:w-48"
        style={{ marginLeft: '-1rem' }} // Adjust margin to ensure it touches the extreme left
      />
    </div>
  );
};

export default WoozosSection;
