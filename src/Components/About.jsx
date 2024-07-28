import React from "react";

const WoozosSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 mx-auto">
        <div className="md:col-span-2 flex flex-col items-center mx-auto  justify-center space-y-6 p-6  font-nunito ">
          <div className="text-center md:text-left md:max-w-lg">
            <p className="text-3xl mb-4 text-black">
              We are more of a fun increasing,
              <br /> morale bitches here,
              <br /> we call ourselves
              <br />{" "}
              <span className="font-bold text-4xl text-black">Woozos</span>
            </p>
            <p className="text-xl mb-4 text-black">
              Everyone at Woozo has a different definition of "fun".
              <br /> Whether it be rolling down a sofa half asleep, rolling
              <br /> down a water slide or rolling a J. But we found your
              <br /> adrenaline seeking self something to do in every
              <br /> corner of the city.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="border border-gray-300 hover:bg-gray-200 transition-all text-black px-4 py-2 rounded flex items-center">
                Look how it works
              </button>
              <button className=" text-black px-4 rounded hover:text-yellow-400 hover:font-bold">Know more ↓↓↓</button>
            </div>
          </div>
        </div>
        <div className="md:w-3/2 mt-8 md:mt-0 relative">
          <img src="person3.png" alt="Kid" className="w-full" />
        </div>
      </div>
      <h2 className="text-3xl md:ms-28 mb-8 text-start">
        Here's our proposition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-24">
  <div
    className="p-8 rounded-lg shadow-lg text-center col-span-1"
    style={{
      backgroundImage: 'url("/box1.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "400px",
      width: "100%",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  ></div>
  <div
    className="p-8 rounded-lg shadow-lg text-center col-span-2"
    style={{
      backgroundImage: 'url("/box2.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "400px",
      width: "100%",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  ></div>
</div>

      <a href="" className="mt-12 text-center hover:underline">
        <p className="text-xl mt-12">Still not convinced?</p>
      </a>
    </div>
  );
};

export default WoozosSection;
