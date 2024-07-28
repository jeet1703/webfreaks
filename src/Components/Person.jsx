import React from 'react';

const App = () => {
    return (
        <div className="bg-cover bg-center h-screen  flex items-center justify-center relative" style={{ backgroundImage: 'url("./personbg.png")' }}>
            {/* New Image */}
           
            
            {/* Person Image */}
            
            
            {/* Text Overlay */}
            <div className="absolute top-1/2 right-20 bg-white rounded-lg px-4 py-2 text-black font-bold z-30">
                Got the compound Zzz.
                <br />
                Boredom, we are coming.
            </div>
        </div>
    );
};

export default App;
