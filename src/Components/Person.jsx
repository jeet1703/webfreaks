import React from 'react';

const App = () => {
    return (
      <div className="bg-cover bg-center min-h-screen flex items-center justify-center relative" style={{ backgroundImage: 'url("./Rectangles.png")' }}>
        <img src="./real.png" alt="New" className="absolute mt-30 left-0 w-auto z-10" />
        <img src="./person1.png" alt="Person" className="absolute bottom-0 w-[60em] z-20" />
        <div className="absolute top-1/2 right-20 bg-white rounded-lg px-4 py-2 text-black font-bold">
          Got the compound Zzz.
          <br />
          Boredom, we are coming.
        </div>
      </div>
    );
  };
  
export default App;
