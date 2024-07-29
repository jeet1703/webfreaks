import React from 'react';

const App = () => {
    return (
        <div
            className="bg-cover bg-center md:bg-contain h-screen py-20 flex items-center justify-center relative"
            style={{ backgroundImage: 'url("./Rectangles.png")' }}
        >
            {/* Person Image */}
            <img
                src="./personbg.png"
                alt="Person"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg  md:max-w-3xl max-h-full  h-screen w-full"
            />
            
            {/* Text Overlay */}
            <div className="absolute top-20 md:top-1/2 md:right-20 bg-white rounded-lg px-4 py-2 text-black font-bold z-30 transform -translate-y-1/2 ">
                Got the compound Zzz.
                <br />
                Boredom, we are coming.
            </div>
        </div>
    );
};

export default App;
