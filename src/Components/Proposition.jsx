import React from 'react';

const Proposition = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center my-5" style={{ backgroundImage: 'url("/bg.png")' }}>
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left side image */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/comic.png")' }}
        ></div>

        {/* Right side text box with image */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center z-20 relative"
          style={{
            backgroundImage: 'url("/ctextbox.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Text content and logo */}
          <div className="p-10 text-black text-left font-nunito ">
            <h2 className="text-lg md:text-3xl font-thin mb-1 md:mb-4">We have three propositions towards life, we offer you:</h2>
            <div className="relative bg-black max-w-max px-7 py-3 rounded-md mb-1 md:mb-4 border-2 border-black border-spacing-10 ">
  <img src="/logotextbox.svg" alt="Wozoo Fun" className="w-32 h-auto md:w-44" />
</div>
           
            <p className="mb-2 text-sm md:text-2xl">A place where you can find fun and stay afloat. Find the craziest events around you. No? Cool we will help you find what might help discover you to yourself?</p>
            <p className="mb-4 text-sm md:text-2xl">A well-made personalized club that offers a platform where you can easily discover your hobby and turn it into a skill.</p>
            <p className='text-sm md:text-2xl'>Also, don’t forget our <a href="#" className="text-black underline hover:underline-offset-1 hover:text-yellow-400 transition-all">Create app</a>. A personalized event creation application that lets you create events in 5 minutes and monetize them.</p>
          </div>
        </div>
      </div>

      {/* Cloud image positioned behind the text box */}
      <img
        src="/cloud.svg"
        alt="Cloud"
        className="absolute hidden md:block md:right-0 md:top-0 md:translate-x-0 z-10"
        style={{ width: '20%', height: 'auto' }} // Adjust size for responsiveness
      />
    </div>
  );
};

export default Proposition;
