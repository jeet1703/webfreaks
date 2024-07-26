import React from 'react';


const Div = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">You really dive deep, huh!</h1>
          <p className="text-lg">Guess what, we love it too</p>
        </div>
        <img src="./person.png" alt="person" className="w-24 h-24" />
      </div>
    </div>
  );
};

export default Div;
