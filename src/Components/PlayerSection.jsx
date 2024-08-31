import React from 'react';

const PlayerSection = () => {
  return (
    <div className='bg-[#160433] md:-mt-40'>
    <div className="  py-20 px-6">
      {/* Player Images */}
      <div className="flex flex-col items-center space-y-10">
        <img src="/player1.webp" alt="Player 1" loading='eager' className="w-full max-w-6xl" />
        <img src="/player2.webp" alt="Player 2" loading='eager' className="w-full  max-w-6xl" />
        <img src="/player3.webp" alt="Player 3" loading='eager' className="w-full  max-w-6xl" />
        <img src="/player4.webp" alt="Player 4" loading='eager' className="w-full  max-w-6xl" />
      </div>

      {/* Bottom Image */}
     
    </div>
    <div className="flex justify-center mt-10">
        <img src="/bottom.webp" alt="Bottom Image" className="w-full " />
      </div>
    </div>
  );
};

export default PlayerSection;
