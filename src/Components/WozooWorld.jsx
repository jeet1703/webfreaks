import React from 'react';

const WozooWorld = () => {
  return (
    <div className="relative w-full h-full bg-[#160433] text-white z-10">
      {/* Asteroid Image (Center, behind the buildings) */}
      <div className="absolute inset-0 z-0 flex">
        <img
          src="/aestroid.webp"
          alt="Asteroid with Buildings and Blackhole"
          loading='eager'
          className="w-full h-full absolute object-cover z-20"
        />
      </div>

      {/* Right Building Image */}
      <img
        src="/rightbuild.webp"
        alt="Right Building"
        loading='eager'
        className="absolute top-0 right-0 z-10 w-1/4 md:w-1/5 lg:w-1/6 object-contain"
      />

      {/* Left Building Image */}
      <img
        src="/leftbuild.webp"
        alt="Left Building"
        loading='eager'
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-1/4 md:w-1/5 lg:w-1/6 object-contain"
      />

      {/* Wozoo Logo (Centered in Asteroid) */}
      <div className="relative z-20 flex items-center justify-center pt-96">
        <img loading='eager' src="/wozoworld.webp" alt="Wozoo Logo" className="w-48 md:w-64 lg:w-72" />
      </div>

      {/* Content Below */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-20 pb-20">
        <p className="text-lg text-center max-w-xl mb-96">
          Lorem ipsum dolor sit amet consectetur. Aenean ornare libero tristique ipsum id lectus nibh. Id molestie amet nibh sit. Sit egestas massa sit aliquam nec praesent faucibus lectus tellus. Urna lectus sit pretium amet. Turpis et eget amet amet varius orci dolor. Aliquet neque semper pretium cras malesuada sit condimentum.
        </p>
      </div>
    </div>
  );
};

export default WozooWorld;
