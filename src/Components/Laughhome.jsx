    import React from 'react';
    import "../App.css";

    const LaughHome = () => {
    return (
        <div className="relative starsection  text-white flex flex-col md:flex-row items-center justify-between pt-24 px-10 md:px-15 lg:px-20 py-10">
        {/* Left Side: Logo */}
        <div className="flex flex-col items-start justify-center text-center md:text-left mb-10 md:mb-0">
            <img src="./logowhite.webp" alt="Logo" className="w-auto  md:max-w-lg lg:max-w-2xl" />
            <p className="text-lg md:text-xl mt-5 md:mt-14">you get a good friend</p>
        </div>

        {/* Right Side: Laughing Guy */}
        <div className="flex items-center justify-center">
            <img src="./laughguy.webp" alt="Laughing Guy" className="w-64 md:w-96" />
        </div>
        </div>
    );
    };

    export default LaughHome;
